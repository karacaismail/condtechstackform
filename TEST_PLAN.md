# Test Planı — Koşullu Form → Kanban Motoru

Geliştirme öncesi yazıldı (kullanıcı tercihi).

## 1. Birim Testleri (Vitest)

### 1.1 State Machine
- Başlangıç: `currentStep === 0`, `answers === {}`
- `answer(stepId, optionId)` çağrısı → `answers[stepId] = optionId`
- Tüm sorular cevaplandığında `isComplete === true`
- Geri al (`back()`) son cevabı sıfırlamalı, `currentStep--`

### 1.2 Decision Engine
- Boş cevap → boş öneri seti
- Tek koşullu kural: `{ tenancy: ['multi-shared'] }` cevaplandığında ilgili kart döner
- Çok koşullu kural (`AND`): iki koşul da sağlanmadıkça kart eklenmez
- `OR` davranışı: `tenancy ∈ [multi-shared, multi-isolated]` her ikisinde de tetiklenir
- Çakışan kurallar → en yüksek priority kart önde

### 1.3 Kanban Generator
- Öneri seti → her kategori sütununa doğru kart düşer
- Boş sütun → "Bu kategoride önerilen yok" yer tutucu
- Kart sıralaması: priority (must > should > could) → sonra effort (XS > S > M > L)
- Pill renkleri: priority/effort/why üç farklı renk paleti

### 1.4 Erişilebilirlik
- Tüm `<input>` etiketleri `aria-label` veya `<label for>` ile eşleşmeli
- Form adımları arası odak transferi (auto-focus next step)
- Min font size: `:root` `font-size: 1rem` (16px), hiçbir bileşen `< 1rem` değil

## 2. E2E (Playwright)
- Tam akış: 10 adım form → Kanban üretimi → her sütunda ≥1 kart
- "Backstep" → önceki adıma dön, cevabı değiştir → Kanban'ın yeniden hesaplanması
- AI Explain butonu → modal açılıyor mu, mock response geliyor mu
- Responsive: 1440 / 768 / 380 viewport (Adaptive break points)

## 3. Backend (pytest)
- `/decisions` → 200, beklenen şema
- `/recommend` → cevap payload'ı kabul ediyor, öneri listesi dönüyor
- `/ai/explain` → SSE stream başlatıyor, mock token dökümü

## 4. Kapsam Dışı (Şimdilik)
- Auth (kernel'da RBAC önerisi var ama login akışı bu prototipte yok)
- Veri kalıcılığı (state in-memory)
- Gerçek AI çağrısı (mock)
