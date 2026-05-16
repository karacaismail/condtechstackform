#!/usr/bin/env bash
# GitHub Pages'e yayın scripti
# Çalıştır:
#   cd /Users/karaca/DEV/condtechstackform
#   chmod +x publish.sh
#   ./publish.sh

set -euo pipefail

REPO_NAME="condtechstackform"
VISIBILITY="public"   # GitHub Pages free hesapta sadece public repo'da çalışır
                      # Pro/Team hesap için: VISIBILITY="private"

cd "$(dirname "$0")"

echo "==> Çalışma dizini: $(pwd)"

# 1) Gereksinimler
command -v gh  >/dev/null 2>&1 || { echo "X gh CLI gerekli: brew install gh"; exit 1; }
command -v git >/dev/null 2>&1 || { echo "X git gerekli"; exit 1; }

# 2) GitHub auth
if ! gh auth status >/dev/null 2>&1; then
  echo "==> GitHub'a giriş yapılıyor..."
  gh auth login
fi

# 3) Bozuk .git temizliği (sandbox'tan kalma lock dosyaları)
if [ -d .git ] && [ -f .git/index.lock ]; then
  echo "==> Bozuk .git tespit edildi, temizleniyor..."
  rm -rf .git
fi

# 4) Git init / commit (idempotent)
if [ ! -d .git ]; then
  echo "==> Git repo başlatılıyor..."
  git init -b main
  git config user.email "$(git config --global user.email || echo karacai@yandex.com)"
  git config user.name  "$(git config --global user.name  || echo ismail)"
  git add .
  git commit -m "feat: meta-framework karar sihirbazı (Flowbite + FastAPI mock) — GitHub Pages ready"
else
  echo "==> Mevcut repo, değişiklik varsa commit'leniyor..."
  git add .
  if ! git diff --cached --quiet; then
    git commit -m "chore: güncelleme"
  fi
fi

# 5) Remote + push
if ! git remote get-url origin >/dev/null 2>&1; then
  echo "==> GitHub repo'su oluşturuluyor ($VISIBILITY)..."
  gh repo create "$REPO_NAME" --"$VISIBILITY" --source=. --remote=origin --push
else
  echo "==> Remote mevcut, push ediliyor..."
  git push -u origin main 2>/dev/null || git push
fi

# 6) Pages'i aç
OWNER=$(gh api user --jq .login)
echo "==> GitHub Pages aktive ediliyor..."
gh api -X POST "repos/${OWNER}/${REPO_NAME}/pages" \
  -F 'source[branch]=main' \
  -F 'source[path]=/' 2>/dev/null \
  || gh api -X PUT "repos/${OWNER}/${REPO_NAME}/pages" \
       -F 'source[branch]=main' \
       -F 'source[path]=/' 2>/dev/null \
  || echo "(Pages zaten açık veya Actions workflow yönetiyor — sorun yok)"

# 7) Sonuç
PAGES_URL="https://${OWNER}.github.io/${REPO_NAME}/"
ACTIONS_URL="https://github.com/${OWNER}/${REPO_NAME}/actions"
REPO_URL="https://github.com/${OWNER}/${REPO_NAME}"

echo ""
echo "==============================================="
echo "  Yayın URL'si:  $PAGES_URL"
echo "  Repo:          $REPO_URL"
echo "  Actions:       $ACTIONS_URL"
echo "==============================================="
echo ""
echo "Not: İlk deploy 1-3 dakika alır. Actions sekmesinden takip edebilirsin."
echo "Hazır olunca yukarıdaki Yayın URL'si açılır."
