/**
 * MetaWork Meta-Framework — Mimari Karar Çerçevesi
 *
 * Yatırımcı diline yazılmış, gerçek dünya senaryoları içeren karar ağacı.
 * Her seçim JSON'a kaydolur; "Custom" seçeneği "belirsiz" olarak işaretlenir
 * ve sonraki turda Claude ile detaylıca araştırılır.
 *
 * Kaynak: mimari_arastir.md (kullanıcı notları) + meta-framework gereksinimleri.
 */

// =============================================================
// Tip tanımları
// =============================================================

export interface Option {
  id: string;
  techLabel: string;                 // Teknik ifade (örn. "pnpm workspaces")
  acronym?: string;                  // Kısaltma (varsa)
  acronymExpansion?: string;         // İngilizce açılım
  trLabel: string;                   // Türkçe karşılık
  trExplanation: string;             // 1–2 cümle yatırımcı dilinde açıklama
  scenarios?: string[];              // Detaylar: gerçek dünya senaryoları (markdown-lite paragraflar)
  pros?: string[];                   // Avantajlar
  cons?: string[];                   // Dezavantajlar
  nextQuestions?: string[];          // Bu seçim sonrası açılacak sorular
}

export interface Question {
  id: string;
  categoryId: string;
  question: string;                  // Ana soru metni
  purpose: string;                   // Bu sorunun amacı
  condition?: string;                // Hangi koşulda görünür (önceki cevaba bağlı)
  multiSelect?: boolean;             // Çoklu seçim mümkün mü
  options: Option[];                 // "custom" otomatik enjekte edilir
}

export interface Category {
  id: string;
  title: string;
  icon: string;                      // Phosphor icon
  description: string;
  colorClass: string;                // CSS sınıf adı (renk tonu)
}

// =============================================================
// Kategoriler — MetaWork'ün karar yüzeyi
// =============================================================

export const CATEGORIES: Category[] = [
  { id: "identity",   title: "1. MetaWork Kimliği",        icon: "ph-identification-card", colorClass: "cat-purple", description: "Çerçeve kime hitap ediyor, ne sunuyor, neden var" },
  { id: "package",    title: "2. Paket & Build",            icon: "ph-package",             colorClass: "cat-blue",   description: "pnpm/npm/yarn, Vite, monorepo/polyrepo" },
  { id: "state",      title: "3. State Yönetimi",           icon: "ph-database",            colorClass: "cat-teal",   description: "Server state, client state, form state, URL state" },
  { id: "ui",         title: "4. UI Yapı Taşları",          icon: "ph-paint-brush",         colorClass: "cat-pink",   description: "Flowbite, Radix, Ariakit, headless ne kullanılır" },
  { id: "i18n-a11y",  title: "5. i18n + a11y Standartları", icon: "ph-translate",           colorClass: "cat-coral",  description: "Çok dil, RTL, locale, WCAG, ARIA" },
  { id: "ai",         title: "6. AI SDK ve Provider",       icon: "ph-brain",               colorClass: "cat-pink",   description: "Vercel AI SDK alternatifi, vibecoding uyumu" },
  { id: "api",        title: "7. API + İletişim Pattern'leri", icon: "ph-plugs-connected", colorClass: "cat-blue",   description: "REST, RPC, GraphQL, SSR-safe, streaming" },
  { id: "test",       title: "8. Test Stratejisi",          icon: "ph-test-tube",           colorClass: "cat-green",  description: "Unit, E2E, visual, AI agent otonom test" },
  { id: "modular",    title: "9. Modülerlik + Coupling",    icon: "ph-puzzle-piece",        colorClass: "cat-amber",  description: "Loose coupling, high cohesion, bağımsız deploy" },
  { id: "nocode",     title: "10. No-code / Low-code Seviyesi", icon: "ph-magic-wand",     colorClass: "cat-purple", description: "Frappe Doctype, Drupal Views, hybrid" },
  { id: "plugin",     title: "11. Plugin Ekosistemi",       icon: "ph-plug",                colorClass: "cat-teal",   description: "3rd-party developer'lar için API + marketplace" },
  { id: "tokens",     title: "12. Token Modelleri",         icon: "ph-key",                 colorClass: "cat-coral",  description: "Auth/session/AI/blockchain/CSRF token'ları" },
  { id: "deploy",     title: "13. Deploy & Host",           icon: "ph-cloud",               colorClass: "cat-blue",   description: "Hetzner odaklı, Vercel yasak" },
  { id: "license",    title: "14. Lisans + Para Modeli",    icon: "ph-scales",              colorClass: "cat-green",  description: "MIT + Managed Cloud, gelir akışları" },
  { id: "community",  title: "15. Topluluk + Marketplace",  icon: "ph-users-three",         colorClass: "cat-pink",   description: "Belge, plugin pazarı, gelişim politikası" },
];

// =============================================================
// SORULAR — yatırımcı dilinde, gerçek dünya senaryolu
// =============================================================

export const QUESTIONS: Question[] = [

  // ============================================================
  // KATEGORİ 1 — METAWORK KİMLİĞİ
  // ============================================================
  {
    id: "id.target",
    categoryId: "identity",
    question: "MetaWork'ün birinci sınıf müşterisi kim?",
    purpose: "Tüm DX (geliştirici deneyimi) ve API kararları bu personaya göre şekillenir.",
    options: [
      {
        id: "solo-vibecoder",
        techLabel: "Solo founder / vibecoder",
        trLabel: "Tek geliştirici girişimci (vibecoder)",
        trExplanation: "Tek kişi, AI yardımıyla saatler içinde modül üretmek isteyen kurucu. DX en kritik müşteri tatmin yolu.",
        scenarios: [
          "Bir freelance developer öğleden sonra 'Müşterime ERP kur' işini aldı. MetaWork CLI ile 2 saatte iskeleti çıkarması gerekir, akşam müşteriye gösterecek demo hazır olmalı.",
          "Hackathon takımı 48 saatte MVP çıkaracak. MetaWork ile auth + CRUD + ödeme'yi çözüp gerçek differansiasyon üzerinde çalışmak istiyor.",
        ],
        pros: ["Hızlı adopsiyon", "Topluluk büyür", "Belge yatırımı kendini hemen amortize eder"],
        cons: ["Para kazanmak için ölçek gerek (Vercel modeli)", "Enterprise feature'ları sonra eklenir"],
        nextQuestions: ["id.team-future"],
      },
      {
        id: "agency",
        techLabel: "Yazılım ajansı / dijital ajans",
        trLabel: "Müşteri projeleri yapan ajans",
        trExplanation: "Birden çok müşteriye benzer yapıda kurumsal yazılım teslim eden ajans. MetaWork projeleri tekilleştirir.",
        scenarios: [
          "Bir ajans her ay 2 yeni CRM/ERP/CMS projesi alıyor. Her sefer aynı auth + permission + crud altyapısını yeniden yazıyorlar. MetaWork bu işi kernel + tema seviyesine indirir.",
          "White-label ajansı 50 müşteri için yönetim paneli barındırıyor; tek codebase'den çoklu marka isteniyor.",
        ],
        pros: ["Yüksek müşteri lifetime value", "Recurring revenue (yıllık support)", "Reference customer hızlı"],
        cons: ["Enterprise + kurumsal feature talepleri yoğun", "Lisans modeli karmaşık olabilir"],
        nextQuestions: ["id.team-future"],
      },
      {
        id: "saas-company",
        techLabel: "Kurumsal SaaS şirketi",
        trLabel: "SaaS ürünü olan şirket (in-house ekip)",
        trExplanation: "Kendi SaaS ürününü MetaWork üzerine kurmak isteyen ortak ölçekte iç ekip. Stabilite + uzun vadeli destek beklentisi yüksek.",
        scenarios: [
          "Türkiye'de B2B müşteri yönetimi SaaS'i veren bir şirket, ürünü Drupal'dan modern bir framework'e taşımak istiyor. MetaWork seçilirse 5-10 dev'lik takım yıllarca kullanacak.",
          "Sağlık teknolojisi startup'ı Hipokrat'tan ayrılmış ekipler, KVKK + uzun audit gereksinimli, ROI 12+ ay.",
        ],
        pros: ["Sözleşmeli enterprise hat satılabilir", "Premium support + SLA", "Stabil gelir"],
        cons: ["DX hızı kadar audit + uyum + uzun vadeli LTS de gerek", "Yavaş satış döngüsü"],
        nextQuestions: ["id.team-future"],
      },
      {
        id: "indie-hacker",
        techLabel: "Indie hacker / nano-SaaS kurucu",
        trLabel: "Tek başına internet ürünü çıkaran kurucu",
        trExplanation: "Birden fazla mini-SaaS işleten, MRR (aylık tekrar gelir) maksimize eden müstakil geliştirici. Hız + maliyet kritik.",
        scenarios: [
          "Bir indie hacker ayda 3 micro-SaaS launch ediyor. MetaWork ile her birini ayrı klasör olarak yönetip ortak auth + payment kerneline bağlayabiliyor.",
          "Ürünün AI agent feature'ı 3 günde eklenmeli; framework kendi adapter'larını sunuyorsa kazanılır, yoksa entegrasyon haftalar alır.",
        ],
        pros: ["Topluluk inanılmaz vokal", "Lifetime deal satışı mümkün"],
        cons: ["Enterprise gelir yoksa kâr küçük kalır"],
        nextQuestions: ["id.team-future"],
      },
    ],
  },
  {
    id: "id.team-future",
    categoryId: "identity",
    question: "MetaWork'ün kendi ekibi 12 ay sonra ne büyüklükte olacak?",
    purpose: "Topluluk yönetimi, PR review yükü ve enterprise destek kapasitesi buradan belirlenir.",
    options: [
      {
        id: "solo-12mo",
        techLabel: "1 kişi (founder)",
        trLabel: "Yine yalnız",
        trExplanation: "İlk yıl boyunca tek kişi. Topluluk PR'ları az olmalı, modüler yapı yalnız kişinin omzunu kaldırmalı.",
        scenarios: [
          "Yalnız kalıyorsanız: dokümantasyonun da kendi kendine üretilmesi gerek (mümkün olduğunca otomasyon).",
          "Plugin marketplace v0.4+'ye ertelenir; ilk yıl çekirdek + ana modüller.",
        ],
        pros: ["Karar hızı maksimum"],
        cons: ["Burnout riski", "Acil hata düzeltmesi tek noktaya bağlı"],
      },
      {
        id: "small-12mo",
        techLabel: "2-4 kişi (çekirdek ekip)",
        trLabel: "Küçük çekirdek ekip",
        trExplanation: "Birkaç ortak veya çalışan ile büyür. PR + sürüm yönetimi disiplini şart.",
        scenarios: [
          "İlk maaşlı dev'i Sprint 8 civarında alırsınız. Onboarding belgesi olmalı, yoksa 2 ay verimsiz geçer.",
          "Bug triage döngüsü kurulmalı: kim, ne zaman, hangi label ile bakar.",
        ],
      },
      {
        id: "medium-12mo",
        techLabel: "5-10 kişi (mid-stage startup)",
        trLabel: "Erken aşama startup ekibi",
        trExplanation: "Tipik seed sonrası ekip. Enterprise satış + topluluk + temel geliştirme paralel ilerler.",
      },
      {
        id: "large-12mo",
        techLabel: "10+ kişi",
        trLabel: "Büyük ekip",
        trExplanation: "Yatırım aldıktan sonraki seri A+ büyüklük. Yönetim katmanı + organizasyonel disiplin gerek.",
      },
    ],
  },
  {
    id: "id.differentiation",
    categoryId: "identity",
    question: "MetaWork'ün rakiplerinden temel ayırt edici özelliği nedir?",
    purpose: "Pazarlama mesajı + ürün önceliği bu cümle üzerinden kurulur.",
    options: [
      {
        id: "ai-native",
        techLabel: "AI-native framework",
        acronym: "AI",
        acronymExpansion: "Artificial Intelligence",
        trLabel: "Yapay zekayı yapıtaşı yapan framework",
        trExplanation: "Diğer framework'lerin sonradan eklediği AI'ı, MetaWork çekirdeğine kuruyor: Agent runtime, prompt yönetimi, hybrid arama hazır.",
        scenarios: [
          "Drupal ve Frappe 'plugin ekleyin AI olur' der. MetaWork ise yeni context tanımladığınız anda agent + embedding + tool registry hazır gelir.",
          "Bir kullanıcı 'müvekkilime sözleşme özetle' agent'ı yapmak istiyor; MetaWork CLI'da 'mf gen agent contract-summary' tek komut.",
        ],
        pros: ["Net pozisyon", "AI dalgasını yakalar", "Vibecoding ile sinerjik"],
        cons: ["AI çok geniş — uzmanlaşma şart", "Provider değişkenliği risk"],
      },
      {
        id: "vibecoding-dx",
        techLabel: "Vibecoding-friendly DX",
        acronym: "DX",
        acronymExpansion: "Developer Experience",
        trLabel: "AI ile saatler içinde modül üretme deneyimi",
        trExplanation: "Komut + Doctype Designer + View Designer + tip-güvenli template'lar AI'ın yanılmadan kod üretmesini sağlar. Next.js'in App Router belirsizliği yerine net sınırlar.",
        scenarios: [
          "Bir vibecoder 'müşteri sadakat puanı modülü' yazdırıyor AI'a. Net şema + net sınır olduğu için AI doğru üretiyor, geliştirici 3 saatte teslim ediyor.",
          "Sahibinden klonu yapan biri ilan tipi + filtreler + admin'i akşamdan sabaha çıkardı.",
        ],
      },
      {
        id: "tr-locale-first",
        techLabel: "Türkiye locale-first",
        trLabel: "Türkiye iş hayatına özel uyum",
        trExplanation: "e-Fatura, e-Arşiv, KDV, Iyzico, Aras kargo, KVKK uyumu, Türkçe karakter desteği — dünya framework'lerinin geç eklediği yerel ihtiyaçlar baştan içeride.",
        scenarios: [
          "Bir e-ticaret kurucusu Shopify yerine MetaWork'ü seçer çünkü e-Arşiv otomatik gelir, üçüncü taraf plugin aramaz.",
          "Muhasebe ofisi ile entegre çalışan SaaS'lar GİB API'lerini doğrudan kullanır.",
        ],
        pros: ["Türk pazarında net üstünlük", "Premium fiyatlandırma mümkün"],
        cons: ["Global pazarda dezavantaj", "Yasal değişikliklere hızlı uyum şart"],
      },
      {
        id: "no-code-bridge",
        techLabel: "No-code/Pro-code köprüsü",
        trLabel: "Tıkla-üret + kod yazma birlikte",
        trExplanation: "Bubble/Webflow gibi no-code çıktı + kod ile genişletilebilirlik. İş ekibi Doctype Designer'da tasarlar, dev ekibi gerektiğinde kod yazar — aynı projeye.",
        scenarios: [
          "Pazarlama ekibi yeni kampanya sayfasını View Designer'da tıklayarak kurar; dev ekibi backend integration'ı kod ile ekler.",
          "Operasyon yöneticisi yeni iş akışını ECA Engine'de görsel oluşturur, kod yazmaya gerek yoktur.",
        ],
      },
    ],
  },

  // ============================================================
  // KATEGORİ 2 — PAKET & BUILD
  // ============================================================
  {
    id: "pkg.manager",
    categoryId: "package",
    question: "Hangi paket yöneticisi varsayılan olsun?",
    purpose: "MetaWork monorepo'sunda + üretilen iskelet projelerde tek standart paket aracı. Yanlış seçim ekosistem uyumsuzluğu doğurur.",
    options: [
      {
        id: "pnpm",
        techLabel: "pnpm + workspaces",
        acronym: "pnpm",
        acronymExpansion: "Performant Node Package Manager",
        trLabel: "pnpm",
        trExplanation: "npm/yarn'a göre disk alanını paylaştırır (linked store), monorepo'da hızlı + tutarlı kurar. Vibecoder'lar için 'sade ve hızlı' tercihi.",
        scenarios: [
          "Bir vibecoder makinesinde 12 micro-SaaS klasörü var. npm her birinde 400MB node_modules kopyalar (4.8GB). pnpm 1 kez indirir, link eder — toplam 600MB. SSD yer kazanır.",
          "MetaWork'ün monorepo'sunda 30 paket var; pnpm tek install komutuyla hepsini bağlar, yarn'a göre 3x hızlı.",
          "Cloud CI'da pnpm cache restore 8 saniye, npm 45 saniye — günde 50 build × 37 saniye = haftalık 3 saat tasarruf.",
        ],
        pros: ["Hız ve disk verimi", "Strict isolation — phantom dep yok", "Monorepo native"],
        cons: ["Bazı eski paketler peer dep sorunu yaşar", "Türkiye'deki dev'lerin alışkanlığı npm olabilir"],
        nextQuestions: ["pkg.monorepo"],
      },
      {
        id: "npm",
        techLabel: "npm + workspaces",
        acronym: "npm",
        acronymExpansion: "Node Package Manager",
        trLabel: "npm (Node varsayılan)",
        trExplanation: "Node.js ile gelen varsayılan. Tüm dev'lerin alışık olduğu standart. Yeni kullanıcıların öğrenme eğrisi sıfır.",
        scenarios: [
          "Junior dev MetaWork'ü ilk denediğinde 'npm install' yazıyor — başka komut öğrenmesine gerek yok.",
          "Eski projelerden gelen tüm scripts npm script'leri olduğu için copy-paste çalışır.",
        ],
        pros: ["Sıfır öğrenme eğrisi", "En geniş ekosistem uyumu"],
        cons: ["Disk israfı", "Monorepo'da pnpm/yarn'dan yavaş", "Phantom dep'lere açık"],
        nextQuestions: ["pkg.monorepo"],
      },
      {
        id: "yarn-berry",
        techLabel: "yarn 4 (Berry, PnP)",
        acronym: "PnP",
        acronymExpansion: "Plug'n'Play",
        trLabel: "Yarn (Berry / Plug'n'Play)",
        trExplanation: "Facebook'tan çıkan yarn modern versiyon. PnP modu node_modules klasörünü tamamen kaldırır. En hızlı çözüm ama bazı araçlarla uyumsuz.",
        scenarios: [
          "Büyük monorepo'lar (Babel, Jest) yarn berry kullanır. Çok hızlı ama her tool yarn PnP'yi anlamaz.",
          "VS Code TypeScript extension özel ayar ister; orta seviye dev kafa karışıklığı yaşayabilir.",
        ],
        pros: ["En modern", "node_modules sıkıntısı yok"],
        cons: ["Araç uyumsuzluğu", "Türk topluluğunda az kullanılıyor"],
        nextQuestions: ["pkg.monorepo"],
      },
      {
        id: "bun",
        techLabel: "bun",
        trLabel: "Bun (yeni runtime + paket yöneticisi)",
        trExplanation: "Node.js alternatifi yeni runtime. Yerleşik paket yöneticisi 4-10x hızlı. Henüz olgunluk Node kadar değil.",
        scenarios: [
          "Bun ile bir test suite npm'in 4 katı hızlı koşar. Cazip ama prod'da nadir kararlılık sorunu çıkar.",
          "Mevcut Node ekosistemi %95 uyumlu ama uçtaki paketlerde aksilik olur.",
        ],
        pros: ["İnanılmaz hız", "Tek tool (paket + run + test + bundle)"],
        cons: ["Olgunluk düşük", "Risk yüksek — framework taban'ı için cesur seçim"],
      },
    ],
  },
  {
    id: "pkg.monorepo",
    categoryId: "package",
    question: "MetaWork tek repo'da mı yoksa birden fazla repo'ya mı dağılsın?",
    purpose: "Monorepo seçimi sürüm yönetimi, CI ve plugin geliştirme deneyimini kökünden etkiler.",
    options: [
      {
        id: "monorepo",
        techLabel: "Monorepo (tek repo, çok paket)",
        trLabel: "Tek repo — tüm paketler birlikte",
        trExplanation: "Çekirdek, modüller, plugin SDK, CLI, belge — hepsi tek git repo'sunda. Atomic değişiklik mümkün (birden çok paketi bir PR'da güncelle).",
        scenarios: [
          "Çekirdekteki bir API değişikliği plugin SDK'sini de etkiliyor. Monorepo'da tek PR atılır, tek test koşar, tek versiyon yayınlanır.",
          "Google, Meta, Microsoft, Babel, Next.js — hepsi monorepo. Endüstri yönelimi bu.",
        ],
        pros: ["Atomic değişiklik", "Tek tarihçe", "Refactor kolay", "Onboarding tek klon"],
        cons: ["İlk başta build orchestration karmaşık", "Repo boyutu büyür"],
        nextQuestions: ["pkg.build"],
      },
      {
        id: "polyrepo",
        techLabel: "Polyrepo (her paket ayrı repo)",
        trLabel: "Her paket kendi repo'sunda",
        trExplanation: "Çekirdek, CLI, plugin SDK ayrı GitHub repo'larında. Bağımsız sürüm, bağımsız issue tracker.",
        scenarios: [
          "Plugin SDK'sini kullanan harici geliştirici sadece o repo'yu clone'lar — büyük çekirdeği indirmez.",
          "Bir paketin sürümü ileri giderken diğeri eski kalabilir; uyum testi manuel zorunlu.",
        ],
        pros: ["Net izolasyon", "Dış katkı kolay (küçük repo)"],
        cons: ["Cross-repo refactor acılı", "CI sayısı çoğalır", "Sürüm uyumsuzluğu riski"],
        nextQuestions: ["pkg.build"],
      },
      {
        id: "hybrid",
        techLabel: "Hibrit (çekirdek monorepo + plugin polyrepo)",
        trLabel: "İkisinin karması",
        trExplanation: "Çekirdek + resmi modüller monorepo, topluluk plugin'leri her biri ayrı repo. Hem disiplin hem ekosistem esnekliği.",
        scenarios: [
          "Drupal modeli: drupal/core monorepo, topluluk modülleri ayrı repo. Bu hibrit yıllarca çalıştı.",
          "Ana takım iç paketlerde atomic değişiklik yapar; toplulukçular küçük plugin'leri ayrı yönetir.",
        ],
        pros: ["İki dünyanın iyisi", "Plugin yazarlarına engel yok"],
        cons: ["Yönetim daha karmaşık", "İki kültür yan yana"],
        nextQuestions: ["pkg.build"],
      },
    ],
  },
  {
    id: "pkg.build",
    categoryId: "package",
    question: "Build aracı ne olsun?",
    purpose: "Build hızı + DX. Yanlış araç dakikalar boşa gider, doğru araç vibecoding hızını destekler.",
    options: [
      {
        id: "vite",
        techLabel: "Vite + Rolldown",
        trLabel: "Vite (Evan You'nun build aracı)",
        trExplanation: "Geliştirme sırasında ESM-native, anında HMR (hot module reload). Production'da Rolldown (Rust-tabanlı). Endüstrinin yeni standardı.",
        scenarios: [
          "Bir bileşene tek satır CSS değişikliği yaparsınız; Vite 30 ms'de tarayıcıya yansıtır. Webpack'te 4 saniye sürerdi.",
          "Vite + React + TS combosu vibecoding'in en hızlı stack'i — AI ürettiği kodu 1 saniyede deniyorsunuz.",
        ],
        pros: ["İnanılmaz hızlı dev server", "Modern ESM", "Plugin ekosistemi geniş"],
        cons: ["Bazı eski library'ler ESM uyumsuz", "Production bundling Rolldown henüz olgun değil"],
      },
      {
        id: "esbuild",
        techLabel: "esbuild + custom dev server",
        trLabel: "esbuild (Go-tabanlı, çok hızlı)",
        trExplanation: "Go ile yazıldığı için 10-100x daha hızlı. Düşük seviye — kendiniz dev server kurarsınız.",
        scenarios: [
          "MetaWork'ün kendi build script'i için esbuild kullanılır (zaten dist/app.js bunu kullanıyor). Son kullanıcıya değil iç araç.",
        ],
        pros: ["En hızlı bundler", "Sıfır config çalışır"],
        cons: ["Plugin ekosistemi dar", "Bazı modern özellikler eksik (HMR yok)"],
      },
      {
        id: "turbopack",
        techLabel: "Turbopack",
        trLabel: "Turbopack (Next.js'in build aracı)",
        trExplanation: "Vercel ekibinin Rust ile yazdığı yeni bundler. Şu an Next.js'e bağlı, framework-agnostic olgunluğu düşük.",
        scenarios: [
          "Next.js dışında kullanım için risk vardır. Vercel kilitlenmesi (vibecoding'in kaçındığı şey) söz konusu.",
        ],
        cons: ["Vercel ekosistem bağımlılığı (kullanıcı kuralı: Vercel yasak!)"],
      },
      {
        id: "rspack",
        techLabel: "Rspack (Webpack uyumlu, Rust)",
        trLabel: "Rspack (ByteDance'in Webpack alternatifi)",
        trExplanation: "Webpack API'siyle uyumlu Rust portu. Webpack'ten 5-10x hızlı, mevcut config'ler büyük ölçüde çalışır.",
        scenarios: [
          "Webpack'ten gelen büyük takım Rspack'e geçince haftalar yerine günler içinde build hızlanır.",
        ],
        pros: ["Webpack uyumu", "Hızlı"],
        cons: ["MetaWork yeni proje — Webpack mirası yoksa gereksiz katman"],
      },
    ],
  },

  // ============================================================
  // KATEGORİ 3 — STATE YÖNETİMİ
  // ============================================================
  {
    id: "state.server",
    categoryId: "state",
    question: "Sunucudan veri çekme + cache (server state) için hangi yaklaşım?",
    purpose: "Server state, kullanıcı yolculuğunda en sık değişen, en çok cache'lenen veri katmanı. Yanlış seçim performansı ve DX'i sakatlar.",
    options: [
      {
        id: "tanstack-query",
        techLabel: "TanStack Query",
        acronym: "TanStack",
        acronymExpansion: "(önceki adı: React Query — şimdi Tanner Linsley'in tüm ekosistem markası)",
        trLabel: "TanStack Query (React Query'nin yeni adı)",
        trExplanation: "Sunucu verisini cache'ler, otomatik refetch yapar, stale-while-revalidate disiplini sunar. Endüstri facto-standardı.",
        scenarios: [
          "Bir ürün listesi sayfası açıldı. Kullanıcı geri-ileri tıkladığında her seferinde sunucudan çekmek yerine TanStack Query cache'den anında gösterir, arka planda günceller.",
          "Optimistic update: 'beğen' butonuna basılır basılmaz UI değişir, sunucu cevabı gecikse de kullanıcı sürtünme hissetmez.",
          "Çevrim dışında giren bir kullanıcı son cache'i görür; bağlanınca otomatik senkronize olur.",
        ],
        pros: ["Endüstri standardı", "Devtools güçlü", "Optimistic update kolay"],
        cons: ["Sadece sunucu state için — client state ayrı çözülmeli", "İlk öğrenme eğrisi var"],
      },
      {
        id: "swr",
        techLabel: "SWR",
        acronym: "SWR",
        acronymExpansion: "Stale-While-Revalidate",
        trLabel: "SWR (Vercel ekibinin alternatifi)",
        trExplanation: "Daha minimal, daha hızlı kurulum. Cache stratejisi 'önce eski veriyi göster, arka planda güncelle' isminden geliyor.",
        scenarios: [
          "Küçük bir admin panelinde SWR yeterlidir. TanStack'in tüm gücüne ihtiyaç yoksa daha sade.",
        ],
        pros: ["Minimal API", "Hızlı başlangıç"],
        cons: ["Vercel sponsorluğu (kullanıcı kuralı: Vercel yasak)", "Devtools TanStack kadar güçlü değil"],
      },
      {
        id: "rtk-query",
        techLabel: "RTK Query (Redux Toolkit Query)",
        acronym: "RTK",
        acronymExpansion: "Redux Toolkit",
        trLabel: "Redux Toolkit'in query modülü",
        trExplanation: "Redux ekosisteminin server state çözümü. Redux kullanılıyorsa entegre.",
        scenarios: [
          "Eski büyük Redux projesini taşıyan takımlar için doğal. Yeni proje için Redux fazla ağır.",
        ],
        cons: ["Redux öğrenme eğrisi yüksek", "Yeni proje için fazla yük"],
      },
      {
        id: "custom",
        techLabel: "Custom fetch + manuel cache",
        trLabel: "Kendi yapsın (kütüphanesiz)",
        trExplanation: "Her endpoint için fetch + manuel useState. Küçük projeler için çalışır, ölçekte sürdürülemez.",
        scenarios: [
          "5 sayfa altı uygulamada iş görür. 20+ sayfa olunca her birinde aynı kod tekrar eder, hata oranı artar.",
        ],
        cons: ["Re-fetch, stale, retry, cache invalidation hepsi tekrar yazılır", "Hata kaçınılmaz"],
      },
    ],
  },
  {
    id: "state.client",
    categoryId: "state",
    question: "Client state (sayfa içi geçici durum) için hangi araç?",
    purpose: "Modal açık mı, hangi tab seçili, filtre değerleri — sunucudan gelmeyen, kullanıcı tıklamalarıyla değişen state için yöntem.",
    options: [
      {
        id: "zustand",
        techLabel: "Zustand",
        trLabel: "Zustand (zen + state, Almanca 'durum')",
        trExplanation: "Minimal API, hook tabanlı, Context API'siz. Redux'un %5 kodu ile çoğu işi yapar. Vibecoder favorisi.",
        scenarios: [
          "Bir modal'ı kapatıp açan global state: Zustand'da 3 satır. Redux'ta 20 satır + 3 dosya.",
          "AI üretilen kod Zustand kalıbını çok iyi yakalar — fonksiyon imzaları net.",
        ],
        pros: ["Çok küçük API", "Boilerplate yok", "TypeScript ile şahane"],
        cons: ["Çok büyük apps için Redux DevTools kadar derin değil"],
      },
      {
        id: "jotai",
        techLabel: "Jotai",
        trLabel: "Jotai (Japonca 'durum', atom-tabanlı)",
        trExplanation: "Atom modeli: her state parçası bağımsız bir atom. React Suspense entegrasyonu doğal.",
        scenarios: [
          "Form içinde birden çok bağımsız alanın state'i — her atom yeniden render edilmez, sadece dinleyen.",
        ],
        pros: ["İnce taneli reactivity", "Suspense ile uyumlu"],
        cons: ["Zihinsel model atom'a alışınca açılır"],
      },
      {
        id: "valtio",
        techLabel: "Valtio",
        trLabel: "Valtio (proxy-tabanlı)",
        trExplanation: "Direkt object mutation: state.count++ yazınca otomatik re-render. Vue-benzeri reactivity.",
      },
      {
        id: "redux-toolkit",
        techLabel: "Redux Toolkit",
        acronym: "RTK",
        trLabel: "Redux (toolkit ile modern)",
        trExplanation: "Endüstri standardı ama ağır. Çok büyük takımlarda + zaman yolculuğu debug gerektiğinde.",
        cons: ["Modern projeler için fazla boilerplate"],
      },
    ],
  },
  {
    id: "state.form",
    categoryId: "state",
    question: "Form state için hangi yaklaşım?",
    purpose: "Karmaşık form'lar (multi-step, validation, dependency) framework'ün eziyetli noktasıdır.",
    options: [
      {
        id: "react-hook-form",
        techLabel: "React Hook Form",
        acronym: "RHF",
        trLabel: "React Hook Form",
        trExplanation: "Performant, uncontrolled (her keystroke re-render yapmaz). Endüstride hâkim çözüm. Zod ile schema validation entegrasyonu mükemmel.",
        scenarios: [
          "200 alanlı bir kurumsal form: React Hook Form 1 ms'de işler, alternative kütüphaneler donar.",
          "Conditional fields (X seçilince Y görün): RHF watch + register kolayca ifade eder.",
        ],
        pros: ["Yüksek performans", "Zod/Yup ile validation güçlü", "DevTools var"],
      },
      {
        id: "tanstack-form",
        techLabel: "TanStack Form",
        trLabel: "TanStack Form",
        trExplanation: "TanStack Query ekibinin yeni form çözümü. Framework-agnostic, henüz olgunluk dönemi.",
        pros: ["Framework-agnostic (React + Vue + Solid)", "TanStack ailesi"],
        cons: ["Yeni — henüz RHF kadar test edilmemiş"],
      },
      {
        id: "formik",
        techLabel: "Formik",
        trLabel: "Formik (eski klasik)",
        trExplanation: "Eskiden standartken artık RHF'ye yerini bıraktı. Bakım yavaş.",
        cons: ["Aktif geliştirme yavaşladı"],
      },
    ],
  },

  // ============================================================
  // KATEGORİ 4 — UI YAPI TAŞLARI
  // ============================================================
  {
    id: "ui.primitives",
    categoryId: "ui",
    question: "UI bileşen kütüphanesi katmanı?",
    purpose: "Düğme, modal, dropdown, tabs gibi temel parçalar nereden gelecek. Headless mi, styled mi, hibrit mi?",
    options: [
      {
        id: "flowbite",
        techLabel: "Flowbite (Tailwind-based, styled)",
        trLabel: "Flowbite (hazır stilli)",
        trExplanation: "Tailwind üstüne hazır stillenmiş bileşenler. Hızlı başlangıç. Kullanıcı kuralı bu (kullanıcı: Flowbite + TypeScript + SCSS).",
        scenarios: [
          "MVP'i 3 günde çıkaracaksanız Flowbite ideal — modal, table, drawer hazır.",
          "Brand kimliği çok özelse override gerekli ama Tailwind utility'leri buna imkan veriyor.",
        ],
        pros: ["Hızlı başlangıç", "Tailwind ekosistemi", "Tema-ready"],
        cons: ["Stiller önceden basılmış — derin custom için CSS override"],
      },
      {
        id: "radix-ui",
        techLabel: "Radix UI (headless, accessible)",
        trLabel: "Radix UI (stilsiz, sadece davranış)",
        trExplanation: "Görsel tasarımdan tamamen ayrı, sadece erişilebilir davranış sağlar (dropdown nasıl açılır, focus trap nasıl olur). Stilleri siz veriyorsunuz.",
        scenarios: [
          "Tasarımcınız çok özel tasarım istiyorsa — Radix size davranışı verir, stil sizin.",
          "WCAG uyumu için sıfır iş — keyboard nav, screen reader, ARIA otomatik.",
          "shadcn/ui zaten Radix + Tailwind kombinasyonu.",
        ],
        pros: ["Tam erişilebilir baştan", "Görsel özgürlük", "Yüksek kalite"],
        cons: ["Her component için stil yazma efforu"],
      },
      {
        id: "ariakit",
        techLabel: "Ariakit",
        acronym: "ARIA",
        acronymExpansion: "Accessible Rich Internet Applications",
        trLabel: "Ariakit (eski Reakit, accessibility-first)",
        trExplanation: "Radix'in alternatifi. ARIA standartlarına çok sıkı uyum. React Native uyumu da var.",
        pros: ["En sıkı a11y uyumu", "Web + Native ortak API"],
        cons: ["Topluluk Radix'ten küçük"],
      },
      {
        id: "shadcn",
        techLabel: "shadcn/ui",
        trLabel: "shadcn/ui (copy-paste komponentler)",
        trExplanation: "Radix + Tailwind kombinasyonu, npm paketi olarak değil 'copy bu kodu kendi repo'na' modelinde. Tam sahip olursunuz, customize özgürce.",
        scenarios: [
          "shadcn add button derseniz button kodu sizin repo'nuza kopyalanır. İstediğiniz gibi değiştirirsiniz.",
          "Versiyon bump endişesi yok — kod sizde.",
        ],
        pros: ["Tam sahiplik", "Açık ve okunaklı kod", "Tailwind doğal"],
        cons: ["Update'ler manuel", "Tutarlılık disiplini sizde"],
      },
      {
        id: "hybrid-flowbite-radix",
        techLabel: "Hibrit: Flowbite (görsel) + Radix (kritik davranışlar)",
        trLabel: "Karma — hızlı için Flowbite, kritik için Radix",
        trExplanation: "Çoğu sayfa Flowbite ile hızlı çıkar; modal/dropdown gibi a11y-kritik yerler Radix ile sağlamlaştırılır.",
      },
    ],
  },
  {
    id: "ui.icons",
    categoryId: "ui",
    question: "İkonografi standardı?",
    purpose: "İkon tutarlılığı UX'in temel parçası. Karışık ikon setleri amatörce görünür.",
    options: [
      {
        id: "phosphor",
        techLabel: "Phosphor Icons",
        trLabel: "Phosphor (kullanıcı tercihi)",
        trExplanation: "9000+ ikon, 6 ağırlık varyantı (thin → fill → duotone). Tutarlı çizim dili.",
        scenarios: [
          "Kullanıcı kural: 'phosphor öncelik, fontawesome ikincil'. CDN ile yüklemek MetaWork'ün varsayılanı.",
        ],
      },
      {
        id: "lucide",
        techLabel: "Lucide Icons",
        trLabel: "Lucide (Feather'ın forku)",
        trExplanation: "Minimal, modern, tree-shakeable. Daha az ikon ama hepsi tutarlı.",
      },
      {
        id: "tabler",
        techLabel: "Tabler Icons",
        trLabel: "Tabler (4500+ ikon)",
        trExplanation: "Daha kompakt çizim dili, dashboard-ağırlıklı.",
      },
      {
        id: "heroicons",
        techLabel: "Heroicons",
        trLabel: "Heroicons (Tailwind ekibi)",
        trExplanation: "Tailwind'in resmi ikon seti. Az ama özenli. UI-tipi için iyi.",
      },
    ],
  },

  // ============================================================
  // KATEGORİ 5 — i18n + a11y STANDARTLARI
  // ============================================================
  {
    id: "i18n.scope",
    categoryId: "i18n-a11y",
    question: "i18n kapsamı sadece dil çevirisi mi, yoksa daha geniş mi olsun?",
    purpose: "i18n kelimesi pek çok şeyi içerir; çoğu proje sadece çeviri yapar, kritik diğer alanları (RTL, locale, currency) atlar.",
    options: [
      {
        id: "translation-only",
        techLabel: "Sadece metin çevirisi",
        acronym: "i18n",
        acronymExpansion: "internationalization (i + 18 harf + n)",
        trLabel: "Sadece çeviri (en sınırlı)",
        trExplanation: "Her UI metni anahtar olarak tutulur, dile göre değişir. Tarih, para, sayı formatları ele alınmaz.",
        scenarios: [
          "Basit blog için yeterli. 'Hello' → 'Merhaba' eşleştirmesi.",
        ],
        cons: ["Tarih, sayı, para formatları yanlış gösterilir"],
      },
      {
        id: "full-l10n",
        techLabel: "Tam l10n (lokalizasyon)",
        acronym: "l10n",
        acronymExpansion: "localization",
        trLabel: "Tam lokalizasyon (önerilen)",
        trExplanation: "Çeviri + tarih (3/15/2026 vs 15.3.2026) + para (1,234.56$ vs 1.234,56 ₺) + sayı formatı + pluralization + RTL.",
        scenarios: [
          "Türk kullanıcı 1.234,56 ₺ görür, Alman kullanıcı 1.234,56 € görür, İngiliz kullanıcı £1,234.56 görür — aynı sayı.",
          "Arap kullanıcı sayfayı sağdan sola okur, layout otomatik flip olur (RTL).",
        ],
        pros: ["Profesyonel dünya markası imajı", "Yerel yasal uyumlu"],
      },
      {
        id: "g11n",
        techLabel: "g11n (globalization) — l10n + i18n + uyum",
        acronym: "g11n",
        acronymExpansion: "globalization",
        trLabel: "Globalizasyon (her ülke için yasal+kültürel uyum dahil)",
        trExplanation: "i18n + l10n + yasal uyum (GDPR/KVKK/CCPA) + ödeme yöntemi + sosyal norm. Çok-uluslu SaaS'lar buna ihtiyaç duyar.",
        scenarios: [
          "Türkiye'de Iyzico, AB'de Stripe, Çin'de WeChat Pay otomatik gösterilir.",
          "Cookie banner Avrupa için zorunlu, ABD California için opsiyonel, Türkiye için KVKK formu.",
        ],
        pros: ["Global SaaS olmak için zorunlu"],
        cons: ["Yatırım çok büyük — 1. yılda v1 değil"],
      },
    ],
  },
  {
    id: "i18n.library",
    categoryId: "i18n-a11y",
    question: "Çeviri kütüphanesi olarak hangisi?",
    purpose: "i18n araç seçimi performans ve geliştirici deneyimini etkiler.",
    options: [
      {
        id: "i18next",
        techLabel: "i18next",
        trLabel: "i18next (endüstri standardı)",
        trExplanation: "En geniş özellikli, en eski. Plugin sistemi büyük. React, Vue, Svelte hepsinde çalışır.",
        pros: ["En geniş ekosistem", "Olgun"],
        cons: ["Bundle büyük (~30kb)"],
      },
      {
        id: "lingui",
        techLabel: "LinguiJS",
        trLabel: "Lingui (macro-based, küçük bundle)",
        trExplanation: "Compile time'da çeviri ayıklar — runtime bundle küçük. ICU MessageFormat destekler.",
      },
      {
        id: "formatjs",
        techLabel: "FormatJS (react-intl)",
        trLabel: "FormatJS (React Intl)",
        trExplanation: "Yahoo'dan, ICU MessageFormat tabanlı. Plural ve cinsiyet ifadelerinde güçlü.",
      },
      {
        id: "paraglide",
        techLabel: "Paraglide JS (inlang)",
        trLabel: "Paraglide (tip-güvenli, tiny bundle)",
        trExplanation: "Her çeviri anahtarı TS fonksiyonu olur. Yanlış anahtar = compile error. Vibecoding ile sinerjik.",
        pros: ["Tip güvenli", "Çok küçük bundle", "AI tarafından üretmek kolay"],
        cons: ["Yeni, topluluk küçük"],
      },
    ],
  },
  {
    id: "a11y.standard",
    categoryId: "i18n-a11y",
    question: "Erişilebilirlik (a11y) hedef seviyesi?",
    purpose: "Kamu, sağlık, finans projelerinde a11y zorunlu. Diğerlerinde de moralen+yasal+SEO için iyi.",
    options: [
      {
        id: "wcag-aa",
        techLabel: "WCAG 2.2 AA seviyesi",
        acronym: "WCAG",
        acronymExpansion: "Web Content Accessibility Guidelines",
        trLabel: "WCAG 2.2 AA (en yaygın hedef)",
        trExplanation: "Endüstride en sık talep edilen seviye. Renk kontrast, klavye nav, screen reader uyumu zorunlu.",
        scenarios: [
          "Avrupa'da kamu için EAA (European Accessibility Act, Haziran 2025) zorunlu — WCAG AA temel beklenti.",
          "ABD'de ADA davalarına maruz kalmak istemiyorsanız AA minimum.",
        ],
      },
      {
        id: "wcag-aaa",
        techLabel: "WCAG 2.2 AAA (en sıkı)",
        trLabel: "WCAG AAA (en üst düzey)",
        trExplanation: "Çok yüksek kontrast, çok ayrıntılı açıklama, video için sign language. Çoğunlukla kısmi uygulanır.",
        cons: ["Pratik değil tüm sayfa için"],
      },
      {
        id: "section-508",
        techLabel: "Section 508 (US federal)",
        trLabel: "ABD federal a11y standardı",
        trExplanation: "Kamuya satış için zorunlu. WCAG 2.0 AA ile büyük ölçüde örtüşür.",
      },
      {
        id: "ariakit-based",
        techLabel: "Ariakit + manuel a11y",
        trLabel: "Komponentle çözüm (Ariakit/Radix)",
        trExplanation: "Erişilebilir bileşen kütüphanesi kullanmak baseline iş yükünü ortadan kaldırır.",
      },
    ],
  },

  // ============================================================
  // KATEGORİ 6 — AI SDK ve PROVIDER
  // ============================================================
  {
    id: "ai.sdk",
    categoryId: "ai",
    question: "AI SDK katmanı için hangi yaklaşım?",
    purpose: "Vercel AI SDK Next.js-friendly ama vibecoding ekibi Next.js'ten kaçınıyor. Alternatif şart.",
    options: [
      {
        id: "vercel-ai-core",
        techLabel: "Vercel AI SDK Core (framework-agnostic)",
        trLabel: "Vercel AI SDK Core (sadece 'ai' paketi)",
        trExplanation: "Vercel'in AI SDK'sının çekirdeği aslında framework-agnostic. Next.js olmadan da çalışır. Ama Vercel'in ürünleri kullanıcı tarafından yasaklandı.",
        cons: ["Kullanıcı kuralı: Vercel yasak", "İndirgenmiş güven"],
      },
      {
        id: "langchain-js",
        techLabel: "LangChain.js",
        trLabel: "LangChain JavaScript",
        trExplanation: "AI agent framework'ün en geniş ekosistemi. Çok yetenekli ama soyutlama katmanı kalın.",
        scenarios: [
          "Agent + tool calling + memory + RAG hepsi LangChain'de hazır.",
          "Çok yüksek soyutlama — debug zor, yavaş.",
        ],
        pros: ["Geniş ekosistem", "Belge çok"],
        cons: ["Ağır soyutlama", "Sürüm değişiklikleri sık breaking"],
      },
      {
        id: "anthropic-direct",
        techLabel: "Anthropic SDK + Provider Abstraction",
        trLabel: "Anthropic SDK direkt + kendi soyutlama",
        trExplanation: "@anthropic-ai/sdk doğrudan kullanılır; üzerine MetaWork kendi Provider port'unu yazar (Hexagonal pattern). Bağımsız.",
        scenarios: [
          "Claude'a doğrudan istek atan kod sade ve şeffaf. Provider değiştirmek istersek (Ollama, OpenAI) yeni adapter eklenir.",
          "MetaWork'ün 'AI Provider Abstraction' kerneli zaten bunun ifade biçimi.",
        ],
        pros: ["Tam kontrol", "Sade", "Vendor lock-in yok"],
        cons: ["Kendi adapter'larınızı yazmak zorundasınız"],
      },
      {
        id: "mastra",
        techLabel: "Mastra (TypeScript-native agent framework)",
        trLabel: "Mastra (TS-yerli, framework-agnostic)",
        trExplanation: "TypeScript-first, Vercel-bağımsız, agent + workflow + RAG sunan yeni framework. Vibecoding uyumlu.",
        pros: ["Bağımsız", "TS-native", "Hızlı geliştirme"],
        cons: ["Yeni — olgunluk düşük"],
      },
    ],
  },
  {
    id: "ai.description-rewrite",
    categoryId: "ai",
    question: "Description rewriter (kullanıcı içeriği → persona-uygun rewrite) nasıl olsun?",
    purpose: "E-ticaret ürün açıklaması, ilan açıklaması, blog yazısı — kullanıcı yazar, AI persona'ya göre rewrite eder. Bu MetaWork'ün öne çıkan değer önerisi.",
    options: [
      {
        id: "structured-pipeline",
        techLabel: "Structured rewrite pipeline (multi-step)",
        trLabel: "Aşamalı yapısal rewrite",
        trExplanation: "Adım 1: kullanıcının taslağı al → adım 2: anahtar bilgileri çıkar → adım 3: hedef persona belirle → adım 4: persona'nın diliyle yeniden yaz → adım 5: SEO ve uygunluk kontrolü.",
        scenarios: [
          "Bir ev sahibi 'Çok güzel daire kiralık' yazıyor. Sistem 'genç profesyonel hedef' personasını seçiyor, '85m² 2+1, eşyalı, metroya 5 dk yürüme — ofise gidip gelmeyi 25dk'ya düşürür.' diye yeniden yazıyor.",
          "Sahibinden ilan girer, AI marketplace persona'sına göre rewrite, 100 ilan içinde fark eder.",
        ],
        pros: ["Kontrollü çıktı", "Marka tonu korunur"],
      },
      {
        id: "single-prompt",
        techLabel: "Tek aşamalı prompt + temperature",
        trLabel: "Tek seferde rewrite",
        trExplanation: "Tek bir uzun prompt, kullanıcı metnini + persona açıklamasını LLM'e ver, çıktıyı al.",
        scenarios: [
          "Hızlı çalışır ama persona tutarlılığı düşük. Bazen aşırı satıcı, bazen aşırı pasif çıktı verir.",
        ],
        cons: ["Tutarsız sonuç"],
      },
      {
        id: "agent-tool",
        techLabel: "Agent-based with tool-calling",
        trLabel: "Araç çağıran agent ile",
        trExplanation: "Agent: ürün veritabanına bak, rakip ürünlere bak, SEO anahtar kelimeleri bak, sonra rewrite et. Daha güçlü ama daha pahalı.",
        scenarios: [
          "Premium plan kullanıcılar için 'AI Studio' modu — agent tüm bilgiyi toplar, sonra yazar.",
        ],
      },
    ],
  },

  // ============================================================
  // KATEGORİ 7 — API + İLETİŞİM PATTERN'LERİ
  // ============================================================
  {
    id: "api.style",
    categoryId: "api",
    question: "Birinci sınıf API stili?",
    purpose: "İstemci-sunucu iletişimi katmanı her şeyin temeli. Birden fazla stilde sunmak mümkün ama biri 'first-class' olmalı.",
    options: [
      {
        id: "rest-openapi",
        techLabel: "REST + OpenAPI 3.1",
        acronym: "REST",
        acronymExpansion: "Representational State Transfer",
        trLabel: "REST (klasik web API)",
        trExplanation: "Endüstri standardı, herkesin anladığı dil. OpenAPI ile şema otomatik üretilir. Sade ve evrensel.",
        scenarios: [
          "Bir mobile dev MetaWork'e bağlanacak: REST ile cURL yeter, hiçbir özel SDK öğrenmesi gerekmez.",
          "Postman/Bruno gibi tüm araçlar OpenAPI import edip otomatik client üretir.",
        ],
        pros: ["Evrensel", "Tooling dolu", "Cache friendly"],
      },
      {
        id: "trpc",
        techLabel: "tRPC (typed RPC)",
        acronym: "tRPC",
        acronymExpansion: "TypeScript Remote Procedure Call",
        trLabel: "tRPC (tip-güvenli RPC, sadece TS)",
        trExplanation: "İstemci ve sunucu arasında TypeScript tipi paylaşılır. AutoComplete + compile-time hata yakalama. Sadece TS dünyası için.",
        scenarios: [
          "Web frontend + backend ikisi de TS yazıldığında: bir endpoint'in parametresini değiştirirseniz, frontend kodu compile-error verir. Bug üretmek imkansızlaşır.",
        ],
        pros: ["End-to-end tip güvenliği", "Vibecoding ile sinerjik"],
        cons: ["Sadece TS ekosistem", "Mobile native veya Python client zor"],
      },
      {
        id: "graphql",
        techLabel: "GraphQL",
        trLabel: "GraphQL (Facebook'tan, esnek sorgu)",
        trExplanation: "İstemci hangi veriyi istediğini söyler, sunucu tam onu döner. Çoklu nested veri tek sorguda.",
        scenarios: [
          "Bir admin paneli 'kullanıcı + son siparişleri + favori ürünleri' tek sorguda alır. REST'te 3 ayrı çağrı olurdu.",
        ],
        pros: ["Esnek", "Over/under-fetching çözer"],
        cons: ["Cache zor", "N+1 sorun riski (DataLoader şart)", "Karmaşık"],
      },
      {
        id: "hybrid-rest-rpc",
        techLabel: "Hibrit: REST (dış) + RPC (iç TS clients)",
        trLabel: "REST dışa, tRPC içe (önerilen)",
        trExplanation: "3rd-party developer'a REST + OpenAPI, iç TS uygulamasına tRPC. İki dünyanın iyisi.",
        scenarios: [
          "MetaWork web admin paneli tRPC kullanır (tip güvenliği), 3rd party plugin geliştirici REST kullanır (evrensellik).",
        ],
        pros: ["Hem evrensel hem tip-güvenli"],
      },
    ],
  },
  {
    id: "api.ssr",
    categoryId: "api",
    question: "SSR (server-side rendering) stratejisi?",
    purpose: "Sayfanın ilk yüklenmesinde HTML sunucudan mı geliyor, tarayıcıda mı oluşuyor? SEO ve algılanan hız açısından kritik.",
    options: [
      {
        id: "spa-only",
        techLabel: "SPA (Single Page App, no SSR)",
        acronym: "SPA",
        acronymExpansion: "Single Page Application",
        trLabel: "Sadece SPA (tarayıcıda render)",
        trExplanation: "Sayfa tarayıcıda JavaScript ile çizilir. SEO için ekstra çaba gerekir. Admin paneli için ideal, public site için zayıf.",
        scenarios: [
          "İç admin panelinde SEO gerekmez, SPA mükemmel.",
          "Public blog için SEO kötü — Google JavaScript çalıştırır ama yavaş.",
        ],
        pros: ["Basit", "İç araç için ideal"],
        cons: ["SEO için zayıf", "İlk yüklenme yavaş"],
      },
      {
        id: "ssr-safe",
        techLabel: "SSR-safe (her ikisinde de çalışır)",
        acronym: "SSR",
        acronymExpansion: "Server-Side Rendering",
        trLabel: "SSR-safe (hem sunucuda hem tarayıcıda)",
        trExplanation: "Kod yazılırken 'window', 'document' gibi tarayıcı API'leri kontrolsüz kullanılamaz. Vue/Solid/Svelte gibi framework'ler bu disiplini gerektirir.",
        scenarios: [
          "Bir bileşen sunucuda HTML üretirken 'window.innerWidth' kullanırsa crash eder. SSR-safe disiplin bu hatayı önler.",
          "Bu sınırlama Next.js'in App Router belirsizliğinin (use client/server) sebebidir.",
        ],
        pros: ["Server + client tek kod", "SEO için iyi"],
        cons: ["Disiplin gerek"],
      },
      {
        id: "ssg",
        techLabel: "SSG (Static Site Generation)",
        acronym: "SSG",
        acronymExpansion: "Static Site Generation",
        trLabel: "SSG (build time'da HTML üret)",
        trExplanation: "Build sırasında her sayfa HTML'e dönüştürülür. CDN'den servis edilir. Hızda kazanç inanılmaz.",
        scenarios: [
          "MetaWork dokümantasyon sitesi SSG ile build edilir — 1000 sayfa < 30 saniyede üretilir, CDN'den 10 ms'de gelir.",
        ],
        pros: ["En hızlı", "Hosting ucuz"],
        cons: ["Dynamic veri için uygun değil", "Çok sayfa = build yavaş"],
      },
      {
        id: "isr-incremental",
        techLabel: "ISR (Incremental Static Regeneration)",
        acronym: "ISR",
        acronymExpansion: "Incremental Static Regeneration",
        trLabel: "ISR (artımlı statik yenileme)",
        trExplanation: "Sayfa statik ama belli sürede otomatik yenileniyor. Next.js'in özelliği, Vercel-bağımlı değil ama tarihçesi öyle.",
      },
      {
        id: "islands",
        techLabel: "Island Architecture (Astro modeli)",
        trLabel: "Ada mimarisi (static + interaktif noktalar)",
        trExplanation: "Sayfa çoğunlukla statik, sadece interaktif kısımlar JS yükler. Performans + interaktivite dengesi.",
        scenarios: [
          "Bir e-ticaret kategori sayfası: ürün kartları statik HTML, sepete ekle butonu sadece adada interaktif. Bundle %80 küçülür.",
        ],
        pros: ["En iyi performans", "İnteraktif noktalar net"],
      },
    ],
  },
  {
    id: "api.streaming",
    categoryId: "api",
    question: "AI agent çıktılarını + canlı veriyi nasıl stream'leyeceğiz?",
    purpose: "ChatGPT-benzeri 'kelime kelime cevap akıyor' deneyimi için stream şart. Hangi teknoloji?",
    options: [
      {
        id: "sse",
        techLabel: "Server-Sent Events (SSE)",
        acronym: "SSE",
        acronymExpansion: "Server-Sent Events",
        trLabel: "SSE (HTTP üzerinden tek yön akış)",
        trExplanation: "Sunucudan tarayıcıya tek yön akış. Reconnect otomatik, proxy/load balancer dostu. ChatGPT akışı bunu kullanır.",
        scenarios: [
          "Agent cevabı oluşturulurken token-token akar; kullanıcı tüm cevabı beklemez, 200 ms'de ilk kelimeyi görür.",
        ],
        pros: ["Basit", "HTTP üstüne kurulu — firewall dostu"],
      },
      {
        id: "websocket",
        techLabel: "WebSocket (çift yönlü)",
        trLabel: "WebSocket (iki yönlü gerçek zamanlı)",
        trExplanation: "İstemci ve sunucu birbirine ne zaman istese mesaj atar. Sohbet, oyun, ortak doküman düzenleme için ideal.",
        scenarios: [
          "Canlı sohbet, eş zamanlı doküman düzenleme, dispatch ekranı — WebSocket olmalı.",
        ],
        pros: ["Çift yön", "Düşük gecikme"],
        cons: ["State'li bağlantı — scale'de karmaşık"],
      },
      {
        id: "long-polling",
        techLabel: "Long polling",
        trLabel: "Uzun polling (eski usul)",
        trExplanation: "İstemci sunucuya sorar, sunucu cevap olana kadar bekletir. Eski sistemlerle uyumlu ama verimsiz.",
        cons: ["Eski teknoloji"],
      },
    ],
  },

  // ============================================================
  // KATEGORİ 8 — TEST STRATEJİSİ
  // ============================================================
  {
    id: "test.layers",
    categoryId: "test",
    question: "Hangi test katmanları zorunlu olsun?",
    purpose: "Her katman farklı şey yakalar. Hangi karışım MetaWork'ün stabilitesini koruyacak?",
    multiSelect: true,
    options: [
      {
        id: "unit",
        techLabel: "Unit testler",
        trLabel: "Birim testler (her fonksiyon tek tek)",
        trExplanation: "Bir fonksiyona input ver, beklenen output'u kontrol et. Hızlı, izole, çok sayıda.",
        scenarios: [
          "RBAC izin kontrolü fonksiyonu: 'Admin foo silebilir mi?' true. 'Misafir foo silebilir mi?' false. 50 senaryo 0.5 saniyede.",
        ],
      },
      {
        id: "integration",
        techLabel: "Integration testler",
        trLabel: "Entegrasyon testleri (modüller birbiriyle)",
        trExplanation: "Birden çok bileşenin/serv'isin birlikte doğru çalıştığını test eder.",
        scenarios: [
          "Auth + database + email servisini birlikte test: yeni kullanıcı kaydolur, DB'ye yazar, email gider.",
        ],
      },
      {
        id: "e2e",
        techLabel: "End-to-End (E2E) testler",
        acronym: "E2E",
        acronymExpansion: "End-to-End",
        trLabel: "Uçtan uca (gerçek tarayıcıda kullanıcı senaryosu)",
        trExplanation: "Gerçek tarayıcı açar, tıklar, formlar doldurur, sonucu kontrol eder. Playwright veya Cypress.",
        scenarios: [
          "Yeni kullanıcı: signup → email onay → ilk içerik oluştur. 90 saniyede tüm akış.",
        ],
      },
      {
        id: "visual",
        techLabel: "Visual regression testler",
        trLabel: "Görsel regresyon (UI değişikliği yakala)",
        trExplanation: "Her sayfa için screenshot saklanır, kodda değişiklik olunca yeni screenshot ile karşılaştırılır. Chromatic, Percy, Playwright.",
        scenarios: [
          "Bir CSS kuralı yanlışlıkla bütün başlıkları büyüttü. Visual test bunu PR'da yakalar.",
        ],
      },
      {
        id: "contract",
        techLabel: "Contract testler",
        trLabel: "Kontrat testleri (API sözleşmesi)",
        trExplanation: "Servisler arası sözleşmenin değişmediğini kontrol eder. Pact veya Stoplight.",
      },
      {
        id: "mutation",
        techLabel: "Mutation testleri",
        trLabel: "Mutation testler (testlerinizin kalitesini ölç)",
        trExplanation: "Koda küçük 'bug enjeksiyonları' yapar — testleriniz bug'ı yakalamalı. Yakalayamazsa test eksik.",
      },
    ],
  },
  {
    id: "test.ai-autonomous",
    categoryId: "test",
    question: "AI agent'ler test sürecini ne kadar yürütebilir? (Asıl hedef: insan dokunmadan alpha → beta → RC → prod)",
    purpose: "Vibecoding hedefi otonom test. Hangi katmanlarda AI agent'in karar verebilir?",
    options: [
      {
        id: "ai-test-author",
        techLabel: "AI test üretici (insan onayıyla)",
        trLabel: "AI testleri yazar, insan onaylar",
        trExplanation: "Geliştirici yeni feature yazar; AI agent o feature için unit + E2E testleri üretir; insan gözden geçirip merge eder.",
        scenarios: [
          "Bir geliştirici 'kullanıcı şifresini değiştirebilir' fonksiyonu yazar. AI 8 test case üretir: doğru şifre, yanlış eski şifre, zayıf yeni şifre, vs.",
        ],
        pros: ["Test yazma yükü %70 düşer", "İnsan kontrolü hâlâ var"],
      },
      {
        id: "ai-test-runner",
        techLabel: "AI test koşturucu + raporlayıcı",
        trLabel: "AI testleri koşar, sonuçları raporlar (insan inceler)",
        trExplanation: "AI agent CI'da testleri koşar, başarısızlıkları gruplandırır, root cause hipotezi üretir, geliştiriciye 'şu commit'ten beri kırık' der.",
      },
      {
        id: "ai-fix",
        techLabel: "AI otonom düzeltme (insansız)",
        trLabel: "AI testleri ve hataları kendisi düzeltir",
        trExplanation: "Test başarısız → AI hipotezi → kod düzeltme → tekrar test → başarılı ise PR aç. İnsan sadece son onay.",
        scenarios: [
          "Gece 03:00'te bir test kırıldı. AI agent 5 dakika içinde sebebi buldu, fix'i hazırladı, PR açtı, sabah dev sadece review etti.",
        ],
        pros: ["İnsansız akış", "Hız maksimum"],
        cons: ["Yanlış fix riski — strict revert kuralı şart", "Maliyet (token harcaması)"],
      },
      {
        id: "ai-promote",
        techLabel: "AI release promotion (alpha → prod)",
        trLabel: "AI release'i otonom terfi ettirir",
        trExplanation: "Alpha'da hata yok → otomatik beta'ya geç → 24 saat boyunca metrik bozulmadı → RC → 48 saat → prod. Tüm gate'ler AI tarafından izlenir.",
        scenarios: [
          "Bir release saatlik metric kontrol: hata oranı +%5 mi? Memory leak mi? Eğer eşik aşılırsa otomatik rollback ve insan haber alır.",
        ],
        pros: ["İnsansız teslim akışı", "Vibecoding hedefi tam"],
        cons: ["Çok dikkatli gate ayarları + observability gerek"],
      },
    ],
  },

  // ============================================================
  // KATEGORİ 9 — MODÜLERLİK + COUPLING
  // ============================================================
  {
    id: "modular.coupling",
    categoryId: "modular",
    question: "Modüller arası bağlılık (coupling) stratejisi?",
    purpose: "Modüllerin birbirinden ne kadar bağımsız geliştirilebileceği, deploy edilebileceği, test edilebileceği MetaWork'ün uzun ömrünü belirler.",
    options: [
      {
        id: "loose-coupling",
        techLabel: "Loose coupling + high cohesion",
        trLabel: "Düşük bağımlılık + yüksek tutarlılık (önerilen)",
        trExplanation: "Modüller birbirinin iç detayını bilmez, sadece arayüz (interface) üzerinden konuşur. Bir modülün iç işleyişi değişse diğeri etkilenmez.",
        scenarios: [
          "Ödeme modülü Iyzico'dan Stripe'a değişir. Sipariş modülü hiç değişmez — sadece 'ödeme yap(tutar)' fonksiyonunu çağırıyordu.",
          "Test ederken sahte (mock) bir ödeme modülü koyarsınız, sipariş modülü hiç fark etmez.",
        ],
        pros: ["Refactor riski düşük", "Test kolay", "Plugin ekosistemi mümkün"],
        cons: ["Disiplin gerek — interface tanımlamak iş"],
      },
      {
        id: "event-driven",
        techLabel: "Event-driven decoupling",
        trLabel: "Olay-tabanlı bağımsızlık",
        trExplanation: "Modüller doğrudan birbirini çağırmaz; event yayınlar. Diğer modüller dinler. Tam bağımsızlık.",
        scenarios: [
          "Sipariş tamamlandı event'i yayınlanır. Email modülü dinler ve email atar. Stok modülü dinler ve düşürür. Sipariş modülü ikisini de bilmez.",
        ],
        pros: ["Tam bağımsızlık", "Yeni modül ekleme kolay"],
        cons: ["Debug zor — olay zinciri takip etmek", "Eventual consistency"],
      },
      {
        id: "shared-kernel",
        techLabel: "Shared kernel (paylaşılan çekirdek)",
        trLabel: "Ortak çekirdek — birden çok modül aynı kod paylaşır",
        trExplanation: "Bazı temel tipler/şemalar tüm modüllerce paylaşılır (User, Tenant). Bu paylaşılan parçaya hassas yaklaşılır.",
      },
    ],
  },
  {
    id: "modular.deploy",
    categoryId: "modular",
    question: "Modüllerin bağımsız deploy edilebilirliği?",
    purpose: "Bir modülü değiştirip tek başına deploy edebilmek operasyonel hız demek.",
    options: [
      {
        id: "monolith-deploy",
        techLabel: "Modular Monolith — tek deploy",
        trLabel: "Modüler tek-uygulama (tek deploy)",
        trExplanation: "Tüm modüller tek binary. İçinde sınırlar var ama dış dünyaya tek deploy.",
        scenarios: [
          "İlk yıl: 5 modülde küçük değişiklikler için 5 ayrı CI yerine tek 'deploy all' yeterli. Hız ve sadelik.",
        ],
        pros: ["Sade", "Hızlı", "Solo + küçük takım için ideal"],
        cons: ["Bir hata diğer modülleri etkileyebilir", "Restart hepsini etkiler"],
      },
      {
        id: "service-per-context",
        techLabel: "Microservice per bounded context",
        trLabel: "Her domain bağlamı ayrı servis",
        trExplanation: "Sipariş, ürün, kullanıcı ayrı süreçler. Bağımsız deploy + scale. Karmaşık operasyon.",
        scenarios: [
          "100K kullanıcı, 5+ kişilik DevOps takımı olduğunda mantıklı. Erken kullanmak operasyonel intihar.",
        ],
        pros: ["Bağımsız scale", "Hatalı modül diğerlerini etkilemez"],
        cons: ["Operasyon çok karmaşık", "Network overhead", "Distributed transaction sorunu"],
      },
      {
        id: "modular-deploy-progressive",
        techLabel: "Aşamalı: Modular Monolith → Service split sonra",
        trLabel: "Modüler monolit ile başla, ihtiyaç doğunca böl",
        trExplanation: "Bounded context'ler net olduğu için ileride bölmek kolay. Önce hız, sonra ölçek.",
        scenarios: [
          "Shopify, GitHub, Stack Overflow — hepsi modular monolith. Yıllarca yetti.",
        ],
        pros: ["Erken sadelik", "Geç esneklik"],
      },
    ],
  },

  // ============================================================
  // KATEGORİ 10 — NO-CODE / LOW-CODE SEVİYESİ
  // ============================================================
  {
    id: "nocode.level",
    categoryId: "nocode",
    question: "Son kullanıcı (admin) yazılım geliştirebilir mi? Hangi seviyede?",
    purpose: "MetaWork'ün vaadi 'tıklayarak modül üret'. Bu vaat hangi seviyede karşılanacak?",
    options: [
      {
        id: "drupal-views",
        techLabel: "Drupal Views modeli — liste/tablo üretici",
        trLabel: "Drupal Views (tıklayarak liste/rapor)",
        trExplanation: "Admin paneli üzerinden tıklayarak 'kullanıcılar tablosu, son 30 gün, aktif olanlar, role göre filtre' yapabilir. Kod yok.",
        scenarios: [
          "Müşteri operasyon yöneticisi yeni rapor istiyor. Geliştiriciye sormaz, View Designer'da 10 dakikada kendisi çıkarır.",
        ],
        pros: ["Pazarlama/operasyon ekipleri özgürleşir", "Geliştirici yükü azalır"],
      },
      {
        id: "frappe-doctype",
        techLabel: "Frappe Doctype modeli — entity üretici",
        trLabel: "Frappe Doctype (tıklayarak yeni varlık)",
        trExplanation: "Admin 'Müşteri', 'Ürün', 'Sipariş' gibi yeni entity tanımlar, alanları belirler. CRUD UI otomatik üretilir.",
        scenarios: [
          "Bir restoran zinciri sahibinin 'sadakat puanı' diye yeni bir entity'e ihtiyacı var. Doctype Designer'da 5 dakikada tanımlar; tablo, form, list view hazır.",
        ],
        pros: ["Domain modelini iş ekibi sahiplenir"],
        cons: ["Karmaşık iş kuralları için yine kod gerek"],
      },
      {
        id: "both-hybrid",
        techLabel: "Hibrit (Doctype + View + ECA workflow)",
        trLabel: "Karma — entity + view + iş akışı (önerilen)",
        trExplanation: "Frappe Doctype + Drupal Views + ECA workflow motoru hep birlikte. Hem entity hem rapor hem otomasyon no-code.",
        scenarios: [
          "Bir kullanıcı: yeni 'Sözleşme' tipi (Doctype), sözleşme listesi (View), sözleşme imzalanınca email at + Slack'e bildirim (ECA). Üç adımda kod yazmadan.",
        ],
        pros: ["En güçlü no-code paketi"],
        cons: ["UI karmaşıklığı — eğitim gerek"],
      },
      {
        id: "code-only",
        techLabel: "Sadece kod (no no-code)",
        trLabel: "Yalnızca kod (no-code yok)",
        trExplanation: "Klasik framework — sadece geliştirici. No-code katmanı yok.",
        cons: ["MetaWork'ün değer önerisi zayıflar"],
      },
    ],
  },

  // ============================================================
  // KATEGORİ 11 — PLUGIN EKOSİSTEMİ
  // ============================================================
  {
    id: "plugin.api-stability",
    categoryId: "plugin",
    question: "Plugin API stabilitesi nasıl yönetilecek?",
    purpose: "Plugin yazarları MetaWork güvenir mi, yoksa her sürümde kıran değişiklikten mi korkar? Ekosistem buradan büyür.",
    options: [
      {
        id: "semver-strict",
        techLabel: "Strict SemVer + deprecation cycle",
        acronym: "SemVer",
        acronymExpansion: "Semantic Versioning",
        trLabel: "Strict SemVer + uzun deprecation süresi (önerilen)",
        trExplanation: "Major sürüm = kıran değişiklik (yılda 1-2 max). Minor = yeni özellik. Patch = bug fix. Kıran değişiklikten 6 ay önce deprecation uyarısı.",
        scenarios: [
          "Bir plugin yazarı '6 ay önce uyarı aldım, plan yaptım, sürüm geçişi sorunsuz' der. Topluluk güveni böyle inşa edilir.",
        ],
        pros: ["Topluluk güveni", "Ekosistem büyür"],
        cons: ["Eski API'leri taşımak iş yükü"],
      },
      {
        id: "lts-channel",
        techLabel: "LTS (Long-Term Support) hat",
        acronym: "LTS",
        acronymExpansion: "Long-Term Support",
        trLabel: "LTS kanalı (uzun vadeli destek)",
        trExplanation: "Yıllık LTS sürümü, 2-3 yıl güvenlik+bug fix garantisi. Enterprise için zorunlu.",
      },
      {
        id: "rolling",
        techLabel: "Rolling releases (Vue 2→3 gibi)",
        trLabel: "Sürekli güncelleme (riskli)",
        trExplanation: "LTS yok, herkes en yenide. Kıran değişiklikler sık. Plugin yazarları yorulur.",
        cons: ["Plugin yazarı kaybedersiniz"],
      },
    ],
  },
  {
    id: "plugin.marketplace",
    categoryId: "plugin",
    question: "Plugin marketplace ne zaman?",
    purpose: "Marketplace ekosistemin gelir kapısı ama topluluk güveni yokken erken açılırsa boş kalır.",
    options: [
      {
        id: "v04-marketplace",
        techLabel: "v0.4+ açılışı (topluluk güveni sonra)",
        trLabel: "v0.4+'da aç (önerilen)",
        trExplanation: "Önce v0.1-0.3 ile çekirdek istikrar + 50+ aktif developer + 5+ resmi modül. Sonra marketplace açılır.",
        scenarios: [
          "WordPress 2003'te çıktı, plugin marketplace 2005'te açıldı. Önce platform stabil olmalı.",
        ],
        pros: ["Boş marketplace utancından kaçınılır"],
      },
      {
        id: "early-marketplace",
        techLabel: "Erken marketplace (v0.1)",
        trLabel: "Daha v0.1'de (riskli)",
        trExplanation: "Marketplace baştan açık. İlk pluginler ekipten gelir, topluluğa fırsat verilir.",
        cons: ["Boş veya kötü kaliteli plugin'ler güveni yıkar"],
      },
    ],
  },

  // ============================================================
  // KATEGORİ 12 — TOKEN MODELLERİ
  // ============================================================
  {
    id: "tokens.auth",
    categoryId: "tokens",
    question: "Auth (kimlik doğrulama) token'ı nasıl?",
    purpose: "Login/logout sürecinin temeli. Yanlış seçim güvenlik açığı veya kötü UX doğurur. NOT: 'Token' kelimesi çok anlamlı — bu seçim auth-token içindir (AI token / blockchain token ayrı kavramlar).",
    options: [
      {
        id: "jwt-stateless",
        techLabel: "JWT (stateless, kendi içinde imzalı)",
        acronym: "JWT",
        acronymExpansion: "JSON Web Token",
        trLabel: "JWT — kendi içinde imzalı token",
        trExplanation: "Token kendi içinde kullanıcı bilgisi ve imzayı taşır. Sunucu DB sorgusu yapmadan doğrular. Hızlı ama logout zor.",
        scenarios: [
          "Bir kullanıcı login olur, JWT alır. Her istekte Authorization header'da gönderir. Sunucu imzayı doğrular, DB'ye gitmez.",
          "Çıkış yapmak istense — JWT ölmedikçe geçerlidir. Bunun için 'blacklist' tutmak gerek (stateful olmaya başlar).",
        ],
        pros: ["Hızlı (DB sorgusu yok)", "Stateless — horizontal scale"],
        cons: ["Logout zor", "Çalınan token süresi dolana kadar geçerli"],
      },
      {
        id: "session-cookie",
        techLabel: "Session cookie (stateful, DB'de)",
        trLabel: "Session cookie (klasik web)",
        trExplanation: "Sunucu session DB'de tutar, kullanıcıya sadece session ID'si gönderir. Logout = DB'den sil. Güvenli ama scale dikkati gerek.",
        scenarios: [
          "Logout anında kullanıcı kesinlikle erişimini kaybeder. Hesap güvenliği için kritik.",
        ],
        pros: ["Tam kontrol (instant logout)", "Güvenli"],
        cons: ["Her istek DB sorgusu", "Multi-region'da session paylaşımı zor"],
      },
      {
        id: "jwt-plus-refresh",
        techLabel: "JWT (access) + Refresh token (stateful)",
        trLabel: "Hibrit: kısa-ömürlü JWT + uzun-ömürlü refresh (önerilen)",
        trExplanation: "Access token 15 dakika (JWT), refresh token 30 gün (DB'de). Tehlikedeyken refresh iptal edilir.",
        scenarios: [
          "Kullanıcı 15 dakikada bir sessizce yeni JWT alır. Cihazı çalınırsa refresh token iptal edilir, 15 dakika içinde erişim biter.",
        ],
        pros: ["Performans + güvenlik dengesi"],
      },
      {
        id: "oauth-passwordless",
        techLabel: "OAuth + Passwordless (magic link)",
        trLabel: "Şifresiz giriş (Google, magic link)",
        trExplanation: "Şifre yok — Google/GitHub ile veya email'e gelen tek-kullanımlık link ile giriş.",
        scenarios: [
          "SaaS B2B için ideal — kurumsal kullanıcı Google Workspace ile bağlanır.",
        ],
      },
    ],
  },
  {
    id: "tokens.ai",
    categoryId: "tokens",
    question: "AI token (LLM token sayacı) muhasebesi?",
    purpose: "Her LLM çağrısı token tüketir. Maliyet kontrolü ve kullanıcı plan uygulaması buradan yapılır. NOT: Bu auth token'dan tamamen farklı bir 'token' kavramı — kelime çakışıyor.",
    options: [
      {
        id: "token-budget-per-tenant",
        techLabel: "Tenant başına token bütçesi + soft/hard limit",
        trLabel: "Tenant başına aylık token bütçesi (önerilen)",
        trExplanation: "Her plan belli sayıda 'token' içerir. %80'de soft uyarı, %100'de hard limit. Üst plan satışı buradan tetiklenir.",
        scenarios: [
          "Bir kullanıcı ayda 100K token kullanıyor — Pro plan 50K içerir. 50K'da uyarı, 80K'da 'upgrade?' butonu, 100K'da soft limit.",
        ],
        pros: ["Net iş modeli", "Maliyet kontrolü"],
      },
      {
        id: "byok",
        techLabel: "BYOK (Bring Your Own Key)",
        acronym: "BYOK",
        acronymExpansion: "Bring Your Own Key",
        trLabel: "Kullanıcı kendi anahtarını getirir",
        trExplanation: "Kullanıcı kendi OpenAI/Anthropic API anahtarını verir; MetaWork sadece orchestrate eder.",
        scenarios: [
          "Enterprise kullanıcılar kendi token kotalarını yönetmek ister. BYOK onlara güven verir.",
        ],
        pros: ["MetaWork maliyet üstlenmez", "Enterprise dostu"],
        cons: ["Onboarding sürtünmesi"],
      },
      {
        id: "credits-system",
        techLabel: "Credits sistemi (kendi para birimi)",
        trLabel: "Kendi kredi sistemi (Lovable.dev modeli)",
        trExplanation: "Kullanıcı 'X kredi' satın alır; her LLM çağrısı kredi düşer. Token detayları gizli.",
      },
    ],
  },

  // ============================================================
  // KATEGORİ 13 — DEPLOY & HOST
  // ============================================================
  {
    id: "deploy.target",
    categoryId: "deploy",
    question: "MetaWork'ün referans deployment hedefi ne olsun? (Vercel YASAK)",
    purpose: "Kullanıcı kuralı: Vercel yasak. Drupal/Frappe gibi self-host'a uygun, geliştirici dostu deploy hedefi şart.",
    options: [
      {
        id: "hetzner-docker",
        techLabel: "Hetzner VPS + Docker Compose + Caddy",
        trLabel: "Hetzner + Docker (önerilen)",
        trExplanation: "Tek VPS, Docker Compose, Caddy reverse proxy. Aylık 6€'dan başlar. Kullanıcı ortamı bu.",
        scenarios: [
          "Bir vibecoder MetaWork'ü Hetzner CX22'ye kurar (aylık 5€), 1000 kullanıcıya kadar idare eder. Vercel'de aynı yük $50+/ay'a çıkar.",
        ],
        pros: ["Ucuz", "Self-host kontrolü", "Avrupa veri merkezi (GDPR friendly)"],
      },
      {
        id: "k3s-multi",
        techLabel: "K3s (lightweight Kubernetes) — multi-node",
        acronym: "K3s",
        acronymExpansion: "Rancher Labs minimal Kubernetes",
        trLabel: "K3s — hafif Kubernetes",
        trExplanation: "Hetzner'da 3-5 node K3s cluster. Scale + HA. Karmaşıklık seviyesi orta.",
      },
      {
        id: "docker-compose-multi",
        techLabel: "Docker Swarm",
        trLabel: "Docker Swarm (Compose'un cluster'i)",
        trExplanation: "Compose syntax + multi-node. K8s'ten basit, prod-ready.",
      },
      {
        id: "self-host-anywhere",
        techLabel: "Self-host anywhere (no opinion)",
        trLabel: "Nereye isterseniz — biz görüş vermeyiz",
        trExplanation: "MetaWork sadece Docker image üretir; nereye deploy ettiğiniz size kalmış (AWS, GCP, Hetzner, kendi sunucunuz).",
        pros: ["Esnek"],
        cons: ["Onboarding karmaşık — opinion-less"],
      },
    ],
  },

  // ============================================================
  // KATEGORİ 14 — LİSANS + PARA MODELİ
  // ============================================================
  {
    id: "license.model",
    categoryId: "license",
    question: "Açık kaynak lisansı + ticari model?",
    purpose: "Topluluk ile gelir dengesi. Yanlış seçim ya kâr getirmez ya topluluğu uzaklaştırır.",
    options: [
      {
        id: "mit-managed",
        techLabel: "MIT + Managed Cloud (Vercel/Supabase modeli)",
        acronym: "MIT",
        acronymExpansion: "Massachusetts Institute of Technology (lisans ismi)",
        trLabel: "MIT lisans + hosted edition (önerilen)",
        trExplanation: "Kernel açık kaynak (MIT — herkes kullanır, satar, değiştirir). MetaWork Cloud satışı = hosting + premium support + enterprise features.",
        scenarios: [
          "Vercel Next.js'i MIT yapar, Vercel platformu satar. Supabase Postgres + auth'u MIT, hosting'i satar. MetaWork aynı model.",
        ],
        pros: ["Topluluk büyür", "Sürdürülebilir gelir", "Net iş modeli"],
        cons: ["Hosting altyapısı + sales engineering gerek"],
      },
      {
        id: "open-core",
        techLabel: "Open Core (MIT kernel + commercial modules)",
        trLabel: "Açık çekirdek + ticari modüller (GitLab modeli)",
        trExplanation: "Çekirdek MIT, ileri özellikler (SSO, audit log, multi-tenant enterprise) ticari add-on.",
        scenarios: [
          "GitLab: Community Edition ücretsiz, Enterprise Edition ücretli ek özellikler.",
        ],
        pros: ["Açık kaynak görünür", "Enterprise gelir"],
        cons: ["Hangi feature açık/kapalı kararı sürekli politik"],
      },
      {
        id: "agpl",
        techLabel: "AGPL (copyleft, hosting kullananı zorlar)",
        acronym: "AGPL",
        acronymExpansion: "Affero General Public License",
        trLabel: "AGPL — SaaS'ları açık kaynak olmaya zorlar",
        trExplanation: "Eğer MetaWork ile yapılmış bir SaaS satıyorsanız, modifikasyonlarınızı açıklamak zorundasınız. MongoDB, Elastic kullandı.",
        scenarios: [
          "Bu lisans Amazon'un Elastic'i SaaS olarak satmasından korunmak için kullanıldı.",
        ],
        pros: ["Cloud provider'lardan korur"],
        cons: ["Topluluk gözünde agresif"],
      },
      {
        id: "bsl",
        techLabel: "BSL (Business Source License)",
        acronym: "BSL",
        acronymExpansion: "Business Source License",
        trLabel: "İş Kaynak Lisansı (geciken açık kaynak)",
        trExplanation: "İlk 3-4 yıl ticari kullanım kısıtlı, sonra otomatik MIT'e döner. CockroachDB, Sentry, HashiCorp kullandı.",
      },
      {
        id: "mit-pure",
        techLabel: "MIT saf (sponsorluk + danışmanlık)",
        trLabel: "Saf MIT — para sponsorluktan",
        trExplanation: "Astro, Vue gibi. Para sponsorluk + danışmanlık + eğitim'den gelir. Yıllık 6 haneli rakamlara çıkmak zor.",
        cons: ["Sürdürülebilir gelir zor"],
      },
    ],
  },

  // ============================================================
  // KATEGORİ 15 — TOPLULUK + MARKETPLACE
  // ============================================================
  {
    id: "community.governance",
    categoryId: "community",
    question: "Topluluk yönetişim modeli?",
    purpose: "Karar verme süreçleri net olmazsa topluluk dağılır. Vue, Astro, Next gibi başarılı projeler özgün yönetişim kurar.",
    options: [
      {
        id: "bdfl",
        techLabel: "BDFL (Benevolent Dictator)",
        acronym: "BDFL",
        acronymExpansion: "Benevolent Dictator For Life",
        trLabel: "İyi-niyetli diktatör (kurucu son söz)",
        trExplanation: "Linus Torvalds (Linux), Guido van Rossum (Python başlangıç). Kurucu kararsız kalmış konularda son söz.",
        scenarios: [
          "Erken aşama için ideal — hızlı karar. Topluluk büyürken yetersiz kalabilir.",
        ],
      },
      {
        id: "core-team",
        techLabel: "Core team + RFC süreç",
        trLabel: "Çekirdek ekip + RFC (önerilen)",
        trExplanation: "Önemli değişiklikler RFC (Request For Comments) ile topluluğa açılır, çekirdek ekip oy birliği veya majority kararı verir. React, Vue, TypeScript böyle.",
        pros: ["Topluluk söz hakkına sahip", "Karar şeffaf"],
      },
      {
        id: "foundation",
        techLabel: "Foundation (Linux Foundation tarzı)",
        trLabel: "Bağımsız vakıf",
        trExplanation: "Şirket-bağımsız vakıf yönetir. Çok büyük + olgun projeler (CNCF: Kubernetes, etcd).",
        cons: ["Erken aşama için uygun değil"],
      },
    ],
  },
  {
    id: "community.docs",
    categoryId: "community",
    question: "Dokümantasyon yatırım modeli?",
    purpose: "Vibecoder hedef kitle dokümantasyona göre framework seçer. Yatırım miktarı kritik.",
    options: [
      {
        id: "docs-first",
        techLabel: "Docs-first culture (her PR docs içerir)",
        trLabel: "Belge-önce kültür (önerilen)",
        trExplanation: "Her feature PR'ı docs güncellemesi olmadan merge olmaz. Astro, Vue böyle.",
        scenarios: [
          "Yeni bir API eklendiğinde docs aynı PR'da gelir. Topluluk şikayet etmez.",
        ],
        pros: ["Topluluk güveni", "Onboarding hızlı"],
        cons: ["PR yazma süresi artar"],
      },
      {
        id: "docs-team",
        techLabel: "Ayrı docs takımı",
        trLabel: "Bağımsız docs ekibi",
        trExplanation: "Stripe, Twilio gibi şirketler ayrı technical writer takımı tutar. Para gerektirir.",
        cons: ["Erken aşamada lüks"],
      },
      {
        id: "ai-generated",
        techLabel: "AI-generated docs (insan doğrular)",
        trLabel: "AI üretir, insan onaylar",
        trExplanation: "Kod ve testlerden AI ile docs üretmek. Hız büyük, kalite kontrol şart.",
        scenarios: [
          "MetaWork CLI 'mf docs gen' komutu kod analizinden başlangıç dokümantasyonu üretir.",
        ],
      },
    ],
  },
];

// =============================================================
// Yardımcılar
// =============================================================

export const CUSTOM_OPTION: Option = {
  id: "custom",
  techLabel: "Custom — kendi sorum",
  trLabel: "Custom — seçenekleri anlamadım veya hiçbiri uymuyor",
  trExplanation: "Bu sorunun seçeneklerini anlamıyorsam veya hiçbiri benim durumuma uymuyorsa, kendi açıklamamı yazarım. JSON'da bu seçim 'belirsiz' olarak işaretlenir, sonra Claude ile tek tek araştırırız.",
};

export function getCategoryById(id: string): Category | undefined {
  return CATEGORIES.find((c) => c.id === id);
}

export function getQuestionById(id: string): Question | undefined {
  return QUESTIONS.find((q) => q.id === id);
}

export function getQuestionsByCategory(categoryId: string): Question[] {
  return QUESTIONS.filter((q) => q.categoryId === categoryId);
}
