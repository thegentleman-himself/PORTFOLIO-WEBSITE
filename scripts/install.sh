#!/usr/bin/env bash
set -euo pipefail

# Usage: install.sh --provider=oracle [--strategy=neuro_symbolic] [--read-only]

provider="oracle"
strategy="neuro_symbolic"
read_only=true

for arg in "$@"; do
  case $arg in
    --provider=*) provider="${arg#*=}" ;;
    --strategy=*) strategy="${arg#*=}" ;;
    --read-only) read_only=true ;;
    --live) read_only=false ;;
  esac
done

echo "[+] Installing dependencies (Docker)"
if ! command -v docker >/dev/null 2>&1; then
  curl -fsSL https://get.docker.com | sh
fi

if ! command -v docker-compose >/dev/null 2>&1; then
  DOCKER_CONFIG=${DOCKER_CONFIG:-$HOME/.docker}
  mkdir -p "$DOCKER_CONFIG/cli-plugins"
  curl -SL https://github.com/docker/compose/releases/download/v2.29.2/docker-compose-linux-$(uname -m) -o "$DOCKER_CONFIG/cli-plugins/docker-compose"
  chmod +x "$DOCKER_CONFIG/cli-plugins/docker-compose"
fi

echo "[+] Writing backend env"
mkdir -p backend
cat > backend/.env <<EOF
DASHBOARD_AUTH_TOKEN=${DASHBOARD_AUTH_TOKEN:-}
BINANCE_API_KEY=${BINANCE_API_KEY:-}
BINANCE_API_SECRET=${BINANCE_API_SECRET:-}
READ_ONLY=${read_only}
TELEGRAM_BOT_TOKEN=${TELEGRAM_BOT_TOKEN:-}
TELEGRAM_CHAT_ID=${TELEGRAM_CHAT_ID:-}
SENTRY_DSN=${SENTRY_DSN:-}
WEB3_STORAGE_TOKEN=${WEB3_STORAGE_TOKEN:-}
EOF

echo "[+] Building and starting bot"
docker compose build
docker compose up -d

echo "[+] Bot is starting on port 8000"

