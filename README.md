## Free Resource-Based Autonomous Trading Bot (Zero Local Impact)

This repository provides a 100% free, open-source trading bot that runs exclusively on free cloud resources with zero local PC impact. It uses Oracle Cloud Free Tier (always-free ARM VM), Cloudflare Workers, and GitHub Actions/Pages. A browser-only React control center manages the bot. No local installs required.

### Key Features
- Always-free cloud deployment (Oracle ARM VM, Cloudflare Workers, GitHub Pages)
- Browser-only dashboard and secure WebSocket control
- Offline-first strategy execution with cached data
- Free monitoring: Telegram alerts, Prometheus metrics (Grafana Cloud), Sentry
- IPFS-based immutable trade logs (web3.storage)
- Resource-constrained AI via optional ONNX runtime (auto-fallback to rules)

### Repository Structure
```
backend/                 # FastAPI service (trading core, WebSocket, metrics)
cloudflare-worker/       # Worker + Durable Object trigger and state
dashboard/               # React (Vite) dashboard for GitHub Pages
scripts/                 # Install and ops scripts
.github/workflows/       # CI/CD for dashboard + worker
docker-compose.yml       # App runtime stack on Oracle VM
```

### Zero-Install Setup (High-Level)
1) Provision Oracle Free Tier ARM instance (Ubuntu). Keep the public IP.
2) Set up Cloudflare account + Worker, and GitHub repo + Pages.
3) From any device (no local install), use the hosted dashboard to connect to your cloud bot.

### Quick Start (Oracle VM)
Run on your VM (or pipe install):
```bash
curl -fsSL https://raw.githubusercontent.com/your-user/your-repo/main/scripts/install.sh | bash -s -- \
  --provider=oracle \
  --strategy=neuro_symbolic \
  --read-only
```

Alternatively, SSH into your VM and run:
```bash
git clone https://github.com/your-user/your-repo.git
cd your-repo
./scripts/install.sh --provider=oracle --strategy=neuro_symbolic --read-only
```

Environment variables (saved to `.env` via installer):
- BINANCE_API_KEY, BINANCE_API_SECRET (use read-only keys or paper mode)
- TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID (optional)
- SENTRY_DSN (optional)
- WEB3_STORAGE_TOKEN (optional for IPFS)
- DASHBOARD_AUTH_TOKEN (randomly generated if not provided)

### Browser Dashboard (GitHub Pages)
The dashboard is built with Vite/React and deploys via GitHub Pages. Configure environment via the Settings → Pages and repository secrets used by the Pages workflow. Once deployed, open the dashboard URL, enter the bot URL and auth token, and control the bot without any local installs.

### Cloudflare Worker
The Worker provides:
- Minimal serverless trading trigger endpoint
- Durable Object-backed state for rate-limiting and last-seen
- Optional proxy to the VM for wake/trigger

### Free Monitoring
- `/metrics` Prometheus endpoint (scrape with Grafana Cloud Agent or Remote Write)
- Telegram alerts on key events
- Sentry SDK for error tracing

### CLI
```bash
./bin/bot audit --resources
```
Outputs CPU, RAM, storage, network, and cost (expected $0.00) gathered from the VM.

### Security Model
- Dashboard communicates with backend via secure WebSockets and a bearer token
- Read-only exchange keys by default; paper trading switch for safety
- IPFS trade logs are content-addressed and immutable

### License
MIT

# PORTFOLIO-WEBSITE
