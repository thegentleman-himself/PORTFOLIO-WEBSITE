from dataclasses import dataclass
from typing import Literal, Dict, Any
import numpy as np


Decision = Literal["BUY", "SELL", "HOLD"]


@dataclass
class StrategyInput:
    price_series: np.ndarray  # most recent last
    features: Dict[str, float]


def make_offline_decision(strategy_input: StrategyInput) -> Decision:
    if strategy_input.price_series.size < 2:
        return "HOLD"
    momentum = float(strategy_input.price_series[-1] - strategy_input.price_series[-2])
    if momentum > 0:
        return "BUY"
    if momentum < 0:
        return "SELL"
    return "HOLD"


def make_online_decision(strategy_input: StrategyInput) -> Decision:
    # Placeholder: identical to offline for initial scaffold
    return make_offline_decision(strategy_input)

