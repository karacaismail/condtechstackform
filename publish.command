#!/usr/bin/env bash
# Double-click ile çalıştırılabilir versiyonu (.command — Finder'dan açılır)
# publish.sh'i çağırır
set -euo pipefail
cd "$(dirname "$0")"
exec ./publish.sh
