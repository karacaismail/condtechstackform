# DB / State Şeması — Karar Grafı + Kanban

Prisma + PostgreSQL (kullanıcı tercihi).

## Prisma Modelleri (yönerge)

```
DecisionStep
  id              String  @id @default(cuid())
  order           Int     @unique
  slug            String  @unique         // "domain", "tenancy" ...
  title           String
  subtitle        String?
  visibleWhen     Json?                   // koşullu görünürlük (sub-form dallanması)

DecisionOption
  id              String  @id @default(cuid())
  stepId          String
  step            DecisionStep @relation(fields: [stepId], references: [id])
  slug            String                   // "multi-isolated"
  label           String
  description     String
  iconKey         String                   // Phosphor ikon adı
  weight          Int      @default(0)

Recommendation
  id              String   @id @default(cuid())
  column          String                   // "kernel" | "stack" | "saas" | "module" | "plugin" | "extension" | "paradigm"
  title           String
  iconKey         String
  shortDesc       String
  why             String                   // pill metni
  priority        String                   // "must" | "should" | "could"
  effort          String                   // "XS" | "S" | "M" | "L"
  conditions      Json                     // { stepSlug: [optionSlug...] }  — AND across keys, OR within
  license         String?                  // "MIT" gibi
  sourceUrl       String?

KanbanLayout
  id              String   @id @default(cuid())
  column          String   @unique
  title           String
  iconKey         String
  order           Int
  description     String?
```

## Frontend State (Zustand-benzeri minimal store — yönerge)

```
type AppState = {
  currentStep: number;
  answers: Record<stepSlug, optionSlug>;
  recommendations: Recommendation[];
  isComplete: boolean;
  // actions
  answer(stepSlug, optionSlug): void;
  back(): void;
  reset(): void;
  evaluate(): Recommendation[];
};
```

## Karar Motoru — Algoritma (yönerge, kod değil)

1. `evaluate(answers)` çağrıldığında tüm `Recommendation`'ları gez.
2. Her birinin `conditions` objesini cevaplara karşı kontrol et:
   - Boş `conditions` → koşulsuz öneri (her zaman dahil).
   - Her anahtar bir `stepSlug`, değeri seçili olabilecek `optionSlug` dizisi.
   - **Aynı anahtar içinde OR**, **anahtarlar arasında AND**.
3. Geçen önerileri `column` ve `priority`'ye göre grupla, sırala.
4. Her sütun için kart listesi döndür.

## ECA (Event-Condition-Action) Bağlantısı

Beyaz tahtadaki "ECA Engine" → karar motoru bu paradigmanın kullanıcı yüzü. Form cevabı bir **Event**, kuralın `conditions`'ı **Condition**, üretilen kart **Action**.
