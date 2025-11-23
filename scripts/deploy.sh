#!/usr/bin/env bash
set -euo pipefail

cd /var/www/clients/client1/web16/home/catalyst/apps/storefront

# Usa una cache npm in una cartella dove web16 ha i permessi
export NPM_CONFIG_CACHE="/var/www/clients/client1/web16/home/catalyst/.npm-cache"
mkdir -p "$NPM_CONFIG_CACHE"

git fetch --all
git reset --hard origin/main
npm ci
npm run build
sudo systemctl restart enjoy-storefront

# Health check OBBLIGATORIO
curl -fsS http://127.0.0.1:3001/healthz >/dev/null

# Makeswift version è solo un check opzionale (non blocca il deploy)
if ! curl -fsSI http://127.0.0.1:3001/api/makeswift/version >/dev/null; then
  echo "WARN: /api/makeswift/version non restituisce 200 (ignorato ai fini del deploy)"
fi

echo "DEPLOY OK"
