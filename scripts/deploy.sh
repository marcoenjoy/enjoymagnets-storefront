#!/usr/bin/env bash
set -euo pipefail
cd /var/www/clients/client1/web16/home/catalyst/apps/storefront
git fetch --all
git reset --hard origin/main
npm ci
npm run build
sudo systemctl restart enjoy-storefront
curl -fsS http://127.0.0.1:3001/healthz >/dev/null
curl -fsSI http://127.0.0.1:3001/api/makeswift/version >/dev/null
echo "DEPLOY OK"
