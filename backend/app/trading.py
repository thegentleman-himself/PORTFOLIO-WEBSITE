import time
from typing import Dict, Any
import logging

import ccxt

from .config import settings
from .db import create_connection
from .ipfs import store_trade_proof
from .metrics import trades_executed_total, trade_errors_total


logger = logging.getLogger(__name__)


def _build_exchange() -> ccxt.Exchange:
    exchange = ccxt.binance({
        "apiKey": settings.binance_api_key,
        "secret": settings.binance_api_secret,
        "enableRateLimit": True,
        "options": {"adjustForTimeDifference": True},
    })
    return exchange


def execute_trade(symbol: str, side: str, amount: float, price: float) -> Dict[str, Any]:
    try:
        if settings.read_only:
            logger.info("Read-only mode: recording paper trade %s %s @ %s", side, amount, price)
            order = {"id": f"paper-{int(time.time()*1000)}", "status": "closed"}
        else:
            exchange = _build_exchange()
            exchange.load_markets()
            # For scaffold, place a market order; production should validate precision
            if side.upper() == "BUY":
                order = exchange.create_market_buy_order(symbol, amount)
            else:
                order = exchange.create_market_sell_order(symbol, amount)

        proof = {
            "symbol": symbol,
            "side": side,
            "amount": amount,
            "price": price,
            "ts": int(time.time()),
            "order": order,
            "read_only": settings.read_only,
        }
        cid = store_trade_proof(proof)
        _persist_trade(symbol, side, price, amount, int(time.time()), cid)
        trades_executed_total.inc()
        return {"ok": True, "order": order, "cid": cid}
    except Exception as exc:
        trade_errors_total.inc()
        logger.exception("Trade execution failed: %s", exc)
        return {"ok": False, "error": str(exc)}


def _persist_trade(symbol: str, side: str, price: float, amount: float, ts: int, cid: str | None) -> None:
    connection = create_connection()
    try:
        cursor = connection.cursor()
        cursor.execute(
            "INSERT INTO trades(symbol, side, price, amount, ts, proof_cid) VALUES (?, ?, ?, ?, ?, ?)",
            (symbol, side, price, amount, ts, cid),
        )
        connection.commit()
    finally:
        connection.close()

