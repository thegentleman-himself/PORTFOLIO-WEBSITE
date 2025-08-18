from typing import Optional
import logging

from .config import settings

try:
    from telegram import Bot
except Exception:  # pragma: no cover - optional dependency paths
    Bot = None  # type: ignore


logger = logging.getLogger(__name__)


def send_telegram_message(message: str) -> None:
    if not settings.telegram_bot_token or not settings.telegram_chat_id:
        return
    if Bot is None:
        logger.warning("Telegram Bot SDK not available")
        return
    try:
        bot = Bot(token=settings.telegram_bot_token)
        bot.send_message(chat_id=settings.telegram_chat_id, text=message)
    except Exception as exc:
        logger.exception("Failed to send Telegram message: %s", exc)

