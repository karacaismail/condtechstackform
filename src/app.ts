/**
 * Meta-Framework Karar Sihirbazı — TypeScript ana modül
 *
 * Strict TS — koşullu form akışı, kural değerlendirici, Kanban render.
 * Beyaz tahta sütunları: paradigm | kernel | stack | saas | module | plugin | extension
 */

// =============================================================
// Tip tanımları (compile-time güvence — JS'in apostrof bug'ı bu sayede tekrar etmez)
// =============================================================

type ColumnId = 'paradigm' | 'kernel' | 'stack' | 'saas' | 'module' | 'plugin' | 'extension';
type Priority = 'must' | 'should' | 'could';
type Effort   = 'XS' | 'S' | 'M' | 'L';

interface ColumnDef {
  id: ColumnId;
  title: string;
  icon: string;
}

interface DecisionOption {
  id: string;
  label: string;
  icon: string;
  desc: string;
  rationale: string;
}

interface DecisionStep {
  id: string;
  title: string;
  subtitle?: string;
  options: DecisionOption[];
}

type Conditions = Partial<Record<string, string[]>>;

interface Recommendation {
  id: string;
  column: ColumnId;
  title: string;
  icon: string;
  desc: string;
  why?: string;
  priority: Priority;
  effort: Effort;
  license?: string;
  conditions: Conditions;
}

interface AppState {
  currentStep: number;
  answers: Record<string, string>;
}

// =============================================================
// Sütunlar (tahta eşleşmesi)
// =============================================================

const COLUMNS: ColumnDef[] = [
  { id: 'paradigm',  title: 'Mimari Paradigmalar',  icon: 'ph-tree-structure' },
  { id: 'kernel',    title: 'KERNEL (Çekirdek)',    icon: 'ph-cpu' },
  { id: 'stack',     title: 'Back/Front Tech Stack', icon: 'ph-stack-simple' },
  { id: 'saas',      title: 'SaaS Apps',             icon: 'ph-buildings' },
  { id: 'module',    title: 'System Modules',        icon: 'ph-puzzle-piece' },
  { id: 'plugin',    title: 'Plugins',               icon: 'ph-plug' },
  { id: 'extension', title: 'Extensions / Snippets', icon: 'ph-magic-wand' },
];

// =============================================================
// Form adımları — koşullu akışın 10 sorusu
// (TÜM string'ler çift tırnakta: Türkçe apostroflar güvenli)
// =============================================================

const STEPS: DecisionStep[] = [
  {
    id: "domain",
    title: "Projenin kapsamı ne?",
    subtitle: "Hangi tip platform inşa ediyorsun? (DDD bağlamında \"core domain\" tanımı buradan başlar)",
    options: [
      { id: "suite",    label: "Çok-amaçlı SaaS Suite", icon: "ph-buildings",      desc: "CRM + ERP + CMS + Commerce — Frappe / Odoo seviyesi geniş kapsam", rationale: "Modüler monolit + plugin mimarisi gerekir" },
      { id: "commerce", label: "Headless Commerce",     icon: "ph-shopping-cart",  desc: "Medusa / Saleor tarzı ticari çekirdek, çoklu storefront",         rationale: "Stock, attribute/variant, coupon, BOGO modülleri kritik" },
      { id: "cms",      label: "İçerik Odaklı CMS",     icon: "ph-newspaper",      desc: "Drupal / Strapi tarzı, içerik + taxonomy + layout builder ön planda", rationale: "Content + Layout Builder + i18n birincil" },
      { id: "internal", label: "Internal Tool / Admin", icon: "ph-toolbox",        desc: "Retool / NocoBase tarzı dahili operasyon paneli",                 rationale: "Auth + CRUD + table/form + hızlı view inşası" },
      { id: "meta",     label: "Meta-Framework Kendisi", icon: "ph-stack",         desc: "Bu projenin asıl hedefi — başkalarına framework satıyorsun",      rationale: "Kernel + DX araçları + plugin SDK öncelikli" },
    ],
  },
  {
    id: "tenancy",
    title: "Tenant modeli?",
    subtitle: "Tek müşteri mi, çoklu müşteri mi servis edeceksin?",
    options: [
      { id: "single",         label: "Single-tenant",            icon: "ph-user",        desc: "Tek kurulum, tek müşteri",         rationale: "RBAC yeterli, ABAC opsiyonel" },
      { id: "multi-shared",   label: "Multi-tenant (shared DB)", icon: "ph-users-three", desc: "Tek DB, row-level security",       rationale: "ABAC + tenant_id zorunlu" },
      { id: "multi-isolated", label: "Multi-tenant (isolated)",  icon: "ph-users-four",  desc: "Müşteri başına ayrı schema/DB",    rationale: "Migration orkestrasyonu + tenant provisioning" },
      { id: "white-label",    label: "White-label çoklu marka",  icon: "ph-palette",     desc: "Theme/brand izolasyonlu multi-tenant", rationale: "Tenant + Theme katmanı + asset isolation" },
    ],
  },
  {
    id: "ai",
    title: "AI rolü?",
    subtitle: "AI-first mi yoksa opsiyonel mi? (Beyaz tahta: \"AI Provider\", \"Agents\")",
    options: [
      { id: "agent-first", label: "AI-First / Agents",   icon: "ph-robot",       desc: "Otonom agentlar iş akışı yürütür",     rationale: "AI Provider abstraction + Agent runtime + tool calling şart" },
      { id: "copilot",     label: "AI-Assist / Copilot", icon: "ph-magic-wand",  desc: "Kullanıcıya öneriler, autocomplete",   rationale: "AI Provider + embedding/vector search yeterli" },
      { id: "optional",    label: "Opsiyonel / Future",  icon: "ph-sparkle",     desc: "Şimdilik yok, sonra eklenecek",        rationale: "Hook noktaları bırak, kernel zorla yükleme yapmasın" },
      { id: "none",        label: "AI yok",              icon: "ph-x-circle",    desc: "Bu projede AI bileşeni planlanmıyor",  rationale: "AI modüllerini kernel'a dahil etme" },
    ],
  },
  {
    id: "data",
    title: "Veri yapısı dominansı?",
    subtitle: "PostgreSQL + CouchDB + Elastic kombinasyonu için (kırmızı: tahtadaki öncelik)",
    options: [
      { id: "relational",   label: "İlişkisel ağırlıklı",    icon: "ph-database",         desc: "Strict schema, FK, transaction önemli",      rationale: "PostgreSQL birincil, Prisma ORM" },
      { id: "mixed",        label: "Karma (SQL + Document)", icon: "ph-database",         desc: "Yapısal veri + esnek attribute/variant",     rationale: "Postgres + JSONB veya Postgres + CouchDB hybrid" },
      { id: "document",     label: "Çoğunlukla Document",    icon: "ph-files",            desc: "Şema sık değişir, attribute fırtınası",      rationale: "CouchDB birincil, replication friendly" },
      { id: "event-source", label: "Event-sourced",          icon: "ph-arrows-clockwise", desc: "Audit trail, geri alma, time-travel",        rationale: "Event Store + CQRS read modelleri" },
    ],
  },
  {
    id: "search",
    title: "Arama karmaşıklığı?",
    subtitle: "Elastic'i (tahtadaki Couch → Elastic akışı) ne zaman koymalı?",
    options: [
      { id: "basic",    label: "Basit (SQL LIKE)",         icon: "ph-magnifying-glass",      desc: "Birkaç bin satır, basit eşleşme",       rationale: "Postgres FTS yeterli" },
      { id: "faceted",  label: "Facet + Filter",           icon: "ph-funnel",                desc: "E-ticaret tipi filtreleme",             rationale: "Postgres FTS + GIN index veya Meilisearch" },
      { id: "fulltext", label: "Tam metin (büyük corpus)", icon: "ph-magnifying-glass-plus", desc: "Milyon kayıt, fuzzy, autocomplete",     rationale: "Elasticsearch / OpenSearch" },
      { id: "hybrid",   label: "Hybrid (BM25 + Vector)",   icon: "ph-graph",                 desc: "AI semantic + klasik arama",            rationale: "Elastic + pgvector veya Qdrant" },
    ],
  },
  {
    id: "realtime",
    title: "Real-time ihtiyacı?",
    subtitle: "Notification, collaboration, streaming dashboard...",
    options: [
      { id: "none",   label: "Yok / sadece request-response", icon: "ph-arrow-line-right", desc: "Klasik REST/GraphQL akışı",         rationale: "WebSocket katmanı opsiyonel" },
      { id: "notif",  label: "Sadece bildirim",               icon: "ph-bell",             desc: "Toast, alert, push notif",          rationale: "Notification modülü + SSE veya WebSocket" },
      { id: "collab", label: "Live collaboration",            icon: "ph-users",            desc: "Google Docs benzeri eş zamanlı",    rationale: "Y.js / CRDT + Hocuspocus tarzı sync server" },
      { id: "stream", label: "Streaming dashboards",          icon: "ph-chart-line-up",    desc: "Power BI / metric ekranları",       rationale: "Time-series DB + WebSocket fan-out" },
    ],
  },
  {
    id: "mobile",
    title: "Mobil hedef?",
    subtitle: "Tahtada \"React Native\" + \"Adaptive break points\" var",
    options: [
      { id: "web",    label: "Sadece web",             icon: "ph-monitor",                desc: "Mobil ihtiyaç yok",                rationale: "Adaptive breakpoints yeterli" },
      { id: "pwa",    label: "PWA",                    icon: "ph-device-mobile",          desc: "Web ama mobil-friendly + offline", rationale: "Service Worker + manifest + IndexedDB" },
      { id: "rn",     label: "React Native (hybrid)",  icon: "ph-device-mobile-camera",   desc: "Native app + web paylaşımlı kod",  rationale: "Monorepo + paylaşılan UI tokenları + Expo" },
      { id: "native", label: "Tam native + web parity", icon: "ph-device-mobile-speaker", desc: "Native öne, web ikincil",          rationale: "Şu an için olası değil — DX'i yorar, sonra eklenir" },
    ],
  },
  {
    id: "vibe",
    title: "Vibecoding önceliği?",
    subtitle: "AI ile saatler içinde modül üretebilme — kullanıcı kuralı",
    options: [
      { id: "critical",  label: "Kritik (saatler içinde)", icon: "ph-lightning", desc: "TypeScript ile tetiklenen modül/page/form üretimi şart", rationale: "Doctype/View tarzı no-code + low-code DX" },
      { id: "important", label: "Önemli ama esnek",        icon: "ph-clock",     desc: "Vibecoding'i destekle ama DX'i feda etme",                rationale: "CLI scaffolder + schema-first generation" },
      { id: "optional",  label: "Nice-to-have",            icon: "ph-asterisk",  desc: "Olursa iyi, olmazsa olur",                                rationale: "Basit template scaffolder yeterli" },
    ],
  },
  {
    id: "deploy",
    title: "Deployment topolojisi?",
    subtitle: "Hetzner + Debian + AMD EPYC + GitHub private repo (kullanıcı ortamı)",
    options: [
      { id: "single-vps", label: "Tek Hetzner VPS",   icon: "ph-cloud",          desc: "Docker Compose ile basit kurulum",   rationale: "Caddy + Compose + GitHub Actions push-deploy" },
      { id: "multi-node", label: "Multi-node Hetzner", icon: "ph-cloud-arrow-up", desc: "K3s / Docker Swarm cluster",         rationale: "K3s + Traefik + Longhorn storage" },
      { id: "k8s",        label: "Production K8s",     icon: "ph-kanban",         desc: "Tam K8s, multi-region",              rationale: "Helm + ArgoCD + Hetzner Cloud CSI" },
    ],
  },
  {
    id: "license",
    title: "Lisans modeli?",
    subtitle: "MIT (kullanıcı belirtti) + Next.js benzeri kazanç modeli planı",
    options: [
      { id: "mit-hosted",     label: "MIT + Managed Cloud",      icon: "ph-cloud-check",       desc: "MIT açık kaynak, hosted edition para getirir",      rationale: "Vercel/Supabase modeli — kernel açık, hosting ücretli" },
      { id: "mit-enterprise", label: "MIT + Enterprise Add-on",  icon: "ph-buildings-skyline", desc: "Open core: kernel MIT, enterprise modüller ticari", rationale: "GitLab/Sentry modeli — sınırlı kapsamda dual-license" },
      { id: "mit-pure",       label: "MIT saf",                  icon: "ph-heart",             desc: "Sponsorluk + danışmanlık modeli",                   rationale: "Astro / Vue modeli — community-first" },
    ],
  },
];

// =============================================================
// Öneriler — koşula bağlı kartlar
// (anahtarlar arası AND, anahtar içinde OR)
// =============================================================

const RECS: Recommendation[] = [
  // PARADIGMA
  { id:"p-ddd",     column:"paradigm", title:"Domain Driven Design (DDD)", icon:"ph-tree-structure", desc:"Tahtadaki kutu — bounded context + ubiquitous language.", why:"Çok-modüllü/çok-domainli yapı", priority:"must", effort:"L", license:"methodology", conditions:{ domain:["suite","commerce","meta"] } },
  { id:"p-modmono", column:"paradigm", title:"Modular Monolith",            icon:"ph-stack-simple",   desc:"Tek deployable ama içeride sub-domain sınırları net.",                              why:"Solo/küçük ekip + büyük domain", priority:"must", effort:"M", conditions:{ domain:["suite","commerce","cms","meta"], deploy:["single-vps","multi-node"] } },
  { id:"p-hex",     column:"paradigm", title:"Hexagonal (Ports & Adapters)",icon:"ph-hexagon",        desc:"AI provider, DB driver, queue adapter arkasında — değişim ucuz.",                  why:"AI/DB değiştirilebilir tutmak için", priority:"must", effort:"M", conditions:{ ai:["agent-first","copilot"] } },
  { id:"p-eca",     column:"paradigm", title:"ECA (Event-Condition-Action)", icon:"ph-flow-arrow",    desc:"Tahtadaki ECA Engine — \"eğer X ise Y\" no-code kuralları.",                        why:"No/low-code akış tanımları", priority:"must", effort:"L", conditions:{ vibe:["critical","important"] } },
  { id:"p-cqrs",    column:"paradigm", title:"CQRS + Event Sourcing",       icon:"ph-arrows-split",   desc:"Yazma vs okuma yolu ayrı. Audit + time-travel.",                                   why:"Event-sourced veri seçildi", priority:"must", effort:"L", conditions:{ data:["event-source"] } },
  { id:"p-clean",   column:"paradigm", title:"Clean Architecture",          icon:"ph-circles-three",  desc:"Use-case katmanı çekirdekte, framework dışta.",                                    why:"Test-first + büyük takım", priority:"should", effort:"M", conditions:{ vibe:["important","optional"] } },
  { id:"p-vslice",  column:"paradigm", title:"Vertical Slice Architecture", icon:"ph-rows",           desc:"Her feature kendi dilim. AI ile modül üretmek için ideal.",                        why:"Vibecoding kritik", priority:"should", effort:"S", conditions:{ vibe:["critical"] } },

  // KERNEL
  { id:"k-rbac",      column:"kernel", title:"RBAC + ABAC + Permission Engine", icon:"ph-shield-check",   desc:"Tahta: RBAC/ABAC/Perm's. Role + attribute + tenant_id satır seviyesi yetki.", why:"Multi-tenant", priority:"must", effort:"L", conditions:{ tenancy:["multi-shared","multi-isolated","white-label"] } },
  { id:"k-rbac-only", column:"kernel", title:"RBAC (basit)",                    icon:"ph-shield",         desc:"Single-tenant için sadece rol bazlı yeterli.",                                  why:"Single-tenant yeterli", priority:"must", effort:"S", conditions:{ tenancy:["single"] } },
  { id:"k-notif",     column:"kernel", title:"Notification / Alerts",           icon:"ph-bell-ringing",   desc:"Tahta: Notification Alerts. In-app + email + push birleşik yayıncı.",          why:"Bildirim/collab seçildi", priority:"must", effort:"M", conditions:{ realtime:["notif","collab","stream"] } },
  { id:"k-agents",    column:"kernel", title:"Agents Runtime",                  icon:"ph-robot",          desc:"Tahta: Agents. Tool-calling, planlama, hafıza, onay döngüleri.",               why:"AI-first seçildi", priority:"must", effort:"L", conditions:{ ai:["agent-first"] } },
  { id:"k-ai",        column:"kernel", title:"AI Provider Abstraction",         icon:"ph-brain",          desc:"Tahta: AI Provider. OpenAI/Anthropic/Local LLM swap edilebilir.",              why:"AI dahil", priority:"must", effort:"M", conditions:{ ai:["agent-first","copilot"] } },
  { id:"k-types",     column:"kernel", title:"Types / Schema Registry",         icon:"ph-brackets-curly", desc:"Tahta: Types. Tek kaynak şema → DB + API + TS tipleri.",                       why:"Vibecoding DX", priority:"must", effort:"L", conditions:{ vibe:["critical","important"] } },
  { id:"k-facets",    column:"kernel", title:"Facets / Flags / States",         icon:"ph-toggle-right",   desc:"Tahta: facets/flag/states. Feature flag + state machine + facet filter.",     why:"Çoklu özellik dalı", priority:"should", effort:"M", conditions:{} },
  { id:"k-file",      column:"kernel", title:"File / Asset Service",            icon:"ph-paperclip",      desc:"Tahta: file. Upload, signed URL, image transform, S3/MinIO uyumlu.",          why:"Tüm uygulamalarda ortak", priority:"must", effort:"M", conditions:{} },
  { id:"k-sec",       column:"kernel", title:"Security + Rate Limit",           icon:"ph-shield-warning", desc:"Tahta: Security/Rate Limit. CSRF, secret rotation, audit log.",               why:"Production prereq", priority:"must", effort:"M", conditions:{} },
  { id:"k-writeprot", column:"kernel", title:"Write Protection Layer",          icon:"ph-lock-key",       desc:"Tahtada daire içinde \"Write Protection\". FastAPI önünde yazma gatekeeper.",  why:"Tahtada kritik işaretli", priority:"must", effort:"M", conditions:{} },
  { id:"k-i18n",      column:"kernel", title:"i18n / Localization",             icon:"ph-translate",      desc:"Tahta: i18n. Locale, message catalog, content i18n.",                          why:"Multi-region / çok-amaçlı", priority:"should", effort:"S", conditions:{ domain:["suite","commerce","cms"] } },
  { id:"k-graphql",   column:"kernel", title:"GraphQL Gateway",                 icon:"ph-graph",          desc:"Tahta: GraphQL. Field-level perm + nested data.",                              why:"Karma/document veri", priority:"could", effort:"L", conditions:{ data:["mixed","document"] } },
  { id:"k-field",     column:"kernel", title:"Field / Custom Field API",        icon:"ph-list-plus",      desc:"Tahta: Field. Runtime custom field (Drupal/Frappe tarzı).",                    why:"No-code customization", priority:"must", effort:"L", conditions:{ vibe:["critical","important"] } },
  { id:"k-api",       column:"kernel", title:"API Surface (REST + RPC)",        icon:"ph-plugs-connected",desc:"Tahta: API. Otomatik REST + typed RPC.",                                        why:"Tüm clientlar için", priority:"must", effort:"M", conditions:{} },
  { id:"k-log",       column:"kernel", title:"Structured Log + Audit",          icon:"ph-list-bullets",   desc:"Tahta: Log. Yapısal log + audit trail.",                                       why:"Üretim + compliance", priority:"must", effort:"S", conditions:{} },
  { id:"k-cron",      column:"kernel", title:"Cron / Schedule",                 icon:"ph-calendar-check", desc:"Tahta: Cron/Schedule. Zamanlı işler, retry, DLQ.",                             why:"Periyodik görevler", priority:"must", effort:"M", conditions:{} },

  // STACK
  { id:"s-flowbite", column:"stack", title:"Flowbite + Tailwind",     icon:"ph-paint-brush",       desc:"Tahta: Flowbite. Hızlı UI iskeleti.",            why:"Tahta seçti", priority:"must", effort:"XS", conditions:{} },
  { id:"s-ts",       column:"stack", title:"TypeScript (strict)",      icon:"ph-file-ts",          desc:"Tahta: Typescript. Backend trigger için tek dil DX.", why:"Vibecoding ekseni", priority:"must", effort:"XS", conditions:{} },
  { id:"s-rn",       column:"stack", title:"React Native (Expo)",      icon:"ph-device-mobile",    desc:"Tahta: React native. Web ile paylaşılan tip + token.", why:"Mobil seçildi", priority:"must", effort:"L", conditions:{ mobile:["rn","native"] } },
  { id:"s-pwa",      column:"stack", title:"PWA (Service Worker)",     icon:"ph-cloud-arrow-down", desc:"Offline-first cache + push.",                    why:"PWA seçildi", priority:"must", effort:"M", conditions:{ mobile:["pwa"] } },
  { id:"s-adaptive", column:"stack", title:"Adaptive Breakpoints",     icon:"ph-devices",          desc:"Tahta: Adaptive break points. Container queries + tokenlar.", why:"Her cihaz", priority:"must", effort:"XS", conditions:{} },
  { id:"s-fastapi",  column:"stack", title:"FastAPI (Python)",          icon:"ph-lightning-a",     desc:"Tahtada kırmızı — birincil backend. Async + Pydantic + OpenAPI.", why:"Tahta öncelik (kırmızı)", priority:"must", effort:"M", conditions:{} },
  { id:"s-pg",       column:"stack", title:"PostgreSQL + Prisma",       icon:"ph-database",        desc:"Tahtada kırmızı. JSONB + GIN + pgvector.",       why:"Tahta + kullanıcı kuralı", priority:"must", effort:"S", conditions:{} },
  { id:"s-couch",    column:"stack", title:"CouchDB",                   icon:"ph-files",           desc:"Tahta: Couch DB. Replication-friendly document store.", why:"Document/karma veri", priority:"should", effort:"M", conditions:{ data:["mixed","document"] } },
  { id:"s-elastic",  column:"stack", title:"Elasticsearch / OpenSearch", icon:"ph-magnifying-glass-plus", desc:"Tahta: Elastic (Couch → Elastic akışı).", why:"Full-text / hybrid arama", priority:"must", effort:"M", conditions:{ search:["fulltext","hybrid"] } },
  { id:"s-vector",   column:"stack", title:"pgvector / Qdrant",         icon:"ph-vector-three",    desc:"Semantic search + embedding store.",             why:"Hybrid arama / copilot", priority:"should", effort:"M", conditions:{ search:["hybrid"], ai:["agent-first","copilot"] } },
  { id:"s-docker",   column:"stack", title:"Docker Compose + Caddy",    icon:"ph-shipping-container", desc:"Tek VPS için ideal — TLS otomatik.",          why:"Tek VPS deploy", priority:"must", effort:"S", conditions:{ deploy:["single-vps"] } },
  { id:"s-k3s",      column:"stack", title:"K3s + Traefik",             icon:"ph-cube",            desc:"Hafif K8s, Hetzner multi-node uyumlu.",          why:"Multi-node", priority:"must", effort:"L", conditions:{ deploy:["multi-node"] } },
  { id:"s-k8s",      column:"stack", title:"Helm + ArgoCD",             icon:"ph-cube-transparent",desc:"GitOps push-deploy, multi-env promote.",         why:"Production K8s", priority:"must", effort:"L", conditions:{ deploy:["k8s"] } },
  { id:"s-actions",  column:"stack", title:"GitHub Actions (private repo)", icon:"ph-github-logo", desc:"Build → push → Hetzner deploy.",                 why:"Kullanıcı ortamı", priority:"must", effort:"S", conditions:{} },

  // SAAS APPS
  { id:"sa-crm",   column:"saas", title:"CRM + Helpdesk",        icon:"ph-headset",         desc:"Tahta: crm Helpdesk.",                                  why:"Suite seçildi", priority:"should", effort:"L", conditions:{ domain:["suite"] } },
  { id:"sa-erp",   column:"saas", title:"ERP modülü",             icon:"ph-buildings",       desc:"Tahta: ERP.",                                           why:"Suite/internal", priority:"should", effort:"L", conditions:{ domain:["suite"] } },
  { id:"sa-pim",   column:"saas", title:"PIM",                    icon:"ph-tag",             desc:"Tahta: PIM. Ürün master data.",                         why:"Commerce/suite", priority:"should", effort:"M", conditions:{ domain:["suite","commerce"] } },
  { id:"sa-chat",  column:"saas", title:"Chat",                   icon:"ph-chat-circle",     desc:"Tahta: CHAT.",                                          why:"Suite", priority:"could", effort:"M", conditions:{ domain:["suite"] } },
  { id:"sa-wiki",  column:"saas", title:"Wiki / Docs",            icon:"ph-book-open",       desc:"Tahta: Wiki.",                                          why:"Suite/CMS", priority:"could", effort:"M", conditions:{ domain:["suite","cms"] } },
  { id:"sa-bi",    column:"saas", title:"BI / Metrics",           icon:"ph-chart-pie-slice", desc:"Tahta: Power BI/metric.",                               why:"Streaming dashboard", priority:"should", effort:"L", conditions:{ realtime:["stream"] } },
  { id:"sa-mkt",   column:"saas", title:"Marketing",              icon:"ph-megaphone",       desc:"Tahta: Marketing.",                                     why:"Suite", priority:"could", effort:"M", conditions:{ domain:["suite"] } },
  { id:"sa-drive", column:"saas", title:"Drive / Office",         icon:"ph-folder",          desc:"Tahta: Drive/office. File + collab.",                   why:"Collab seçildi", priority:"could", effort:"L", conditions:{ realtime:["collab"] } },
  { id:"sa-appt",  column:"saas", title:"Appointment",            icon:"ph-calendar-plus",   desc:"Tahta: Appointment.",                                   why:"Suite", priority:"could", effort:"S", conditions:{ domain:["suite"] } },
  { id:"sa-wh",    column:"saas", title:"Warehouse + Integration", icon:"ph-warehouse",      desc:"Tahta: Warehouse / integration.",                       why:"Commerce/suite", priority:"should", effort:"L", conditions:{ domain:["suite","commerce"] } },
  { id:"sa-hrms",  column:"saas", title:"HRMS",                   icon:"ph-users-three",     desc:"Tahta: HRMS.",                                          why:"Suite", priority:"could", effort:"L", conditions:{ domain:["suite"] } },
  { id:"sa-ecom",  column:"saas", title:"eCommerce (B2B/B2C/C2C)",icon:"ph-shopping-bag",    desc:"Tahta: eComerce [B2B C2C B2C].",                        why:"Commerce", priority:"must", effort:"L", conditions:{ domain:["commerce","suite"] } },
  { id:"sa-stok",  column:"saas", title:"Stok / Inventory",       icon:"ph-package",         desc:"Tahta: Stok.",                                          why:"Commerce", priority:"must", effort:"M", conditions:{ domain:["commerce","suite"] } },
  { id:"sa-cms",   column:"saas", title:"CMS uygulaması",         icon:"ph-newspaper",       desc:"Tahta: CMS.",                                           why:"CMS/suite", priority:"must", effort:"M", conditions:{ domain:["cms","suite"] } },

  // SYSTEM MODULES
  { id:"m-crud",    column:"module", title:"CRUD Generator",       icon:"ph-list-checks",    desc:"Tahta: crud. Doctype/View tarzı otomatik üretim.",          why:"Her uygulamada", priority:"must", effort:"M", conditions:{} },
  { id:"m-table",   column:"module", title:"Table + Form Builder", icon:"ph-table",          desc:"Tahta: table form. Listing + edit jeneratörü.",             why:"CRUD'un UI yüzü", priority:"must", effort:"M", conditions:{} },
  { id:"m-cart",    column:"module", title:"Cart",                 icon:"ph-shopping-cart",  desc:"Tahta: cart.",                                              why:"Commerce", priority:"must", effort:"M", conditions:{ domain:["commerce","suite"] } },
  { id:"m-seo",     column:"module", title:"SEO",                  icon:"ph-trend-up",       desc:"Tahta: seo. Meta + sitemap + structured data.",             why:"Public site", priority:"must", effort:"S", conditions:{ domain:["cms","commerce","suite"] } },
  { id:"m-layout",  column:"module", title:"Layout Builder",       icon:"ph-rows",           desc:"Tahta: Layout Builder ← (vurgu var). Drupal benzeri.",      why:"CMS/suite içerik", priority:"must", effort:"L", conditions:{ domain:["cms","suite","commerce"] } },
  { id:"m-import",  column:"module", title:"Import / Export",       icon:"ph-arrows-down-up", desc:"Tahta: import Export.",                                     why:"Migration/integration", priority:"must", effort:"M", conditions:{} },
  { id:"m-auth",    column:"module", title:"Login / Register / Users", icon:"ph-user-circle",desc:"Tahta: Login register Users.",                              why:"Tüm uygulamalar", priority:"must", effort:"M", conditions:{} },
  { id:"m-tax",     column:"module", title:"Taxonomies",           icon:"ph-tree",           desc:"Tahta: Taxonomies. Kategori + tag + hierarchical.",         why:"CMS/commerce", priority:"must", effort:"S", conditions:{ domain:["cms","commerce","suite"] } },
  { id:"m-cur",     column:"module", title:"Currency",             icon:"ph-currency-circle-dollar", desc:"Tahta: Currency. Çoklu para + FX.",                why:"Commerce/multi-region", priority:"should", effort:"S", conditions:{ domain:["commerce","suite"] } },
  { id:"m-comp",    column:"module", title:"Components → Builder", icon:"ph-puzzle-piece",   desc:"Tahta: components → Builder. Reusable block kitabı.",       why:"Layout builder destek", priority:"must", effort:"M", conditions:{} },
  { id:"m-tenant",  column:"module", title:"Tenant",               icon:"ph-users-four",     desc:"Tahta: Tenant. Provisioning + isolation.",                  why:"Multi-tenant", priority:"must", effort:"L", conditions:{ tenancy:["multi-shared","multi-isolated","white-label"] } },
  { id:"m-attr",    column:"module", title:"Attribute / Variant",  icon:"ph-tag-chevron",    desc:"Tahta: Attribute /Variant.",                                why:"Commerce", priority:"must", effort:"M", conditions:{ domain:["commerce","suite"] } },
  { id:"m-coupon",  column:"module", title:"Coupon",               icon:"ph-ticket",         desc:"Tahta: Coupon.",                                            why:"Commerce", priority:"should", effort:"S", conditions:{ domain:["commerce","suite"] } },
  { id:"m-bogo",    column:"module", title:"BOGO / Promotion",     icon:"ph-gift",           desc:"Tahta: Bogo.",                                              why:"Commerce", priority:"could", effort:"M", conditions:{ domain:["commerce","suite"] } },
  { id:"m-sched",   column:"module", title:"Schedule",             icon:"ph-calendar",       desc:"Tahta: Schedule.",                                          why:"Cron+appointment", priority:"should", effort:"S", conditions:{} },
  { id:"m-content", column:"module", title:"Content (entities)",   icon:"ph-article",        desc:"Tahta: content. Entity tipleri + revisions.",               why:"CMS", priority:"must", effort:"L", conditions:{ domain:["cms","suite"] } },
  { id:"m-lang",    column:"module", title:"Language",             icon:"ph-translate",      desc:"Tahta: Language. Çeviri arayüzü.",                          why:"i18n ile birleşir", priority:"should", effort:"M", conditions:{ domain:["cms","commerce","suite"] } },
  { id:"m-widgets", column:"module", title:"Widgets",              icon:"ph-squares-four",   desc:"Tahta: Widgets. Layout slot içerikleri.",                   why:"Layout builder ile", priority:"should", effort:"S", conditions:{} },
  { id:"m-pos",     column:"module", title:"POS",                  icon:"ph-cash-register",  desc:"Tahta: POS. Fiziksel satış noktası.",                       why:"Commerce + offline", priority:"could", effort:"L", conditions:{ domain:["commerce","suite"] } },
  { id:"m-search",  column:"module", title:"Search UI",            icon:"ph-magnifying-glass",desc:"Tahta: Search. Faceted/full-text frontend.",               why:"Arama eklendi", priority:"must", effort:"M", conditions:{ search:["faceted","fulltext","hybrid"] } },
  { id:"m-media",   column:"module", title:"Media Library",        icon:"ph-image",          desc:"Tahta: Media. Asset yönetimi.",                             why:"File modülü üstüne UI", priority:"must", effort:"M", conditions:{} },

  // PLUGINS
  { id:"pl-up",    column:"plugin", title:"Ürün Yükleme",         icon:"ph-upload",       desc:"Tahta: Ürün yükleme. CSV/Excel ile bulk import.", why:"Commerce", priority:"should", effort:"S", conditions:{ domain:["commerce","suite"] } },
  { id:"pl-addr",  column:"plugin", title:"Address",              icon:"ph-map-pin",      desc:"Tahta: Address. Normalize + autocomplete.",       why:"Commerce/HRMS/CRM", priority:"should", effort:"S", conditions:{ domain:["commerce","suite"] } },
  { id:"pl-list",  column:"plugin", title:"Listing",              icon:"ph-list-numbers", desc:"Tahta: Listing. Gelişmiş sıralama/filtre.",       why:"Tüm CRUD'larda", priority:"should", effort:"S", conditions:{} },
  { id:"pl-color", column:"plugin", title:"Color Picker",         icon:"ph-paint-bucket", desc:"Tahta: Color Picker. Theme/brand seçimi.",        why:"White-label", priority:"could", effort:"XS", conditions:{ tenancy:["white-label"] } },
  { id:"pl-onb",   column:"plugin", title:"Onboarding",           icon:"ph-rocket-launch",desc:"Tahta: Onboarding. Wizard + tour.",               why:"DX / kabul", priority:"should", effort:"S", conditions:{} },
  { id:"pl-bulk",  column:"plugin", title:"Bulk Action",          icon:"ph-stack-overflow",desc:"Tahta: Bulk Action. Çoklu satır işlem.",         why:"Listing destek", priority:"should", effort:"S", conditions:{} },
  { id:"pl-toast", column:"plugin", title:"Toast / Notification UI", icon:"ph-bell",      desc:"Tahta: Toast. Notification frontend'i.",          why:"Notification ile", priority:"must", effort:"XS", conditions:{ realtime:["notif","collab","stream"] } },

  // EXTENSIONS / SNIPPETS
  { id:"e-snip",    column:"extension", title:"Snippet Library",       icon:"ph-code",           desc:"Tahta: Snippets? — DX için kod parçacıkları.",      why:"Vibecoding", priority:"should", effort:"S", conditions:{ vibe:["critical","important"] } },
  { id:"e-cli",     column:"extension", title:"CLI Scaffolder",        icon:"ph-terminal",       desc:"`mf gen module foo` tarzı jeneratör.",              why:"Vibecoding DX", priority:"must", effort:"M", conditions:{ vibe:["critical","important"] } },
  { id:"e-vsc",     column:"extension", title:"VS Code Extension",     icon:"ph-file-code",      desc:"Schema/route IntelliSense + sihirbazlar.",          why:"DX", priority:"should", effort:"L", conditions:{ vibe:["critical","important"] } },
  { id:"e-doctype", column:"extension", title:"Doctype Designer",      icon:"ph-table",          desc:"Frappe Doctype benzeri — tıklayarak entity tanımı.", why:"No-code core", priority:"must", effort:"L", conditions:{ vibe:["critical","important"] } },
  { id:"e-view",    column:"extension", title:"View Designer",         icon:"ph-eye",            desc:"Drupal Views benzeri — tıklayarak liste/grafik.",    why:"No-code report", priority:"must", effort:"L", conditions:{ vibe:["critical","important"] } },
  { id:"e-mit",     column:"extension", title:"MIT + Managed Edition", icon:"ph-cloud-check",    desc:"Açık kaynak + hosted ticari edisyon.",              why:"Lisans modeli", priority:"must", effort:"L", conditions:{ license:["mit-hosted"] } },
  { id:"e-mit-ent", column:"extension", title:"Open Core (Enterprise)",icon:"ph-buildings-skyline", desc:"MIT kernel + ticari enterprise modüller.",       why:"Lisans modeli", priority:"must", effort:"L", conditions:{ license:["mit-enterprise"] } },
];

// =============================================================
// Karar motoru (saf fonksiyonlar — test edilebilir)
// =============================================================

function conditionsMatch(conditions: Conditions, answers: Record<string, string>): boolean {
  const keys = Object.keys(conditions);
  if (keys.length === 0) return true;
  return keys.every((stepId) => {
    const allowed = conditions[stepId];
    const a = answers[stepId];
    if (!a || !allowed) return false;
    return allowed.includes(a);
  });
}

const PRIORITY_RANK: Record<Priority, number> = { must: 0, should: 1, could: 2 };
const EFFORT_RANK:   Record<Effort,   number> = { XS: 0, S: 1, M: 2, L: 3 };

function evaluate(answers: Record<string, string>): Recommendation[] {
  return RECS.filter((r) => conditionsMatch(r.conditions, answers))
             .sort((a, b) => {
               const dp = PRIORITY_RANK[a.priority] - PRIORITY_RANK[b.priority];
               if (dp !== 0) return dp;
               return EFFORT_RANK[a.effort] - EFFORT_RANK[b.effort];
             });
}

// =============================================================
// State
// =============================================================

const state: AppState = { currentStep: 0, answers: {} };

function isComplete(): boolean { return state.currentStep >= STEPS.length; }

function answer(stepId: string, optionId: string): void {
  state.answers[stepId] = optionId;
  if (state.currentStep < STEPS.length) state.currentStep++;
  render();
}

function back(): void {
  if (state.currentStep > 0) {
    state.currentStep--;
    const stepId = STEPS[state.currentStep]!.id;
    delete state.answers[stepId];
    render();
  }
}

function reset(): void {
  state.currentStep = 0;
  state.answers = {};
  render();
}

// =============================================================
// Helpers
// =============================================================

function $(sel: string): HTMLElement {
  const el = document.querySelector(sel);
  if (!el) throw new Error(`Element bulunamadı: ${sel}`);
  return el as HTMLElement;
}

function escape(s: string): string {
  const map: Record<string, string> = { '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' };
  return String(s).replace(/[&<>"']/g, (m) => map[m]!);
}

// =============================================================
// Render
// =============================================================

function renderProgress(): void {
  $('#progress').innerHTML = STEPS.map((s, i) => {
    const cls = i < state.currentStep ? 'done' : (i === state.currentStep ? 'current' : '');
    return `<span class="dot ${cls}" data-tip="${escape(s.title)}">${i+1}</span>`;
  }).join('');
}

function renderForm(): void {
  const el = $('#form-area');
  if (isComplete()) { el.innerHTML = renderFinal(); return; }
  const step = STEPS[state.currentStep]!;
  el.innerHTML = `
    <div class="card-header">
      <div>
        <h2>${escape(step.title)}</h2>
        <p>${escape(step.subtitle || '')}</p>
      </div>
      <span class="step-num">Adım ${state.currentStep+1} / ${STEPS.length}</span>
    </div>
    <div class="options">
      ${step.options.map((opt) => `
        <button class="option" data-step="${escape(step.id)}" data-opt="${escape(opt.id)}">
          <span class="option-head"><i class="ph-duotone ${escape(opt.icon)}"></i>${escape(opt.label)}</span>
          <span class="option-desc">${escape(opt.desc)}</span>
          <span class="option-pills">
            <span class="pill pill-why" data-tip="Bu seçim Kanban'da hangi kartları tetikleyecek?">
              <i class="ph ph-info"></i> ${escape(opt.rationale)}
            </span>
          </span>
        </button>
      `).join('')}
    </div>
    <div class="nav-row">
      <button class="btn" id="btn-back" ${state.currentStep===0?'disabled':''}>
        <i class="ph ph-arrow-left"></i> Geri
      </button>
      <span class="meta" style="align-self:center; color: var(--c-text-muted);">
        Bir seçenek seçerek otomatik ilerle
      </span>
    </div>
  `;

  // Event delegation — inline onclick yok, type-safe
  el.querySelectorAll<HTMLButtonElement>('.option').forEach((btn) => {
    btn.addEventListener('click', () => {
      const stepId = btn.dataset.step!;
      const optId  = btn.dataset.opt!;
      answer(stepId, optId);
    });
  });
  el.querySelector('#btn-back')?.addEventListener('click', back);
}

function renderFinal(): string {
  const ans = STEPS.map((s) => {
    const opt = s.options.find((o) => o.id === state.answers[s.id]);
    if (!opt) return '';
    return `
      <div class="summary-row">
        <strong>${escape(s.title)}</strong>
        <span class="pill"><i class="ph-duotone ${escape(opt.icon)}"></i> ${escape(opt.label)}</span>
      </div>
    `;
  }).join('');
  setTimeout(() => {
    document.getElementById('btn-back')?.addEventListener('click', back);
    document.getElementById('btn-ai')?.addEventListener('click', askAI);
  }, 0);
  return `
    <div class="final-banner">
      <i class="ph-duotone ph-check-circle"></i>
      <div>
        <h2>Tüm cevaplar alındı</h2>
        <p>Aşağıda seçim özetin var. Sağdaki Kanban senin mimari önerin.</p>
      </div>
    </div>
    <div class="summary">${ans}</div>
    <div class="nav-row">
      <button class="btn" id="btn-back"><i class="ph ph-arrow-left"></i> Son seçimi düzenle</button>
      <button class="btn btn-primary" id="btn-ai"><i class="ph ph-sparkle"></i> AI gerekçesini açıkla</button>
    </div>
    <div class="ai-box" id="ai-box">
      <div class="ai-head"><i class="ph-duotone ph-brain"></i> AI Gerekçesi (mock)</div>
      <div id="ai-text"></div>
    </div>
  `;
}

function renderKanban(): void {
  const recs = evaluate(state.answers);
  $('#kanban-meta').textContent = `${recs.length} kart · ${Object.keys(state.answers).length}/${STEPS.length} cevap`;

  const grouped: Record<ColumnId, Recommendation[]> = {
    paradigm: [], kernel: [], stack: [], saas: [], module: [], plugin: [], extension: [],
  };
  recs.forEach((r) => grouped[r.column].push(r));

  $('#kanban-board').innerHTML = COLUMNS.map((col) => `
    <div class="column" data-col="${col.id}">
      <div class="column-head">
        <span class="col-icon"><i class="ph ${col.icon}"></i></span>
        ${escape(col.title)}
        <span class="count">${grouped[col.id].length}</span>
      </div>
      ${grouped[col.id].length === 0
        ? `<div class="empty">— öneri yok —</div>`
        : grouped[col.id].map(renderCard).join('')}
    </div>
  `).join('');
}

function renderCard(r: Recommendation): string {
  return `
    <div class="kcard">
      <div class="kcard-title"><i class="ph-duotone ${escape(r.icon)}"></i> ${escape(r.title)}</div>
      <div class="kcard-desc">${escape(r.desc)}</div>
      <div class="kcard-pills">
        <span class="pill pill-${r.priority}" data-tip="Öncelik: ${escape(r.priority.toUpperCase())}">
          <i class="ph-fill ph-circle"></i> ${escape(r.priority.toUpperCase())}
        </span>
        <span class="pill pill-effort" data-tip="Tahmini efor (XS/S/M/L)">
          <i class="ph ph-gauge"></i> ${escape(r.effort)}
        </span>
        ${r.why ? `<span class="pill pill-why" data-tip="Bu kartı tetikleyen seçim gerekçesi">
          <i class="ph ph-info"></i> ${escape(r.why)}
        </span>` : ''}
        ${r.license ? `<span class="pill pill-license" data-tip="Lisans/yaklaşım">
          <i class="ph ph-scales"></i> ${escape(r.license)}
        </span>` : ''}
      </div>
    </div>
  `;
}

function askAI(): void {
  const box = document.getElementById('ai-box');
  const text = document.getElementById('ai-text');
  if (!box || !text) return;
  box.classList.add('show');
  const recs = evaluate(state.answers);
  const para = recs.filter(r => r.column === 'paradigm').map(r => r.title).join(', ') || '—';
  const stack3 = recs.filter(r => r.column === 'stack').slice(0,3).map(r => r.title).join(' + ');
  const kernelMusts = recs.filter(r => r.column === 'kernel' && r.priority === 'must').map(r => r.title).join(', ');
  const summary = [
    `Seçtiklerin ${recs.length} öneriyi tetikledi.`,
    ``,
    `Mimari paradigmalar: ${para}.`,
    ``,
    `Stack kararının özü: ${stack3}.`,
    ``,
    `Kritik kernel parçaları: ${kernelMusts}.`,
    ``,
    `Sıralama önerisi: önce paradigma + kernel temeli → sonra system modules → en son plugins/extensions.`,
    ``,
    `(Bu metin mock. Gerçek motorda FastAPI /ai/explain endpoint'i SSE stream döndürür.)`,
  ].join('\n');
  text.textContent = '';
  let i = 0;
  const stream = window.setInterval(() => {
    text.textContent = summary.slice(0, i);
    i += 6;
    if (i > summary.length) window.clearInterval(stream);
  }, 12);
}

function render(): void {
  renderProgress();
  renderForm();
  renderKanban();
}

// =============================================================
// Senaryolar — JSON content cards + modal
// =============================================================

import { SCENARIOS, type Scenario } from './scenarios';

function renderScenarios(): void {
  const root = document.getElementById('scenarios-grid');
  if (!root) return;
  root.innerHTML = SCENARIOS.map((s) => `
    <button class="scenario-card scenario-${s.color}" data-scenario="${escape(s.id)}">
      <span class="scenario-icon"><i class="ph-duotone ${escape(s.icon)}"></i></span>
      <span class="scenario-meta">
        <span class="scenario-badge">${escape(s.badge)}</span>
      </span>
      <span class="scenario-title">${escape(s.title)}</span>
      <span class="scenario-summary">${escape(s.summary)}</span>
      <span class="scenario-cta">
        <i class="ph ph-arrow-up-right"></i> Detayı aç
      </span>
    </button>
  `).join('');

  root.querySelectorAll<HTMLButtonElement>('.scenario-card').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.dataset['scenario'];
      if (id) openScenarioModal(id);
    });
  });
}

function findStepOption(stepId: string, optId: string): { step?: DecisionStep; opt?: DecisionOption } {
  const step = STEPS.find((s) => s.id === stepId);
  const opt = step?.options.find((o) => o.id === optId);
  return { step, opt };
}

function openScenarioModal(scenarioId: string): void {
  const scenario = SCENARIOS.find((s) => s.id === scenarioId);
  const modal = document.getElementById('scenario-modal');
  const body  = document.getElementById('scenario-modal-body');
  if (!scenario || !modal || !body) return;

  const answersHtml = Object.entries(scenario.answers).map(([stepId, optId]) => {
    const { step, opt } = findStepOption(stepId, optId);
    if (!step || !opt) return '';
    return `
      <div class="modal-answer">
        <span class="modal-answer-q">${escape(step.title)}</span>
        <span class="pill"><i class="ph-duotone ${escape(opt.icon)}"></i> ${escape(opt.label)}</span>
      </div>
    `;
  }).join('');

  const rationaleHtml = scenario.rationale.map((r) => `
    <div class="modal-rationale">
      <h4>${escape(r.heading)}</h4>
      <p>${escape(r.body)}</p>
    </div>
  `).join('');

  const pitfallsHtml = scenario.pitfalls.map((p) => `
    <li><i class="ph ph-warning-circle"></i> ${escape(p)}</li>
  `).join('');

  body.innerHTML = `
    <div class="modal-head scenario-${scenario.color}">
      <span class="modal-head-icon"><i class="ph-duotone ${escape(scenario.icon)}"></i></span>
      <div class="modal-head-text">
        <span class="scenario-badge">${escape(scenario.badge)}</span>
        <h2>${escape(scenario.title)}</h2>
        <p>${escape(scenario.summary)}</p>
      </div>
    </div>

    <div class="modal-section">
      <h3><i class="ph ph-identification-card"></i> Proje profili</h3>
      <div class="modal-profile">
        <div><span>Ekip</span><strong>${escape(scenario.profile.team)}</strong></div>
        <div><span>Süre</span><strong>${escape(scenario.profile.timeline)}</strong></div>
        <div><span>Sektör</span><strong>${escape(scenario.profile.industry)}</strong></div>
        <div><span>Ölçek</span><strong>${escape(scenario.profile.scale)}</strong></div>
      </div>
    </div>

    <div class="modal-section">
      <h3><i class="ph ph-check-square"></i> Sihirbaz cevapları</h3>
      <div class="modal-answers">${answersHtml}</div>
    </div>

    <div class="modal-section">
      <h3><i class="ph ph-lightbulb"></i> Neden bu seçimler?</h3>
      <div class="modal-rationales">${rationaleHtml}</div>
    </div>

    <div class="modal-section">
      <h3><i class="ph ph-warning"></i> Dikkat edilecekler</h3>
      <ul class="modal-pitfalls">${pitfallsHtml}</ul>
    </div>

    <div class="modal-actions">
      <button class="btn" id="modal-close-btn"><i class="ph ph-x"></i> Kapat</button>
      <button class="btn btn-primary" id="modal-apply-btn" data-scenario="${escape(scenario.id)}">
        <i class="ph ph-lightning"></i> Bu senaryoyu uygula → Kanban oluştur
      </button>
    </div>
  `;

  modal.classList.add('show');
  document.body.style.overflow = 'hidden';

  document.getElementById('modal-close-btn')?.addEventListener('click', closeScenarioModal);
  document.getElementById('modal-apply-btn')?.addEventListener('click', () => {
    applyScenario(scenario.id);
    closeScenarioModal();
  });
}

function closeScenarioModal(): void {
  const modal = document.getElementById('scenario-modal');
  if (!modal) return;
  modal.classList.remove('show');
  document.body.style.overflow = '';
}

function applyScenario(scenarioId: string): void {
  const scenario = SCENARIOS.find((s) => s.id === scenarioId);
  if (!scenario) return;
  // Cevapları doğrudan state'e yaz, wizard'ı tamamlanmış sayan currentStep'e at
  state.answers = { ...scenario.answers };
  state.currentStep = STEPS.length;
  render();
  // Yumuşak scroll, formu/Kanban'ı görünür yap
  window.scrollTo({ top: document.getElementById('layout')?.offsetTop ?? 0, behavior: 'smooth' });
}

// =============================================================
// Init
// =============================================================

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btn-reset')?.addEventListener('click', reset);
  // Senaryo modal — backdrop tıklamasında kapat, Esc tuşunda kapat
  document.getElementById('scenario-modal')?.addEventListener('click', (e) => {
    if ((e.target as HTMLElement).id === 'scenario-modal') closeScenarioModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeScenarioModal();
  });
  renderScenarios();
  reset();
});

// Test edilebilirlik için window'a expose (cast ile — global augmentation modüler dosyada gereksiz)
(window as unknown as { __wizard: unknown }).__wizard = { state, evaluate, conditionsMatch, STEPS, RECS, SCENARIOS, applyScenario };

export {}; // bu dosyayı modül olarak işaretle
