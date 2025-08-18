from prometheus_client import Counter, Gauge


trades_executed_total = Counter(
    "trades_executed_total",
    "Total number of trades executed by the bot",
)

trade_errors_total = Counter(
    "trade_errors_total",
    "Total number of trade errors",
)

bot_online_status = Gauge(
    "bot_online_status",
    "1 if bot detects internet connectivity, else 0",
)

strategy_decision_gauge = Gauge(
    "strategy_decision_value",
    "Numeric encoding of strategy decision (BUY=1, SELL=-1, HOLD=0)",
)

