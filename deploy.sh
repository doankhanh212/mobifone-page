#!/usr/bin/env bash
set -euo pipefail

APP_NAME="${APP_NAME:-mobi-fone-landing-page}"
PORT="${PORT:-3001}"
HOST="${HOST:-0.0.0.0}"

cd "$(dirname "$0")"

echo "==> Checking Node.js"
node --version
npm --version

echo "==> Enabling pnpm"
if command -v corepack >/dev/null 2>&1; then
  corepack enable
fi

if ! command -v pnpm >/dev/null 2>&1; then
  npm install -g pnpm
fi

echo "==> Installing dependencies"
pnpm install --frozen-lockfile

echo "==> Running checks"
pnpm exec tsc --noEmit
pnpm run lint

echo "==> Building Next.js app"
pnpm run build

echo "==> Ensuring PM2 is installed"
if ! command -v pm2 >/dev/null 2>&1; then
  npm install -g pm2
fi

echo "==> Starting ${APP_NAME} on ${HOST}:${PORT}"
pm2 describe "$APP_NAME" >/dev/null 2>&1 && pm2 delete "$APP_NAME"
pm2 start pnpm --name "$APP_NAME" -- exec next start -H "$HOST" -p "$PORT"
pm2 save

echo "==> Deployed successfully"
echo "App:  ${APP_NAME}"
echo "URL:  http://${HOST}:${PORT}"
echo "Logs: pm2 logs ${APP_NAME}"
