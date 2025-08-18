import logging
import os
from typing import Dict, Any

import psutil
import sentry_sdk
from fastapi import FastAPI, WebSocket, WebSocketDisconnect, Depends, Header, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse, PlainTextResponse
from prometheus_client import generate_latest, CONTENT_TYPE_LATEST

from .config import settings, HealthResponse
from .db import init_db
from .metrics import bot_online_status, strategy_decision_gauge
from .connectivity import has_internet
from .strategy import StrategyInput, make_offline_decision, make_online_decision
from .trading import execute_trade


logging.basicConfig(level=getattr(logging, settings.log_level.upper(), logging.INFO))
logger = logging.getLogger("bot")

if settings.sentry_dsn:
    sentry_sdk.init(dsn=settings.sentry_dsn, traces_sample_rate=0.05)

app = FastAPI(title="Free Cloud Trading Bot", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[o.strip() for o in settings.cors_origins.split(",") if o.strip()],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def require_auth(authorization: str | None = Header(default=None)) -> None:
    if not settings.dashboard_auth_token:
        return
    if not authorization or not authorization.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Unauthorized")
    token = authorization.split(" ", 1)[1]
    if token != settings.dashboard_auth_token:
        raise HTTPException(status_code=401, detail="Unauthorized")


@app.on_event("startup")
def on_startup() -> None:
    init_db()


@app.get("/health", response_model=HealthResponse)
def health() -> HealthResponse:
    return HealthResponse(status="ok", version=app.version)


@app.get("/metrics")
def metrics():
    return PlainTextResponse(generate_latest(), media_type=CONTENT_TYPE_LATEST)


@app.get("/audit/resources")
def audit_resources(_: None = Depends(require_auth)) -> Dict[str, Any]:
    vm = psutil.virtual_memory()
    cpu_percent = psutil.cpu_percent(interval=0.2)
    disk = psutil.disk_usage("/")
    return {
        "cpu_percent": cpu_percent,
        "ram_mb": vm.used // (1024 * 1024),
        "ram_total_mb": vm.total // (1024 * 1024),
        "disk_used_mb": disk.used // (1024 * 1024),
        "disk_total_mb": disk.total // (1024 * 1024),
        "network_estimate_mb_per_day": 43,  # static expectation per spec
        "cost": 0.0,
    }


@app.post("/trade/ping")
def trigger_trade(_: None = Depends(require_auth)) -> Dict[str, Any]:
    online = has_internet()
    bot_online_status.set(1 if online else 0)

    # Minimal price series scaffold
    series = [100.0, 100.2, 100.1]
    input_data = StrategyInput(price_series=__import__("numpy").array(series), features={})
    decision = make_online_decision(input_data) if online else make_offline_decision(input_data)
    encode = {"BUY": 1, "SELL": -1, "HOLD": 0}
    strategy_decision_gauge.set(encode.get(decision, 0))

    if decision == "HOLD":
        return {"ok": True, "decision": decision}

    side = decision
    amount = 0.001
    price = series[-1]
    result = execute_trade(symbol="BTC/USDT", side=side, amount=amount, price=price)
    result.update({"decision": decision})
    return result


@app.websocket("/ws")
async def ws_endpoint(websocket: WebSocket):
    await websocket.accept()
    try:
        await websocket.send_json({"type": "welcome", "version": app.version})
        while True:
            data = await websocket.receive_json()
            cmd = data.get("cmd")
            if cmd == "ping":
                await websocket.send_json({"type": "pong"})
            elif cmd == "audit":
                report = audit_resources()
                await websocket.send_json({"type": "audit", "data": report})
            else:
                await websocket.send_json({"type": "error", "error": "unknown_cmd"})
    except WebSocketDisconnect:
        return

