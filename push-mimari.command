#!/usr/bin/env bash
# Mimari sihirbazını GitHub'a push eden yardımcı script.
# Sandbox lock dosyalarını temizler, remote'u doğrular,
# stage'deki mimari_sihirbazi.html'i commit eder ve push eder.
set -euo pipefail
cd "$(dirname "$0")"

echo "==> Lock dosyaları temizleniyor..."
rm -f .git/HEAD.lock .git/index.lock 2>/dev/null || true
rm -f .git/objects/maintenance.lock 2>/dev/null || true
# olası eski tmp_obj_*
find .git/objects -name 'tmp_obj_*' -type f -delete 2>/dev/null || true

echo "==> Git config..."
git config user.email "$(git config user.email || echo karacai@yandex.com)"
git config user.name  "$(git config user.name  || echo ismail)"

echo "==> Remote kontrolü..."
if ! git remote get-url origin >/dev/null 2>&1; then
  git remote add origin https://github.com/karacaismail/condtechstackform.git
fi
git remote -v

echo "==> Stage durumu..."
git status --short

echo "==> Henüz commit edilmemiş mimari dosyası varsa stage'le..."
git add mimari_sihirbazi.html push-mimari.command 2>/dev/null || true

if git diff --cached --quiet; then
  echo "==> Stage'de değişiklik yok, mevcut commit'i push ediyoruz."
else
  git commit -m "feat: mimari sihirbazi (21 kategori, 103 soru, WCAG 2.2 AAA)"
fi

echo "==> Push..."
git push -u origin main

echo ""
echo "==============================================="
echo "  Yayın URL'si: https://karacaismail.github.io/condtechstackform/mimari_sihirbazi.html"
echo "  Actions:      https://github.com/karacaismail/condtechstackform/actions"
echo "==============================================="
echo ""
echo "Pencere kapanabilir."
