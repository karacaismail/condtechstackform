# Meta-Framework Karar Sihirbazı

Koşullu form → Kanban motoru. Beyaz tahtadaki yapıyı (KERNEL DDD · Tech Stack · SaaS Apps · System Modules · Plugins · Extensions) interaktif karar ağacına dönüştürür.

## Dosyalar

| Dosya | Amaç |
|---|---|
| `prototype.html` | Tek dosya çalışan prototip (Flowbite + Phosphor + Roboto, TS-derlenmiş JS, SCSS-derlenmiş CSS) |
| `backend/main.py` | FastAPI mock — `/decisions`, `/recommend`, `/ai/explain` (SSE) |
| `tests/engine.test.spec.ts` | Vitest spec — koşul motoru + state machine + erişilebilirlik |
| `TEST_PLAN.md` | Geliştirme öncesi test planı (kullanıcı tercihi) |
| `SCHEMA.md` | Prisma + PostgreSQL şeması ve karar motoru algoritması (yönerge) |

## Hızlı Çalıştırma

Frontend:
```bash
open prototype.html
```

Backend (opsiyonel — mock için):
```bash
pip install fastapi uvicorn pydantic
uvicorn backend.main:app --reload
```

Test (opsiyonel):
```bash
npm i -D vitest typescript
npx vitest --run
```

## Tasarım Kuralları (Kullanıcı Kuralseti)

- **Font:** Roboto, min weight 300
- **Min text size:** 1rem (16px) — hiçbir bileşen altında değil
- **Icon:** Phosphor öncelik, CDN üzerinden
- **Emoji:** yok
- **Framework:** Next.js yok, Flowbite + TypeScript + SCSS
- **DB:** Prisma + PostgreSQL (CouchDB + Elastic ikincil — tahtada belirtildi)
- **Lisans:** MIT
- **Deploy:** Hetzner Debian + AMD EPYC + GitHub Actions private repo

## Kanban Sütunları (Tahta Eşleşmesi)

| Tahta Başlığı | Sütun ID | Renk Token |
|---|---|---|
| Mimari Paradigmalar (eklendi) | `paradigm` | `--col-paradigm` |
| KERNEL (DDD) | `kernel` | `--col-kernel` |
| Back/Front Tech Stack | `stack` | `--col-stack` (kırmızı, tahta) |
| SaaS Apps | `saas` | `--col-saas` |
| System Modules | `module` | `--col-module` |
| Plugins | `plugin` | `--col-plugin` |
| Extensions / Snippets | `extension` | `--col-extension` |

## Karar Motoru Mantığı

Her `Recommendation`'ın `conditions` alanı:
- **Aynı anahtar içinde OR** — `tenancy: ['multi-shared','multi-isolated']`
- **Anahtarlar arasında AND** — `{ domain: ['commerce'], search: ['hybrid'] }`
- Boş `conditions` → her zaman dahil

Sıralama: `priority` (must → should → could) → `effort` (XS → S → M → L).

## Sonraki Adımlar

1. `prototype.html`'in JS'ini ayrı modül dosyalarına böl (`engine.ts`, `data.ts`)
2. Vitest spec'lerini gerçek importlarla doldur
3. Prisma şemasını gerçek migration olarak yaz
4. FastAPI `/recommend` endpoint'inde Python yansımasını implement et
5. AI Provider abstraction → Anthropic Claude adapter
6. ECA Engine prototipini ayrı paket olarak çıkar
