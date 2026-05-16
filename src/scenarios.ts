/**
 * 8 farklı proje senaryosu — koşullu form motorunu çok farklı sonuçlara taşıyan
 * gerçekçi örnekler. JSON içerikli, modal'da detaylı açıklama gösterilir.
 *
 * Tüm cevap slug'ları STEPS verisindeki id'lerle eşleşir; "Bu senaryoyu uygula"
 * butonu state.answers'ı doldurup wizard'ı tamamlanmış sayar.
 */

export type ScenarioColor =
  | "purple" | "teal" | "coral" | "pink" | "blue" | "green" | "amber" | "gray";

export interface ScenarioRationale {
  heading: string;
  body: string;
}

export interface Scenario {
  id: string;
  title: string;
  badge: string;
  icon: string;           // Phosphor icon
  color: ScenarioColor;
  summary: string;
  profile: {
    team: string;
    timeline: string;
    industry: string;
    scale: string;
  };
  answers: Record<string, string>;   // stepId → optionId
  rationale: ScenarioRationale[];
  pitfalls: string[];
}

export const SCENARIOS: Scenario[] = [
  // ============================================================
  // 1. TÜRK BUTİK E-TİCARET — solo founder, hız odaklı
  // ============================================================
  {
    id: "tr-boutique",
    title: "Türk butik e-ticaret",
    badge: "Solo girişimci",
    icon: "ph-storefront",
    color: "coral",
    summary:
      "Tek developer kurucu, Instagram trafiği, hızlı katalog + sepet + Iyzico. 4 haftada MVP hedefi, AI yok.",
    profile: {
      team: "1 kişi (founder + dev)",
      timeline: "4 hafta MVP, 12 hafta v1",
      industry: "Moda / lifestyle commerce",
      scale: "100–500 SKU, ayda < 1.000 sipariş",
    },
    answers: {
      domain: "commerce",
      tenancy: "single",
      ai: "optional",
      data: "relational",
      search: "faceted",
      realtime: "notif",
      mobile: "pwa",
      vibe: "critical",
      deploy: "single-vps",
      license: "mit-pure",
    },
    rationale: [
      {
        heading: "Single-tenant — başlangıçta multi-tenant lüks",
        body:
          "Tek müşteri (sen) için RBAC + tenant_id altyapısı kurmak gereksiz yük. Ölçek geldiğinde (10+ marka için satmak isteyince) yeniden değerlendirilir; o zaman tenant modülünü kernel'a açarsın.",
      },
      {
        heading: "İlişkisel ağırlıklı veri",
        body:
          "Ürün, varyant, sipariş, müşteri — şeman stabil. JSONB'ye atlamak attribute fırtınasını çağırır; bunun yerine Prisma + Postgres tarafında düzgün normalize, GIN index'i sadece arama için kullan.",
      },
      {
        heading: "Vibecoding kritik — solo dev için can simidi",
        body:
          "Form/sayfa/modül üretimini AI ile dakikalar içinde yapabilmek, 4 hafta MVP'yi mümkün kılan tek şey. Doctype Designer + CLI Scaffolder ilk Sprint'lere alınmalı.",
      },
      {
        heading: "PWA — native app aşırı",
        body:
          "Instagram'dan gelen trafik zaten mobil web. Add-to-home + push notification PWA ile yetiyor. React Native yatırımı yapma; sonra ihtiyaç doğunca eklenir.",
      },
      {
        heading: "Sadece bildirim real-time — collab gereksiz",
        body:
          "Sipariş onayı, kargo durumu, stok uyarısı için SSE veya basit WS yeterli. Live collaboration (CRDT) bu domain için over-engineering.",
      },
      {
        heading: "Tek Hetzner VPS",
        body:
          "Hetzner CX22 + Docker Compose + Caddy ile aylık 6€ altında MVP'i ayakta tutarsın. Auto-scale yok, K3s yok, sadelik altın.",
      },
    ],
    pitfalls: [
      "Iyzico/Stripe çağrıları Write Protection katmanı arkasında — double-click checkout bug'ı pahalıdır.",
      "Ürün attribute arama için GIN index zorunlu; B-Tree index JSONB'de işe yaramaz.",
      "Yedekleme stratejisi gün 1: pg_dump cron + MinIO asset snapshot ayrı diske.",
      "Vergi/iade modülü Türkiye'ye özel (e-Arşiv); ülke-bağımlılığını kernel'a sokma, modüle ayır.",
      "Kargo entegrasyonu (Aras, Yurtiçi, MNG) ayrı modül — kernel'ın değil.",
    ],
  },

  // ============================================================
  // 2. AI-FIRST LEGAL SaaS — agent-driven, çok müşteri
  // ============================================================
  {
    id: "ai-legal",
    title: "AI-first hukuk otomasyonu",
    badge: "B2B SaaS · Agent-first",
    icon: "ph-scales",
    color: "purple",
    summary:
      "Hukuk büroları için sözleşme analizi, dava özetleme, müvekkil chatbotu. Otonom agentlar dosya inceler, taslak hazırlar.",
    profile: {
      team: "5–8 dev + 1 hukuk danışmanı",
      timeline: "6 ay v1",
      industry: "LegalTech B2B SaaS",
      scale: "100+ büro müşteri, milyon-belge corpus",
    },
    answers: {
      domain: "suite",
      tenancy: "multi-shared",
      ai: "agent-first",
      data: "mixed",
      search: "hybrid",
      realtime: "notif",
      mobile: "web",
      vibe: "important",
      deploy: "k8s",
      license: "mit-hosted",
    },
    rationale: [
      {
        heading: "AI-first kernel — Agent Runtime kalbi",
        body:
          "Tool-calling, planlama, hafıza, insan onay döngüleri çekirdekte. Sözleşme okuma, klauz çıkarma, eksik unsur tespit — hepsi agent görevi olarak modellenir.",
      },
      {
        heading: "Hybrid arama — yasal terim hem semantic hem keyword",
        body:
          "'TMK 25' tam eşleşme + 'haksız fiil' semantic. Elastic + pgvector (veya Qdrant) birleşimi. BM25 yasal referanslar için, embedding kavramsal benzerlik için.",
      },
      {
        heading: "Karma veri",
        body:
          "Büro/müvekkil/dosya yapısal; ama her hukuk dalı kendi metadata şemasını talep eder (vergi, iş hukuku, ceza...). JSONB ile esnek attribute, Postgres'in transaction'ı korunur.",
      },
      {
        heading: "Multi-tenant shared DB",
        body:
          "Müşteri başına ayrı DB yönetim yükü ağır; row-level security + güçlü ABAC ile shared DB tercih edilir. Tenant_id her sorguya zorla enjekte edilmeli.",
      },
      {
        heading: "K8s deploy — regülasyon + scale",
        body:
          "Müşteri sayısı arttıkça resource-per-tenant tuning, multi-region (KVKK/GDPR data residency), zero-downtime upgrade gerekir. K8s baştan kurmak sonradan migrate etmekten kolay.",
      },
      {
        heading: "MIT + Managed Cloud edition",
        body:
          "Kernel açık kaynak — hukuk büroları self-host edebilir. Asıl gelir managed hosting + premium analytics + uyum raporları üzerinden.",
      },
    ],
    pitfalls: [
      "Tenant_id prompt-time guard'ı kritik — LLM cevabında başka müvekkilin verisinin sızması davalıktır.",
      "Vector index milyon-belge corpus'ta tek node Postgres'i zorlar; Qdrant cluster düşün.",
      "Agent autonomy ile müvekkil parası (avans, vekalet) işlemleri her zaman human-in-the-loop.",
      "Reklam yasakları ülke-spesifik (TR'de avukatlık reklam yasağı sıkı) — marketing modülünü tenant-flag'le kapatılabilir tut.",
      "Yasal kaynak güncelliği (kanun, içtihat) ayrı sync pipeline — agent'ın referans verdiği şey eski olamaz.",
    ],
  },

  // ============================================================
  // 3. BELEDİYE CMS — kamu, AI yok, mevzuat ağır
  // ============================================================
  {
    id: "gov-cms",
    title: "Belediye / kamu CMS portalı",
    badge: "Kamu · CMS-first",
    icon: "ph-building-office",
    color: "blue",
    summary:
      "Şehir resmi sitesi, vatandaş başvuru formları, açık veri, çoklu dil, WCAG erişilebilir. Kamu ihale disiplini.",
    profile: {
      team: "2–3 dev + 1 PM, prosedürel kurum",
      timeline: "9–12 ay (ihale + revizyon)",
      industry: "Kamu / Belediye",
      scale: "200K aylık ziyaret, 50+ form",
    },
    answers: {
      domain: "cms",
      tenancy: "single",
      ai: "none",
      data: "relational",
      search: "faceted",
      realtime: "none",
      mobile: "web",
      vibe: "optional",
      deploy: "multi-node",
      license: "mit-pure",
    },
    rationale: [
      {
        heading: "CMS odaklı — Layout Builder ana persona",
        body:
          "İçerik editörü teknik değil. Drag & drop block library, taxonomy ağacı, revisions, planlanmış yayın hayati. Drupal modeli.",
      },
      {
        heading: "Tek tenant",
        body:
          "Tek kurum, federe değil. Multi-tenant kurmak ihale şartnamesini boşa karmaşıklaştırır.",
      },
      {
        heading: "AI yok — sorumluluk minimize",
        body:
          "Kamu mevzuat metni üretirken AI çıktısı doğrudan halka gider; yanlış cevap kurum sorumluluğu yaratır. Kapalı tut.",
      },
      {
        heading: "Strict relational",
        body:
          "Sayıştay denetimi + KVKK + bilgi edinme talepleri — kayıt değiştirilemezliği şart. JSONB esneklik bu disipline ters.",
      },
      {
        heading: "Multi-node deploy — kurumsal SLA",
        body:
          "Tek VPS yetersiz: sayısal SLA + planlı bakım pencereleri + DR. K3s + Longhorn storage + Hetzner ayrı zone yedek.",
      },
      {
        heading: "MIT saf — kamu açık kaynak baskısı",
        body:
          "Kamu kaynağıyla üretilen kod açık olmalı (ulusal politika). Ticari edition planlama gereksiz.",
      },
    ],
    pitfalls: [
      "KVKK + e-Devlet entegrasyonu gün 1 mimari kararı, sonradan retrofit pahalı.",
      "WCAG AA erişilebilirlik — Flowbite default contrast'larını test, focus ring'leri özelleştir.",
      "Açık veri için OpenAPI + JSON-LD + SEO modülü içerikle entegre.",
      "Bakım sözleşmesi: her değişiklik audit log'a düşmeli (Log + Audit kernel'i bunun için).",
      "Form runtime alanları kurum prosedürüne göre değişir; Field API olmazsa her form değişikliği geliştirici işi.",
    ],
  },

  // ============================================================
  // 4. SAĞLIK EMR — event-sourced, regülasyon ağır
  // ============================================================
  {
    id: "health-emr",
    title: "Klinik EMR + AI not-asistanı",
    badge: "HealthTech · Event-sourced",
    icon: "ph-heartbeat",
    color: "teal",
    summary:
      "Klinik elektronik tıbbi kayıt + doktor görüşme transkripti özetleme. Hasta gizliliği ve denetlenebilirlik kritik.",
    profile: {
      team: "4–6 dev + regülasyon danışmanı",
      timeline: "8 ay (sertifikasyon dahil)",
      industry: "HealthTech B2B",
      scale: "10–50 klinik, klinik başına 1–20 doktor",
    },
    answers: {
      domain: "internal",
      tenancy: "multi-isolated",
      ai: "copilot",
      data: "event-source",
      search: "faceted",
      realtime: "notif",
      mobile: "pwa",
      vibe: "optional",
      deploy: "k8s",
      license: "mit-enterprise",
    },
    rationale: [
      {
        heading: "Event-sourced — tıbbi kayıt değiştirilemez",
        body:
          "Bir notu silmek değil 'düzeltme event'i' eklemek gerekir. Geçmiş forensic için tam. CQRS read modeli (Postgres view) UI'a hızlı sunar.",
      },
      {
        heading: "Multi-tenant isolated DB",
        body:
          "Klinik başına ayrı schema veya ayrı DB. KVKK + ülkeye göre data residency + ihlal halinde tek müşteri etkilenir.",
      },
      {
        heading: "AI-Assist (copilot) — agent değil",
        body:
          "Doktor sorumlu; AI sadece taslak öner. Otonom agent karar veremez. Tüm AI çıktısı insan onayı ile kalıcılaşır.",
      },
      {
        heading: "Open core enterprise",
        body:
          "Çekirdek EMR açık kaynak (kabul edilebilirlik), ileri analitik + multi-klinik konsolidasyon ticari edition.",
      },
      {
        heading: "PWA mobil — tablet kullanımı",
        body:
          "Doktor tableti hastane WiFi'ı kötü; offline-first PWA + senkronizasyon. React Native gereksiz karmaşa.",
      },
      {
        heading: "K8s — SLA + multi-region",
        body:
          "Hastane uptime'sı gerçek. Rolling deploy + canary release + failover. K8s baştan kurmak haklı.",
      },
    ],
    pitfalls: [
      "HL7 / FHIR uyumu mimari kararını şekillendirir — Integration modülü ona göre tasarlanmalı.",
      "Event log şişme — snapshot stratejisi (5K event = 1 snapshot, GC policy).",
      "LLM çıktısı 'tanı' ifadesi vermesin — prompt-time guard + UI'da disclaimer.",
      "Tıbbi cihaz entegrasyonu (lab cihazı, görüntüleme) ayrı bounded context — kernel'a karıştırma.",
      "Reçete + ilaç etkileşim modülü ulusal ilaç veritabanı sync'i ister; gecikme tehlikeli.",
    ],
  },

  // ============================================================
  // 5. ÇOK ÜLKELİ LOJİSTİK — streaming, RN, K8s
  // ============================================================
  {
    id: "eu-logistics",
    title: "Avrupa içi lojistik SaaS",
    badge: "LogisticsTech · Streaming",
    icon: "ph-truck",
    color: "amber",
    summary:
      "Parça + paket lojistik. Gönderici (e-tic) + sürücü mobil app + alıcı bildirimi + dispatch ekranı. Canlı GPS izleme.",
    profile: {
      team: "8–12 dev + DevOps",
      timeline: "12–18 ay",
      industry: "LogisticsTech",
      scale: "10K+ paket/gün, 10 ülke, 3 dil",
    },
    answers: {
      domain: "suite",
      tenancy: "multi-shared",
      ai: "copilot",
      data: "mixed",
      search: "faceted",
      realtime: "stream",
      mobile: "rn",
      vibe: "important",
      deploy: "k8s",
      license: "mit-hosted",
    },
    rationale: [
      {
        heading: "Suite — sender + dispatch + driver tek platform",
        body:
          "Gönderici CRM + paket ERP + dispatch ekranı + sürücü app, hepsi tek bounded contexts haritası. Modüler monolit içeride sınırları net tutar.",
      },
      {
        heading: "Multi-tenant shared",
        body:
          "Müşteri (gönderici şirket) başına workspace; ortak şehir/route kataloğu paylaşımlı. Tenant_id satır seviyesi.",
      },
      {
        heading: "Karma veri",
        body:
          "Paket + adres yapısal, telematics (GPS, hız, batarya) JSONB veya time-series. Şoför event log ayrı tablo.",
      },
      {
        heading: "Streaming dashboards",
        body:
          "Dispatch operatörü canlı 1.000+ paket görür. WS fan-out + time-series DB (Timescale veya InfluxDB). Power BI tarzı.",
      },
      {
        heading: "React Native — sürücü app native",
        body:
          "GPS, kamera, barkod tarama, push notification, arka plan koşma. Web yetmez. Expo ile web + native paylaşılan tip.",
      },
      {
        heading: "AI Copilot — rota + ETA + triage",
        body:
          "Otonom değil; öneri verir, sürücü onaylar. Kayıp paket triage'da AI customer support taslağı.",
      },
      {
        heading: "K8s + multi-region",
        body:
          "Ülke başına edge region: latency + data residency. CI/CD + canary + circuit breaker disiplini.",
      },
    ],
    pitfalls: [
      "Saat dilimi + locale referans tablosu kernel'a, yoksa i18n acı verir.",
      "WS fan-out 10K+ paket: Redis pub/sub yetmez, NATS veya Kafka düşün.",
      "Sürücü cihaz pil tüketimi — GPS sampling akıllı (move-detection + accelerometer).",
      "Vergi / gümrük ülke-spesifik — kernel'a sokma, plugin model.",
      "Adres normalizasyonu (HERE / Mapbox / Google) — provider abstraction katmanı.",
    ],
  },

  // ============================================================
  // 6. META-FRAMEWORK (KULLANICININ KENDİ PROJESİ)
  // ============================================================
  {
    id: "meta-framework",
    title: "Meta-framework (bu projenin kendisi)",
    badge: "DevTool · Vibecoding",
    icon: "ph-stack",
    color: "pink",
    summary:
      "Bu projenin kendi profili. Başkalarına framework satıyorsun. Drupal Views + Frappe Doctype DX, AI ile saatler içinde modül üretimi.",
    profile: {
      team: "Solo başlangıç, 6 ay sonra 2–3 dev",
      timeline: "12 hafta MVP framework, 6 ay community",
      industry: "DevTool / PaaS",
      scale: "Framework adoptasyonu hedef, müşteri = developer",
    },
    answers: {
      domain: "meta",
      tenancy: "white-label",
      ai: "agent-first",
      data: "mixed",
      search: "hybrid",
      realtime: "notif",
      mobile: "pwa",
      vibe: "critical",
      deploy: "single-vps",
      license: "mit-hosted",
    },
    rationale: [
      {
        heading: "Meta domain — framework kendisi ürün",
        body:
          "Müşteri persona = developer. DX = ürün. Belge, CLI, IDE entegrasyonu satış görevi yapar.",
      },
      {
        heading: "White-label tenant",
        body:
          "Her framework kullanıcısı kendi brand'iyle deploy eder. Multi-brand asset isolation + tema değiştirilebilirlik şart.",
      },
      {
        heading: "AI-first — vibecoding değer önerisi",
        body:
          "Senin satış argümanın bu. Agent Runtime + Provider abstraction kernel'in ortası, üzerine plugin economy.",
      },
      {
        heading: "Vibecoding kritik",
        body:
          "TypeScript ile backend tetikleme, Doctype/View tarzı no-code, CLI + VS Code + Doctype Designer + View Designer hepsi öncelikli.",
      },
      {
        heading: "MIT + Managed Cloud",
        body:
          "Vercel/Supabase modeli: kernel açık, framework adoptasyonu serbest; hosted edition + premium support para getirir.",
      },
      {
        heading: "Tek VPS başlangıç",
        body:
          "Senin staging burada. Müşteri kendi deploy edecek (single-vps / multi-node / k8s — onun seçimi). Sen küçük başla, framework'ün çeşitlilik desteği önemli.",
      },
    ],
    pitfalls: [
      "Plugin API'sini erken kilitle — sonradan kıran değişiklik ekosistemi vurur. SemVer disiplini sıkı.",
      "Belge + tutorial yatırımı dev sayısından fazla zaman ister, plan baştan.",
      "'Vibecoding' = hype değil; gerçek tip-safe template + IDE intellisense + AI tool-calling gerekir.",
      "Plugin marketplace + lisans + ödeme akışı v0.2'ye değil, v0.3+ — önce community güveni.",
      "Kernel'a 'her şey' eklemek isterken çekirdeği şişirme — modular monolith disiplini sürekli savun.",
    ],
  },

  // ============================================================
  // 7. INFLUENCER MARKETPLACE — C2C, live, mobile-first
  // ============================================================
  {
    id: "creator-market",
    title: "Creator marketplace + canlı yayın",
    badge: "C2C · Mobil-first",
    icon: "ph-broadcast",
    color: "green",
    summary:
      "Creator'lar mağaza açar, takipçileri alır. Canlı yayın + chat + anlık etkileşim. Mobil önce.",
    profile: {
      team: "6–10 dev",
      timeline: "6 ay v1",
      industry: "Creator economy commerce",
      scale: "1K+ creator, milyon takipçi",
    },
    answers: {
      domain: "commerce",
      tenancy: "white-label",
      ai: "copilot",
      data: "mixed",
      search: "hybrid",
      realtime: "collab",
      mobile: "rn",
      vibe: "important",
      deploy: "multi-node",
      license: "mit-hosted",
    },
    rationale: [
      {
        heading: "Commerce + white-label",
        body:
          "Her creator kendi mağaza brand'i; tema, renk, alan adı subdomain. Tenant + Theme katmanı asıl ürün.",
      },
      {
        heading: "Live collaboration real-time",
        body:
          "Yayın chat, anlık reaction, beğeni akışı, soru-cevap. WS + CRDT (Y.js) veya basit pub/sub. Latency hassasiyeti yüksek.",
      },
      {
        heading: "React Native — UGC üretici = mobil",
        body:
          "Creator telefonla içerik üretir, takipçi telefonda izler. Web ikincil; Expo + paylaşılan tip ile monorepo.",
      },
      {
        heading: "Hybrid search",
        body:
          "Ürün + creator + içerik + hashtag aynı arama. Vector + BM25, kişiselleştirme ile recall artırılır.",
      },
      {
        heading: "AI Copilot — moderasyon + öneri",
        body:
          "Creator için içerik öneri, ürün açıklama AI yardımı; takipçi için kişisel feed sıralama. Otonom değil.",
      },
      {
        heading: "Multi-node deploy",
        body:
          "Edge region (TR + EU) latency duyarlı yayın için. CDN + WS edge sticky session.",
      },
    ],
    pitfalls: [
      "Canlı yayın altyapısı kernel'da değil — ayrı edge servis (LiveKit, Daily, Agora).",
      "Creator payouts (Stripe Connect / Iyzico marketplace) compliance ağır; KYC + tax form ülke-spesifik.",
      "Moderasyon (içerik + chat) AI kullansa bile insan moderatör panel + appeal akışı şart.",
      "C2C dispute mediation tooling erken — alıcı/satıcı çift taraflı.",
      "Mobil app store reviewer'lara karşı 'shop-in-shop' marketplace politika riski; T&C net.",
    ],
  },

  // ============================================================
  // 8. ŞUBE ZİNCİRİ POS + ERP — offline-first, internal
  // ============================================================
  {
    id: "pos-chain",
    title: "Şube zinciri POS + ERP",
    badge: "F&B retail · Offline-first",
    icon: "ph-cash-register",
    color: "gray",
    summary:
      "Restoran/kafe zinciri için POS + stok + raporlama. Şube internet kesintilerinde çalışmaya devam etmeli, sync sonra.",
    profile: {
      team: "3–5 dev + 1 IT",
      timeline: "5 ay v1",
      industry: "F&B retail",
      scale: "10–100 şube, şube başına 1–5 POS",
    },
    answers: {
      domain: "suite",
      tenancy: "multi-isolated",
      ai: "none",
      data: "mixed",
      search: "faceted",
      realtime: "notif",
      mobile: "pwa",
      vibe: "optional",
      deploy: "single-vps",
      license: "mit-enterprise",
    },
    rationale: [
      {
        heading: "Suite — ERP + POS + Stok entegre",
        body:
          "Merkezi muhasebe + şube satış + stok devir + personel yer alır. Modüler monolit, bounded contexts ayrı.",
      },
      {
        heading: "Multi-tenant isolated",
        body:
          "Şube başına izole veri (franchise modeli) + merkez consolidate read-model. Karşılıklı veri sızıntısı imkansız.",
      },
      {
        heading: "PWA offline-first",
        body:
          "POS internet olmadan çalışır (IndexedDB queue), sonra sync. Native değil — POS hardware dokunmatik panel zaten browser-friendly.",
      },
      {
        heading: "Karma veri",
        body:
          "Ürün + stok yapısal, sipariş notları ve modifier (eksi soğan, ek peynir) JSONB esnek.",
      },
      {
        heading: "Open core enterprise",
        body:
          "Temel POS + tek şube açık; multi-şube konsolidasyon + franchise raporlama + payroll enterprise edition.",
      },
      {
        heading: "AI yok — perakende ROI belirsiz",
        body:
          "İlk MVP'de AI tahmin/optimizasyon getiri kanıtı zayıf. Sonra ek modül olarak gelebilir.",
      },
      {
        heading: "Tek VPS",
        body:
          "Merkez tek kurulum, şubeler PWA client. Hetzner CCX serisi yeter.",
      },
    ],
    pitfalls: [
      "POS hardware (yazıcı, kasa çekmecesi, barkod) — driver entegrasyonu ayrı modül.",
      "Yeniden bağlanma çakışma çözümü (CRDT veya manual merge) atlanırsa stok yanlışlanır.",
      "Yetkilendirme nüansı: müdür yardımcısı iade onaylar, kasiyer onaylamaz — ABAC önemli.",
      "Vergi modülü ülke-spesifik (TR: e-Fatura + e-Arşiv); kernel'a kilitleme, plugin tut.",
      "Saat dilimi + günlük kapanış kuralı şubeye göre farklı — Schedule modülü tenant-aware olmalı.",
    ],
  },
];
