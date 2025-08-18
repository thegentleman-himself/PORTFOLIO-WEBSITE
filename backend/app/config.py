from pydantic import BaseModel
from pydantic_settings import BaseSettings
from typing import Optional


class Settings(BaseSettings):
    # Auth
    dashboard_auth_token: str = ""

    # Exchange credentials (use read-only keys by default)
    binance_api_key: str = ""
    binance_api_secret: str = ""
    read_only: bool = True

    # General
    environment: str = "production"
    log_level: str = "INFO"
    data_dir: str = "/app/data"

    # Networking
    host: str = "0.0.0.0"
    port: int = 8000
    cors_origins: str = "*"

    # Optional integrations
    telegram_bot_token: str = ""
    telegram_chat_id: str = ""
    sentry_dsn: str = ""
    web3_storage_token: str = ""

    class Config:
        env_prefix = ""
        env_file = ".env"
        case_sensitive = False


settings = Settings()  # Loaded on import for simplicity


class HealthResponse(BaseModel):
    status: str
    version: str

