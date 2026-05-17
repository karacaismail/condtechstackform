MVP ve süresi öncelik değil. 

istenilen sonuç şu: 

bu geliştireceğim yazılımın temeli ile, [erp, crm,]

(low code level, no code level, olması avantaj gibi geliyor).

npm ve yarn'a alternatif olarak Pnpm daha doğru gibi geliyor.

Build & paket yönetimi Vite öneriyorsun her zaman.

TanStack Query çıkıyor hep karşıma.

Client state: Zustand.

"Vercel AI SDK Core (`ai` paketi, framework-agnostic kullanım — Next'e bağımlı değil)" önermiştin bi ara, vibecoding sorunu yok mu nextjs gibi? daha iyisi yok mu?

microservices yaklaşımına alternatifler neler?

SSR-safe nedir? ve alternatifleri.

Server state(mesela TanStack) vs Client state(mesela Zustand), Form state, farkları, son kullanıcının journey map'i içerisinde amaçları?.

Token nedir? login logout sürecinde token nedir? AI LLM models için token nedir? blockchain için token nedir? drupal token module nedir? farklı yaklaşımlara göre Token yazılım geliştirme süreçlerinde nedir?

TanStack Table gibi, TanStack Virtual gibi, TanStack altında neler var?

Radix nedir? Radix UI nedir? Radix ve Radix UI ile neler yapılabilir? alternatifleri nelerdir? alternatiflerinden farkı nedir? alternatiflerine göre pros cons?.

i18n kapsamı nelerdir? bir (saas mobile destop native vb birçok türde) yazılımın international kapsamda çoklu dil haricinde i18n standartları ne sağlıyor? i18n neden yetersiz? yeterli olanlar neler? i18n alternatifleri veya i18n'in tamamlayıcıları nelerdir?

a11y Ariakit wcag gibi başka hangi standartları bilmiyorum? neler var?

description field (eticaret ürün açıkalaması, ilan açıklaması, kategori açıklaması, blog yazısı, vb etc) açıklamak istediği gibi yazsın ama AI bunu alıp araştırıp derli toplu ve açıklamayı okuyacak kitlenin personasına uygun biçimde rewrite yapsın.

unit tests, E2E tests, gibi başka hangi testler, hangi araçlarla, otonom agents, AI destekli, (insan müdahalesi olmadan) tamamlanabilir? otomasyon olması için neler yapmalı testlerde? (asıl hedef insan dokunmadan alpha -> beta -> rc -> prod relase.

seçimlerimin, düşüncelerimin avantajları? dezavantajları?

Low Coupling / Loose Coupling, High Cohesion, ve alternatifleri nelerdir? pros cons.

bağımsız geliştirilebilirlik, bağımsız deploy edilebilirlik.

Low Coupling / Loose Coupling, High Cohesion, ?

bağımsız geliştirilebilirlik, bağımsız deploy edilebilirlik, ?

monorepo vs polyrepo ve diğerleri ?
---

microservices işini anlayalım, ve sonra ya tamamen kaçınalım yada nasıl etntegre edeceğimizi anlayalım
Şöyle bir önerme var {Citadel (2022) — HEY mail'i kurarken çıkan gerçek: Bazı şeyler gerçekten ayrı koşmalı (mail processing, full-text search), ama bu mikroservise atlamak için bahane değil.} ama kesin olarak mikroservise atlamak gereken alanları belirleme çerçevesi nedir? ve "Bazı şeyler gerçekten ayrı koşmalı" önermesinin alanlarını belirleme çerçevesi nasıl olmalı?

microservices hype olarak tanımlanıyor birçok kere karşıam çıktı, neden böyle? peki microservices sürdürülebilirlik konusunda 10+ yıl vizyon için ideal değil ise o zaman sürdürülebilir diğer altertnetif yaklaşımlar nelerdir?

{Citadel'i mikroservisten ayıran kritik fark: **boyut asimetrisi**. Bir citadel 10 mikroservise denk gelebilir; outpost'lar küçük ve teknik gerekçeyle var.

### Ne Zaman Uygun

- Tek bir core domain'in baskın olduğu ürünler (SaaS, marketplace, content app)
- Küçük-orta takım (5-50 mühendis)
- Operasyonel basitlik öncelikli
- 1-2 gerçek teknik darboğaz var ama 20 mikroservise gerek yok}

---

şöyle öneriler de var : {
**Vertical Slice Architecture** — Katman bazlı değil, **feature bazlı** dikey kesitler. Her feature kendi controller + handler + DB erişimi. CQRS ile çok uyumlu. benim "feature-based folder structure" tercihinin teorik karşılığı. tam olarak nedir?

şu çok ilgimi çekiyor, ; **Event-Driven Architecture (EDA)** — Bileşenler event publish/subscribe yapar, doğrudan bilmezler birbirini.  ECA otomasyon planının üst kümesi.

**Event Sourcing** — State değil, state'i üreten event'ler saklanır. Audit trail, time-travel, replay imkanı. nerelerde neden tercih edilir?

**CQRS** — Yazma (Command) ve okuma (Query) modelleri ayrılır. Event Sourcing ile çok evlenir ama tek başına da kullanılır.

**Saga Pattern** — Dağıtık transaction yerine compensating action zinciri. Choreography (event ile) veya Orchestration (merkezi koordinatör) varyantı. Marketplace'lerde sipariş + ödeme + envanter senaryolarında klasik.

**Outbox Pattern** — DB commit ile event publish'i atomik yapmak için. EDA ile mikroservislerde olmazsa olmaz.

**Pipes & Filters** — Veri pipeline. n8n workflow'larının teorik adı.

**Reactive Architecture** — Reactive Manifesto: responsive, resilient, elastic, message-driven. Akka, RxJS dünyası.

**MACH (Microservices, API-first, Cloud-native, Headless)** — E-ticarette baskın. Headless commerce + composable.

**Jamstack** — Pre-built markup + JS + API'ler. Statik üretim odaklı.

**Islands Architecture** — Sayfa çoğunlukla statik HTML, etkileşimli "ada"lar selective hydration. Astro'nun felsefesi — Bestie Borders stack'inle uyumlu.

**Resumability (Qwik)** — Hydration yerine serialize edilmiş state'ten devam.

**Backend-for-Frontend (BFF)** — Her client tipi (web, mobile) için ayrı backend katmanı. İstoc'un headless Vue storefront + admin panel ayrımı bunu gerektirir.

**Micro-frontends** — Mikroservislerin frontend karşılığı. Module Federation, web components ile. Genelde fayda/maliyeti tartışmalı.

**Space-Based Architecture** — In-memory data grid + processing. Yüksek concurrency, düşük latency. Trading sistemleri.

**Sidecar / Service Mesh** — Cross-cutting concern'leri (auth, observability, retry) ana servisten ayır. Istio, Linkerd.
} evet böyle.


"Onion Architecture — Palermo. Clean'in akrabası. Domain en içte, infrastructure en dışta." bu yaklaşımı sevdim, bunun detayları lazım. öğrenmem lazım bu "Onion Architecture" yaklaşımını.

**Tasarım prensipleri (kod seviyesi kurallar)**

- **SOLID** — SRP, OCP, LSP, ISP, DIP
- **DRY** (Don't Repeat Yourself)
- **KISS** (Keep It Simple, Stupid)
- **YAGNI** (You Aren't Gonna Need It)
- **GRASP** — Information Expert, Creator, Controller, Low Coupling, High Cohesion vb.
- **CQS / CQRS** — Command-Query Separation/Responsibility Segregation
- **Law of Demeter** ("en az bilgi" prensibi)
- **Composition over Inheritance**
- **Tell, Don't Ask**
- **POLA** (Principle of Least Astonishment)

**UI / Sunum katmanı pattern'leri (sizin sorduğunuz MVC/MVVM ailesi)**

- **MVC** — Model-View-Controller (klasik)
- **MVP** — Model-View-Presenter
- **MVVM** — Model-View-ViewModel (Vue, Angular, WPF)
- **MVI** — Model-View-Intent (Android/Redux dünyası)
- **VIPER** — View-Interactor-Presenter-Entity-Router (iOS)
- **Flux / Redux** — tek yönlü veri akışı
- **PAC** — Presentation-Abstraction-Control

**Uygulama mimarisi (büyük resim)**

- **DDD** — Domain-Driven Design (Bounded Context, Aggregate, Ubiquitous Language)
- **Clean Architecture** — Uncle Bob
- **Hexagonal Architecture / Ports & Adapters** — Alistair Cockburn
- **Onion Architecture** — Jeffrey Palermo
- **Layered (N-tier) Architecture** — klasik katmanlı
- **Screaming Architecture** — yapı domain'i bağırmalı
- **Vertical Slice Architecture** — feature bazlı dikey kesit
- **Microservices, Modular Monolith, SOA, Service Mesh**
- **Event-Driven Architecture, Event Sourcing, CQRS**
- **Serverless / FaaS**

**Tasarım pattern'leri (GoF ve sonrası)**

- **Creational** — Singleton, Factory, Builder, Prototype, Abstract Factory
- **Structural** — Adapter, Decorator, Facade, Proxy, Composite, Bridge, Flyweight
- **Behavioral** — Observer, Strategy, Command, State, Template Method, Chain of Responsibility, Mediator, Visitor, Iterator, Memento
- **Enterprise** (Fowler/PoEAA) — Repository, Unit of Work, Active Record, Data Mapper, Service Layer, Specification

**Entegrasyon / mesajlaşma**

- **EIP** (Enterprise Integration Patterns) — Hohpe & Woolf
- **Saga**, **Outbox**, **Choreography vs Orchestration**
- **API styles** — REST, GraphQL, gRPC, JSON-RPC, WebSocket, SSE

**Test / kalite metodolojileri**

- **TDD** (Test-Driven), **BDD** (Behavior-Driven), **ATDD** (Acceptance-TD)
- **AAA** pattern (Arrange-Act-Assert)
- **Test Pyramid / Trophy**

**Süreç & ölçeklendirme (zaten alanınız)** Agile, Scrum, Kanban, XP, **SAFe**, LeSS, Nexus, Scrum@Scale, Lean, DevOps/DORA, Shape Up.

**Kod kalitesi / okunabilirlik** Clean Code (Uncle Bob), Code Complete (McConnell), Pragmatic Programmer kuralları, Conventional Commits, Semantic Versioning, Twelve-Factor App.

### 1. Programlama Paradigmaları (en üst katman)

- **OOP** (Object-Oriented) — sınıf, kalıtım, kapsülleme
- **FP** (Functional Programming) — immutability, pure function, higher-order
- **Procedural** — adım adım komut akışı
- **Declarative vs Imperative** — ne istediğini söyle vs nasıl yapılacağını söyle
- **Reactive Programming** — stream/observable tabanlı (RxJS, Reactor)
- **AOP** (Aspect-Oriented) — cross-cutting concern'leri ayırma (logging, transaction)
- **Logic Programming** — Prolog tarzı, kurallar üzerinden çıkarım
- **Dataflow / Pipeline** — veri akışı odaklı
- **Concurrent / Parallel** — eşzamanlılık modelleri

### 2. Tasarım Prensipleri (paradigmaların kuralları)

- **SOLID** — SRP, OCP, LSP, ISP, DIP
- **DRY** (Don't Repeat Yourself), **KISS**, **YAGNI**
- **GRASP** — SOLID'in akademik kuzeni (Information Expert, Creator, Controller, Low Coupling, High Cohesion, Polymorphism, Pure Fabrication, Indirection, Protected Variations)
- **CUPID** — Dan North'un SOLID alternatifi (Composable, Unix philosophy, Predictable, Idiomatic, Domain-based)
- **SoC** (Separation of Concerns)
- **Law of Demeter** — "yalnızca yakın komşularınla konuş"
- **Tell, Don't Ask**
- **Composition over Inheritance**
- **POLA** (Principle of Least Astonishment)
- **Fail Fast**
- **High Cohesion, Low Coupling**

### 3. Mimari Patternler (uygulama düzeyi yapı)

**Sunum/Katman ayrımı:**

- MVC, MVP, MVVM, MVI, MVU (Elm Architecture)
- Clean Architecture (Uncle Bob)
- Hexagonal / Ports & Adapters (Alistair Cockburn)
- Onion Architecture (Jeffrey Palermo)
- Layered / N-Tier
- Vertical Slice Architecture
- Screaming Architecture

**Sistem düzeyi:**

- Monolith, Modular Monolith
- Microservices, Micro-Frontends
- SOA (Service-Oriented Architecture)
- Event-Driven Architecture (EDA)
- Serverless / FaaS
- Microkernel / Plugin Architecture
- Pipe and Filter
- Space-Based Architecture

**Veri akışı / komut ayrımı:**

- CQRS (Command Query Responsibility Segregation)
- Event Sourcing
- Saga Pattern

### 4. Design Patterns (GoF — sınıf/nesne düzeyi)

**Creational:** Singleton, Factory Method, Abstract Factory, Builder, Prototype, Object Pool **Structural:** Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy **Behavioral:** Chain of Responsibility, Command, Iterator, Mediator, Memento, Observer, State, Strategy, Template Method, Visitor, Interpreter

### 5. Domain & Yaklaşımlar

- **DDD** (Domain-Driven Design)
    - Stratejik: Bounded Context, Ubiquitous Language, Context Map, Anti-Corruption Layer
    - Taktik: Entity, Value Object, Aggregate, Repository, Domain Service, Domain Event
- **TDD / BDD / ATDD** — test-first yaklaşımları
- **Clean Code** — Martin Fowler / Uncle Bob ekseni
- **Refactoring Catalog** (Fowler) — kod kokuları + dönüşüm reçeteleri

### 6. Veri Erişim Patternleri

- Repository, Unit of Work
- Active Record vs Data Mapper
- Identity Map, Lazy Load
- Outbox Pattern, Inbox Pattern
- Specification Pattern

### 7. Dağıtık Sistem / Entegrasyon Patternleri

- Circuit Breaker, Bulkhead, Retry + Exponential Backoff
- API Gateway, BFF (Backend for Frontend)
- Service Mesh, Sidecar, Ambassador
- Strangler Fig (legacy göçü için)
- Anti-Corruption Layer
- Choreography vs Orchestration
- Idempotency, Two-Phase Commit, Saga

### 8. Eşzamanlılık (Concurrency) Modelleri

- Actor Model (Erlang, Akka)
- CSP — Communicating Sequential Processes (Go channels)
- Producer-Consumer, Reader-Writer
- Future / Promise / Async-Await
- Reactive Streams (backpressure)
- Thread Pool, Worker Pool

### 9. Frontend'e Özel Patternler

- Atomic Design (Brad Frost)
- Container / Presentational
- Compound Components, Render Props, HOC
- Hooks pattern
- Flux / Redux / Pub-Sub
- Islands Architecture (Astro, Qwik)
- Resumability vs Hydration
- State machines (XState)

### Senin pratiğine dair not

Senin standartların (SOLID + MVVM + Repository + Command-Query Separation + Composition over Inheritance) klasik **Clean Architecture + DDD-lite** kombinasyonuyla örtüşüyor. Eksik kalan ve istersen ekleyebileceğin alanlar:

- **CUPID** (modern, SOLID'den daha "vibecoding dostu" — Composable + Domain-based kısmı senin feature-based folder yapınla doğrudan örtüşüyor)
- **Hexagonal Architecture** (View → ViewModel → Service → Repository → API zincirinin "Ports & Adapters" karşılığı; test edilebilirliği netleştirir)
- **Vertical Slice Architecture** (feature-based klasör yapın için doğal teorik zemin)
- **Outbox Pattern** (n8n + openclaw otomasyonunda event tutarlılığı için kritik)
- **Saga Pattern** (multi-step business flow'lar için — TR TradeHub'da sipariş süreçlerine uyar)

---


Kaygılarınız büyük ölçüde haklı, ama biraz fazla komplo teorisine kayıyor. Önce gerçekleri ayırayım, sonra alternatifleri verip kendi felsefenize göre kararı size bırakayım.

## Vercel AI SDK'ye yönelik somut endişeler (haklı olanlar)

**API kararsızlığı:** Haziran 2023'te v1, şu an v6. 2.5 yılda 6 major sürüm. v4→v5 ve v5→v6 ciddi rewrite'lar getirdi (UIMessage, AbstractChat, agent loop pattern'leri). Vibecoding karşıtı — AI asistanlarının eğitim verisi sürekli eskiyor, tıpkı Next.js App Router gibi.

**Protokol bağımlılığı:** Data Stream Protocol Vercel'in formatı. FastAPI'niz bu formatta yayın yapmak zorunda. Yarın hook API'si değişirse, sunucudaki emisyon mantığını da elden geçirmeniz gerekir.

**Dokümantasyon yanlılığı:** Resmi örneklerin yaklaşık %80'i Next.js. Vite + FastAPI senaryosu için her şeyi kendiniz birleştiriyorsunuz.

**TypeScript inference yükü:** Derin Zod şemalarında compiler bellek tüketimi patlıyor — bilinen sorun.

## Haklı olmadığınız kısım

"Bilinçli olarak karmaşıklaştırıp ücretli destek satıyorlar" — bu spekülatif. SDK Apache 2.0, kendi sunucunuzda çalışıyor, Vercel altyapısı zorunlu değil. Asıl mesele Vercel'in **hızlı ship etme kültürü** ve Next.js'i merkez alan ekosistem genişletme stratejisi. Niyet kötü değil, ama sonuç sizin için aynı: kararsız, framework-bias'lı bir bağımlılık.

## Alternatifler

**1. Custom thin layer (web standartları)**

- `@microsoft/fetch-event-source` (veya native EventSource) + Zustand + 1 custom hook (`useStream`).
- Toplam kod: ~200 satır.
- Vibecoding uyumu: mükemmel — SSE, fetch, AbortController 10+ yıllık stabil standartlar. AI ajanları doğru pattern yazar.
- FastAPI istediği SSE formatını yayar.
- Tool call UI'sı, regenerate, stop/resume gibi şeyleri kendiniz yazarsınız (her biri 20-50 satır).

**2. LLM provider SDK'leri direkt**

- `@anthropic-ai/sdk` veya `openai` paketi frontend'de değil, FastAPI tarafında. Frontend sadece kendi backend'inizle konuşur.
- Provider switching'i FastAPI tarafında abstract edersiniz (LiteLLM veya OpenRouter gibi tek API yüzeyi).
- Frontend açısından: provider'dan bağımsız, sadece SSE consumer.

**3. LangChain.js**

- Çok ağır, kendi mental modeli var, breaking change'ler sık.
- Vibecoding için en kötü seçenek. Sizin için uygun değil.

**4. Mastra**

- Yeni, TypeScript-first, framework-agnostik AI framework.
- Topluluk küçük, henüz olgunlaşmadı. Production için erken.

**5. assistant-ui**

- Chat UI bileşen kütüphanesi. Ama altta Vercel AI SDK kullanıyor — yani alternatif değil, üstüne katman.

**6. AI SDK Gateway katmanı için: LiteLLM**

- Python tarafında, FastAPI'ye gömülebilir.
- OpenAI-uyumlu tek endpoint'le 100+ provider'a erişim.
- Frontend'e şeffaf — provider switching'i backend halleder.

## Karşılaştırma

|Kriter|Vercel AI SDK|Custom thin layer|Provider SDK direkt|LangChain.js|
|---|---|---|---|---|
|Vibecoding uyumu|Zayıf (hızlı değişim)|Mükemmel|İyi|Çok zayıf|
|FastAPI uyumu|Protokol zorunlu|Tam serbest|Tam serbest|Karmaşık|
|Lock-in|Protokol seviyesinde|Yok|Provider'a (abstract edilebilir)|Framework'e|
|İlk kurulum hızı|En hızlı|Orta|Orta|Yavaş|
|Tool call UI|Hazır|Manuel|Manuel|Hazır ama karmaşık|
|Sürdürülebilirlik|Riskli (API kararsız)|Mükemmel (web standartları)|İyi|Riskli|
|Self-hosted Hetzner|Sorunsuz|Sorunsuz|Sorunsuz|Sorunsuz|

## Sizin felsefenize göre öneri

Next.js'i hangi gerekçelerle yasakladıysanız (hızlı değişim, AI'ın yanlış tahmin etmesi, framework belirsizliği), aynı gerekçeler Vercel AI SDK için de geçerli. Tutarlı olmak için **custom thin layer + LiteLLM** kombinasyonu sizin için en iyi yol:

- **Frontend:** `@microsoft/fetch-event-source` + Zustand + TanStack Query (non-stream istekler için) + DOMPurify + react-markdown + Shiki. Kendi `useStream` hook'unuz.
- **Backend:** FastAPI + LiteLLM. Provider switching backend'de, frontend agnostik.
- **CLAUDE.md kuralı:** "Vercel AI SDK kullanma, SSE pattern'imiz `lib/stream/useStream.ts`'de tanımlı, oraya uy."

**Vercel AI SDK ne zaman mantıklı:** Hızlı MVP, kısa ömürlü ürün, takım büyük ve dokümantasyon ihtiyacı yüksek. Sizin profilinizde (uzun ömürlü panel, vibecoding, kendi server'larınız) bu avantajlar sönüyor, dezavantajlar ağır basıyor.

**Ne kaybedersiniz:** Hazır tool call UI, `useObject` ile structured output streaming, generative UI gibi konularda 2-3 günlük kendi implementasyon yazma süresi. Ama bunlar bir kere yazıp `CLAUDE.md`'ye gömdüğünüzde sabitlenir — vibecoding için ideal.

OpenClaw + n8n otomasyonu içinde bu thin layer'ın boilerplate'ini tek komutla generate eden bir skill kurabilirsiniz; sonraki projelerde çoğaltma maliyeti sıfıra iner. İsterseniz o skill'in iskeletini ve `useStream` hook'unun mimari kararlarını (interface, state shape, abort pattern, retry stratejisi) çıkarayım.

---


İkisinin farkını ve hangi senaryoda gerektiğini somut örneklerle açıklayayım. Bunları sizin proje portföyünüzden örnekleyeceğim ki net olsun.

## WebSocket (socket.io-client) ne zaman gerekir?

WebSocket'in tek farkı: **sunucu, istemci sormadan veri itebilir ve bu iletişim çift yönlüdür**. LLM stream'i için SSE zaten yeterli (tek yönlü, sunucu → istemci). WebSocket gerçekten gerektiği yer şunlar:

**1. Uzun süren backend işlemlerinin canlı durumu** Segika'da kullanıcı "100 çalışan için SGK teşvik hesaplaması başlat" dedi. Hesaplama 3 dakika sürüyor. WebSocket olmadan: kullanıcı F5'liyor, polling yapıyor. WebSocket ile: "23/100 işlendi, 45/100 işlendi..." canlı görünür.

**2. Bildirimler (notification center)** [[Great Doers]]'ta yeni iş ilanı geldi, yeni teklif geldi, ödeme onaylandı. Kullanıcı sayfayı yenilemeden zil simgesinde rakam artar.

**3. Multi-tab/multi-device senkronu** Kullanıcı laptop'ta chat'i sildi, telefondaki Bestie Borders panelinde anında kaybolur. Olmadan: tab'lar arası tutarsızlık.

**4. Presence (kim online)** "Hüseyin şu an panelde", "Murat Bey 5 dakika önce çıktı". Hem sunucu push'ler hem istemci heartbeat atar — bu yüzden çift yönlü gerekiyor.

**5. AI ajan dashboard'u** arsam.net'te crawler ajanları çalışıyor: "Ajan-A şu an Hepsiemlak'ı tarıyor, 1240 ilan işledi". Multi-agent panelinde her birinin durumu canlı.

**6. Webhook event'lerinin canlı görünmesi** Stripe webhook geldi, n8n workflow tetiklendi — admin panelinde olay akışı kayar.

**7. Quota/token kullanımı canlı** AI panelde "Bu ay 240k token kullandın, limit 1M" göstergesi başka tab'de chat yapılırken anında azalır.

**SSE yeterli olduğu yerler:** LLM token stream'i, build log stream'i, dosya işleme ilerlemesi (tek yönlü). Bunlara WebSocket koymak abartı.

**Pratik karar:** Önce her şeyi SSE ile yapın. Aşağıdaki üç şarttan biri varsa WebSocket'e geçin:

- İstemci de sürekli sunucuya bir şey gönderiyor (heartbeat, cursor pozisyonu)
- Binary veri akışı var (ses, video)
- Aynı bağlantı üzerinden çoklu kanal abone olmak gerekiyor (pub/sub paterni)

## Yjs / Liveblocks ne zaman gerekir?

Bunlar **aynı doküman/state üzerinde aynı anda birden fazla kişinin değişiklik yaptığı** durumlar içindir. CRDT (Conflict-free Replicated Data Types) algoritmaları ile çakışmaları otomatik çözer. Eğer "kim son kaydederse o kazansın" stratejisi yeterliyse, bunlara gerek yok.

**Gerçek ihtiyaç senaryoları:**

**1. Prompt template editörü** Bestie Borders'ta Şilan ve Ayşegül aynı anda aynı prompt template'ini düzenliyor. Şilan başlığı değiştiriyor, Ayşegül paragrafı yazıyor. Yjs olmadan: biri kaydederken diğeri overwrite oluyor.

**2. Workflow/canvas editörü** arsam.net admin panelinde n8n benzeri node-based workflow var. Murat Bey ile siz aynı workflow'u düzenliyorsanız, kimin node'u nereye taşıdığı senkron olmalı. Yjs olmadan: gerçek anlamda mümkün değil.

**3. Knowledge base / wiki düzenleme** [[Great Doers]]'ta dahili wiki, takım birlikte yazıyor. Notion'un yaptığı şey. Single-editor'da Yjs gerekmez, multi-editor'da şart.

**4. Whiteboard / Figma benzeri** Strateji haritası, brainstorming canvas'ı. Birden fazla cursor aynı anda gezer.

**5. Annotation/markup** PDF veya AI çıktısı üzerinde takımca yorum eklemek (Google Docs comments gibi).

**6. Real-time form doldurma** Müşteri ile birlikte form dolduruyorsunuz (titanlar.com eğitim kayıt formu); siz açıklarken müşteri alanları görüyor.

## Çoğu SaaS paneli için ihtiyaç YOKtur

Açıkça söyleyeyim: **AI-first SaaS panelinizin %90'ı bunlara muhtaç değil.** Tipik kullanıcı kendi hesabıyla giriyor, kendi verisini düzenliyor. Çakışma yok. Sadece şunlardan birini yapacaksanız gerekir:

- Takım/multi-seat hesap içinde **shared editable state** var
- **Live cursor/presence** UX'i istiyorsunuz
- Aynı veriyi **aynı anda** birden fazla kullanıcı değiştirebiliyor

Sizin portföyünüzde bunlara aday olanlar: [[Great Doers]] (takım wiki'si olursa), Bestie Borders (Şilan + Ayşegül content takvimi), arsam.net admin (Murat Bey + siz dashboard'da).

## Yjs vs Liveblocks tercihi

Eğer kolaboratif özellik gerekiyorsa:

|Boyut|Yjs (+ y-websocket)|Liveblocks|
|---|---|---|
|Maliyet|Sıfır (self-host)|Aylık MAU bazlı ücret|
|Self-hosting|Hetzner'de sorunsuz|Mümkün değil (managed)|
|Vendor lock-in|Yok|Var|
|Kurulum süresi|1-2 gün|2-3 saat|
|Presence/cursor|Manuel|Hazır|
|Persistance|Kendiniz yazıyorsunuz|Hazır|
|Ölçeklenebilirlik|Sunucu kapasitesi|Onların sorunu|

Sizin Hetzner + self-hosted felsefenize göre cevap net: **Yjs**. Liveblocks "supabase yasak" mantığıyla aynı sebeple lock-in.

## Karar ağacı sizin için

- LLM token stream'i mi? → **SSE** (zaten elinizde)
- Background job durumu, bildirim, presence mi? → **WebSocket** ekleyin (ihtiyaç görünce, baştan değil)
- Takımca aynı dokümanı eş zamanlı düzenleme mi? → **Yjs** ekleyin (şartı oluşunca)
- Hiçbiri yok? → Hiçbirini eklemeyin, bağımlılık biriktirmeyin

İlk MVP'de **sadece SSE** ile başlayın. WebSocket'i ilk gerçek "background job ilerlemesi" senaryosunda devreye alın. Yjs'i ilk gerçek multi-editor senaryosunda. Spekülatif eklemeyin — her ikisi de ciddi mental model maliyeti getirir (event handling, reconnection, offline queue, conflict resolution).

---



{

React routet v7. Flowbite pro. Apache ecarts. Custom js gerektiğinde typescript. Custom css gerektiğinde scss. Vite. Pnpm. Zunstand TanStack. Vitest. Dropzone. Radix UI: Flowbite Pro’da olmayan/yetersiz olanlar. cmdk: command palette (zaten Radix tabanlı). sonner: toast. openapi-typescript veya Orval — FastAPI’nin /openapi.json çıktısından tip + TanStack Query hook üretimi DOMPurify — model çıktısında HTML varsa zorunlu (XSS yüzeyi) Animation: motion. WebSocket için socket.io-client, server-push gerekli.

---

Ai first saas panel için Headless frontend geliştirirken yukarıdakiler haricinde eksik ne? (Daha sonra backend fastapi olacak).:

AI-first SaaS paneli için stack'inde ciddi gediklerin var. Kategorilere ayırıyorum:

## Kritik eksikler

**Form yönetimi — en büyük gedik**

- **React Hook Form + Zod resolver**: Stack'inde form kütüphanesi yok. Flowbite Pro form bileşenleri sadece görsel; controlled state, validation, error boundary yok. RHF + Zod, OpenAPI'den ürettiğin tiplerle aynı schema'yı paylaşır (single source of truth).
- **Zod**: Zaten openapi-typescript için gerekli; ayrıca client-side runtime validation, env validation, store hydration validation için zorunlu.

**Mock altyapısı — backend yokken zorunlu**

- **MSW (Mock Service Worker)**: FastAPI gelmeden geliştirme yapacaksan, OpenAPI spec'inden MSW handler üretip Service Worker katmanında mock'la. Vitest'te de aynı handler'lar çalışır (test-first prensibine birebir uyar).
- **@mswjs/data**: Mock veri için ilişkisel model; faker yerine bunu tercih et.

## AI-spesifik katman

- **Streaming SSE**: socket.io-client server-push için iyi ama LLM streaming için yanlış araç. `@microsoft/fetch-event-source` veya `eventsource-parser` ekle. FastAPI tarafında `StreamingResponse` ile birebir.
- **Markdown render**: `react-markdown` + `remark-gfm` + `rehype-raw` (DOMPurify sonrası).
- **Kod highlight**: `shiki` (modern, VS Code grammar'ları, SSR-safe) — highlight.js eskidi.
- **Kod editör**: `CodeMirror 6` (Monaco ağır; CM6 modüler, mobile-friendly, headless'a uygun). Prompt editör, JSON editör, SQL playground gibi senaryolarda lazım.
- **Math render**: `KaTeX` (MathJax ağır).
- **Diyagram**: `mermaid` (model çıktısında flowchart üretirse).
- **Token sayma**: `gpt-tokenizer` veya `js-tiktoken` (kullanım/quota gösterimi).
- **Stick-to-bottom scroll**: `use-stick-to-bottom` hook — streaming chat UI için scroll davranışı problematiktir, kendin yazma.

## Yerelleştirme — TR + MENA hedefin için

- **i18next + react-i18next**: namespace bazlı, lazy load, ICU MessageFormat desteği. `react-intl` Apple ekosistemine yakın; i18next daha esnek.
- **RTL desteği**: Arapça hedefin varsa Tailwind'in `dir` variant'ı + Flowbite Pro RTL build'i.
- **`@formatjs/intl-localematcher`**: Locale negotiation.

## Auth ve oturum

- **`oidc-client-ts`** veya **TanStack Query auth pattern**: Auth kütüphanesi seçilmemiş. FastAPI'de JWT + refresh token kullanacaksan, interceptor + silent refresh stratejisi mimari karar gerektirir.
- **`jose`**: Client'ta JWT decode/verify (sadece okuma için, doğrulama backend).
- Token storage: `httpOnly cookie` öncelik; localStorage yasak (XSS yüzeyi).

## Tarih/zaman

- **`date-fns`** (tree-shakeable) veya **`dayjs`** + `dayjs/plugin/timezone`. Stack'inde yok; Istanbul ↔ MENA timezone'ları için kritik.
- **`@internationalized/date`** (react-aria'dan) — date picker kullanacaksan.

## Gözlemlenebilirlik

- **Sentry** (`@sentry/react`): Error tracking + performance + replay. Hetzner self-host opsiyonu var.
- **PostHog** (self-hosted, Hetzner'de Docker): Product analytics + feature flags + session replay + A/B test. Plausible'dan daha kapsamlı, SaaS panel için ideal.
- **`web-vitals`**: Core Web Vitals telemetri.

## Geliştirme deneyimi

- **Storybook 8** (Vite builder): Flowbite Pro üzerine custom bileşen kütüphanesi kuracaksan zorunlu. Vitest ile Component Story Format paylaşır.
- **Biome**: ESLint + Prettier yerine. Rust tabanlı, M4'te uçar; Vite + pnpm ekosistemine uygun.
- **Knip**: Unused export/dependency tespit.
- **`@tanstack/react-query-devtools`** + **Zustand devtools**: Zaten var ama config'lemek lazım.
- **`vite-plugin-checker`**: TypeScript + ESLint hatalarını dev server overlay'inde gösterir.

## UI tamamlayıcılar

- **`@dnd-kit/core` + `@dnd-kit/sortable`**: Flowbite Pro'da drag-and-drop yok (kanban, reorder, file tree). Radix'in de yok.
- **`vaul`**: Mobile drawer (Radix-uyumlu, Flowbite drawer mobil tarafta sınırlı).
- **`react-resizable-panels`**: Split-pane (kod editör + preview tarzı layout'lar).
- **`@floating-ui/react`**: Flowbite tooltip/popover yetmediğinde — Radix de bunu kullanır.
- **`react-hotkeys-hook`**: cmdk var ama global shortcut yönetimi ayrı.

## Dosya yönetimi

- **`tus-js-client`**: Dropzone küçük dosya için. Büyük dosya (model upload, dataset) için resumable upload protokolü; FastAPI tarafında `tuspy` ile eşleşir.
- **`browser-image-compression`**: Upload öncesi client-side resize.
- **`pdfjs-dist`**: PDF preview.

## Test katmanı genişletme

- **`@testing-library/react`** + **`@testing-library/user-event`**: Vitest var ama React testing util'leri ayrı.
- **Playwright**: E2E. Vitest unit, Playwright E2E ayrımı net olsun.
- **`@axe-core/playwright`**: Accessibility regression.

## Performans/build

- **`rollup-plugin-visualizer`**: Bundle analizi.
- **`vite-plugin-pwa`**: Offline-first istiyorsan (panel için tartışılır).
- **`partytown`**: Üçüncü taraf script'leri (analytics, intercom) worker thread'e taşır.

## State genişletmeleri

- **`zustand/middleware`**: `persist`, `subscribeWithSelector`, `devtools`, `immer` middleware'larını planla.
- **`idb-keyval`**: localStorage yetersiz kalırsa (büyük cache, offline draft).
- **`nuqs`**: URL state management — React Router v7 search params ile uyumlu, panel filtreleme/pagination için kritik (state decision matrix kuralında "URL state" kategorisi).

## Özet öncelik sırası

1. **Hemen**: RHF + Zod, MSW, i18next, date-fns
2. **AI katmanı kurulurken**: fetch-event-source, react-markdown, shiki, CodeMirror, gpt-tokenizer
3. **Beta öncesi**: Sentry, PostHog, Storybook
4. **Ölçeklenirken**: tus-js-client, Playwright, partytown

Asıl mimari karar olarak şunu netleştir: **OpenAPI-first mi yoksa schema-first mi?** Eğer FastAPI Pydantic modelleri tek kaynak olacaksa, Orval + Zod schema generation pipeline'ı CI'da (GitHub Actions) çalışsın; frontend tipleri elle yazılmasın, drift olmasın.

{ yönetimi — en büyük gedik • React Hook Form + Zod resolver: Stack’inde form kütüphanesi yok. Flowbite Pro form bileşenleri sadece görsel; controlled state, validation, error boundary yok. RHF + Zod, OpenAPI’den ürettiğin tiplerle aynı schema’yı paylaşır (single source of truth). • Zod: Zaten openapi-typescript için gerekli; ayrıca client-side runtime validation, env validation, store hydration validation için zorunlu.}

Form crud table İçin benim tech-stack’e göre daha güçlü bir şey yok mu bir çözüm daha başka alternatifler yok mu yani neden sadece bunu öneriyorsun:

Haklı bir itiraz. RHF "varsayılan güvenli seçim" çünkü ekosistem en büyüğü, ama senin stack'in için **daha iyi uyan alternatifler** var. Üç farklı katmanda alternatifleri açayım:

## Katman 1: Form state kütüphanesi

**TanStack Form (v1, 2024 stable) — senin için en doğru seçim**

Neden RHF değil:

- Zaten TanStack Query + TanStack Table kullanıyorsun. **Aynı paradigma, aynı mental model, aynı API tasarımı.** Vibecoding kuralın "deterministik, low-ambiguity pattern" — üç ayrı kütüphane öğrenmek yerine tek aile.
- TypeScript inference RHF'den ciddi şekilde güçlü. Deeply nested object'lerde, field array'de, discriminated union'larda RHF tip kaybeder; TanStack Form kaybetmez.
- Async validation native (RHF'de hack). FastAPI'ye username/slug uniqueness sorgusu atan form'lar için kritik.
- Framework agnostic (React, Vue, Solid, Angular adapter'ları) — React Router v7 + olası mobile (React Native) senaryosunda taşınabilir.
- Validator adapter sistemi: Zod, Valibot, Yup, ArkType — vendor lock yok.

Trade-off:

- Ekosistem RHF kadar büyük değil (Stack Overflow cevabı, blog yazısı sayısı). AI tooling'e (Claude, Cursor) RHF örnekleri daha fazla denk geliyor — vibecoding'de hafif sürtünme. Bu **gerçek bir maliyet**, ama API benzerliği bunu telafi ediyor.

**Conform — ikinci aday, niş senaryo**

React Router v7'nin native form actions + progressive enhancement yapısına bire bir uyar. Form state'i URL'de/server'da tutar, no-JS çalışır. AI panel için overkill ama public-facing form'larda (signup, contact, lead capture) güçlü. SaaS panel %95 authenticated SPA'sa atla.

## Katman 2: Validation kütüphanesi

**Zod yerine Valibot — değerlendirilmesi gereken**

- Bundle: Valibot ~5kb, Zod ~57kb. AI panel zaten code editor + markdown + mermaid yükleyecek; her kb değerli.
- Modüler, tree-shakeable (sadece kullandığın validator'lar bundle'a girer).
- API neredeyse birebir Zod ile aynı, migration ucuz.
- OpenAPI ekosisteminde: openapi-typescript Zod default ama Valibot adapter var; Orval henüz Zod-locked.

Karar kuralı: Orval kullanacaksan **Zod kal**, openapi-typescript + manuel schema yazacaksan **Valibot'a geç**.

**ArkType — performans ihtiyacı doğarsa**

Runtime'da TypeScript syntax'ı. Devasa schema'ları olan form'larda (50+ field config form'u) Zod'dan 100x hızlı parse. Niş ama AI config panelinde değerlendir.

## Katman 3 — asıl gözden kaçırdığın katman: CRUD orchestration

Bu en önemli kısım. "Form + Table + CRUD" tek bir kütüphane sorusu değil, **mimari pattern** sorusu. İki yol var:

### Yol A: Kendi CRUD pattern'ini kur

Bileşen kompozisyonu:

- **TanStack Query** — data fetch + mutation + optimistic update
- **TanStack Table** — list view
- **TanStack Form** — create/edit form
- **Orval** — OpenAPI'den hook üretimi (tek komut: query + mutation + zod schema)
- **nuqs** — URL'de filter/sort/pagination state

Bu yolun mantığı: Her resource için bir "feature folder" — `users/`, `projects/`, `prompts/` — içinde liste/detail/form bileşenleri. Generic `<CrudPage resource="users" />` yazma, çünkü AI panelde her resource'un farklı özel ihtiyacı var (bulk action, custom filter, nested form).

### Yol B: Refine.dev — değerlendirmediğin güçlü aday

[refine.dev](https://refine.dev/) — headless React framework, **tamamen CRUD için tasarlanmış**.

Neden senin stack'ine uyar:

- **Headless** — Flowbite Pro bileşenlerini olduğu gibi kullanırsın, Refine sadece data layer + hook'lar verir.
- **TanStack Query üzerine kurulu** — zaten kullandığın şey, soyutlama değil.
- React Router v7 native entegrasyon.
- REST/GraphQL/OpenAPI data provider — FastAPI için tek satır config.
- Built-in: auth, i18n, realtime, audit log, access control, useForm/useTable/useList hook'ları.
- Her şey override edilebilir; opinionated değil, "convention with escape hatch".

Neden olmayabilir:

- Bağımlılık ekler; vibecoding kuralın "framework değişiyor, AI eğitim verisi geç kalıyor" — Refine de bu riske girer. Next.js kadar büyük değil ama benzer kategori.
- 10-15 resource'lu basit panel için kazanç var; 3-4 resource'lu özel panel için fazla.

Karar kuralı: [[Great Doers]], Segika admin panel, arsam.net investor panel gibi **çok resource'lu, klasik CRUD ağırlıklı** paneller → Refine. AI playground, prompt builder, model config gibi **resource sayısı az ama her ekran özgün** olan paneller → kendi pattern'in.

## Yan eksiklikler (form+table'a özel)

- **Immer** — TanStack Query optimistic update'lerde immutable mutation. RHF reset pattern'inde de yardımcı.
- **react-jsonschema-form** veya **@autoform/react** — Dynamic form senaryosu (LLM provider config, plugin settings). Backend'den schema gelir, form otomatik render. AI panellerinde sık ihtiyaç.
- **`@tanstack/react-table` + `@tanstack/react-virtual`** — 1000+ satır panel için virtualization (TanStack Virtual). Zaten coding standard'ında "1000+ items virtualization" var; explicit setup gerekli.
- **dnd-kit Table integration** — reorderable rows (priority queue, board ordering).
- **`use-debounce`** veya kendi debounce hook'un — auto-save form pattern'i için.

## Senin için somut tavsiye

Üç katmanı şöyle bağla:

1. **OpenAPI-first pipeline kur**: FastAPI `/openapi.json` → Orval → Zod + TanStack Query hook'ları + tipler (GitHub Actions'ta CI step).
2. **Form**: TanStack Form (eğer ekosistem sürtünmesini kabul ediyorsan) veya RHF (Orval ile out-of-box). **Bu tek gerçek karar noktası.**
3. **CRUD shell**: Önce kendi pattern'ini kur (2-3 resource'ta). Resource sayısı 8'i geçince Refine'a geçiş ROI'sini hesapla.
4. **Validation**: Orval Zod ürettiği için Zod'da kal; bundle problemi olursa Valibot'a geç.

Asıl mimari karar tek satıra iniyor: **Orval var mı, yok mu?** Varsa: Zod + RHF (üretim hazır). Yoksa: Valibot + TanStack Form (stack tutarlılığı).

Hangi senaryoyu kuruyorsun — OpenAPI-first CI pipeline mı, yoksa frontend'de elle schema yazımı mı? Cevaba göre seçim netleşir.

## React Native, mobile app için gerekli.

TanStack Query — data fetch + mutation + optimistic update. refine.dev olmaz çünkü React Native ile mobile app geliştireceğiz. bulk action, custom filter, nested form için ne gerekli?. URL'de filter/sort/pagination state için ne gerekli?

yukarıdaki son önerilerin, ne eksik? seçeneklerim neler? tamamlayalım.:

React Native devreye girince **mimari karar tamamen değişir**. Önceki önerilerin yarısı web-only varsayımıyla yapılmıştı. Önce o çerçeveyi düzelteyim, sonra sorularına geçeyim.

## Önce mimari çerçeve: Web + RN ortak kod stratejisi

**Monorepo zorunlu hale geldi.** Turborepo + pnpm workspaces (M4'te ideal).

Paket bölümü:

- `packages/schemas` — Zod schema'ları (platform agnostic)
- `packages/api` — Orval generated hook'lar (TanStack Query)
- `packages/domain` — business logic, form transformations, filter DSL
- `packages/hooks` — paylaşılan hook'lar (useFilterState, useBulkSelection, vb.)
- `apps/web` — Vite + RR7 + Flowbite Pro
- `apps/mobile` — Expo + React Navigation + (NativeWind veya Tamagui)

**Platform agnostic olanlar** (her iki app paylaşır): TanStack Query, TanStack Form, Zod/Valibot, date-fns, Zustand (storage adapter farklı), i18next, socket.io-client, Orval output.

**Platform-specific** (paylaşılamaz):

- UI bileşenleri (Flowbite ↔ NativeWind/Tamagui)
- TanStack Table ↔ FlashList/FlatList
- nuqs ↔ React Navigation params
- Dropzone ↔ expo-document-picker
- localStorage ↔ MMKV
- DOMPurify ↔ gereksiz (RN'de DOM yok)

Bu nedenle aşağıdaki tüm önerilerde "ortak abstraction + iki adapter" pattern'ini düşün.

## Soru 1: Bulk action

Üç katmanlı problem; tek kütüphane yok, pattern var.

**Selection state**

- TanStack Table built-in: `enableRowSelection`, `getSelectedRowModel`. Web tarafı bu.
- RN tarafında manuel: `Map<id, boolean>` state, FlashList renderItem'da selection check.
- **Paylaşılan**: `packages/hooks/useBulkSelection` — id set + toggle/selectAll/clear/invertSelection API'si. İki platform aynı hook'u import eder, sadece UI farklı.

**Bulk mutation pattern**

- TanStack Query `useMutation` ile **batch endpoint** çağrısı — `POST /resources/bulk` veya `PATCH /resources?ids=...`. FastAPI tarafında tek endpoint, N+1 önle.
- Optimistic update: tüm seçili kayıtları aynı anda cache'te güncelle, rollback için snapshot tut.
- **Eşik kuralı**: 100+ kayıt için sync mutation atma. Job queue + polling/SSE pattern'i kur (FastAPI BackgroundTasks veya Celery → frontend'de progress UI).

**Onay/güvenlik**

- Destructive bulk action için type-to-confirm pattern (`"DELETE 42 items" yazın`).
- Kütüphane gerekmez; Radix Dialog + RHF/TanStack Form ile pattern.

**Action bar UI**

- Web: Sticky bottom action bar (Flowbite Pro'da hazır var ama yeterli değil; kendi component'ini kur).
- Cross-platform abstraction: `<BulkActionBar selectedCount actions />` — props aynı, render farklı.

**Edge case'ler**

- Filtreli "select all across pages" — sadece görünen N satırı mı, tüm filtreyi mi seçiyor? Backend'in filter query'yi kabul ettiği bulk endpoint gerekli (`POST /bulk?filter=...`).
- Permission per row — bazı satırlar etkilenmeyebilir; partial success UI'ı.

## Soru 2: Custom filter

İki sınıf var: **basit filter** (column-level) ve **gelişmiş filter** (query builder).

**Basit filter**

- TanStack Table `columnFilters` API — built-in.
- Server-side için filter state'i URL/navigation'a serileştir → API query param'a çevir → FastAPI `Depends` ile parse.
- Cross-platform hook: `packages/hooks/useFilterState<TSchema>` — Zod schema alır, parse/serialize yapar.

**Gelişmiş query builder** (AND/OR, nested groups, multi-operator)

- **`react-querybuilder`** — en olgun web kütüphanesi. JSON output verir (Zod ile validate edilebilir), SQL/MongoDB/Elastic format'ına convert edebilir.
- RN'de native query builder yok; kendi UI'ını kurarsın. Ama **filter state şeması paylaşılır** — sadece UI farklı. JSON Logic standardı (`json-logic-js`) bu noktada faydalı: hem builder hem evaluator paylaşılır.

**Fuzzy/local search**

- `@tanstack/match-sorter-utils` — client-side fuzzy filter, RN'de de çalışır (DOM bağımlılığı yok).
- Büyük dataset için `fuse.js` veya `minisearch` (her ikisi platform agnostic).

**Saved filter / preset**

- "View" kavramı — kullanıcı filter kombinasyonunu kaydeder. Backend tarafında `UserView` modeli, frontend'de dropdown. AI panellerinde bu çok değerli (örnek: "Pahalı promptlar", "Bu hafta failed runs").

**Command palette filter**

- cmdk (zaten stack'inde) ile filter input — Linear/Notion tarzı. Power user için.

## Soru 3: Nested form

Bu en zor problemli. Üç boyut: state, validation, UI.

**State**

- TanStack Form: `<Field name="items">` + `mode="array"` + `pushValue/removeValue/swapValues` API.
- RHF: `useFieldArray` (deeply nested'da type kaybeder, dikkat).
- Cross-platform: TanStack Form aynı API'yi RN'de de verir.

**Validation**

- Zod `z.array(z.object({...}))` — temel.
- Discriminated union: `z.discriminatedUnion("type", [...])` — koşullu alanlar (örnek: form item'ının type'ına göre farklı validation).
- Recursive: `z.lazy()` — tree/folder yapıları (kategori → alt kategori → alt alt kategori).
- **Async validation**: TanStack Form'un async validator API'sini kullan (debounce dahil).

**UI pattern**

- Bileşen hiyerarşisi: `<FormSection>` → `<FormArray>` → `<FormRow>` → `<FormField>`.
- Drag-to-reorder: web'de `@dnd-kit/sortable`, RN'de `react-native-reorderable-list` veya `react-native-draggable-flatlist`. Sürtünme: API farklı, abstraction kurulamıyor — her platform için ayrı bileşen.
- Conditional fields: `watch()` + render logic. State machine karmaşıklaşırsa **XState** veya **Zustand** ile form state'i dışarı taşı.

**Dynamic schema (backend-driven)**

- Backend'den JSON Schema gelir → form otomatik render.
- **`@autoform/react`** (Zod schema → form, RHF + TanStack Form adapter) — RN destekli mi: kısmi.
- **`react-jsonschema-form`** — web-only, RN'de çalışmaz.
- RN için karşılığı: kendi schema → component map'ini kur. Bu, AI provider config gibi senaryolarda (her LLM provider farklı config alanı) çok değerli. `packages/domain/schemaToFormFields` paylaşılır, platform-specific render.

**Multi-step wizard / nested step**

- TanStack Form built-in step yok; manuel state.
- **XState** veya `@xstate/store` — karmaşık wizard için (örnek: signup → org create → invite team → first project — geriye dönüş, koşullu adım).
- Basit wizard'a XState overkill; sadece 5+ step + branching varsa değerli.

**Field-level performans**

- TanStack Form ve RHF her ikisi de field-level re-render. 100+ field'lı formlarda farklı kütüphane gerekmez, ama React Compiler (React 19) açık olsun.

## Soru 4: URL'de filter/sort/pagination state

**Web tarafı**

- **`nuqs`** — en güçlü seçim. React Router v7 ile native. Özellikleri:
    - Type-safe (parser API: `parseAsInteger`, `parseAsArrayOf(parseAsString)`, `parseAsJson(zodSchema)`).
    - Batch updates (multiple param tek render'da).
    - Throttle/debounce desteği.
    - SSR-safe (RR7'nin SSR moduyla uyumlu).
- **Alternatifler**:
    - `react-router-dom` `useSearchParams` — temel, tipsiz, manuel parse.
    - `use-query-params` — eski, olgun, ama nuqs daha modern.
    - **TanStack Router** — kendi search param sistemi tip güvenli ve mükemmel, **ama** sen React Router v7 seçtin; geri dönüş için yeterli neden olmalı. (TanStack ekosistemi tutarlılığı + Zod ile native search validation; yine de bu noktada migration maliyeti yüksek.)

**RN tarafı**

URL kavramı yok; **navigation state + deep link** var.

- React Navigation `useRoute().params` — temel.
- Deep link: `Linking` API + URL scheme tanımı. Web URL'lerini app URL'lerine map'le (`example.com/users?status=active` ↔ `app://users?status=active`).
- **Paylaşılan abstraction**: `packages/hooks/useFilterUrlState`
    - Web implementation: nuqs adapter.
    - RN implementation: navigation params adapter.
    - Aynı API: `const [filter, setFilter] = useFilterUrlState(filterSchema)`.
    - Schema Zod ile tanımlı, iki adapter aynı schema'yı parse eder.

**Pagination state seçenekleri**

- URL-based (paylaşılabilir link) — kullanıcı linki kopyalayıp gönderebilir.
- Cursor-based (infinite scroll) — TanStack Query `useInfiniteQuery`. RN listelerde varsayılan.
- Karar kuralı: Tablo → URL page/pageSize. List/feed (mobile) → cursor.

**Sort state**

- `sort=name:asc,created:desc` formatı — tek satırda multi-sort. nuqs custom parser ile.
- FastAPI tarafında `Depends(SortParams)` ile parse.

## Eksik kalan diğer katmanlar (atladığım/önerilemeyenler)

**Cross-platform storage**

- Web: IndexedDB (`idb-keyval`) + localStorage.
- RN: **MMKV** (`react-native-mmkv`) — AsyncStorage'dan 30x hızlı.
- Zustand `persist` middleware için her platform için storage adapter — kendin yazarsın, soyutlama `packages/hooks/createPersistedStore`.

**Offline-first**

- TanStack Query `persistQueryClient` + storage adapter.
- Mutation queue: offline'dayken yapılan mutation'lar replay edilir. `@tanstack/query-async-storage-persister` (RN), `@tanstack/query-sync-storage-persister` (web).
- AI panel için kritik mi: prompt draft'ları, conversation history offline okuma → evet.

**Network durumu**

- Web: `navigator.onLine` + custom hook.
- RN: `@react-native-community/netinfo`.
- Abstraction: `useNetworkStatus()` — iki platformda aynı API.

**Permission/RBAC**

- **CASL** (`@casl/react`) — ability tabanlı, JSON serialize edilebilir, backend'den gelir. RN destekli.
- Alternatif: kendi `useCan(action, resource)` hook'u + Zustand store.
- AI panelinde model erişim hakları (premium model'e free user erişemez) için zorunlu.

**Form draft / auto-save**

- Yarım kalan form, app kapanınca/sayfa değişince kaybolmasın.
- TanStack Form `formApi.subscribe()` → debounced storage write.
- Platform agnostic: `useFormDraft(formId)` hook'u.

**Cross-platform file upload**

- Web: Dropzone (zaten var).
- RN: `expo-document-picker` veya `expo-image-picker`.
- Resumable: **tus-js-client** her iki platformda çalışır. AI panel'de model fine-tuning dataset upload için kritik.
- Abstraction: `useFileUpload({ resumable: true })` — alt katmanda platform-specific picker.

**Type-safe i18n**

- `i18next` + `react-i18next` — hem web hem RN.
- **`typesafe-i18n`** veya i18next'in typescript augmentation — `t("users.create")` autocompletion + missing key compile error.
- ICU MessageFormat plural/gender — Türkçe + Arapça için kritik.
- AI panelinde model output dili ≠ UI dili; locale switch state'i Zustand'a koy.

**Crypto/IDs**

- `nanoid` — cross-platform, RN destekli (`nanoid/non-secure` RN tarafında).
- UUID v7 (time-ordered) — Postgres index dostu, backend ile koordineli.

**Error tracking**

- Sentry hem web hem RN destekler — tek vendor.
- Source map upload CI'da (GitHub Actions).

**Realtime layer kararı**

- socket.io-client zaten stack'inde, her iki platformda çalışır.
- **Alternatif**: Server-Sent Events (`fetch-event-source`) — tek yönlü, daha basit. AI streaming için zaten gerekli. WebSocket'i sadece presence/collab için kullan.
- **Yan kütüphane**: **PartySocket** (Cloudflare) veya **Liveblocks** (collab) — niş.

**Push notification (RN için)**

- `expo-notifications` — RN.
- Web push: Service Worker + Push API + VAPID. Cross-platform değil; iki ayrı implementation.

**Animation cross-platform**

- Web'de **Motion** (zaten var) — RN'de çalışmaz.
- RN: **`react-native-reanimated`** + **`moti`** (Motion benzeri API).
- API'leri ayrı; animation logic'i paylaşamazsın, sadece design token'lar (duration, easing) paylaşılır.

**Date picker**

- Web: Flowbite Pro datepicker veya `react-aria` `useDatePicker`.
- RN: `@react-native-community/datetimepicker` veya `react-native-date-picker`.
- Shared layer: tarih parse/format/timezone — date-fns.

**Form analytics / behavior tracking**

- PostHog hem web hem RN SDK var — form completion rate, abandon point, field error frequency.
- AI panelinde "prompt builder'ı kimse tamamlamıyor, hangi step'te kalıyor" gibi sorulara cevap.

## Karar gerektiren noktalar

1. **Monorepo runner**: Turborepo mu, Nx mi? Turborepo sade, Nx kapsamlı. Vibecoding'de Turborepo daha tahmin edilebilir.
2. **RN UI kütüphanesi**: NativeWind (Tailwind paylaşımı, Flowbite token'larını yansıtır) → güçlü uyum. Tamagui (kendi compiler, çok hızlı, ama farklı paradigma). gluestack-ui (NativeWind tabanlı, hazır bileşenler).
3. **State machine ihtiyacı**: Wizard/onboarding/agent flow'lar için XState gerekli mi, Zustand yetiyor mu? [[AI agent]] state'i karmaşıksa XState yatırımı değer.
4. **JSON Logic vs custom DSL**: Filter ve permission için ortak bir kural dili (JSON Logic) seçersen, backend de aynı evaluator'ı kullanır.
5. **OpenAPI generator**: Orval mı, Kubb mu, openapi-typescript + manuel? Kubb daha modüler ve RN-friendly; Orval daha olgun ama bazı RN edge case'leri var.

Hangi karar noktasından başlayalım — monorepo iskeletini mi netleştirelim, yoksa shared schema/filter DSL katmanını mı?


# Çelişki Analizi ve Çözüm Senaryoları

## Stack'inizdeki Platform Çelişkileri

Listelediğiniz stack web odaklı; React Native ile aynı kod tabanından iOS/Android çıkartmak için bazı kütüphaneler ya değiştirilmeli ya da hiç çalışmaz. Kategorik dökümü:

**Sadece web (RN'de çalışmaz):**

- Flowbite Pro — Tailwind + HTML/DOM. React Native'de DOM yok, sadece `View`/`Text`/`Pressable` primitive'leri var.
- Radix UI — `@radix-ui/react-*` Portal, FocusScope, Slot için DOM API'larına bağlı.
- cmdk — DOM tabanlı command palette. RN'de eşdeğeri yok (mobil UX'i zaten farklı).
- SCSS — RN StyleSheet sistemine girmez.
- DOMPurify — `window` gerektirir; RN'de HTML render zaten yok.
- react-dropzone — HTML5 File API + drag/drop, mobilde kavram olarak yok.
- sonner — DOM toast.
- Apache ECharts — canvas/SVG, RN versiyonu (`@wuba/react-native-echarts`) Skia/SVG backend ister, full parity yok.
- Vite — web bundler. RN Metro kullanır; Vite RN derleyemez.
- motion (motion/react) — web odaklı; RN'de Reanimated.
- React Router v7 — web. RN için Expo Router veya React Navigation.
- Vitest — web/Node ortamı; RN Jest ekosisteminde.

**Universal (ikisinde de çalışır):**

- Zustand, TanStack Query, TanStack Table (headless), Zod, React Hook Form, socket.io-client, openapi-typescript/Orval, Sentry.

## Üç Gerçekçi Senaryo

**Senaryo A — Universal Tek Kod (Expo + Tamagui)**

Pure "write once" hedefi. Stack değişimi:

- `Vite → Expo (SDK 51+) + Metro`
- `React Router v7 → Expo Router` (web + native universal routing)
- `Flowbite Pro + Radix → Tamagui` veya Gluestack UI v2 (Tailwind-like, native + web compile)
- `SCSS → NativeWind` (Tailwind RN portu, web compat var)
- `motion → react-native-reanimated + moti`
- `ECharts → Victory Native XL` veya `react-native-gifted-charts` (Skia tabanlı)
- `cmdk → kendi yapı` (RN'de modal + FlashList)
- `sonner → burnt` veya `react-native-toast-message`
- `Dropzone → expo-document-picker + expo-image-picker`
- `Vitest → Jest + @testing-library/react-native`
- `DOMPurify → react-native-markdown-display` (markdown native render)

Trade-off: Flowbite Pro lisans yatırımı çöp olur. Admin panel data-table/komut paleti UX'i mobil kısıtlarına bağlanır.

**Senaryo B — Monorepo, Paylaşılan Çekirdek, Iki UI (önerim)**

`pnpm workspace` ile:

```
packages/
  shared/      # types (OpenAPI), api-client, query hooks, zustand stores, zod schemas, business logic
  web/         # mevcut stack: Vite + Flowbite Pro + Radix + ECharts + cmdk
  mobile/      # Expo + Tamagui/Gluestack + Reanimated + Victory Native
```

Paylaşılanlar: TanStack Query hook'ları, Zustand store'lar, Zod şemaları, Orval/openapi-typescript tipleri, auth/permission mantığı (CASL), validation, API client.

Trade-off: Iki UI maintain edilir. Avantaj: web admin paneli tam featured, mobil zaten farklı UX (read, approve, chat, alert) gerektirir.

**Senaryo C — Web + PWA, Native Sonra**

Web'i PWA'ya çevir (`vite-plugin-pwa`), iOS 17.4+ ve Android'de installable. Native uygulama gerçekten gerekene kadar erteler. AI panel için: push notification ve background sync limitleri kritikse Capacitor wrapper.

## AI-First SaaS Panel Için Eksikler (Üç Senaryoda da)

Mevcut listeden bahsetmediğiniz fakat gereken katmanlar:

**Form ve veri:**

- `react-hook-form` + `@hookform/resolvers/zod` — Zustand form için değil, server-bound form için zorunlu
- `@tanstack/react-table` — headless table, ikisinde de çalışır
- `@tanstack/react-virtual` (web) / `FlashList` (native) — büyük liste virtualization
- `tus-js-client` — resumable upload (AI dosya uploadları için)

**AI-spesifik:**

- Streaming: web'de native `fetch` + ReadableStream, RN'de `react-native-sse` (EventSource polyfill) çünkü RN fetch streaming desteği zayıf
- Markdown: web `react-markdown` + `remark-gfm`, RN `react-native-markdown-display`
- Code highlight: web `shiki`, RN için `react-native-syntax-highlighter`
- Token/cost tracking ve tool/MCP UI: kendi yapınız (TanStack Query meta + Zustand)
- Chat UI primitifleri: `assistant-ui` (web) veya headless yapı

**Auth ve yetki:**

- `better-auth` (TS-native, FastAPI ile JWT/session uyumlu) veya kendi JWT + refresh akışınız
- `casl` veya `@casl/ability` — permission matrix (web + RN çalışır)
- HttpOnly cookie + CSRF (web), Keychain/SecureStore (native) — token storage farklı

**URL state (web tarafı):**

- `nuqs` — type-safe URL search params (filter/sort/pagination için TanStack Query ile mükemmel)
- RN tarafında URL state kavramı yok; Zustand + Expo Router params

**Bulk action, nested form, custom filter:**

- Bulk: TanStack Table row selection state + custom toolbar bileşeni (refine.dev kullanmadan kendi yapı)
- Nested form: React Hook Form `useFieldArray` + Zod recursive schema
- Custom filter: TanStack Table column filters + nuqs URL sync

**Observability ve kalite:**

- Sentry (web + RN paketleri ayrı, aynı projeye bağlanır)
- PostHog (web + RN SDK var)
- Feature flags: GrowthBook veya Unleash (universal)
- `react-error-boundary`

**Tooling:**

- Biome (lint + format, ESLint+Prettier'dan hızlı, mevcut JS/TS standartlarınızla uyumlu)
- Husky + lint-staged + commitlint (conventional commits)
- Storybook (web) — design system docs; RN için ayrı Storybook RN
- E2E: Playwright (web), Maestro (native)
- MSW — API mock, ikisinde de çalışır, test-first yaklaşımınız için kritik

**i18n:**

- `react-i18next` veya `lingui` — ikisinde de çalışır
- Locale yönetimi RN'de `expo-localization`

## Tavsiyem

AI-first SaaS admin paneli + mobil çıktı kombinasyonu için **Senaryo B**'yi seçin:

Sebepler:

1. Flowbite Pro lisansınızı korur.
2. Admin paneli (data-heavy table, command palette, multi-pane form) desktop'ta daha iyi çalışır; mobilde nadiren full feature gerekir.
3. Mobil AI panelin gerçek değeri: bildirim, hızlı onay, chat erişimi, dashboard widget — farklı UX, ortak component zaten optimal değil.
4. Shared core katmanı (types, hooks, stores, validation) Orval/openapi-typescript ile FastAPI'den otomatik üretildiği için "ikinci codebase" maliyeti maintain'de düşük.
5. Test piramidi temiz: `shared` Vitest, `web` Vitest + Playwright, `mobile` Jest + Maestro.

Eğer mobil ana ürün olacaksa ve admin paneli mobil-uyumlu kalabilirse, Senaryo A'ya geçin — ama Flowbite Pro'yu Tamagui veya Gluestack UI v2 ile değiştirmek zorunda kalırsınız.

Devam etmemi istediğiniz yön: Senaryo B için monorepo iskeletinin paket sınırları ve test/db planlamasını detaylandırayım mı?


"Sadece web (RN'de çalışmaz)" başlığı altındaki kütüphaneler, **yalnızca tarayıcı ortamında çalışan** kütüphanelerdir. React Native (RN) ortamında çalışmazlar.

## Neden?

React Native'in mimarisi tarayıcıdan tamamen farklı:

- Tarayıcı: HTML + CSS + DOM + `window` + `document` API'ları var. JS bunlara erişerek render eder.
- React Native: HTML yok, DOM yok, CSS yok. Bunun yerine iOS/Android'in native UI bileşenleri (`UIView`, `android.view.View`) JS köprüsüyle kontrol edilir. `View`, `Text`, `Pressable`, `Image` gibi RN primitive'leri var.

## Pratik Sonuç

Bir kütüphane şunlardan herhangi birine bağımlıysa RN'de çalışmaz:

- `document.querySelector`, `window.addEventListener`, `<div>`, `<input>` gibi DOM API'ları
- HTML elementleri JSX olarak (`<div className="...">`)
- CSS class'ları, CSS dosyaları, SCSS, Tailwind utility'leri (NativeWind hariç)
- Browser-only Web API'ları (File API, drag/drop event'leri, IntersectionObserver, vb.)

## Listelediğim Kütüphaneler Bu Yüzden Düşer

- Flowbite Pro — `<div className="flex...">` HTML üretir, RN'de HTML yok.
- Radix UI — `document.body`'ye Portal açar, DOM'a focus trap koyar.
- cmdk — keyboard event'leri DOM'dan dinler.
- SCSS — CSS derler, RN CSS okumaz.
- DOMPurify — `document.createElement` ile HTML sanitize eder; RN'de HTML render etmediğiniz için zaten gereksiz.
- react-dropzone — HTML5 `dragover`/`drop` event'leri kullanır, mobilde böyle bir kavram yok.
- Apache ECharts — `<canvas>` veya `<svg>` DOM elementine çizer.
- Vite — browser bundle üretir; RN, Metro bundler kullanır.

## Tersi de Geçerli

RN'e özgü kütüphaneler de webde çalışmaz (örneğin `react-native-reanimated` native thread'de animasyon yapar; React Native Web içinde sınırlı çalışır).

Bu yüzden "tek kod tabanı" hedefi için **her iki ortamda da çalışan** kütüphaneleri seçmek gerekir: Tamagui, Gluestack UI, NativeWind, react-native-svg, Solito gibi universal araçlar. Senaryo A bunu yapar; Senaryo B ise web ve mobil için ayrı UI kütüphaneleri kullanır, sadece iş mantığını paylaşır.

yahu bana bir kere geliştirince, bir kerede web saas mobile herşeyi kapsayan tam bir bütüncül tech_stack gerekli.?:

# Tek Kod Tabanı — Web + iOS + Android Bütüncül Stack

Tamamen yapılabilir. Bedeli net: **Flowbite Pro, Radix, cmdk, sonner, ECharts, Vite, React Router v7, SCSS, Dropzone, motion, Vitest** listenden çıkar. Bunlar web-only. Yerlerine universal eşdeğerleri girer. Karar verilince geri dönüş olmaz; o yüzden kararlı bir set veriyorum.

## Temel (Foundation)

|Katman|Seçim|Sebep|
|---|---|---|
|Runtime + Build|**Expo SDK 51+**|iOS, Android ve web için tek toolchain. Metro bundler.|
|Routing|**Expo Router** (file-based)|Universal; web'de URL, native'de stack/tab/modal.|
|Dil|TypeScript strict, `noUncheckedIndexedAccess`|Mevcut standardınız.|
|Paket|pnpm + workspace|Mevcut tercih. Expo ile çalışır (`.npmrc` ayarı gerekir).|
|Monorepo (opsiyonel)|Turborepo|Eğer API/shared/app ayrı paket olacaksa.|

## UI Sistemi (Flowbite Pro + Radix + SCSS yerine)

**Tamagui** — tek tercih.

- Compile-time optimizer (CSS web'de, StyleSheet native'de üretir).
- Hazır component set: Button, Sheet, Dialog, Popover, Toast, Tooltip, Form primitives, Select, RadioGroup.
- Token sistemi (color, space, size, radius, font) — Tailwind-benzeri ama universal.
- Animation driver Reanimated'e bağlanır.
- Themes (light/dark/custom) tek API.

NativeWind alternatif olabilir (Tailwind utility class'ları) ama Tamagui'nin built-in component'leri sıfırdan yazma yükünü kaldırır. AI panel için bu kritik.

İkonlar: `@tamagui/lucide-icons` (varsayılan). Phosphor priority kuralın için `phosphor-react-native` + `@phosphor-icons/react` ikisinin etrafına ince wrapper component yaz — Tamagui'nin `styled()` API'sıyla universal `<Icon name="..." />` üret.

## Veri Katmanı

|İhtiyaç|Seçim|
|---|---|
|Server state|TanStack Query|
|Mutation + optimistic|TanStack Query mutations|
|Client state|Zustand (persist middleware)|
|Form|React Hook Form + `@hookform/resolvers/zod`|
|Validation|Zod (FastAPI Pydantic ↔ Zod paralel kalır)|
|Table (headless)|TanStack Table|
|Liste virtualization|`@shopify/flash-list` (native + web) — TanStack Virtual yerine universal|
|URL state (web)|nuqs (Expo Router params ile birlikte custom hook)|

## API Sözleşmesi (FastAPI bağlantısı)

|Adım|Araç|
|---|---|
|Tip üretimi|**Orval** — `/openapi.json` → TS tipleri + TanStack Query hook'ları|
|Mock|MSW (universal v2) — test ve dev'de FastAPI hazır olmadan çalışmak için|
|HTTP client|`ky` veya `axios` (universal); Orval `ky` adapter destekler|
|Streaming (SSE/AI)|Custom hook: web'de `fetch` + `ReadableStream`, native'de `react-native-sse`. Tek API: `useStreamingMutation()` wrapper.|
|WebSocket|`socket.io-client`|

## Auth + Yetki

- **better-auth** (TS-native, FastAPI ile token akışı uyumlu) veya FastAPI tarafında kendi JWT + refresh, frontend'de sadece tüketici.
- Token storage abstraction:
    - Web: httpOnly cookie (FastAPI set eder) + memory fallback
    - Native: `expo-secure-store`
- Permission: **CASL** (universal). RBAC matrix shared paket içinde.

## Grafik (ECharts yerine)

- **Victory Native XL** (Skia tabanlı, native + web çalışır) birincil seçim.
- Karmaşık dashboard chart'ları için: `react-native-skia` + custom (analytics view).
- ECharts'ın özellik genişliği yok; AI panel için gereken bar/line/area/pie + sparkline kapsama girer.

## Animation

- Tamagui `animation` prop (driver: Reanimated)
- Düşük seviye için `react-native-reanimated` + `moti` (Tamagui Moti'yle entegre çalışır)

## Dosya Upload (Dropzone yerine)

Tek hook: `useFileUpload()`.

- Native: `expo-document-picker` + `expo-image-picker`
- Web: native `<input type=file>` + `react-native-web` üzerinden drop zone simulasyonu (Tamagui `<View onDragOver>` web prop'larını kabul eder)
- Resumable: `tus-js-client` (universal)

## AI-Özel Katman

|Bileşen|Seçim|
|---|---|
|Streaming chat|Custom `useStreamingChat` hook (yukarıdaki SSE wrapper)|
|Markdown render|`react-native-markdown-display` — RN Web'de de çalışır|
|Code highlight|`react-native-syntax-highlighter` (universal)|
|HTML sanitization|Gerekmez (markdown'dan native render); inline HTML varsa `sanitize-html` (universal, Node + browser, RN'de polyfill ile)|
|Tool/MCP UI|Tamagui Sheet + custom; assistant-ui'ye bağımlanma|
|Token/cost tracking|Zustand + TanStack Query meta|

## Test (Vitest yerine)

|Seviye|Araç|
|---|---|
|Unit (shared logic)|Jest + ts-jest|
|Component (universal)|Jest + `@testing-library/react-native`|
|E2E web|Playwright|
|E2E mobile|Maestro|
|API mock|MSW v2|

**Test-first kuralın gereği:** her feature için sıra → `(1) test plan` → `(2) Prisma şema değişikliği` → `(3) Zod şema + Orval regen` → `(4) component/hook`.

## Observability

- **Sentry** (web + native paketleri, tek DSN, error correlation)
- **PostHog** (web + native SDK, feature flag + analytics)
- Pino (Node tarafı/FastAPI değil, ama OpenClaw worker'lar için)

## i18n

- **Lingui v4** — TS-first, universal, build-time extraction. `expo-localization` ile cihaz dili.

## Stil Token & Tasarım

SCSS gider, ama mental model korunur:

- Tamagui `tokens` config = SCSS variable eşdeğeri (color, space, size, radius)
- Tamagui `themes` = light/dark/brand variant
- Min font-size 1rem, weight 300 kuralın → Tamagui token'larında `body.size = 16, body.weight = 300` olarak sabitlenir.

## Backend (Bağlantı)

Mevcut tercihinizle uyumlu:

- FastAPI + Prisma (Python Prisma client) + PostgreSQL
- n8n: webhook-driven business automation
- OpenClaw: agent/skill orchestration (FastAPI'ye yan worker olarak bağlanır)
- Redis: queue (Dramatiq veya Arq) + cache

## Build & Deploy Akışı

|Hedef|Süreç|
|---|---|
|Web|`expo export -p web` → static dist → Docker image → Hetzner (Caddy/Nginx reverse proxy)|
|iOS|EAS Build (yönetilen) veya self-hosted `react-native-cli` + fastlane → TestFlight → App Store|
|Android|EAS Build → Play Console internal → production|
|CI/CD|GitHub Actions: `pnpm install` → `pnpm test` → `pnpm typecheck` → `expo export -p web` + EAS build trigger (tag'e bağlı)|
|Secrets|GitHub Actions Secrets + Hetzner'de `.env` (sops-encrypted)|

EAS yerine self-hosted istersen: Mac mini runner (build farm) + fastlane match for code signing. Apple Developer Account ve provisioning profile maliyet/yönetim kalemi olarak hesaba katılmalı.

## OpenClaw + n8n Entegrasyon Noktaları

Otomasyon tercihin gereği:

1. **Dev workflow agent (OpenClaw)**: Feature branch açıldığında SOUL.md'ye göre test plan iskeleti + Prisma migration draft üretir.
2. **n8n: build pipeline trigger**: Git tag push → n8n webhook → EAS build trigger + Slack/WhatsApp bildirimi (Hüseyin'e WhatsApp).
3. **OpenClaw: code review skill**: PR açıldığında diff'i okur, JS/TS coding standards (max 20 line function, max 200 line file, no `var`/`any`) kontrolü.
4. **n8n: release automation**: Production deploy sonrası changelog → Obsidian "generals" vault'a markdown + müşterilere mail.
5. **OpenClaw: error triage**: Sentry webhook → OpenClaw classify (severity + suspected module) → GitHub issue otomatik.

## Kritik Trade-Off'lar (Üstünü Çizmedim, Bilgin Olsun)

1. **Flowbite Pro lisansı çöp olur.** Universal yolun bedeli. Tamagui ile sıfırdan token + component kurulur ama bir kerelik iş.
2. **Web admin paneli mobile-first kısıtlarıyla yaşar.** Data-heavy table'lar Tamagui ile yapılır ama Flowbite Pro'nun çıplak yoğunluğunu vermek için custom CSS-in-Tamagui katmanı yazılır.
3. **Vite hızı kaybedilir.** Metro daha yavaş; ama Expo Router DX bunu telafi eder.
4. **Apple Developer + App Store inceleme süreci** üretim takvimine girer (ortalama 1-7 gün ilk submission).
5. **Tamagui öğrenme eğrisi** ekibinizdeki herkes (sen + Hüseyin) için ~1 hafta. Documentation iyi ama opinionated.

## Önerilen Sıra

1. `apps/native` (Expo) + `apps/web-export` aynı kod tabanı içinde, `packages/shared` (api-client, hooks, schemas, types) ayrı.
2. Test piramidini önce kur (Jest config + MSW handlers + Maestro/Playwright skeleton).
3. Prisma şema → FastAPI endpoint → `/openapi.json` → Orval generate.
4. Tamagui config (`tokens.ts`, `themes.ts`, `tamagui.config.ts`).
5. Auth + permission shell.
6. İlk feature (örnek: chat + streaming).
7. CI/CD pipeline (web export + EAS build matrix).

Bu stack'i onayla, sonraki adımda `packages/shared` ile `apps/*` paket sınırlarını ve ilk feature için (chat + streaming AI) test planını çıkarırım — coding standards ve test-first kuralına uygun.


{React routet v7. Flowbite pro. Apache ecarts. Custom js gerektiğinde typescript. Custom css gerektiğinde scss. Vite. Pnpm. Zunstand TanStack. Vitest. Dropzone. Radix UI: Flowbite Pro’da olmayan/yetersiz olanlar. cmdk: command palette (zaten Radix tabanlı). sonner: toast. openapi-typescript veya Orval — FastAPI’nin /openapi.json çıktısından tip + TanStack Query hook üretimi DOMPurify — model çıktısında HTML varsa zorunlu (XSS yüzeyi) Animation: motion. WebSocket için socket.io-client, server-push gerekli.

## {React Native, mobile app için gerekli.

TanStack Query — data fetch + mutation + optimistic update. refine.dev olmaz çünkü React Native ile mobile app geliştireceğiz. bulk action, custom filter, nested form için ne gerekli?. URL'de filter/sort/pagination state için ne gerekli?

yukarıdaki son önerilerin, ne eksik? seçeneklerim neler? tamamlayalım.}

---

## Ai first saas panel için Headless frontend geliştirirken yukarıdakiler haricinde eksik ne? (Daha sonra backend fastapi olacak).

yukarıdaki çelişkileri nasıl çözeriz?

bir kere geliştirelim, react native ile ios android çıktı alalım.

}

pwa yaparsak?

yahu bana bir kere geliştirince, bir kerede web saas mobile herşeyi kapsayan tam bir bütüncül tech_stack gerekli.

# Çelişkinin Kaynağı

Stack'te aslında **iki ayrı sorun** var, tek sanılıyor:

1. **Runtime çelişkisi**: Flowbite Pro (Tailwind, DOM), Radix UI, cmdk, Dropzone, Apache ECharts, SCSS — hepsi **web-only**. React Native bunların hiçbirini çalıştırmaz. "Bir kere geliştirip RN ile mobile çıkmak" demek = bu kütüphanelerin %70'ini çöpe atmak.
2. **Hedef belirsizliği**: "AI-first SaaS panel" + "iOS/Android native app" iki farklı ürün. SaaS panel genelde **masaüstü-yoğun** kullanılır; mobile genelde **görüntüleme/onay/bildirim** içindir.

Önce hangi ürünü kurduğunu netleştirmeden tek stack mümkün değil.

# Üç Dürüst Yol

## Yol A — PWA (Vite + React Router v7 stack'ini koru)

- Mevcut stack'in tamamı kalır (Flowbite Pro, Radix, ECharts, SCSS, motion).
- `vite-plugin-pwa` + Workbox ile installable, offline-capable, push-bildirimli web app.
- iOS Safari 16.4+ Web Push destekliyor, Android tam destek.
- App Store yok (B2B SaaS'ta çoğu zaman zaten önemsiz).
- Native API'lere sınırlı erişim (kamera/dosya çoğu durum yeter, Bluetooth/HealthKit yok).
- **Kim için ideal**: Admin paneli, dashboard, CRUD-yoğun SaaS. Senin profilinin %90'ı.

## Yol B — Expo + Expo Router + React Native Web

- Gerçekten tek codebase'den iOS, Android, Web çıkar.
- **Bunu seçersen kaybedersin**: Flowbite Pro, Radix UI, cmdk (NativeWind veya Tamagui'ye geç), Apache ECharts (Victory Native/Skia), SCSS (NativeWind/StyleSheet), Dropzone, React Router v7 (Expo Router yerine), motion (Reanimated).
- Vite gider (Metro bundler).
- Kazanılan: Gerçek native iOS/Android, store dağıtımı, push, kamera, biometric, offline-first.
- **Kim için ideal**: Tüketiciye yönelik (Bestie Borders gibi), saha/operasyonel, native cihaz özellikleri kritik.

## Yol C — Monorepo + iki app, paylaşılan domain

- `apps/web` (mevcut Vite stack) + `apps/mobile` (Expo).
- Paylaşılan: API client (OpenAPI tipleri), Zod şemaları, domain logic, business rules, TanStack Query hooks (logic kısmı), Zustand store şemaları.
- Paylaşılmaz: UI bileşenleri, navigation, styling.
- **Kim için ideal**: İkisi de gerçekten gerekiyorsa ve uzun vadeli ürün.

## Yol D — Capacitor (web app'i WebView'a sar)

- Mevcut stack korunur, native shell ekler.
- Performans PWA'dan biraz iyi, store dağıtımı var.
- Hâlâ WebView; "native hissi" istemiyorsan iyi seçenek.
- Senin AI-first paneli için PWA'ya göre avantajı sınırlı.

# Senin Profilin İçin Önerim

**Yol A (PWA)**. Gerekçeler:

- arsam.net, Segika, [[Great Doers]], atonota — hepsi **operatör paneli / SaaS dashboard**. Bunların mobile native uygulaması yok, olmayacak da. Mobile'da sadece "ofiste değilim, hızlıca bak" kullanımı var. PWA bunu çözer.
- Vibecoding prensiplerinle uyumlu: Tek runtime, tek bundler, tek style system, AI'ın belirsizlik üretmediği bir alan.
- Hetzner + Docker + GitHub Actions deployment'in tek pipeline kalır. Native app store süreçleri (review, signing, provisioning) yok.
- Eğer Bestie Borders gibi **tüketici** ürün gerçekten native gerektirirse, **o zaman** ayrı bir Expo monorepo paketi kurarsın. "Olabilir" diye şimdi mimari bozulmaz.

# AI-First SaaS Paneli İçin Eksikler

Mevcut stack'inde bunlar yok ve AI-first için kritik:

**AI çıktısı render**

- Markdown render: `react-markdown` + `remark-gfm` + `rehype-raw` (DOMPurify ile birlikte)
- Kod blokları: `shiki` (Prism yerine, modern, RSC-free)
- Streaming response: `ai` SDK (Vercel AI SDK — Next.js olmadan da çalışır) veya direkt SSE/fetch stream parser
- Diff görünümü: `react-diff-viewer-continued` (model çıktısı vs orijinal)
- Sentence/token highlighting: custom, manuel

**Form + Validation**

- `react-hook-form` + `zod` + `@hookform/resolvers/zod`
- Zod şeması = OpenAPI'dan üretim (zaten openapi-typescript var)

**Data layer ekleri**

- `dnd-kit` — bulk action sürükle/bırak, kanban, sıralama (Radix DnD vermiyor)
- `TanStack Table` — bulk action, custom filter, nested grouping (zaten TanStack var)
- `TanStack Virtual` — uzun listeler, AI çıktı kayıt geçmişi
- URL state için: `nuqs` (type-safe URL search params, filter/sort/pagination'ı URL'de tutar — bunu sormuştun, cevabı **nuqs**)

**Editor (AI metin işleme)**

- `TipTap` (ProseMirror tabanlı) — rich text, AI komutları için extension yazılabilir
- Plain text + suggestion overlay için: `cmdk` yeter

**Auth + Session**

- FastAPI tarafında JWT + httpOnly cookie + refresh rotation
- Frontend tarafında auth state için Zustand slice + TanStack Query'nin `enabled` flag'i

**Observability**

- `Sentry` — error + performance
- `PostHog` (self-host, Hetzner'e koy) — product analytics + feature flag + session replay tek üründe
- LLM çağrıları için: ya kendi log tablon ya `Langfuse` (self-host)

**i18n**

- `i18next` + `react-i18next` + `i18next-browser-languagedetector`
- TR/MENA/diaspora hedefli ürünlerin için RTL desteği gerekli, Flowbite Pro RTL destekli

**Date**

- `date-fns` (dayjs daha küçük ama date-fns tree-shake daha iyi, i18next ile uyumlu)
- Picker: `react-day-picker` (Radix'in date picker'ı yok)

**PWA katmanı**

- `vite-plugin-pwa` (Workbox sarar)
- Cache stratejisi: static assets cache-first, API stale-while-revalidate, AI streaming network-only

**File handling**

- `react-dropzone` zaten var
- Resumable upload: `tus-js-client` (büyük dosya, AI training data, attachment için)
- PDF görüntüleme: `react-pdf` veya `pdf.js`

**Testing genişletme**

- `Vitest` zaten var
- E2E: `Playwright` (Cypress'e tercih et)
- Component: `@testing-library/react`
- MSW: API mock, openapi-typescript ile uyumlu
- Visual regression: `Playwright` snapshot veya `Chromatic`

**Build/Tooling**

- `Biome` (ESLint + Prettier yerine, tek tool, daha hızlı)
- `Turbo` — monorepo varsa
- `rollup-plugin-visualizer` — bundle analizi

# Mobile İhtiyacı Bir Gün Doğarsa

Bugünden hazırlık:

- **Kodu katmanla**: View ↔ ViewModel ↔ Service ↔ Repository ↔ API. Sadece View katmanı web-spesifik kalsın.
- **Domain logic, validation, types** ayrı paketlerde olsun (monorepo değil, sadece klasör ayrımı yeter şimdilik).
- **API client** OpenAPI'dan üretilsin, hem web hem mobile aynı tipi tüketsin.
- **State management** (Zustand) ve **data fetching** (TanStack Query) RN'de de çalışır, üst katmanını paylaşabilirsin.

O gün geldiğinde monorepo'ya geçer, `apps/mobile` eklersin, Service/Repository katmanlarını olduğu gibi kullanırsın. View'ı sıfırdan yazarsın — bu kaçınılmaz.

# Özet Karar

Tek bir codebase'den web + iOS + Android **gerçek native** çıkmaz — bu pazarlama yalanı. İki seçeneğin var:

- **Web stack'i koru + PWA** → AI-first SaaS panellerin için doğru cevap. Eksikleri yukarıdaki listeyle tamamla.
- **Her şeyi Expo'ya çevir** → Web stack'inin %70'ini kaybet, native kazan. Sadece tüketici ürünleri için.

Senin portföyünde **Yol A** kazanır. Bestie Borders sahnesi geldiğinde **Yol C** monorepo'ya geçersin.

Önceki listendeki cevaplar parça parça doğru, ama yan yana koyduğunda birkaç gerçek çelişki var ve hâlâ kritik eksikler kalmış. Aşağıda hepsini sırayla toparlıyorum: önce direkt sorduğun parçalar, sonra eksikler, sonra çelişki çözümü, ardından tek build → tüm platformlar mimarisi (diyagramla) ve KYC/KYB native donanım haritası.

## 1. Bulk action, nested form, URL state — eksik parçalar

**Tablo + bulk action + custom filter:** `@tanstack/table` (headless, sende zaten "TanStack" var ama hangi paket belirsiz — `query` + `table` + `virtual` üçünü de aç). Flowbite Pro sadece görsel kabuk; davranış TanStack Table'da:

- `rowSelection` state → bulk action toolbar
- `columnFilters` + custom `filterFn` → kolon başına özel filtreler (range, date, multi-select)
- `getFacetedRowModel` → filter dropdown'larda count'lu seçenekler
- Büyük listelerde `@tanstack/react-virtual` (1000+ satır kuralın için zaten zorunlu)

**Nested form:** `react-hook-form` + `zod` + `@hookform/resolvers/zod`. Listende yok, mutlaka eklemelisin:

- `useFieldArray` → tekrarlanan/iç içe alanlar
- `useFormContext` → derin nested altında prop drilling olmaz
- Zod ile aynı şema hem RHF resolver hem API contract hem TS tip

**URL'de filter/sort/pagination state:** `nuqs` — listende yok, en kritik eksiklerden biri. Type-safe URL state, RR v7 ile uyumlu, SSR'dan bağımsız. Alternatif `qs` + custom hook ama nuqs DX'i çok üstün. `parseAsString`, `parseAsArrayOf(parseAsString)`, `parseAsInteger.withDefault(1)` gibi tip dönüştürücüler. TanStack Table'ın state'iyle nuqs'u birleştirip URL ↔ tablo state senkronu kuruyorsun.

## 2. AI-first headless SaaS için listede olmayan kritik parçalar

|Alan|Kütüphane|Neden|
|---|---|---|
|Markdown rendering|`react-markdown` + `remark-gfm` + `rehype-sanitize`|LLM çıktısı = markdown. DOMPurify zaten var ama markdown parse ayrı.|
|Code block syntax|`shiki`|Prism'den daha iyi renderlar, TextMate gramerleri kullanır|
|LaTeX/Math|`katex` + `rehype-katex`|RAG/akademik içerik üreten LLM için|
|Stream UI|native `fetch` + `ReadableStream` veya `@microsoft/fetch-event-source`|SSE/streaming chat. Library değil pattern.|
|Diff render|`diff` + custom render|"Şu kodu şuna çevir" çıktısı için|
|File preview|`react-pdf` (PDF), `papaparse` (CSV), `mammoth` (docx)|RAG kaynaklarını gösterme|
|Voice input|Web Speech API veya Whisper API client|KYC video + asistan ses girişi|
|Editor|`tiptap` (ProseMirror) veya `lexical`|Rich prompt yazımı, mention, slash command|
|Search/command|`cmdk` (sende var) + `fuse.js` veya `minisearch`|Komut paleti içinde fuzzy search|

**Yönetimsel boşluklar (her SaaS için):**

- **Auth provider:** Listede yok. Keycloak (sen önceden kullandın, ComponentSocial) self-host'a uygun. Alternatif: Authentik (daha sade, modern), Ory Kratos (headless).
- **RBAC/ABAC:** `casl` veya backend'den policy → frontend `useAbility` hook. Refine.dev'in access control provider'ı bunu sarmalar.
- **i18n:** `react-i18next` + `i18next-browser-languagedetector`. TR/MENA için zorunlu. ICU mesaj formatı (sayı, çoğul, tarih).
- **Date/time:** `date-fns` (tree-shakeable, Moment kaçınılması gereken).
- **Error tracking:** `@sentry/react` — self-host edilebilir (Hetzner'da Docker).
- **Product analytics + flag + session replay:** PostHog self-host. EU'da GDPR uyumlu, single Hetzner sunucuda kalkar.
- **Test mocking:** MSW (Mock Service Worker) — Vitest + Storybook + dev ortamında aynı handler'lar.
- **Component dev:** `ladle` (Vite-native, Storybook'tan çok daha hafif).
- **PWA service worker:** `vite-plugin-pwa` (Workbox sarmalayıcı). Manuel SW yazma.
- **Bundle analiz:** `rollup-plugin-visualizer`.

## 3. Çelişkilerin çözümü

**Çelişki 1 — React Router v7 ile Next.js yasağı arasındaki tutarlılık.** RR v7'nin iki modu var: _framework mode_ (eski Remix; loader/action/SSR var, server-client sınır belirsizliği aynı sorunu doğurur) ve _library/declarative mode_ (sadece routing). Senin "vibecoding için Next.js yasak" gerekçen RR v7 framework moduna da aynen uyar. Çözüm: RR v7'yi yalnızca declarative/library modda kullan. `react-router` paketini import et, `createBrowserRouter` veya `<BrowserRouter>` ile kur. `@react-router/dev` Vite plugin'ini ekleme, `react-router.config.ts` koyma. Böylece use server/use client/loader hiç görmezsin — pure SPA.

**Çelişki 2 — refine.dev ile TanStack Query + sonner örtüşmesi.** Refine kendi içinde TanStack Query kullanıyor, kendi notification provider'ı, data provider'ı var. Doğrudan TanStack Query'yi de kullanabilirsin; örtüşme değil katman. Çözüm: refine.dev'i sadece _admin/CRUD_ tarafında kullan (tenant yönetimi, audit log, kullanıcı CRUD, ayarlar). Refine notification provider'ı sonner'a bağla. AI chat / streaming / conversation UX tarafında refine kullanma, direkt TanStack Query + custom hook'lar. Refine'ı her şeye uydurmaya çalışmak overhead.

**Çelişki 3 — Flowbite Pro ile Radix UI.** Flowbite Pro'nun React paketi (`flowbite-react`) bazı bileşenlerde a11y zayıf, kontrol API'si sınırlı (özellikle Combobox, Command, complex Dialog). Çözüm: Flowbite Pro'yu _görsel sistem_ (renk, spacing, form input görünümü, tablo stilleri) olarak kullan; etkileşim/headless behavior gerektiren bileşenleri Radix primitives üstüne kendi inşa et ve Flowbite class'larıyla stille. cmdk zaten Radix tabanlı, hibrit uyumlu.

**Çelişki 4 — Motion kütüphanesi seçimi.** "Motion" derken Framer Motion'un yeni adı (`motion` paketi) demek olmalı. Flowbite kendi transition class'larına sahip. İkisini karıştırma: liste/sayfa-geçişi/sequence için motion, basit hover/click için Tailwind transition.

**Çelişki 5 — PWA hedefi ile native KYC ihtiyacı.** Saf PWA iOS'ta App Store'a giremez, NFC'ye erişemez, App Attestation yapamaz, kamera için bazı kısıtlar var. Bir sonraki bölümde çözüyorum.

## 4. Tek build → web + iOS + Android

Tek React+Vite kod tabanından her hedefe çıkmanın yolu **Capacitor**. Vite çıktısını (statik SPA) alır, iOS Xcode projesi ve Android Studio projesi sarmalayıcısına sokar. Aynı `dist/` ile hem web hosting hem mağaza dağıtımı.**Pratik akış:**

- Geliştirme: `vite dev` ile tarayıcıda. Native bridge mock'lanır (`Capacitor.isNativePlatform()` koşullu yollar).
- Web yayını: `vite build` çıktısı `dist/`'i Caddy/Nginx (Hetzner) önünde sun. PWA için `vite-plugin-pwa` ile manifest + Workbox SW.
- iOS: `npx cap add ios` → bir kerelik Xcode projesi üretilir, sonrası `npx cap sync ios` ve `npx cap open ios`. macOS M4'te derleme + App Store Connect yükleme.
- Android: `npx cap add android` → Android Studio projesi. macOS M4'te de derlenir. Play Store'a `.aab` yükle.
- Sadece Android için hafif yol: TWA (Trusted Web Activity) — `bubblewrap` ile PWA'yı Play Store'a sok. Ama KYC native plugin gerekiyorsa direkt Capacitor'a git, iki yol tutma.

**Tauri 2.0 alternatifi:** Ekim 2024'ten beri mobil stable, daha küçük bundle ve daha hızlı runtime sunar ama Rust ekosistemine giriyorsun, plugin yazımı Rust ister, KYC native plugin'lerin ekosistemi henüz Capacitor kadar olgun değil. Senin "vibecoding compatibility" ilken ve KYC plugin tedariki düşünüldüğünde **Capacitor doğru seçim**. Tauri'yi performans kritik bir 2. üründe değerlendir.

## 5. KYC/KYB native donanım ihtiyaçları

Kamera yeterli değil. Gerçek bir KYC/KYB kapsamı için aşağıdaki donanım ve native API'lere erişim lazım. Capacitor plugin tarafı bilgisi parantezde:

**Kimlik ve belge yakalama**

- Ön + arka kamera (`@capacitor/camera`) — selfie + belge çekimi, manuel kontrol için video frame'lere erişim.
- MRZ/barkod tarama (`@capacitor-mlkit/barcode-scanning`) — pasaport/kimlik MRZ satırı, kart arkası kare kod.
- NFC çipi okuma (`@capawesome-team/capacitor-nfc`) — TR e-Kimlik, e-Pasaport, MENA bölgesinde e-ID'ler. ICAO 9303 ile çip içeriği (foto + bio veriler) sertifika doğrulamayla okunur, fiziksel belge sahteliğine karşı en güçlü kontrol.
- Belge sınır tespiti / auto-crop — Apple Vision (iOS) ve ML Kit Document Scanner (Android) köprülenir. `@capacitor-mlkit/document-scanner` veya Apple Vision için custom plugin.

**Canlılık / anti-spoofing (liveness)** Bunu kendi başına inşa etmek regülatör uyumluluğu (FATF, MASAK, eIDAS, ETSI TS 119 461) açısından risklidir. Üçüncü taraf SDK önerisi:

- **Sumsub** — TR ve MENA için en iyi (Türkçe arayüz, MASAK uyumlu, Capacitor wrapper'ı destekli).
- Alternatifler: Veriff, Jumio, IDnow, Onfido, Persona.
- Kendi yapacaksan: ML Kit Face Detection + challenge tabanlı (göz kırp, başı sağa-sola, gülümse) — sınırlı koruma sağlar, deepfake'e karşı zayıf, sadece düşük-risk kullanımda.

**Cihaz güveni ve sahtekarlık sinyalleri**

- App Attestation — iOS `App Attest` (DeviceCheck) + Android `Play Integrity API`. Capacitor için `@capacitor-firebase/app-check` veya `capacitor-app-integrity`. KYC için _zorunlu_ — yoksa otomasyon botları kayıt yapar.
- Jailbreak / root detection — `capacitor-jailbreak-root-detector` veya Sumsub gibi SDK'lar dahili sağlar.
- Cihaz parmak izi — `@capacitor/device` (model, OS, locale) + ekran çözünürlüğü, timezone, dil, ASN'ye (backend'de) bakarak fraud skor.
- Ekran kaydı / yansıtma tespiti — iOS `UIScreen.isCaptured`, Android `MediaProjection` izi. Capacitor topluluk plugin'leri var; custom plugin yazmak da kolay.

**Kimlik doğrulama (KYC sonrası tekrar giriş)**

- Biyometrik — `@aparajita/capacitor-biometric-auth` veya `capacitor-native-biometric`. Face ID, Touch ID, Android BiometricPrompt.
- Güvenli depolama — token/secret için `@capacitor-community/secure-storage` (iOS Keychain, Android Keystore arkalı). `@capacitor/preferences` _sadece_ hassas-olmayan ayarlar için.
- Push bildirimleri — `@capacitor/push-notifications` (durum güncellemeleri: "kimliğin onaylandı/reddedildi").

**Konum ve uyum**

- GPS — `@capacitor/geolocation`. Yargı yetkisi/yaptırım listesi kontrolü için.
- Ağ tipi — `@capacitor/network`. VPN tespiti backend'de IP üzerinden.

**Ses (KYB video görüşmesi için)**

- Mikrofon erişimi (kamera plugin'i sağlar). Video KYC çağrısı için WebRTC (`getUserMedia` + `RTCPeerConnection`) doğrudan webview'da çalışır, Capacitor'a ek plugin gerekmez. TURN sunucusu Hetzner'da `coturn` ile self-host edilir.

**Diğer faydalı yetenekler**

- Galeri/dosya — `@capacitor/filesystem` + `@capacitor/share`.
- Derin link — `@capacitor/app` (`appUrlOpen` event). Universal Links (iOS) + App Links (Android) için Apple/Google site association dosyalarını web tarafına koymak gerekir.
- Arka plan — kısıtlı. iOS'ta `BGProcessingTask` (Capacitor plugin'leri var), Android'de WorkManager köprüsü.

## 6. Bütüncül stack — katmanlı sonuç

Tek kalemde toparlanmış nihai liste:

**Yapı katmanı:** Vite + pnpm + TypeScript strict + SCSS modules + Vitest + MSW + Ladle + Sentry + PostHog. Kontrol kıvrımı: ESLint + Prettier + Husky + lint-staged + commitlint (conventional commits).

**Routing + state:** `react-router` library mode (framework mode kapalı) + `nuqs` (URL state) + Zustand (UI state) + TanStack Query (server state) + TanStack Table + TanStack Virtual.

**Form + validation:** react-hook-form + zod + `@hookform/resolvers/zod` + `openapi-typescript` (API tipleri FastAPI `/openapi.json`'dan üretilir; Orval daha kapsamlı ama daha fazla bağımlılık, openapi-typescript yeterli).

**UI:** Flowbite Pro (görsel sistem) + Radix UI (etkileşim primitif'leri) + cmdk (command palette) + sonner (toast) + react-dropzone + motion (animasyon) + Apache ECharts (`echarts-for-react`) + DOMPurify + Phosphor Icons (CDN).

**AI UX:** react-markdown + remark-gfm + rehype-sanitize + shiki + native fetch streaming (SSE). Voice için Web Speech API; rich editing için tiptap.

**Admin tarafı:** refine.dev (yalnızca CRUD/audit/tenant ekranlarında) + CASL (RBAC) + react-i18next + date-fns + Intl.NumberFormat. Refine'ın notification provider'ını sonner'a, data provider'ını FastAPI'ye, router'ını react-router v7'ye, i18n'ini i18next'e bağla.

**Realtime:** socket.io-client (backend push) → TanStack Query `invalidateQueries` ile cache refresh.

**Native köprü:** Capacitor + plugin seti (kamera, NFC, biometrik, secure storage, app integrity, push, geolocation, filesystem).

**KYC SDK:** Sumsub Capacitor wrapper (liveness + belge OCR + sanksiyon listesi taraması). KYB için ek olarak ticari sicil API'leri (TR için TOBB, Mersis) backend'den.

**Deploy:** macOS M4'te geliştir → GitHub private repo → GitHub Actions ile Hetzner Debian'a Docker Compose deploy (web tarafı). Mobil tarafı GitHub Actions matrix: macOS runner'da Fastlane ile App Store + Play Store yüklemesi (otomatik build numarası, TestFlight + internal track).

Bu yapıda iki gerçek kuyruk ucu kalıyor: (1) Capacitor mobil tarafı için _ayrı CI matrix_ gerekiyor — web build ile aynı `dist/` paylaşılır ama imzalama/dağıtım macOS runner ister; (2) FastAPI backend her şeyi `/openapi.json`'da düzgün açıklamalı, etiketleyici (`tags`) ve şemalandırıcı (`Pydantic v2` modelleri) tutmalı ki `openapi-typescript` tip üretimi kullanışlı olsun. Bu ikisini başta planlarsan, "bir kere geliştir, her yerden çıkar" sözü gerçekten tutuyor.

{ React routet v7. Flowbite pro. Apache ecarts. Custom js gerektiğinde typescript. Custom css gerektiğinde scss. Vite. Pnpm. Zunstand TanStack. Vitest. Dropzone. Radix UI: Flowbite Pro’da olmayan/yetersiz olanlar. cmdk: command palette (zaten Radix tabanlı). sonner: toast. openapi-typescript veya Orval — FastAPI’nin /openapi.json çıktısından tip + TanStack Query hook üretimi DOMPurify — model çıktısında HTML varsa zorunlu (XSS yüzeyi) Animation: motion. WebSocket için socket.io-client, server-push gerekli. TanStack Query — data fetch + mutation + optimistic update. refine.dev mobile app pwa geliştireceğiz. }

---

bulk action, custom filter, nested form için ne gerekli?. URL'de filter/sort/pagination state için ne gerekli?

yukarıdaki son önerilerin, ne eksik? seçeneklerim neler? tamamlayalım.

---

## Ai first saas panel için Headless frontend geliştirirken yukarıdakiler haricinde eksik ne? (Daha sonra backend fastapi olacak).

yukarıdaki çelişkileri nasıl çözeriz?

bir kere geliştirelim, pwa ile ios android çıktı nereden nasıl alalım.

}

yahu bana bir kere geliştirince, bir kerede web saas mobile herşeyi kapsayan tam bir bütüncül tech_stack gerekli.

kyc kyb native olacak. kamera erişimi olacak. başka donanımsal native ne gerekli?


Önceki listendeki cevaplar parça parça doğru, ama yan yana koyduğunda birkaç gerçek çelişki var ve hâlâ kritik eksikler kalmış. Aşağıda hepsini sırayla toparlıyorum: önce direkt sorduğun parçalar, sonra eksikler, sonra çelişki çözümü, ardından tek build → tüm platformlar mimarisi (diyagramla) ve KYC/KYB native donanım haritası.

## 1. Bulk action, nested form, URL state — eksik parçalar

**Tablo + bulk action + custom filter:** `@tanstack/table` (headless, sende zaten "TanStack" var ama hangi paket belirsiz — `query` + `table` + `virtual` üçünü de aç). Flowbite Pro sadece görsel kabuk; davranış TanStack Table'da:

- `rowSelection` state → bulk action toolbar
- `columnFilters` + custom `filterFn` → kolon başına özel filtreler (range, date, multi-select)
- `getFacetedRowModel` → filter dropdown'larda count'lu seçenekler
- Büyük listelerde `@tanstack/react-virtual` (1000+ satır kuralın için zaten zorunlu)

**Nested form:** `react-hook-form` + `zod` + `@hookform/resolvers/zod`. Listende yok, mutlaka eklemelisin:

- `useFieldArray` → tekrarlanan/iç içe alanlar
- `useFormContext` → derin nested altında prop drilling olmaz
- Zod ile aynı şema hem RHF resolver hem API contract hem TS tip

**URL'de filter/sort/pagination state:** `nuqs` — listende yok, en kritik eksiklerden biri. Type-safe URL state, RR v7 ile uyumlu, SSR'dan bağımsız. Alternatif `qs` + custom hook ama nuqs DX'i çok üstün. `parseAsString`, `parseAsArrayOf(parseAsString)`, `parseAsInteger.withDefault(1)` gibi tip dönüştürücüler. TanStack Table'ın state'iyle nuqs'u birleştirip URL ↔ tablo state senkronu kuruyorsun.

## 2. AI-first headless SaaS için listede olmayan kritik parçalar

|Alan|Kütüphane|Neden|
|---|---|---|
|Markdown rendering|`react-markdown` + `remark-gfm` + `rehype-sanitize`|LLM çıktısı = markdown. DOMPurify zaten var ama markdown parse ayrı.|
|Code block syntax|`shiki`|Prism'den daha iyi renderlar, TextMate gramerleri kullanır|
|LaTeX/Math|`katex` + `rehype-katex`|RAG/akademik içerik üreten LLM için|
|Stream UI|native `fetch` + `ReadableStream` veya `@microsoft/fetch-event-source`|SSE/streaming chat. Library değil pattern.|
|Diff render|`diff` + custom render|"Şu kodu şuna çevir" çıktısı için|
|File preview|`react-pdf` (PDF), `papaparse` (CSV), `mammoth` (docx)|RAG kaynaklarını gösterme|
|Voice input|Web Speech API veya Whisper API client|KYC video + asistan ses girişi|
|Editor|`tiptap` (ProseMirror) veya `lexical`|Rich prompt yazımı, mention, slash command|
|Search/command|`cmdk` (sende var) + `fuse.js` veya `minisearch`|Komut paleti içinde fuzzy search|

**Yönetimsel boşluklar (her SaaS için):**

- **Auth provider:** Listede yok. Keycloak (sen önceden kullandın, ComponentSocial) self-host'a uygun. Alternatif: Authentik (daha sade, modern), Ory Kratos (headless).
- **RBAC/ABAC:** `casl` veya backend'den policy → frontend `useAbility` hook. Refine.dev'in access control provider'ı bunu sarmalar.
- **i18n:** `react-i18next` + `i18next-browser-languagedetector`. TR/MENA için zorunlu. ICU mesaj formatı (sayı, çoğul, tarih).
- **Date/time:** `date-fns` (tree-shakeable, Moment kaçınılması gereken).
- **Error tracking:** `@sentry/react` — self-host edilebilir (Hetzner'da Docker).
- **Product analytics + flag + session replay:** PostHog self-host. EU'da GDPR uyumlu, single Hetzner sunucuda kalkar.
- **Test mocking:** MSW (Mock Service Worker) — Vitest + Storybook + dev ortamında aynı handler'lar.
- **Component dev:** `ladle` (Vite-native, Storybook'tan çok daha hafif).
- **PWA service worker:** `vite-plugin-pwa` (Workbox sarmalayıcı). Manuel SW yazma.
- **Bundle analiz:** `rollup-plugin-visualizer`.

## 3. Çelişkilerin çözümü

**Çelişki 1 — React Router v7 ile Next.js yasağı arasındaki tutarlılık.** RR v7'nin iki modu var: _framework mode_ (eski Remix; loader/action/SSR var, server-client sınır belirsizliği aynı sorunu doğurur) ve _library/declarative mode_ (sadece routing). Senin "vibecoding için Next.js yasak" gerekçen RR v7 framework moduna da aynen uyar. Çözüm: RR v7'yi yalnızca declarative/library modda kullan. `react-router` paketini import et, `createBrowserRouter` veya `<BrowserRouter>` ile kur. `@react-router/dev` Vite plugin'ini ekleme, `react-router.config.ts` koyma. Böylece use server/use client/loader hiç görmezsin — pure SPA.

**Çelişki 2 — refine.dev ile TanStack Query + sonner örtüşmesi.** Refine kendi içinde TanStack Query kullanıyor, kendi notification provider'ı, data provider'ı var. Doğrudan TanStack Query'yi de kullanabilirsin; örtüşme değil katman. Çözüm: refine.dev'i sadece _admin/CRUD_ tarafında kullan (tenant yönetimi, audit log, kullanıcı CRUD, ayarlar). Refine notification provider'ı sonner'a bağla. AI chat / streaming / conversation UX tarafında refine kullanma, direkt TanStack Query + custom hook'lar. Refine'ı her şeye uydurmaya çalışmak overhead.

**Çelişki 3 — Flowbite Pro ile Radix UI.** Flowbite Pro'nun React paketi (`flowbite-react`) bazı bileşenlerde a11y zayıf, kontrol API'si sınırlı (özellikle Combobox, Command, complex Dialog). Çözüm: Flowbite Pro'yu _görsel sistem_ (renk, spacing, form input görünümü, tablo stilleri) olarak kullan; etkileşim/headless behavior gerektiren bileşenleri Radix primitives üstüne kendi inşa et ve Flowbite class'larıyla stille. cmdk zaten Radix tabanlı, hibrit uyumlu.

**Çelişki 4 — Motion kütüphanesi seçimi.** "Motion" derken Framer Motion'un yeni adı (`motion` paketi) demek olmalı. Flowbite kendi transition class'larına sahip. İkisini karıştırma: liste/sayfa-geçişi/sequence için motion, basit hover/click için Tailwind transition.

**Çelişki 5 — PWA hedefi ile native KYC ihtiyacı.** Saf PWA iOS'ta App Store'a giremez, NFC'ye erişemez, App Attestation yapamaz, kamera için bazı kısıtlar var. Bir sonraki bölümde çözüyorum.

## 4. Tek build → web + iOS + Android

Tek React+Vite kod tabanından her hedefe çıkmanın yolu **Capacitor**. Vite çıktısını (statik SPA) alır, iOS Xcode projesi ve Android Studio projesi sarmalayıcısına sokar. Aynı `dist/` ile hem web hosting hem mağaza dağıtımı.**Pratik akış:**

- Geliştirme: `vite dev` ile tarayıcıda. Native bridge mock'lanır (`Capacitor.isNativePlatform()` koşullu yollar).
- Web yayını: `vite build` çıktısı `dist/`'i Caddy/Nginx (Hetzner) önünde sun. PWA için `vite-plugin-pwa` ile manifest + Workbox SW.
- iOS: `npx cap add ios` → bir kerelik Xcode projesi üretilir, sonrası `npx cap sync ios` ve `npx cap open ios`. macOS M4'te derleme + App Store Connect yükleme.
- Android: `npx cap add android` → Android Studio projesi. macOS M4'te de derlenir. Play Store'a `.aab` yükle.
- Sadece Android için hafif yol: TWA (Trusted Web Activity) — `bubblewrap` ile PWA'yı Play Store'a sok. Ama KYC native plugin gerekiyorsa direkt Capacitor'a git, iki yol tutma.

**Tauri 2.0 alternatifi:** Ekim 2024'ten beri mobil stable, daha küçük bundle ve daha hızlı runtime sunar ama Rust ekosistemine giriyorsun, plugin yazımı Rust ister, KYC native plugin'lerin ekosistemi henüz Capacitor kadar olgun değil. Senin "vibecoding compatibility" ilken ve KYC plugin tedariki düşünüldüğünde **Capacitor doğru seçim**. Tauri'yi performans kritik bir 2. üründe değerlendir.

## 5. KYC/KYB native donanım ihtiyaçları

Kamera yeterli değil. Gerçek bir KYC/KYB kapsamı için aşağıdaki donanım ve native API'lere erişim lazım. Capacitor plugin tarafı bilgisi parantezde:

**Kimlik ve belge yakalama**

- Ön + arka kamera (`@capacitor/camera`) — selfie + belge çekimi, manuel kontrol için video frame'lere erişim.
- MRZ/barkod tarama (`@capacitor-mlkit/barcode-scanning`) — pasaport/kimlik MRZ satırı, kart arkası kare kod.
- NFC çipi okuma (`@capawesome-team/capacitor-nfc`) — TR e-Kimlik, e-Pasaport, MENA bölgesinde e-ID'ler. ICAO 9303 ile çip içeriği (foto + bio veriler) sertifika doğrulamayla okunur, fiziksel belge sahteliğine karşı en güçlü kontrol.
- Belge sınır tespiti / auto-crop — Apple Vision (iOS) ve ML Kit Document Scanner (Android) köprülenir. `@capacitor-mlkit/document-scanner` veya Apple Vision için custom plugin.

**Canlılık / anti-spoofing (liveness)** Bunu kendi başına inşa etmek regülatör uyumluluğu (FATF, MASAK, eIDAS, ETSI TS 119 461) açısından risklidir. Üçüncü taraf SDK önerisi:

- **Sumsub** — TR ve MENA için en iyi (Türkçe arayüz, MASAK uyumlu, Capacitor wrapper'ı destekli).
- Alternatifler: Veriff, Jumio, IDnow, Onfido, Persona.
- Kendi yapacaksan: ML Kit Face Detection + challenge tabanlı (göz kırp, başı sağa-sola, gülümse) — sınırlı koruma sağlar, deepfake'e karşı zayıf, sadece düşük-risk kullanımda.

**Cihaz güveni ve sahtekarlık sinyalleri**

- App Attestation — iOS `App Attest` (DeviceCheck) + Android `Play Integrity API`. Capacitor için `@capacitor-firebase/app-check` veya `capacitor-app-integrity`. KYC için _zorunlu_ — yoksa otomasyon botları kayıt yapar.
- Jailbreak / root detection — `capacitor-jailbreak-root-detector` veya Sumsub gibi SDK'lar dahili sağlar.
- Cihaz parmak izi — `@capacitor/device` (model, OS, locale) + ekran çözünürlüğü, timezone, dil, ASN'ye (backend'de) bakarak fraud skor.
- Ekran kaydı / yansıtma tespiti — iOS `UIScreen.isCaptured`, Android `MediaProjection` izi. Capacitor topluluk plugin'leri var; custom plugin yazmak da kolay.

**Kimlik doğrulama (KYC sonrası tekrar giriş)**

- Biyometrik — `@aparajita/capacitor-biometric-auth` veya `capacitor-native-biometric`. Face ID, Touch ID, Android BiometricPrompt.
- Güvenli depolama — token/secret için `@capacitor-community/secure-storage` (iOS Keychain, Android Keystore arkalı). `@capacitor/preferences` _sadece_ hassas-olmayan ayarlar için.
- Push bildirimleri — `@capacitor/push-notifications` (durum güncellemeleri: "kimliğin onaylandı/reddedildi").

**Konum ve uyum**

- GPS — `@capacitor/geolocation`. Yargı yetkisi/yaptırım listesi kontrolü için.
- Ağ tipi — `@capacitor/network`. VPN tespiti backend'de IP üzerinden.

**Ses (KYB video görüşmesi için)**

- Mikrofon erişimi (kamera plugin'i sağlar). Video KYC çağrısı için WebRTC (`getUserMedia` + `RTCPeerConnection`) doğrudan webview'da çalışır, Capacitor'a ek plugin gerekmez. TURN sunucusu Hetzner'da `coturn` ile self-host edilir.

**Diğer faydalı yetenekler**

- Galeri/dosya — `@capacitor/filesystem` + `@capacitor/share`.
- Derin link — `@capacitor/app` (`appUrlOpen` event). Universal Links (iOS) + App Links (Android) için Apple/Google site association dosyalarını web tarafına koymak gerekir.
- Arka plan — kısıtlı. iOS'ta `BGProcessingTask` (Capacitor plugin'leri var), Android'de WorkManager köprüsü.

## 6. Bütüncül stack — katmanlı sonuç

Tek kalemde toparlanmış nihai liste:

**Yapı katmanı:** Vite + pnpm + TypeScript strict + SCSS modules + Vitest + MSW + Ladle + Sentry + PostHog. Kontrol kıvrımı: ESLint + Prettier + Husky + lint-staged + commitlint (conventional commits).

**Routing + state:** `react-router` library mode (framework mode kapalı) + `nuqs` (URL state) + Zustand (UI state) + TanStack Query (server state) + TanStack Table + TanStack Virtual.

**Form + validation:** react-hook-form + zod + `@hookform/resolvers/zod` + `openapi-typescript` (API tipleri FastAPI `/openapi.json`'dan üretilir; Orval daha kapsamlı ama daha fazla bağımlılık, openapi-typescript yeterli).

**UI:** Flowbite Pro (görsel sistem) + Radix UI (etkileşim primitif'leri) + cmdk (command palette) + sonner (toast) + react-dropzone + motion (animasyon) + Apache ECharts (`echarts-for-react`) + DOMPurify + Phosphor Icons (CDN).

**AI UX:** react-markdown + remark-gfm + rehype-sanitize + shiki + native fetch streaming (SSE). Voice için Web Speech API; rich editing için tiptap.

**Admin tarafı:** refine.dev (yalnızca CRUD/audit/tenant ekranlarında) + CASL (RBAC) + react-i18next + date-fns + Intl.NumberFormat. Refine'ın notification provider'ını sonner'a, data provider'ını FastAPI'ye, router'ını react-router v7'ye, i18n'ini i18next'e bağla.

**Realtime:** socket.io-client (backend push) → TanStack Query `invalidateQueries` ile cache refresh.

**Native köprü:** Capacitor + plugin seti (kamera, NFC, biometrik, secure storage, app integrity, push, geolocation, filesystem).

**KYC SDK:** Sumsub Capacitor wrapper (liveness + belge OCR + sanksiyon listesi taraması). KYB için ek olarak ticari sicil API'leri (TR için TOBB, Mersis) backend'den.

**Deploy:** macOS M4'te geliştir → GitHub private repo → GitHub Actions ile Hetzner Debian'a Docker Compose deploy (web tarafı). Mobil tarafı GitHub Actions matrix: macOS runner'da Fastlane ile App Store + Play Store yüklemesi (otomatik build numarası, TestFlight + internal track).

Bu yapıda iki gerçek kuyruk ucu kalıyor: (1) Capacitor mobil tarafı için _ayrı CI matrix_ gerekiyor — web build ile aynı `dist/` paylaşılır ama imzalama/dağıtım macOS runner ister; (2) FastAPI backend her şeyi `/openapi.json`'da düzgün açıklamalı, etiketleyici (`tags`) ve şemalandırıcı (`Pydantic v2` modelleri) tutmalı ki `openapi-typescript` tip üretimi kullanışlı olsun. Bu ikisini başta planlarsan, "bir kere geliştir, her yerden çıkar" sözü gerçekten tutuyor.


{ React routet v7. Flowbite pro. Apache ecarts. Custom js gerektiğinde typescript. Custom css gerektiğinde scss. Vite. Pnpm. Zunstand TanStack. Vitest. Dropzone. Radix UI: Flowbite Pro’da olmayan/yetersiz olanlar. cmdk: command palette (zaten Radix tabanlı). sonner: toast. openapi-typescript veya Orval — FastAPI’nin /openapi.json çıktısından tip + TanStack Query hook üretimi DOMPurify — model çıktısında HTML varsa zorunlu (XSS yüzeyi) Animation: motion. WebSocket için socket.io-client, server-push gerekli. TanStack Query — data fetch + mutation + optimistic update. refine.dev mobile app pwa geliştireceğiz. }

---

bulk action, custom filter, nested form için ne gerekli?. URL'de filter/sort/pagination state için ne gerekli?

yukarıdaki son önerilerin, ne eksik? seçeneklerim neler? tamamlayalım.

---

## Ai first saas panel için Headless frontend geliştirirken yukarıdakiler haricinde eksik ne? (Daha sonra backend fastapi olacak).

yukarıdaki çelişkileri nasıl çözeriz?

bir kere geliştirelim, pwa ile ios android çıktı nereden nasıl alalım.

}

yahu bana bir kere geliştirince, bir kerede web saas mobile herşeyi kapsayan tam bir bütüncül tech_stack gerekli.

## kyc kyb native olacak. kamera erişimi olacak. başka donanımsal native ne gerekli?

sorular sor, yanıtlayayım, sonra dümdüz, gerekçeli, bir techstack çıkart, ve gerekçesini yanına yaz.

Bütüncül bir karar verilebilir. Önce çelişkileri çözeyim, sonra eksikleri kapatayım, en sonda **dümdüz tablo + gerekçe** veriyorum.

---

## 1) Çelişkilerin çözümü

**socket.io vs WebSocket vs SSE vs CRDT** Üçü farklı katmandır, hepsi gerekli ama `socket.io` **dışarıda kalmalı**.

- **SSE (EventSource)** → notification, toast, dashboard auto-refresh. Tek yönlü, basit, proxy dostu.
- **Native WebSocket** → presence indicator, live cursor pinpoint.
- **Yjs + y-websocket (Hocuspocus self-host)** → collaborative editing/CRDT. Üç farklı kanalı tek bir socket.io abstraction'ı altında toplamak ileride hem bundle hem debug külfeti. `socket.io-client`'ı önerin listesinden **çıkar**.

**Refine.dev vs TanStack Query** Çelişki yok; Refine zaten içeride TanStack Query çalıştırıyor. Karar: **Refine'i "headless data + auth + access-control + audit hooks"** için kullan, UI tarafına karıştırma — UI'da Flowbite Pro + Radix kalsın. `@refinedev/react-router-v7` adapter mevcut, `@refinedev/react-hook-form` ile nested form çözülür.

**SCSS vs Tailwind (Flowbite Pro)** SCSS'i **sadece token + tema + karmaşık animasyon** için kullan. Tailwind utility'leri component seviyesinde. SCSS `:root` üzerinden CSS custom properties üretir, Tailwind `theme.extend` o değişkenleri okur. Tek doğruluk kaynağı: SCSS token dosyası.

**Zustand vs TanStack Query** Çakışma yok ama kuralı netleştir: **server state Query'de, ephemeral UI state Zustand'da, form state RHF'te, URL state nuqs'ta**. Karar matrisi sabit.

**Vercel AI SDK vs Vite uyumu** AI SDK'nın `ai/react` paketi framework-agnostiktir; Next.js bağımlısı sadece RSC kısmı. Vite + React'te `useChat`, `useCompletion` sorunsuz. Generative UI için **RSC kullanma**; bunun yerine **schema-driven dispatcher** yaz (model JSON döndürür, frontend registry'den component seçer).

**Capacitor + PWA aynı codebase** Capacitor zaten `dist/` çıktısını WebView'e yüklüyor. Service worker hem browser'da (PWA) hem mobile WebView'de çalışıyor — ama mobile native sync için **Capacitor Preferences + IDB** dual yazımı gerek. Karar: web build = PWA, aynı build Capacitor'a girer, runtime'da `Capacitor.isNativePlatform()` ile özellik dispatch.

**TC Kimlik NFC** ICAO 9303 + BAC/PACE protokolü. Hazır Capacitor pluginleri yetersiz. İki seçenek:

- **a)** Native modül (Swift CoreNFC + Kotlin Android NFC) yazıp Capacitor plugin sarmalı — 4-6 hafta iş.
- **b)** **3. parti SDK** (Sumsub, Onfido, Veriff, Yapı Kredi Yapay Zeka Servisleri). Türkiye'ye özel olursa **VBT, Hopi, Kobil**. Time-to-market için **(b)** önerilir; KYB tarafı zaten 3. parti gerektiriyor (vergi levhası doğrulama, ticaret sicil).

---

## 2) Eksiklikler (sizin listede olmayan ama AI-first SaaS için zorunlu)

**URL state**: `nuqs` — type-safe search params, React Router v7 uyumlu. Filter/sort/pagination senkronu için tek seçenek.

**Form**: `react-hook-form` + `@hookform/resolvers/zod` + `zod`. TanStack Form henüz nested + array için RHF kadar olgun değil. Refine'in `@refinedev/react-hook-form` paketi hazır.

**i18n + ICU**: `react-intl` (FormatJS). i18next ICU desteği plugin gerektiriyor, react-intl native. RTL için `tailwindcss-rtl` + `dir="rtl"` HTML attr.

**Tarih/Saat/Para**: `date-fns` + `date-fns-tz`, para için `dinero.js` (BigInt tabanlı, IEEE 754 hatasız).

**Telefon input**: `react-phone-number-input` (libphonenumber-js).

**Markdown (AI çıktısı)**: `react-markdown` + `remark-gfm` + `rehype-raw` + **DOMPurify** (zorunlu). Kod blokları için **Shiki** (VS Code grammar, server-render edilebilir).

**Drag-drop**: `dnd-kit` (Radix DnD yok, dnd-kit standardı).

**Virtualization**: `@tanstack/react-virtual` (sizdeki TanStack ailesinde).

**Resumable upload**: `tus-js-client` + tusd backend (büyük belge yüklemeleri, KYC dosyaları için kritik).

**Client image compression**: `browser-image-compression` (KYC selfie'sini APN'e yollamadan önce küçült).

**Service worker**: `vite-plugin-pwa` (Workbox altta). Manifest, precache, runtime cache stratejileri burada.

**Offline write queue**: `@tanstack/query-persist-client` + `idb-keyval` + custom mutation queue. **Replicache/PowerSync** alternatif ama overkill — sizin "read+write queue" senaryosu için TanStack Query'nin `paused mutations` özelliği + IDB persist yeterli.

**CRDT**: `yjs` + `y-indexeddb` (offline persist) + `@hocuspocus/server` (Hetzner Docker'da self-host).

**Voice**: `@capacitor-community/speech-recognition` (mobile), Web Speech API (browser fallback), TTS için OpenAI/ElevenLabs API. Whisper API streaming için `@ricky0123/vad-web` (voice activity detection).

**Push notification**:

- Web: `web-push` (VAPID), service worker push handler
- Native: `@capacitor/push-notifications` + FCM (Android) + APNs (iOS)
- Tek backend payload formatı: FCM HTTP v1 (web push da FCM ile yapılabilir tek noktadan).

**Document scanner**: `@capacitor-mlkit/document-scanner` (Android ML Kit + iOS VisionKit fallback).

**Biometric**: `@aparajita/capacitor-biometric-auth` (en güncel, FaceID/TouchID/BiometricPrompt).

**Bluetooth**: `@capacitor-community/bluetooth-le` (BLE, klasik BT için ayrıca POS SDK).

**Secure storage**: `@capacitor/preferences` token için yetersiz (encrypted değil iOS'ta varsayılan). `@aparajita/capacitor-secure-storage` (Keychain + Android Keystore wrapper) gerekli.

**Error monitoring**: **Sentry** (web + Capacitor native crash). Source map upload CI'da otomatik.

**Analytics + feature flags**: **PostHog** (self-host Hetzner'de Docker, sizin altyapıyla uyumlu). Feature flag, session replay, funnel tek üründe.

**Observability**: OpenTelemetry browser SDK → Grafana Tempo/Loki (kendi sunucunuzda).

**Auth (WebAuthn + magic link + OIDC)**:

- **Keycloak** (Hetzner Docker) — OIDC sağlayıcı, multi-tenant realm, magic link extension, WebAuthn native destekli.
- Client: `oidc-client-ts` veya Keycloak JS adapter.
- Capacitor için: `@capacitor/browser` ile in-app browser (ASWebAuthenticationSession iOS, Custom Tabs Android) + deep link callback. **Embedded WebView içinde OAuth yapma** (Google/Apple yasaklar).

**RBAC matrix**: Refine'in `accessControlProvider` + CASL (`@casl/react`). Backend FastAPI'de CASL'in JSON ability formatını okuyabilir.

**Type-safe API**: `openapi-typescript` (sadece tipler) + `openapi-fetch` (runtime fetch client, küçük). **Orval** TanStack Query hook'larını otomatik üretir ama bağımlılık ağır. Karar: `openapi-typescript` + `openapi-fetch` + TanStack Query hook'larını el yazısı yaz (DI testi kolay).

**Lint/format**: **Biome** (Rust, ESLint+Prettier yerine, ~10x hızlı, tek config). ESLint için sadece import-sort plugin'i kalır.

**Git hooks**: `lefthook` (Go, husky'den hızlı, YAML config).

**Commit**: `commitlint` + `cz-git`.

**Test stack** (test-first prensibinize):

- Unit/integration: **Vitest** + `@testing-library/react` + `@testing-library/user-event`
- API mock: **MSW** (browser + node, hem unit hem E2E)
- E2E web: **Playwright** (auto-wait, trace viewer)
- Visual regression: Playwright snapshot veya **Chromatic** (Storybook ile)
- Component isolation: **Storybook 8** + `@storybook/test-runner`
- Mobile E2E: **Maestro** (YAML, Capacitor uyumlu, Detox'tan basit)
- Accessibility: `axe-core` + Storybook a11y addon
- Performance gate: **Lighthouse CI** (PWA score < 90 PR bloklar)

**Bundle/build**:

- `rollup-plugin-visualizer` bundle analizi
- `vite-plugin-checker` TS + ESLint inline error
- `vite-plugin-svgr` SVG → React component (Phosphor SVG'leri için)

**Icon delivery** (preferences: Phosphor öncelik, CDN):

- `@phosphor-icons/react` (tree-shakable, lokal de kullanılır). CDN tek dosya değil, tree-shaking için npm. CDN sadece marketing landing için.

**Repo yapısı**: **pnpm workspaces** monorepo.

```
apps/web        (PWA Vite build)
apps/mobile     (Capacitor wrapper)
packages/ui     (Flowbite + Radix wrappers)
packages/api    (openapi types + fetch client)
packages/domain (Zod schemas + business logic)
packages/i18n   (ICU messages)
```

Mobile uygulaması ayrı app değil, **web build'i sarmalayan ince Capacitor wrapper**.

---

## 3) Build/deploy pipeline (M4 → Hetzner)

**Web PWA**:

- GitHub Actions Ubuntu runner → `pnpm build` → Docker image → Hetzner registry → `docker compose pull && up -d`.
- Caddy reverse proxy (auto-TLS).

**iOS binary**:

- GitHub Actions **macOS runner** (Hetzner'de iOS build edemezsiniz, Xcode Apple Silicon zorunlu, lisanslı).
- `npx cap sync ios && fastlane beta` → TestFlight.
- Sertifika/profil: `match` (private repo, encrypted).
- Geliştirme M4 makinenizde lokal: `npx cap run ios`.

**Android binary**:

- GitHub Actions Ubuntu runner → Gradle build → Play Console (`fastlane supply`).
- AAB (Android App Bundle), upload key signing.

**OTA güncelleme**:

- `@capgo/capacitor-updater` (self-host, Hetzner'de). Native API değişmediği sürece JS bundle'ı App Store onayı olmadan push.

**OpenClaw + n8n otomasyonu**:

- OpenClaw Symphony: PR açıldığında Lobster code review → Slack/WhatsApp özet.
- n8n workflow: GitHub release webhook → Fastlane trigger → Sentry release → Crowdin (i18n) sync → PostHog feature flag flip.

---

## 4) Dümdüz tech stack — gerekçeyle

|Katman|Seçim|Gerekçe|
|---|---|---|
|Package manager|pnpm + workspaces|Strict node_modules, monorepo native, hızlı|
|Build|Vite 6|RSC bağımlısı değil, HMR hızlı, plugin ekosistemi|
|Framework|React 19 + TypeScript strict|Refine, Flowbite, ekosistem en geniş; RSC yok ama gerekmiyor|
|Routing|React Router v7 (framework mode)|Type-safe loader/action, Vite uyumlu, RSC opsiyonel|
|Mobile shell|Capacitor 7|Tek codebase, native plugin ekosistemi, OTA destekli|
|UI base|Flowbite Pro|Hazır admin component, Tailwind temelli, lisans sizde|
|UI complement|Radix UI|Flowbite'ta olmayan primitives (combobox, command, hover-card)|
|Command palette|cmdk|Radix tabanlı, Linear/Vercel standardı|
|Toast|sonner|Tek lib, Promise toast desteği, küçük|
|Icons|@phosphor-icons/react|Tree-shake, Phosphor öncelik tercihiniz, weight varyantı zengin|
|Styling|Tailwind (Flowbite) + SCSS token|Utility hızı + tema disiplini|
|Animation|Motion (framer-motion successor)|React 19 uyumlu, gesture API|
|Charts|Apache ECharts (echarts-for-react)|Pro-grade, tema-able, büyük dataset performans|
|Forms|react-hook-form + zod|Nested + array + perf, Refine uyumlu|
|Validation|Zod|Tek schema, openapi-zod-client ile backend paylaşımı|
|Table|TanStack Table v8|Headless, faceted filter, bulk action API|
|Virtualization|TanStack Virtual|Aynı aile, 100k satır|
|DnD|dnd-kit|Kanban/sortable standardı|
|URL state|nuqs|Type-safe search params, filter/sort/pagination URL sync|
|Server state|TanStack Query v5|Cache, mutation, optimistic, persistence|
|Client state|Zustand + persist (IDB)|Ephemeral UI, küçük, devtools|
|Data layer (admin)|Refine.dev (headless)|CRUD scaffold, auth provider, access control, audit; UI'a karışmaz|
|Access control|CASL + @casl/react|JSON ability, backend ile paylaşılır|
|Auth provider|Keycloak (Hetzner self-host)|OIDC, magic link, WebAuthn/passkey, multi-tenant realm|
|Auth client|oidc-client-ts|Capacitor in-app browser uyumlu|
|API contract|openapi-typescript + openapi-fetch|FastAPI /openapi.json'dan tip, runtime küçük|
|Realtime push|SSE (EventSource)|Notification, dashboard refresh, basit|
|Collab|Yjs + Hocuspocus|CRDT, self-host, IDB offline persist|
|Offline write|TanStack Query paused mutations + idb-keyval|Built-in, hafif|
|Service worker|vite-plugin-pwa (Workbox)|PWA manifest + cache strategy|
|File upload|Dropzone + tus-js-client|Resumable, KYC dosyaları için kritik|
|Image compress|browser-image-compression|Selfie/belge preprocess|
|Rich text/markdown|react-markdown + remark-gfm + DOMPurify|XSS güvenli, GFM|
|Code highlight|Shiki|VS Code grammar, AI artifact'ları için|
|i18n|react-intl (FormatJS)|ICU MessageFormat native, RTL hazır|
|RTL|tailwindcss-rtl|Arapça için (MENA hedef)|
|Date/Time|date-fns + date-fns-tz|Tree-shake, timezone|
|Money|dinero.js|BigInt, IEEE 754 hatasız|
|Phone|react-phone-number-input|libphonenumber, validation|
|Sanitize|DOMPurify|Model çıktısında zorunlu|
|AI client|Vercel AI SDK (core) + OpenAI/Anthropic SDK|useChat/useCompletion framework-agnostic|
|AI streaming|SSE üzerinden + AI SDK|RSC olmadan|
|AI generative UI|Schema-driven dispatcher + Zod|Custom registry, JSON → React component|
|Voice STT|Whisper API + @ricky0123/vad-web|VAD ile auto-record|
|Voice TTS|OpenAI TTS veya ElevenLabs|Streaming destekli|
|Native: push|@capacitor/push-notifications + web-push|FCM/APNs tek backend|
|Native: biometric|@aparajita/capacitor-biometric-auth|FaceID/TouchID/BiometricPrompt|
|Native: geo|@capacitor/geolocation + background-geolocation plugin|Foreground + bg|
|Native: NFC genel|capacitor-nfc|Kart okuma, ama TC kimlik MRZ için 3. parti|
|Native: BLE|@capacitor-community/bluetooth-le|POS, IoT|
|Native: doc scanner|@capacitor-mlkit/document-scanner|Edge detect, ML Kit|
|Native: secure storage|@aparajita/capacitor-secure-storage|Keychain + Keystore|
|KYC (TC kimlik + liveness)|Sumsub veya Veriff SDK|TC kimlik NFC için time-to-market|
|Error monitoring|Sentry (web + Capacitor)|Source map, native crash|
|Analytics + flags|PostHog self-host (Hetzner)|Tek üründe analytics + feature flag + session replay|
|Observability|OpenTelemetry web SDK|Grafana stack ile uyum|
|Test: unit|Vitest + Testing Library|Vite native, ESM|
|Test: API mock|MSW|Hem unit hem E2E|
|Test: E2E web|Playwright|Trace, parallel|
|Test: visual|Storybook + Chromatic (opsiyonel)|Component isolation|
|Test: mobile E2E|Maestro|YAML, Capacitor uyumlu|
|Test: a11y|axe-core|WCAG gate|
|Test: perf|Lighthouse CI|PWA score gate|
|Lint/format|Biome|Tek config, Rust hızı|
|Git hooks|lefthook|Go, YAML, hızlı|
|Commit|commitlint + cz-git|Conventional commits|
|OTA güncelleme|@capgo/capacitor-updater self-host|Store onayı olmadan JS push|
|Build CI|GitHub Actions (Ubuntu + macOS runner)|iOS macOS şart|
|Mobile deploy|Fastlane (match + supply + pilot)|iOS/Android tek tooling|
|Web deploy|Docker → Hetzner + Caddy|Mevcut altyapı|
|Workflow otomasyon|OpenClaw + n8n|PR review, release, i18n sync, flag flip|

---

## 5) Anti-stack (NE kullanmıyoruz, açıkça)

- **Next.js** — kuralınız, RSC belirsizliği
- **Supabase** — kuralınız, Prisma + Postgres var
- **socket.io** — SSE + native WS + Yjs üçlüsü yeterli, fazla abstraction
- **i18next** — ICU plugin gerektiriyor, react-intl native ICU
- **Detox** — Maestro daha sade Capacitor için
- **Husky** — lefthook daha hızlı
- **ESLint + Prettier** — Biome tek araçta
- **TanStack Form** — RHF nested form için daha olgun (şimdilik)
- **Orval** — openapi-fetch + el TanStack hook'u daha temiz
- **Replicache/PowerSync** — TanStack Query queue + IDB yeterli (sizin senaryoda)
- **Embedded WebView OAuth** — store reddi sebebi

---

## Kapatma soruları (cevap verirseniz son haline geliriz)

1. **KYC için Sumsub/Veriff bütçesi var mı, yoksa native TC kimlik NFC modülünü kendiniz mi yazıyorsunuz?** (4-6 hafta vs lisans ücreti)
2. **PostHog self-host mu, cloud mu?** (Hetzner kaynak: PostHog tek başına ~4GB RAM minimum)
3. **Keycloak'a alternatif olarak Authentik veya Logto düşünür müsünüz?** (Keycloak kurumsal ama JVM ağır; Logto daha hafif TypeScript native)
4. **OTA güncelleme zorunlu mu?** (Capgo self-host ek altyapı; yoksa standart store release yeterli)
5. **AI provider:** Anthropic + OpenAI çoklu mu, yoksa tek sağlayıcı mı? (Vercel AI SDK her ikisini de soyutluyor ama prompt format farklı)

Bu beşine cevap verirseniz son tabloyu **kilitli** olarak `.md` dosyası halinde de çıkartırım, repo'ya `docs/TECH_STACK.md` olarak girer.


1. native TC kimlik NFC modülünü kendimiz yazıyoruz. (vibecoding ile mümkün mü?).
2. PostHog self-host.
3. Logto.
4. evet.
5. çoklu (Anthropic + OpenAI + Gemini)

Beş cevabı kilitliyorum, ama önce iki kritik nokta var ki final dokümana girmeden açıklığa kavuşmalı.

---

## TC Kimlik NFC modülü — vibecoding ile fizibilite

**Kısa cevap: evet, ama doğru tarafından yaklaşırsanız.**

Yanlış yol: "AI'a ICAO 9303'ü sıfırdan yazdır." Protokol kriptografik (BAC/PACE/AA/EAC), AI hatalı state machine üretirse okuma çalışmaz veya yanlış imza doğrular. Test cihazı dışında debug imkânsız.

**Doğru yol: mevcut açık kaynak kütüphaneleri Capacitor plugin olarak sarmala.**

Vibecoding ile yazacağınız kısım:

- Capacitor plugin scaffold (`@capacitor/cli plugin:generate`)
- iOS `Plugin.swift` → `NFCPassportReader` Swift Package'ı çağırır
- Android `Plugin.kt` → `jmrtd` Kotlin'den çağırır
- JS bridge: `scan(can: string): Promise<IdentityData>`
- UI: CAN giriş ekranı, "kartı telefona yaklaştır" animasyonu, sonuç ekranı

Vibecoding'in **dokunmayacağı** kısım: protokol implementasyonu. Bunlar olgun, üretimde test edilmiş açık kaynak:

|Platform|Kütüphane|Lisans|Notlar|
|---|---|---|---|
|iOS|**AndyQ/NFCPassportReader**|MIT|TC kimlik dahil eMRTD, BAC/PACE/AA destekli. Apple "NFC Tag Reading" entitlement zorunlu (Apple Developer'da etkinleştirilir, ek lisans yok).|
|Android|**jmrtd**|LGPL-3.0|Dynamic link ile kapalı kaynak app'te kullanılabilir. Maven Central'da.|

**Türkiye'ye özgü detaylar (vibecoding bunları öğrenmeli):**

- TC kimlik **CAN** (Card Access Number) kullanır, kartın ön yüzünde 6 haneli sayı. Pasaport gibi MRZ değil.
- Çip CardOS tabanlı, PACE protokolü zorunlu (BAC çoğu yerde reddedilir).
- KVK Kurumu izni: kişisel veri işleme açık rıza + EİDS Tebliği (arsam için zaten gerekli).
- Kamu SM kök sertifika ile imza doğrulama opsiyonel — sadece "kart gerçek ve değiştirilmemiş" garantisi isteniyorsa.

**Risk + çözüm:**

- _Test cihazı zorluğu:_ fiziksel TC kimlik kartı + iPhone XS+ veya Android NFC'li. **OpenClaw + n8n çözümü:** geliştirme ortamı için mock plugin yazın (`isNativePlatform() === false` → sabit veri döndür), gerçek cihaz testi Hüseyin'e WhatsApp talimat olarak gider.
- _Vibecoding sürecinde regression:_ Capacitor plugin için **Vitest unit + Maestro flow** ikilisi. Plugin JS API'sini mock'la, gerçek native'i Maestro ile manuel triggera bağla.

**Tahmini süre vibecoding ile:** 2-3 hafta (önceki "kendiniz yazın" tahminim 4-6 haftaydı, çünkü sıfırdan ICAO 9303 implementasyonunu kastetmiştim; sarmalayıcı yaklaşımda yarıya iner).

---

## Önemli çelişki: Capgo self-host → Supabase bağımlısı

Capgo'nun self-host backend'i **Supabase üzerine kurulmuş**. Sizin "Supabase yasak" kuralınızla çelişiyor.

**Üç seçenek:**

1. **Capgo'yu Supabase ile kabullen (sadece OTA için)** — kuralı bu kullanım için esnet. Capgo Supabase'i sadece dosya storage + auth için kullanır, üretim verisi orada değil. Pragmatik.

2. **Capawesome Cloud (managed)** — Capacitor ekosisteminden, Supabase'siz, ama managed (Almanya hosted, KVKK uyumlu). Ücretli.

3. **Minimal kendi OTA server'ı (önerilen)** — FastAPI + Hetzner Object Storage (S3-uyumlu). Vibecoding ile 1 günde yazılır:

    - `GET /updates/latest?channel=production&version=1.2.3` → `{url, checksum, mandatory}`
    - Client: `@capacitor/live-updates` plugin'inin **kendi backend kuralları** desteklenir (sadece manifest endpoint ve zip URL'i gerekir).
    - Channel sistemi (alpha/beta/prod), rollout yüzdesi, rollback FastAPI tarafında.

**Tavsiyem: seçenek 3.** Stack'iniz zaten FastAPI + Hetzner; ek bağımlılık yok, KVKK içeride, OpenClaw + n8n ile release otomasyonu zaten oraya bağlanır.

---

## 5 cevabın stack'e etkisi (özet)

|Karar|Etki|
|---|---|
|1. TC kimlik NFC kendi modülü|Capacitor plugin sarmalı + NFCPassportReader (iOS) + jmrtd (Android). Sumsub/Veriff lisansı **çıkar**. KYB belge doğrulama için yine 3. parti gerekir (vergi levhası, ticaret sicil) — bu kısımda **Veriff** veya **Onfido** kalsın, KYC tarafı kendiniz.|
|2. PostHog self-host|Hetzner CX42 minimum (8 vCPU / 16GB), ayrı sunucu önerilir. ClickHouse + Kafka + Postgres + Redis stack. Docker compose ile.|
|3. Logto (Keycloak yerine)|Node + Postgres (mevcut altyapı). Multi-tenant "Organizations" feature, WebAuthn/passkey + magic link native. Logto JS SDK + Capacitor in-app browser. Audit log için OSS yetersiz olabilir — gerekirse Logto Cloud Pro ya da kendi audit servisi.|
|4. OTA güncelleme zorunlu|Capgo değil — **kendi minimal FastAPI OTA server'ı** (Supabase çelişkisi).|
|5. AI: Anthropic + OpenAI + Gemini|Vercel AI SDK + `@ai-sdk/anthropic` + `@ai-sdk/openai` + `@ai-sdk/google`. Tek `streamText` API, runtime model switching. Provider router + fallback chain. Maliyet/yetenek matrisi prompt seviyesinde.|

---

Şimdi son hâlini `docs/TECH_STACK.md` olarak yazıyorum.Doküman hazır. Repo'da `docs/TECH_STACK.md` olarak yer alacak şekilde yazıldı. Vibecoding referansı, ADR yazma planı ve OpenClaw + n8n otomasyon noktaları dahil.

**Hemen sonraki adımlar için öneri sırası:**

1. **Önce repo iskeleti** — pnpm workspaces + paket sınırları. Bu olmadan vibecoding her PR'da farklı yer yaratır.
2. **`packages/domain` Zod schema'ları** — kullanıcı, organizasyon, KYC submission, AI conversation. Backend FastAPI tarafı bunlardan Pydantic üretebilir (datamodel-code-generator).
3. **`packages/kyc` TC NFC plugin scaffold** — Capacitor plugin generator çalıştır, iOS/Android boş bridge'i kur, mock implementation. UI ekibi paralel başlayabilir.
4. **Logto + Hetzner kurulum** — docker-compose hazır var, organizations feature aç. Multi-tenant realm yapılandır.
5. **OTA server iskelet** — FastAPI + Hetzner Object Storage. 3 endpoint yeterli (manifest, upload, rollout).

İlk hangisini açalım? Repo iskeleti (pnpm-workspace.yaml + tsconfig.base.json + Biome config + lefthook.yml) en yüksek kaldıraçlı çünkü diğer hepsinin ön şartı.


# Tech Stack — AI-first SaaS Panel (Web + Mobile)

> **Statü:** Kilitli karar (`2026-05-14`) **Hedef:** Tek codebase ile PWA + iOS + Android, hibrit (operatör + son kullanıcı), AI-first, KYC/KYB native, offline-capable, multi-tenant SaaS. **Vibecoding referansı:** Bu doküman tek doğruluk kaynağıdır. CLAUDE.md, Cursor rules ve [[AI agent]] prompt'ları buradan üretilir.

---

## 0. Kilitli temel kararlar

|Karar|Değer|Gerekçe|
|---|---|---|
|Kullanım profili|Hibrit (operatör + son kullanıcı, eşit)|Hem dashboard hem kullanıcı akışı tek panelde|
|Mobile yaklaşımı|PWA + Capacitor native shell|Tek codebase, store yayını + native API erişimi|
|Mobile felsefe|Tek React codebase → Capacitor|React Native'in maks. native his maliyeti yok|
|Offline|Read + write queue|Form offline doldurulur, online'da sync|
|i18n|Çoklu locale + ICU MessageFormat|TR + EN + AR (RTL, MENA hedef) + diaspora|
|Auth|Logto (OIDC + magic link + passkey/WebAuthn + multi-tenant)|Node/Postgres native, organizasyon switch|
|Realtime|SSE + native WebSocket + Yjs CRDT|Her ihtiyaç için doğru kanal, socket.io abstraction'ı yok|
|AI|Multi-provider (Anthropic + OpenAI + Gemini)|Yetenek/maliyet routing|
|AI render|Streaming + tool timeline + generative UI + artifact + voice|Tam AI-first deneyim|
|KYC|TC kimlik NFC **kendi modülü** (NFCPassportReader + jmrtd sarmalı)|Sumsub/Veriff dış bağımlılığı yok|
|KYB|Veriff/Onfido (vergi levhası, ticaret sicil doğrulama)|Türkiye'de KYB API çoğu private, 3. parti pragmatik|
|OTA|Kendi minimal FastAPI OTA server (Hetzner)|Capgo Supabase bağımlısı, kural çelişiyor|
|Backend|FastAPI + Postgres + Prisma|Ayrı repo, openapi.json üretir|
|Hosting|Hetzner AMD EPYC Debian + Docker + Caddy|Mevcut altyapı|
|OS hedef|iOS 16+, Android 9+, evergreen browser|NFC, biometric, secure enclave baseline|

---

## 1. Repo yapısı (pnpm workspaces)

```
saas-panel/
├── apps/
│   ├── web/                    # PWA Vite build, ana giriş noktası
│   ├── mobile/                 # Capacitor wrapper (ios/, android/)
│   └── ota-server/             # FastAPI, OTA manifest + S3 yönlendirme
├── packages/
│   ├── ui/                     # Flowbite + Radix + Phosphor wrapper'ları
│   ├── api/                    # openapi-typescript types + openapi-fetch client
│   ├── domain/                 # Zod schemas, business logic, CASL abilities
│   ├── i18n/                   # ICU mesajlar (tr, en, ar), date/number formatters
│   ├── ai/                     # AI SDK provider router, prompt registry, schema-driven UI dispatcher
│   ├── auth/                   # Logto adapter, Capacitor in-app browser flow
│   ├── kyc/                    # TC NFC Capacitor plugin + KYB Veriff adapter
│   ├── realtime/               # SSE client, WS client, Yjs/Hocuspocus setup
│   ├── offline/                # TanStack Query persist + IDB write queue
│   ├── native/                 # Capacitor plugin'lerin tek noktadan dispatch'i
│   └── test-utils/             # MSW handlers, fixture factory'leri
├── tools/
│   ├── eslint-config/          # Biome config + custom rules
│   └── tsconfig/               # Paylaşılan tsconfig.base.json
├── docs/
│   ├── TECH_STACK.md           # bu doküman
│   ├── ENGINEERING_MANIFESTO.md
│   ├── CLAUDE.md               # [[AI agent]] context
│   └── adr/                    # Architecture Decision Records
├── .github/
│   └── workflows/
│       ├── web-deploy.yml      # Ubuntu runner → Hetzner
│       ├── ios-build.yml       # macOS runner → TestFlight
│       ├── android-build.yml   # Ubuntu runner → Play Console
│       └── ota-publish.yml     # JS bundle → kendi OTA server
├── pnpm-workspace.yaml
├── lefthook.yml
└── biome.json
```

---

## 2. Stack tablosu (kategori bazında)

### 2.1. Çekirdek

|Katman|Seçim|Versiyon|Gerekçe|
|---|---|---|---|
|Package manager|pnpm|9.x|Strict node_modules, workspace native, hızlı|
|Build|Vite|6.x|RSC bağımlısız, HMR hızlı, plugin zengin|
|Framework|React|19.x|Concurrent, Suspense, hook olgunluğu|
|Dil|TypeScript|5.6+ strict|`any` yasak, exactOptionalPropertyTypes, noUncheckedIndexedAccess|
|Routing|React Router|v7 (framework mode)|Type-safe loader/action, Vite uyumlu|
|Mobile shell|Capacitor|7.x|Tek codebase, native plugin ekosistemi|

### 2.2. UI & stil

|Katman|Seçim|Gerekçe|
|---|---|---|
|Base component|Flowbite Pro|Hazır admin component, Tailwind temelli, lisans alındı|
|Headless primitive|Radix UI|Flowbite eksiklerine (combobox, hover-card, scroll-area)|
|Command palette|cmdk|Radix tabanlı, Linear/Vercel standardı|
|Toast|sonner|Tek lib, Promise toast, küçük|
|Icons|@phosphor-icons/react|Tree-shake, weight varyantı, kullanıcı tercihi|
|Utility CSS|Tailwind (Flowbite ile gelen)|Component seviyesinde|
|Token & tema|SCSS|`:root` custom properties → Tailwind okur, tek doğruluk kaynağı|
|Animation|Motion (framer-motion successor)|React 19 uyumlu, gesture API|
|Lottie|lottie-react|Onboarding, başarı animasyonları|
|Charts|Apache ECharts + echarts-for-react|Pro-grade, tema-able, büyük dataset|
|DnD|dnd-kit|Kanban, sortable, accessible|
|Virtualization|@tanstack/react-virtual|100k+ satır|
|Image lazy|unlazy veya native `loading="lazy"`|Performans|

### 2.3. State & data

|Katman|Seçim|Gerekçe|
|---|---|---|
|Server state|TanStack Query v5|Cache, mutation, optimistic, persistence|
|Client state|Zustand + persist (IDB üzerinden)|Ephemeral UI, küçük, devtools|
|Form state|react-hook-form + zod resolver|Nested + array + perf|
|URL state|nuqs|Type-safe search params, filter/sort/pagination URL sync|
|Validation|Zod|Tek schema, backend Pydantic ile paylaşılır|
|Data layer scaffold|Refine.dev (headless mode)|CRUD hook, auth provider, access control, audit|
|Table|TanStack Table v8|Headless, faceted filter, bulk action|
|Access control|CASL + @casl/react|JSON ability, backend ile paylaşılır|

**State karar matrisi:**

|State tipi|Nerede|
|---|---|
|Server data|TanStack Query|
|Form data|react-hook-form|
|URL params (filter, sort, page)|nuqs|
|Modal açık/kapalı, sidebar|Zustand|
|Auth session|Logto SDK + Zustand sync|
|Realtime presence|Zustand (WS subscribe)|
|Offline queue|TanStack Query paused mutations + idb-keyval|

### 2.4. API & contract

|Katman|Seçim|Gerekçe|
|---|---|---|
|OpenAPI tip üretimi|openapi-typescript|FastAPI /openapi.json'dan TS tipleri|
|HTTP client|openapi-fetch|Runtime küçük, type-safe, hook'lar el yazısı|
|File upload|Dropzone + tus-js-client|Resumable, KYC dosyaları|
|Image compress|browser-image-compression|Client-side selfie/belge preprocess|

### 2.5. Auth

|Katman|Seçim|Gerekçe|
|---|---|---|
|IDP|**Logto** self-host (Hetzner)|Node + Postgres, multi-tenant Organizations|
|OIDC client|Logto JS SDK + oidc-client-ts fallback|PKCE, refresh token rotation|
|Mobile flow|@capacitor/browser (ASWebAuthenticationSession / Custom Tabs)|Store policy uyumlu|
|Deep link callback|@capacitor/app + universal links|iOS ile Android deep link|
|Passkey/WebAuthn|Logto native|Phishing-resistant, biometric backed|
|Magic link|Logto native|Email-only flow, KYB onboarding için kullanışlı|
|Session|httpOnly cookie + refresh token rotation|XSS güvenli|
|RBAC|CASL ability JSON, Logto org role'lerden türetilir|Backend FastAPI da CASL JSON okur|

### 2.6. Realtime

|Katman|Seçim|Gerekçe|
|---|---|---|
|Notification, toast push, dashboard refresh|SSE (EventSource)|Tek yönlü, basit, proxy dostu|
|Presence, live cursor|Native WebSocket|İki yönlü, küçük payload|
|Collaborative editing|Yjs + Hocuspocus (self-host)|CRDT, conflict-free, offline persist|
|Offline doc persist|y-indexeddb|Yjs'in IDB adapter'ı|

### 2.7. Offline

|Katman|Seçim|Gerekçe|
|---|---|---|
|Read cache|TanStack Query + @tanstack/query-persist-client + idb-keyval|Built-in, hafif|
|Write queue|TanStack Query paused mutations|Online'da auto-resume|
|Conflict resolution|Last-write-wins (varsayılan) + Yjs (collab alanlarda)|Pragmatik|
|Service worker|vite-plugin-pwa (Workbox altta)|Manifest + cache strategy|
|Background sync|Workbox Background Sync API|Browser native, fallback queue|

### 2.8. AI katmanı

|Katman|Seçim|Gerekçe|
|---|---|---|
|AI client core|Vercel AI SDK|Framework-agnostic, useChat/useCompletion|
|Anthropic|@ai-sdk/anthropic|Claude Opus 4.7 / Sonnet 4.6|
|OpenAI|@ai-sdk/openai|GPT-4o, o serisi|
|Gemini|@ai-sdk/google|Gemini 2.x, vision güçlü|
|Provider router|`packages/ai/router.ts` (custom)|Maliyet/yetenek/fallback dispatch|
|Streaming transport|SSE|AI SDK varsayılan|
|Tool calls|AI SDK tool API + Zod schema|Tek tanım, server + client|
|Generative UI|Schema-driven dispatcher (custom registry)|RSC yok, Vite uyumlu|
|Artifact render|iframe sandboxed + Shiki + react-markdown|Code, doc, chart preview|
|Markdown|react-markdown + remark-gfm + rehype-raw + **DOMPurify**|XSS zorunlu|
|Code highlight|Shiki|VS Code grammar|
|Voice STT|Whisper API + @ricky0123/vad-web|Voice activity detection ile auto-record|
|Voice TTS|OpenAI TTS veya ElevenLabs|Streaming|
|Mobile voice|@capacitor-community/speech-recognition (fallback)|Native STT|

**Provider router stratejisi:**

```typescript
// packages/ai/router.ts (kontrat, implementation değil)
type Capability = 'reasoning' | 'vision' | 'long-context' | 'cheap' | 'tool-use';
type ModelChoice = { provider: 'anthropic' | 'openai' | 'google'; model: string };

interface AIRouter {
  pick(capabilities: Capability[]): ModelChoice;
  fallbackChain(primary: ModelChoice): ModelChoice[];
  estimateCost(input: number, output: number, choice: ModelChoice): number;
}
```

### 2.9. Native (Capacitor plugin'leri)

|İhtiyaç|Plugin|Gerekçe|
|---|---|---|
|Push notification|@capacitor/push-notifications + web-push|FCM (Android + web) + APNs (iOS)|
|Biometric|@aparajita/capacitor-biometric-auth|FaceID/TouchID/BiometricPrompt|
|Geolocation|@capacitor/geolocation + capacitor-background-geolocation|Foreground + bg|
|NFC genel|capacitor-nfc|Kart/etiket okuma|
|**TC kimlik NFC**|**Kendi plugin (NFCPassportReader sarmalı)**|Bu paket; iOS Swift + Android Kotlin|
|BLE|@capacitor-community/bluetooth-le|POS, IoT, yazıcı|
|Document scanner|@capacitor-mlkit/document-scanner|ML Kit + VisionKit|
|Secure storage|@aparajita/capacitor-secure-storage|Keychain + Android Keystore|
|Deep link|@capacitor/app + Universal Links / App Links|OIDC callback|
|File system|@capacitor/filesystem|PDF/Excel kaydetme|
|Camera|@capacitor/camera|KYC selfie + belge|
|Share|@capacitor/share|Native share sheet|

### 2.10. KYC / KYB

|Akış|Çözüm|
|---|---|
|TC kimlik MRZ + NFC|**Kendi Capacitor plugin** (NFCPassportReader iOS, jmrtd Android). CAN giriş ekranı + "kartı yaklaştır" UI.|
|Pasaport MRZ + NFC|Aynı plugin, ICAO 9303 standardı kapsar.|
|Selfie + liveness|ML Kit Face Detection + custom challenge (göz kırp, baş çevir). Frame'leri backend'e gönder, FastAPI'de DeepFace veya FaceNet ile match.|
|Belge fotoğrafı (kira, fatura)|@capacitor-mlkit/document-scanner + OCR (Tesseract.js veya server-side)|
|**KYB**: vergi levhası, ticaret sicil|**Veriff** veya **Onfido** managed (Türkiye için Veriff daha güçlü). API only.|
|İmza|react-signature-canvas + PDF embed|

### 2.11. i18n & format

|Katman|Seçim|Gerekçe|
|---|---|---|
|i18n|react-intl (FormatJS)|ICU MessageFormat native|
|Locale dosya|`packages/i18n/locales/{tr,en,ar}.json`|Crowdin sync|
|RTL|`dir="rtl"` + tailwindcss-rtl plugin|Arapça için|
|Tarih|date-fns + date-fns-tz|Tree-shake, timezone|
|Para|dinero.js|BigInt, IEEE 754 hatasız|
|Telefon|react-phone-number-input|libphonenumber-js|

### 2.12. Observability

|Katman|Seçim|Gerekçe|
|---|---|---|
|Error monitoring|Sentry self-host (Hetzner)|Web + Capacitor native crash, source map|
|Analytics + feature flags + session replay|**PostHog self-host**|Tek üründe; ClickHouse + Kafka + Postgres + Redis|
|Tracing|OpenTelemetry web SDK → Grafana Tempo|Backend ile aynı stack|
|Logging|Pino (eğer Node middleware) → Grafana Loki|JSON structured|
|Uptime|Uptime Kuma self-host|Hafif, kendi sunucuda|

**PostHog self-host minimum kaynak:** Hetzner **CX42 veya AX41** (8 vCPU / 16GB RAM), ayrı sunucu önerilir. Session replay açıkken disk tüketimi yüksek; S3-uyumlu object storage (Hetzner Object Storage) ile blob offload.

### 2.13. Test

|Katman|Seçim|Gerekçe|
|---|---|---|
|Unit/integration|Vitest + @testing-library/react + user-event|Vite native, ESM|
|API mock|MSW|Hem unit hem E2E|
|E2E web|Playwright|Auto-wait, trace viewer, parallel|
|Visual regression|Storybook + Chromatic (opsiyonel) veya Playwright snapshot|PR gate|
|Component isolation|Storybook 8 + @storybook/test-runner|Interaction test|
|Mobile E2E|Maestro|YAML, Capacitor uyumlu|
|Accessibility|axe-core + Storybook a11y addon|WCAG 2.1 AA gate|
|Performance gate|Lighthouse CI|PWA score < 90 PR bloklar|
|Load/stress|k6|Backend ile birlikte|

**Test-first ritüel (her feature):**

1. `packages/domain` Zod schema yaz (kontrat).
2. `packages/test-utils` MSW handler yaz.
3. Vitest unit test (failing).
4. Implementation.
5. Storybook story + interaction test.
6. Playwright/Maestro happy path.

### 2.14. Tooling

|Katman|Seçim|Gerekçe|
|---|---|---|
|Lint + format|Biome|Rust, ~10x ESLint hızında, tek config|
|Import sort|Biome dahili|Framework → 3rd-party → shared → relative|
|Git hooks|lefthook|Go, YAML, husky'den hızlı|
|Commit|commitlint + cz-git|Conventional commits|
|Changelog|changesets|Monorepo versioning|
|Bundle analiz|rollup-plugin-visualizer|Vite uyumlu|
|Inline TS check|vite-plugin-checker|TS + Biome PR'dan önce|
|SVG → component|vite-plugin-svgr|Custom Phosphor variant|
|Env validation|t3-env + Zod|Runtime env type-safe|

### 2.15. Deploy & OTA

|Katman|Seçim|Gerekçe|
|---|---|---|
|Web hosting|Hetzner Debian + Docker + Caddy (auto-TLS)|Mevcut altyapı|
|Web CI|GitHub Actions Ubuntu|docker build → registry → SSH compose pull|
|iOS CI|GitHub Actions macOS runner + Fastlane + match|Apple Silicon Xcode|
|Android CI|GitHub Actions Ubuntu + Fastlane supply|AAB → Play Console|
|**OTA**|**Kendi FastAPI server** + Hetzner Object Storage|Capgo Supabase çelişkisi yok|
|OTA client|@capacitor/live-updates (custom backend)|Native bridge|
|CDN|Cloudflare veya BunnyCDN|Static asset edge|

**OTA server kontratı (`apps/ota-server`):**

```
GET /channels/:channel/manifest?version=:current → { latestVersion, bundleUrl, sha256, mandatory, releaseNotes }
POST /channels/:channel/releases (admin) → multipart bundle upload, sha256 doğrulama
GET /channels/:channel/rollout → { percentage, audience }
```

Rollout: yüzde + audience (org id, tenant tier) bazlı. Rollback: `POST /channels/:channel/releases/:id/rollback`.

---

## 3. Çelişkilerin çözüm kararları

|Çelişki|Karar|
|---|---|
|socket.io vs WS vs SSE vs CRDT|socket.io **YOK**. SSE notification, WS presence, Yjs collab — üç kanal, tek abstraction zorlaması yok.|
|Refine vs TanStack Query|Refine headless (data + auth + access). UI'a karışmaz. TanStack Query Refine içinde zaten çalışır.|
|Flowbite (Tailwind) vs SCSS|SCSS sadece token + tema + complex animation. Tailwind component-level. Token tek doğruluk kaynağı SCSS.|
|Zustand vs TanStack Query|Server state Query, ephemeral UI Zustand, form RHF, URL nuqs. Karar matrisi (2.3) bağlayıcı.|
|AI SDK vs Vite (RSC yok)|useChat/useCompletion zaten Vite uyumlu. RSC yerine schema-driven dispatcher (custom registry).|
|Capgo OTA vs Supabase yasağı|Kendi minimal FastAPI OTA server.|
|Embedded WebView OAuth|YASAK. ASWebAuthenticationSession (iOS) + Custom Tabs (Android) zorunlu.|

---

## 4. Anti-stack (açıkça reddedilen)

|Reddedilen|Sebep|
|---|---|
|Next.js|Server/Client component belirsizliği, vibecoding anti-pattern (kullanıcı kuralı)|
|Supabase|Stack kuralı, Prisma + Postgres yeterli|
|socket.io|SSE + WS + Yjs üçlüsü zaten kapsıyor, fazla abstraction|
|i18next|ICU plugin gerektiriyor, react-intl native|
|Detox|Maestro daha sade|
|husky|lefthook daha hızlı|
|ESLint + Prettier ayrı|Biome tek araçta|
|TanStack Form|RHF nested form için şu an daha olgun|
|Orval|openapi-fetch + el TanStack hook daha temiz|
|Replicache/PowerSync|TanStack Query queue yeterli|
|Embedded WebView OAuth|Store policy ihlali|
|Capgo OTA|Supabase bağımlısı|
|Keycloak|Logto tercih (Node native, daha hafif)|
|Sumsub/Veriff (KYC tarafı)|Kendi TC NFC modülü|

---

## 5. CI/CD pipeline ana hatları

### 5.1. Web (PR + main)

1. PR açıldı → Biome lint, vite-plugin-checker TS, Vitest unit + MSW
2. Playwright E2E (Docker Compose ile preview deploy)
3. Lighthouse CI score gate
4. axe-core a11y gate
5. main merge → Docker image build → Hetzner registry → SSH compose pull

### 5.2. iOS

1. main merge + tag `mobile-v*` → macOS runner
2. `npx cap sync ios`
3. Fastlane `match` (sertifika), `gym` (build), `pilot` (TestFlight)
4. Sentry release + dSYM upload
5. PostHog event: release published

### 5.3. Android

1. Aynı tag → Ubuntu runner
2. `npx cap sync android`
3. Fastlane `gradle` build, `supply` (Play Console)
4. Sentry release upload
5. PostHog event

### 5.4. OTA (JS-only değişiklik)

1. Tag `ota-v*` → Ubuntu runner
2. Web bundle build
3. SHA256 hesapla, manifest oluştur
4. Hetzner Object Storage'a upload
5. OTA server'a POST `/channels/production/releases`
6. Rollout başlat (önce %10, gözlem, sonra %100)

---

## 6. OpenClaw + n8n entegrasyon noktaları

|Olay|Otomasyon|
|---|---|
|PR açıldı|OpenClaw Lobster → kod review özet → Slack/WhatsApp|
|Test failed|n8n → ilgili geliştiriciye WhatsApp (Hüseyin için sabah saatleri queue)|
|Release published (TestFlight/Play)|n8n → Crowdin string sync → PostHog feature flag flip → release notes Slack|
|Sentry error spike|n8n → severity'ye göre WhatsApp/email + PostHog session replay link|
|OTA rollout başladı|n8n → 30 dk sonra crash rate kontrol → %10 → %50 → %100 veya otomatik rollback|
|KYC submission|n8n → KYB queue → Veriff webhook bekle → onay/red mail|

---

## 7. Güvenlik baseline

|Alan|Politika|
|---|---|
|Auth token|httpOnly cookie + refresh token rotation, mobile'da secure storage|
|XSS|DOMPurify zorunlu her model çıktısında, react-markdown rehype sanitize|
|CSRF|SameSite=Lax + custom header doğrulama|
|CSP|strict-dynamic, nonce-based, Capacitor için custom scheme allow|
|Bağımlılık|`pnpm audit` CI gate, Renovate haftalık PR|
|Secret|`t3-env` runtime check, GitHub Secrets, Hetzner Vault opsiyonel|
|KVKK|KYC veri retention 1 yıl, EİDS uyumlu, kullanıcı veri export endpoint|
|PII log|Pino redact `password|

---

## 8. Performans bütçesi

|Metrik|Hedef|
|---|---|
|LCP (web)|< 2.5s|
|INP|< 200ms|
|CLS|< 0.1|
|Bundle (initial JS)|< 250kb gzip|
|Lighthouse PWA|> 90|
|TTI mobile (mid-tier Android)|< 3.5s|
|Cold start (Capacitor)|< 1.8s|

---

## 9. Açık riskler & izleme

|Risk|Etki|Azaltma|
|---|---|---|
|TC NFC plugin geliştirme süresi|2-3 hafta, test cihazı bağımlı|Mock plugin ile UI paralel geliştir; gerçek cihaz testi Hüseyin|
|Logto OSS audit log yetersizliği|Compliance|Kendi audit servisi `packages/audit` veya Logto Cloud Pro|
|PostHog kaynak tüketimi|Hetzner faturası|Ayrı sunucu, S3 offload, retention 90 gün|
|Yjs CRDT öğrenme eğrisi|Geliştirme yavaşlığı|Önce read-only collab, sonra write|
|Multi-provider AI fallback karmaşıklığı|Beklenmedik maliyet|Provider router'a budget limiter, daily cap|
|jmrtd LGPL lisans|Hukuki|Dynamic link garantisi; SaaS web tarafı zaten kapalı kaynak değil|
|Capacitor 7 → 8 breaking change|Bakım|Renovate + smoke test on upgrade|

---

## 10. ADR (sonraki adım)

Şu kararlar `docs/adr/` altında ayrı ADR olarak yazılmalı:

- ADR-001: Logto seçimi (vs Keycloak vs Authentik)
- ADR-002: Kendi OTA server (vs Capgo/Capawesome)
- ADR-003: TC NFC kendi plugin (vs Sumsub/Veriff)
- ADR-004: Multi-provider AI router pattern
- ADR-005: Refine headless mode (UI ayrımı)
- ADR-006: SSE + WS + Yjs üç kanal (vs socket.io)
- ADR-007: Biome (vs ESLint + Prettier)
- ADR-008: react-intl (vs i18next)

---

**Doküman versiyonu:** 1.0.0 **Sahibi:** İsmail **Son güncelleme:** 2026-05-14


Tech Stack — AI-first SaaS Panel (Web + Mobile) > **Statü:** Kilitli karar (`2026-05-14`) > **Hedef:** Tek codebase ile PWA + iOS + Android, hibrit (operatör + son kullanıcı), AI-first, KYC/KYB native, offline-capable, multi-tenant SaaS. > **Vibecoding referansı:** Bu doküman tek doğruluk kaynağıdır. CLAUDE.md, Cursor rules ve [[AI agent]] prompt'ları buradan üretilir. --- ## 0. Kilitli temel kararlar | Karar | Değer | Gerekçe | |---|---|---| | Kullanım profili | Hibrit (operatör + son kullanıcı, eşit) | Hem dashboard hem kullanıcı akışı tek panelde | | Mobile yaklaşımı | PWA + Capacitor native shell | Tek codebase, store yayını + native API erişimi | | Mobile felsefe | Tek React codebase → Capacitor | React Native'in maks. native his maliyeti yok | | Offline | Read + write queue | Form offline doldurulur, online'da sync | | i18n | Çoklu locale + ICU MessageFormat | TR + EN + AR (RTL, MENA hedef) + diaspora | | Auth | Logto (OIDC + magic link + passkey/WebAuthn + multi-tenant) | Node/Postgres native, organizasyon switch | | Realtime | SSE + native WebSocket + Yjs CRDT | Her ihtiyaç için doğru kanal, socket.io abstraction'ı yok | | AI | Multi-provider (Anthropic + OpenAI + Gemini) | Yetenek/maliyet routing | | AI render | Streaming + tool timeline + generative UI + artifact + voice | Tam AI-first deneyim | | KYC | TC kimlik NFC **kendi modülü** (NFCPassportReader + jmrtd sarmalı) | Sumsub/Veriff dış bağımlılığı yok | | KYB | Veriff/Onfido (vergi levhası, ticaret sicil doğrulama) | Türkiye'de KYB API çoğu private, 3. parti pragmatik | | OTA | Kendi minimal FastAPI OTA server (Hetzner) | Capgo Supabase bağımlısı, kural çelişiyor | | Backend | FastAPI + Postgres + Prisma | Ayrı repo, openapi.json üretir | | Hosting | Hetzner AMD EPYC Debian + Docker + Caddy | Mevcut altyapı | | OS hedef | iOS 16+, Android 9+, evergreen browser | NFC, biometric, secure enclave baseline | --- ## 1. Repo yapısı (pnpm workspaces) ``` saas-panel/ ├── apps/ │ ├── web/ # PWA Vite build, ana giriş noktası │ ├── mobile/ # Capacitor wrapper (ios/, android/) │ └── ota-server/ # FastAPI, OTA manifest + S3 yönlendirme ├── packages/ │ ├── ui/ # Flowbite + Radix + Phosphor wrapper'ları │ ├── api/ # openapi-typescript types + openapi-fetch client │ ├── domain/ # Zod schemas, business logic, CASL abilities │ ├── i18n/ # ICU mesajlar (tr, en, ar), date/number formatters │ ├── ai/ # AI SDK provider router, prompt registry, schema-driven UI dispatcher │ ├── auth/ # Logto adapter, Capacitor in-app browser flow │ ├── kyc/ # TC NFC Capacitor plugin + KYB Veriff adapter │ ├── realtime/ # SSE client, WS client, Yjs/Hocuspocus setup │ ├── offline/ # TanStack Query persist + IDB write queue │ ├── native/ # Capacitor plugin'lerin tek noktadan dispatch'i │ └── test-utils/ # MSW handlers, fixture factory'leri ├── tools/ │ ├── eslint-config/ # Biome config + custom rules │ └── tsconfig/ # Paylaşılan tsconfig.base.json ├── docs/ │ ├── TECH_STACK.md # bu doküman │ ├── ENGINEERING_MANIFESTO.md │ ├── CLAUDE.md # [[AI agent]] context │ └── adr/ # Architecture Decision Records ├── .github/ │ └── workflows/ │ ├── web-deploy.yml # Ubuntu runner → Hetzner │ ├── ios-build.yml # macOS runner → TestFlight │ ├── android-build.yml # Ubuntu runner → Play Console │ └── ota-publish.yml # JS bundle → kendi OTA server ├── pnpm-workspace.yaml ├── lefthook.yml └── biome.json ``` --- ## 2. Stack tablosu (kategori bazında) ### 2.1. Çekirdek | Katman | Seçim | Versiyon | Gerekçe | |---|---|---|---| | Package manager | pnpm | 9.x | Strict node_modules, workspace native, hızlı | | Build | Vite | 6.x | RSC bağımlısız, HMR hızlı, plugin zengin | | Framework | React | 19.x | Concurrent, Suspense, hook olgunluğu | | Dil | TypeScript | 5.6+ strict | `any` yasak, exactOptionalPropertyTypes, noUncheckedIndexedAccess | | Routing | React Router | v7 (framework mode) | Type-safe loader/action, Vite uyumlu | | Mobile shell | Capacitor | 7.x | Tek codebase, native plugin ekosistemi | ### 2.2. UI & stil | Katman | Seçim | Gerekçe | |---|---|---| | Base component | Flowbite Pro | Hazır admin component, Tailwind temelli, lisans alındı | | Headless primitive | Radix UI | Flowbite eksiklerine (combobox, hover-card, scroll-area) | | Command palette | cmdk | Radix tabanlı, Linear/Vercel standardı | | Toast | sonner | Tek lib, Promise toast, küçük | | Icons | @phosphor-icons/react | Tree-shake, weight varyantı, kullanıcı tercihi | | Utility CSS | Tailwind (Flowbite ile gelen) | Component seviyesinde | | Token & tema | SCSS | `:root` custom properties → Tailwind okur, tek doğruluk kaynağı | | Animation | Motion (framer-motion successor) | React 19 uyumlu, gesture API | | Lottie | lottie-react | Onboarding, başarı animasyonları | | Charts | Apache ECharts + echarts-for-react | Pro-grade, tema-able, büyük dataset | | DnD | dnd-kit | Kanban, sortable, accessible | | Virtualization | @tanstack/react-virtual | 100k+ satır | | Image lazy | unlazy veya native `loading="lazy"` | Performans | ### 2.3. State & data | Katman | Seçim | Gerekçe | |---|---|---| | Server state | TanStack Query v5 | Cache, mutation, optimistic, persistence | | Client state | Zustand + persist (IDB üzerinden) | Ephemeral UI, küçük, devtools | | Form state | react-hook-form + zod resolver | Nested + array + perf | | URL state | nuqs | Type-safe search params, filter/sort/pagination URL sync | | Validation | Zod | Tek schema, backend Pydantic ile paylaşılır | | Data layer scaffold | Refine.dev (headless mode) | CRUD hook, auth provider, access control, audit | | Table | TanStack Table v8 | Headless, faceted filter, bulk action | | Access control | CASL + @casl/react | JSON ability, backend ile paylaşılır | **State karar matrisi:** | State tipi | Nerede | |---|---| | Server data | TanStack Query | | Form data | react-hook-form | | URL params (filter, sort, page) | nuqs | | Modal açık/kapalı, sidebar | Zustand | | Auth session | Logto SDK + Zustand sync | | Realtime presence | Zustand (WS subscribe) | | Offline queue | TanStack Query paused mutations + idb-keyval | ### 2.4. API & contract | Katman | Seçim | Gerekçe | |---|---|---| | OpenAPI tip üretimi | openapi-typescript | FastAPI /openapi.json'dan TS tipleri | | HTTP client | openapi-fetch | Runtime küçük, type-safe, hook'lar el yazısı | | File upload | Dropzone + tus-js-client | Resumable, KYC dosyaları | | Image compress | browser-image-compression | Client-side selfie/belge preprocess | ### 2.5. Auth | Katman | Seçim | Gerekçe | |---|---|---| | IDP | **Logto** self-host (Hetzner) | Node + Postgres, multi-tenant Organizations | | OIDC client | Logto JS SDK + oidc-client-ts fallback | PKCE, refresh token rotation | | Mobile flow | @capacitor/browser (ASWebAuthenticationSession / Custom Tabs) | Store policy uyumlu | | Deep link callback | @capacitor/app + universal links | iOS ile Android deep link | | Passkey/WebAuthn | Logto native | Phishing-resistant, biometric backed | | Magic link | Logto native | Email-only flow, KYB onboarding için kullanışlı | | Session | httpOnly cookie + refresh token rotation | XSS güvenli | | RBAC | CASL ability JSON, Logto org role'lerden türetilir | Backend FastAPI da CASL JSON okur | ### 2.6. Realtime | Katman | Seçim | Gerekçe | |---|---|---| | Notification, toast push, dashboard refresh | SSE (EventSource) | Tek yönlü, basit, proxy dostu | | Presence, live cursor | Native WebSocket | İki yönlü, küçük payload | | Collaborative editing | Yjs + Hocuspocus (self-host) | CRDT, conflict-free, offline persist | | Offline doc persist | y-indexeddb | Yjs'in IDB adapter'ı | ### 2.7. Offline | Katman | Seçim | Gerekçe | |---|---|---| | Read cache | TanStack Query + @tanstack/query-persist-client + idb-keyval | Built-in, hafif | | Write queue | TanStack Query paused mutations | Online'da auto-resume | | Conflict resolution | Last-write-wins (varsayılan) + Yjs (collab alanlarda) | Pragmatik | | Service worker | vite-plugin-pwa (Workbox altta) | Manifest + cache strategy | | Background sync | Workbox Background Sync API | Browser native, fallback queue | ### 2.8. AI katmanı | Katman | Seçim | Gerekçe | |---|---|---| | AI client core | Vercel AI SDK | Framework-agnostic, useChat/useCompletion | | Anthropic | @ai-sdk/anthropic | Claude Opus 4.7 / Sonnet 4.6 | | OpenAI | @ai-sdk/openai | GPT-4o, o serisi | | Gemini | @ai-sdk/google | Gemini 2.x, vision güçlü | | Provider router | `packages/ai/router.ts` (custom) | Maliyet/yetenek/fallback dispatch | | Streaming transport | SSE | AI SDK varsayılan | | Tool calls | AI SDK tool API + Zod schema | Tek tanım, server + client | | Generative UI | Schema-driven dispatcher (custom registry) | RSC yok, Vite uyumlu | | Artifact render | iframe sandboxed + Shiki + react-markdown | Code, doc, chart preview | | Markdown | react-markdown + remark-gfm + rehype-raw + **DOMPurify** | XSS zorunlu | | Code highlight | Shiki | VS Code grammar | | Voice STT | Whisper API + @ricky0123/vad-web | Voice activity detection ile auto-record | | Voice TTS | OpenAI TTS veya ElevenLabs | Streaming | | Mobile voice | @capacitor-community/speech-recognition (fallback) | Native STT | **Provider router stratejisi:** ```typescript // packages/ai/router.ts (kontrat, implementation değil) type Capability = 'reasoning' | 'vision' | 'long-context' | 'cheap' | 'tool-use'; type ModelChoice = { provider: 'anthropic' | 'openai' | 'google'; model: string }; interface AIRouter { pick(capabilities: Capability[]): ModelChoice; fallbackChain(primary: ModelChoice): ModelChoice[]; estimateCost(input: number, output: number, choice: ModelChoice): number; } ``` ### 2.9. Native (Capacitor plugin'leri) | İhtiyaç | Plugin | Gerekçe | |---|---|---| | Push notification | @capacitor/push-notifications + web-push | FCM (Android + web) + APNs (iOS) | | Biometric | @aparajita/capacitor-biometric-auth | FaceID/TouchID/BiometricPrompt | | Geolocation | @capacitor/geolocation + capacitor-background-geolocation | Foreground + bg | | NFC genel | capacitor-nfc | Kart/etiket okuma | | **TC kimlik NFC** | **Kendi plugin (NFCPassportReader sarmalı)** | Bu paket; iOS Swift + Android Kotlin | | BLE | @capacitor-community/bluetooth-le | POS, IoT, yazıcı | | Document scanner | @capacitor-mlkit/document-scanner | ML Kit + VisionKit | | Secure storage | @aparajita/capacitor-secure-storage | Keychain + Android Keystore | | Deep link | @capacitor/app + Universal Links / App Links | OIDC callback | | File system | @capacitor/filesystem | PDF/Excel kaydetme | | Camera | @capacitor/camera | KYC selfie + belge | | Share | @capacitor/share | Native share sheet | ### 2.10. KYC / KYB | Akış | Çözüm | |---|---| | TC kimlik MRZ + NFC | **Kendi Capacitor plugin** (NFCPassportReader iOS, jmrtd Android). CAN giriş ekranı + "kartı yaklaştır" UI. | | Pasaport MRZ + NFC | Aynı plugin, ICAO 9303 standardı kapsar. | | Selfie + liveness | ML Kit Face Detection + custom challenge (göz kırp, baş çevir). Frame'leri backend'e gönder, FastAPI'de DeepFace veya FaceNet ile match. | | Belge fotoğrafı (kira, fatura) | @capacitor-mlkit/document-scanner + OCR (Tesseract.js veya server-side) | | **KYB**: vergi levhası, ticaret sicil | **Veriff** veya **Onfido** managed (Türkiye için Veriff daha güçlü). API only. | | İmza | react-signature-canvas + PDF embed | ### 2.11. i18n & format | Katman | Seçim | Gerekçe | |---|---|---| | i18n | react-intl (FormatJS) | ICU MessageFormat native | | Locale dosya | `packages/i18n/locales/{tr,en,ar}.json` | Crowdin sync | | RTL | `dir="rtl"` + tailwindcss-rtl plugin | Arapça için | | Tarih | date-fns + date-fns-tz | Tree-shake, timezone | | Para | dinero.js | BigInt, IEEE 754 hatasız | | Telefon | react-phone-number-input | libphonenumber-js | ### 2.12. Observability | Katman | Seçim | Gerekçe | |---|---|---| | Error monitoring | Sentry self-host (Hetzner) | Web + Capacitor native crash, source map | | Analytics + feature flags + session replay | **PostHog self-host** | Tek üründe; ClickHouse + Kafka + Postgres + Redis | | Tracing | OpenTelemetry web SDK → Grafana Tempo | Backend ile aynı stack | | Logging | Pino (eğer Node middleware) → Grafana Loki | JSON structured | | Uptime | Uptime Kuma self-host | Hafif, kendi sunucuda | **PostHog self-host minimum kaynak:** Hetzner **CX42 veya AX41** (8 vCPU / 16GB RAM), ayrı sunucu önerilir. Session replay açıkken disk tüketimi yüksek; S3-uyumlu object storage (Hetzner Object Storage) ile blob offload. ### 2.13. Test | Katman | Seçim | Gerekçe | |---|---|---| | Unit/integration | Vitest + @testing-library/react + user-event | Vite native, ESM | | API mock | MSW | Hem unit hem E2E | | E2E web | Playwright | Auto-wait, trace viewer, parallel | | Visual regression | Storybook + Chromatic (opsiyonel) veya Playwright snapshot | PR gate | | Component isolation | Storybook 8 + @storybook/test-runner | Interaction test | | Mobile E2E | Maestro | YAML, Capacitor uyumlu | | Accessibility | axe-core + Storybook a11y addon | WCAG 2.1 AA gate | | Performance gate | Lighthouse CI | PWA score < 90 PR bloklar | | Load/stress | k6 | Backend ile birlikte | **Test-first ritüel (her feature):** 1. `packages/domain` Zod schema yaz (kontrat). 2. `packages/test-utils` MSW handler yaz. 3. Vitest unit test (failing). 4. Implementation. 5. Storybook story + interaction test. 6. Playwright/Maestro happy path. ### 2.14. Tooling | Katman | Seçim | Gerekçe | |---|---|---| | Lint + format | Biome | Rust, ~10x ESLint hızında, tek config | | Import sort | Biome dahili | Framework → 3rd-party → shared → relative | | Git hooks | lefthook | Go, YAML, husky'den hızlı | | Commit | commitlint + cz-git | Conventional commits | | Changelog | changesets | Monorepo versioning | | Bundle analiz | rollup-plugin-visualizer | Vite uyumlu | | Inline TS check | vite-plugin-checker | TS + Biome PR'dan önce | | SVG → component | vite-plugin-svgr | Custom Phosphor variant | | Env validation | t3-env + Zod | Runtime env type-safe | ### 2.15. Deploy & OTA | Katman | Seçim | Gerekçe | |---|---|---| | Web hosting | Hetzner Debian + Docker + Caddy (auto-TLS) | Mevcut altyapı | | Web CI | GitHub Actions Ubuntu | docker build → registry → SSH compose pull | | iOS CI | GitHub Actions macOS runner + Fastlane + match | Apple Silicon Xcode | | Android CI | GitHub Actions Ubuntu + Fastlane supply | AAB → Play Console | | **OTA** | **Kendi FastAPI server** + Hetzner Object Storage | Capgo Supabase çelişkisi yok | | OTA client | @capacitor/live-updates (custom backend) | Native bridge | | CDN | Cloudflare veya BunnyCDN | Static asset edge | **OTA server kontratı (`apps/ota-server`):** ``` GET /channels/:channel/manifest?version=:current → { latestVersion, bundleUrl, sha256, mandatory, releaseNotes } POST /channels/:channel/releases (admin) → multipart bundle upload, sha256 doğrulama GET /channels/:channel/rollout → { percentage, audience } ``` Rollout: yüzde + audience (org id, tenant tier) bazlı. Rollback: `POST /channels/:channel/releases/:id/rollback`. --- ## 3. Çelişkilerin çözüm kararları | Çelişki | Karar | |---|---| | socket.io vs WS vs SSE vs CRDT | socket.io **YOK**. SSE notification, WS presence, Yjs collab — üç kanal, tek abstraction zorlaması yok. | | Refine vs TanStack Query | Refine headless (data + auth + access). UI'a karışmaz. TanStack Query Refine içinde zaten çalışır. | | Flowbite (Tailwind) vs SCSS | SCSS sadece token + tema + complex animation. Tailwind component-level. Token tek doğruluk kaynağı SCSS. | | Zustand vs TanStack Query | Server state Query, ephemeral UI Zustand, form RHF, URL nuqs. Karar matrisi (2.3) bağlayıcı. | | AI SDK vs Vite (RSC yok) | useChat/useCompletion zaten Vite uyumlu. RSC yerine schema-driven dispatcher (custom registry). | | Capgo OTA vs Supabase yasağı | Kendi minimal FastAPI OTA server. | | Embedded WebView OAuth | YASAK. ASWebAuthenticationSession (iOS) + Custom Tabs (Android) zorunlu. | --- ## 4. Anti-stack (açıkça reddedilen) | Reddedilen | Sebep | |---|---| | Next.js | Server/Client component belirsizliği, vibecoding anti-pattern (kullanıcı kuralı) | | Supabase | Stack kuralı, Prisma + Postgres yeterli | | socket.io | SSE + WS + Yjs üçlüsü zaten kapsıyor, fazla abstraction | | i18next | ICU plugin gerektiriyor, react-intl native | | Detox | Maestro daha sade | | husky | lefthook daha hızlı | | ESLint + Prettier ayrı | Biome tek araçta | | TanStack Form | RHF nested form için şu an daha olgun | | Orval | openapi-fetch + el TanStack hook daha temiz | | Replicache/PowerSync | TanStack Query queue yeterli | | Embedded WebView OAuth | Store policy ihlali | | Capgo OTA | Supabase bağımlısı | | Keycloak | Logto tercih (Node native, daha hafif) | | Sumsub/Veriff (KYC tarafı) | Kendi TC NFC modülü | --- ## 5. CI/CD pipeline ana hatları ### 5.1. Web (PR + main) 1. PR açıldı → Biome lint, vite-plugin-checker TS, Vitest unit + MSW 2. Playwright E2E (Docker Compose ile preview deploy) 3. Lighthouse CI score gate 4. axe-core a11y gate 5. main merge → Docker image build → Hetzner registry → SSH compose pull ### 5.2. iOS 1. main merge + tag `mobile-v*` → macOS runner 2. `npx cap sync ios` 3. Fastlane `match` (sertifika), `gym` (build), `pilot` (TestFlight) 4. Sentry release + dSYM upload 5. PostHog event: release published ### 5.3. Android 1. Aynı tag → Ubuntu runner 2. `npx cap sync android` 3. Fastlane `gradle` build, `supply` (Play Console) 4. Sentry release upload 5. PostHog event ### 5.4. OTA (JS-only değişiklik) 1. Tag `ota-v*` → Ubuntu runner 2. Web bundle build 3. SHA256 hesapla, manifest oluştur 4. Hetzner Object Storage'a upload 5. OTA server'a POST `/channels/production/releases` 6. Rollout başlat (önce %10, gözlem, sonra %100) --- ## 6. OpenClaw + n8n entegrasyon noktaları | Olay | Otomasyon | |---|---| | PR açıldı | OpenClaw Lobster → kod review özet → Slack/WhatsApp | | Test failed | n8n → ilgili geliştiriciye WhatsApp (Hüseyin için sabah saatleri queue) | | Release published (TestFlight/Play) | n8n → Crowdin string sync → PostHog feature flag flip → release notes Slack | | Sentry error spike | n8n → severity'ye göre WhatsApp/email + PostHog session replay link | | OTA rollout başladı | n8n → 30 dk sonra crash rate kontrol → %10 → %50 → %100 veya otomatik rollback | | KYC submission | n8n → KYB queue → Veriff webhook bekle → onay/red mail | --- ## 7. Güvenlik baseline | Alan | Politika | |---|---| | Auth token | httpOnly cookie + refresh token rotation, mobile'da secure storage | | XSS | DOMPurify zorunlu her model çıktısında, react-markdown rehype sanitize | | CSRF | SameSite=Lax + custom header doğrulama | | CSP | strict-dynamic, nonce-based, Capacitor için custom scheme allow | | Bağımlılık | `pnpm audit` CI gate, Renovate haftalık PR | | Secret | `t3-env` runtime check, GitHub Secrets, Hetzner Vault opsiyonel | | KVKK | KYC veri retention 1 yıl, EİDS uyumlu, kullanıcı veri export endpoint | | PII log | Pino redact `password|token|tcKimlik|email` | --- ## 8. Performans bütçesi | Metrik | Hedef | |---|---| | LCP (web) | < 2.5s | | INP | < 200ms | | CLS | < 0.1 | | Bundle (initial JS) | < 250kb gzip | | Lighthouse PWA | > 90 | | TTI mobile (mid-tier Android) | < 3.5s | | Cold start (Capacitor) | < 1.8s | --- ## 9. Açık riskler & izleme | Risk | Etki | Azaltma | |---|---|---| | TC NFC plugin geliştirme süresi | 2-3 hafta, test cihazı bağımlı | Mock plugin ile UI paralel geliştir; gerçek cihaz testi Hüseyin | | Logto OSS audit log yetersizliği | Compliance | Kendi audit servisi `packages/audit` veya Logto Cloud Pro | | PostHog kaynak tüketimi | Hetzner faturası | Ayrı sunucu, S3 offload, retention 90 gün | | Yjs CRDT öğrenme eğrisi | Geliştirme yavaşlığı | Önce read-only collab, sonra write | | Multi-provider AI fallback karmaşıklığı | Beklenmedik maliyet | Provider router'a budget limiter, daily cap | | jmrtd LGPL lisans | Hukuki | Dynamic link garantisi; SaaS web tarafı zaten kapalı kaynak değil | | Capacitor 7 → 8 breaking change | Bakım | Renovate + smoke test on upgrade | --- ## 10. ADR (sonraki adım) Şu kararlar `docs/adr/` altında ayrı ADR olarak yazılmalı: - ADR-001: Logto seçimi (vs Keycloak vs Authentik) - ADR-002: Kendi OTA server (vs Capgo/Capawesome) - ADR-003: TC NFC kendi plugin (vs Sumsub/Veriff) - ADR-004: Multi-provider AI router pattern - ADR-005: Refine headless mode (UI ayrımı) - ADR-006: SSE + WS + Yjs üç kanal (vs socket.io) - ADR-007: Biome (vs ESLint + Prettier) - ADR-008: react-intl (vs i18next) --- **Doküman versiyonu:** 1.0.0 **Sahibi:** İsmail **Son güncelleme:** 2026-05-14



mobile pwa + diğer gereksinimler için (yukarıdaki son artifact ile çelişmeyecek) geliştirme paketleme yayınlama yol haritası.İstek netleştirmek için kısa sorular — sonra dümdüz yol haritasını araştırmaya gönderiyorum.

1. Mobile binary için Apple Developer + Google Play Developer hesapları: ikisi de açık mı, yoksa hesap açma + KVKK/şirket doğrulama da yol haritasına dahil olsun mu? (Apple kurumsal D-U-N-S numarası süreci 2-4 hafta sürebilir)

2. Yayın stratejisi: closed beta (TestFlight + Play internal testing) ile mi başlıyorsunuz, yoksa direkt production release mi hedef? (İlki 2-3 ay test süresi getirir, ikincisi daha agresif takvim)

3. Hedef takvim ve scope: bu yol haritası arsam.net (Temmuz 2026) için mi, yoksa daha geniş bir SaaS platformu ([[Great Doers]], Segika, vs.) için mi geçerli? Hangi proje önce binary alıyor?

4. Apple Developer + Google Play Developer hesapları: hesap açma + KVKK/şirket doğrulama da yol haritasına dahil olsun.

5. closed beta (TestFlight + Play internal testing) ile mi başlıyorsunuz, yoksa direkt production release.

6. arsam.net (Haziran 2026) için

Net. Üç cevabı aldım, takvim de daralmış (Haziran 2026 = ~3-4 hafta). Doğrudan derin araştırmaya geçiyorum — Apple/Google hesap süreçleri, TestFlight/Play internal testing closed beta akışı, Capacitor build pipeline, ve TECH_STACK.md ile uyumlu paketleme/yayınlama yol haritasını detaylı çıkartacağım.arsam.net Mobil Uygulama Closed Beta Yol Haritası raporunuz hazır. Rapor, Haziran 2026 TestFlight ve Google Play Internal Testing lansmanı için 3-4 haftalık kritik path'i içeriyor: D-U-N-S başvurusu, Apple/Google Organization enrollment süreçleri, KVKK + EİDS uyumu (özellikle 2023/1430 sayılı TC kimlik kararı), Capacitor 7 build pipeline, fastlane otomasyonu, ve @capgo/capacitor-updater + FastAPI ile self-host OTA çözümü ele alınıyor. AndyQ (iOS) + jmrtd (Android) ile TC kimlik NFC plugin fizibilitesi, App Store Review Guidelines'ın 13 Kasım 2025 güncellemesi, haftalık (W1-W4) zaman çizelgesi, risk matrisi ve 12 maddelik karar matrisi de raporda yer alıyor.


# arsam.net Mobil Uygulama — Closed Beta Yol Haritası (Haziran 2026)

**Doküman tarihi:** 14 Mayıs 2026 · **Hedef:** Haziran 2026 Closed Beta (TestFlight + Play Internal Testing) · **Süre:** 3–4 hafta · **Geliştirme makinesi:** macOS M4 (Apple Silicon)

> Bu rapor, kilitli teknik stack (React 19 + Vite 6 + Capacitor 7 + pnpm 9 monorepo + Logto self-host + FastAPI OTA + Hetzner) ile tam uyumludur. Hiçbir kararı değiştirmez, hepsini bir lansman planına bağlar. Mock veri içermez; tüm rakamlar resmi kaynaklara (developer.apple.com, support.google.com, kvkk.gov.tr, capacitorjs.com, fastlane.tools) dayanır.

---

## 1. Yönetici Özeti — Kritik Path ve Tek Cümlelik Sonuç

**Kritik path:** D-U-N-S Number başvurusu (≈ 5 iş günü) → Apple Developer Program Organization enrollment (≈ 2 iş günü Apple tarafı + birkaç gün identity verification) → iOS Distribution Certificate + Provisioning Profile (fastlane match) → TestFlight ilk build (App Review for TestFlight 24–48 saat) → Closed Beta. Bu zincir bozulmaz; aksilik olursa beta gecikir.

**En önemli iki risk:**

1. **Apple D-U-N-S süreci**: Dun & Bradstreet resmi olarak başvuru için 5 iş gününe kadar süre tanır, gerekirse iki haftaya çıkabilir. Apple'ın D&B'den veriyi alması ek olarak 2 iş gününü bulur. Bu takvimsel en uzun tek kalem ve Bugün (14 Mayıs) başlatılmazsa Haziran beta riski büyür.
2. **Google Play 13 Kasım 2023 sonrası kişisel hesap kuralı**: Personal account ile yeni uygulama yayınlamak için en az 12 opted-in tester ile 14 ardışık gün closed testing zorunludur. Organization (kurumsal/D-U-N-S benzeri evrak doğrulamalı) hesaplar bu kuraldan MUAFTIR. arsam bir şirket olduğu için Google Play Console'a Organization olarak kayıt olunmalı — aksi takdirde 14 günlük takvim parçası kritik path'e eklenir.

**Tek cümlelik sonuç:** Bugün (14 Mayıs) D-U-N-S başvurusu yapılır, Apple/Google Organization enrollment paralel başlatılır, PWA + Capacitor 7 mobile shell + KYC NFC plugin paralel geliştirilir, kendi FastAPI OTA server'ı paralel ayağa kalkar, 3–4 hafta sonunda TestFlight (internal 100 tester) + Play Internal Testing (100 tester) ile closed beta açılır.

---

## 2. A — Apple Developer Program Organization Enrollment (2026 güncel)

### 2.1 Bireysel vs Organization — Karar Matrisi

|Konu|Individual|Organization|
|---|---|---|
|Seller name|Şahıs adı|Şirket tüzel kişiliği|
|D-U-N-S Number|Gerekmez|Zorunlu (devlet kurumları hariç)|
|Sözleşme imzalama yetkisi|Şahıs|Sahibi/kurucu, yönetici veya yetkilendirilmiş çalışan|
|App Store Connect takım yönetimi|Sınırlı|Birden fazla rol/kullanıcı|
|arsam için doğru seçim|❌|✅ **Organization**|

Apple, "DBA, fictitious business, trade names, branches" kabul etmiyor. arsam kayıtlı tüzel kişilik olmalı (A.Ş./Ltd. Şti.).

### 2.2 D-U-N-S Number — Türkiye'de Süreç

D-U-N-S, Dun & Bradstreet tarafından verilen 9 haneli işletme tanıtım numarasıdır. Apple'ın resmi rehberi:

- **Önce mevcut numarayı sorgula**: developer.apple.com üzerinden D-U-N-S lookup tool ile. Çoğu kurumlu şirketin otomatik D&B kaydı zaten vardır.
- **Yoksa başvuru**: Aynı lookup üzerinden "submit your information to Dun & Bradstreet" akışıyla ücretsiz olarak. Apple özellikle: "Expediting your D-U-N-S Number creation process will not shorten this waiting period".
- **Resmi süre**: "please allow up to 5 business days" (Apple). İki haftadan uzun sürüyorsa D&B'ye doğrudan e-posta atılması öneriliyor.
- **Apple'a iletim**: D-U-N-S oluşturulduktan sonra Apple'ın D&B'den veriyi çekmesi için 2 iş günü daha geçer.
- **Türkiye için pratik:** Dun & Bradstreet'in Türkiye temsilciliği vardır; başvuruda hazırlanacaklar — vergi levhası, sicil gazetesi/Ticaret Sicil belgesi, kayıtlı şirket adresi, yetkili kişi telefonu. D&B temsilcisi doğrulama için arayabilir.

> **Uyarı**: D-U-N-S kaydı yoksa Apple enrollment'a devam etmek mümkün değildir. Bu, Haziran 2026 takviminin en uzun ardışık kalemidir; 14 Mayıs'ta başlatılmalıdır.

### 2.3 Apple Developer Program Enrollment Adımları (Organization)

Apple'ın resmi kontrol listesi (developer.apple.com/help/account/membership/program-enrollment/):

1. **Apple Account** + iki faktörlü kimlik doğrulama açık olmalı. Hesap mailinin organizasyon domain'inde olması önerilir.
2. **Legal entity name** D-U-N-S kaydındakiyle bire bir aynı olmalı (büyük harf, A.Ş., Ltd. Şti. dahil).
3. **Legal binding authority** — Enrollment yapan kişi yetkili olmalı (sahibi, yönetici, kıdemli proje lideri veya senior bir çalışan tarafından yetkilendirilmiş kişi).
4. **Headquarters address + phone** (PO Box kabul edilmez).
5. **Website** — yayında, organizasyon domain'ine bağlı (sosyal medya/registrar parking sayfası kabul edilmez). arsam.net bu şartı karşılar.
6. **Doğrulama çağrısı** — Apple, sağlanan numarayı arayarak D-U-N-S bilgilerini ve yetkili olduğunuzu teyit eder.
7. **Lisans sözleşmesi onayı** + ödeme.
8. **Ücret**: yıllık 99 USD (yerel para birimi farklı görüntülenebilir). Türkiye'den ödemede uluslararası geçerli kart şarttır; bazı yerel banka kartlarının reddedildiği bilinen bir sürtünme noktasıdır (Wise/Revolut/Payoneer pratikte yaygın çözüm).

**Apple enrollment süresi:** D-U-N-S hazır olduktan sonra tipik olarak 1–7 iş günü içinde tamamlanır. Identity verification kuyruğuna bağlı olarak değişir.

### 2.4 App Store Review Guidelines — 13 Kasım 2025 Güncellemesi (arsam İçin Önemli Maddeler)

Apple 13 Kasım 2025'te kapsamlı bir revizyon yayınladı (developer.apple.com/news, "Updated App Review Guidelines now available"). arsam'ı doğrudan etkileyen değişiklikler:

|Madde|Özet|arsam etkisi|
|---|---|---|
|**4.7**|HTML5 & JavaScript mini-app/mini-game'ler artık açıkça kapsamda. App içinde dinamik yüklenen JS/HTML, native app'in kendisi gibi denetlenir.|OTA bundle'ları arsam'ın kendi binary'sinin parçası; üçüncü taraf "mini app" barındırmadığımız sürece kapsam dışı. Native API'ye köprü vermek yasak (4.7.2) — OTA bundle yalnızca UI/JS yenilemesi olur.|
|**4.7.2**|Embedded olmayan yazılıma native platform API'si açmak Apple izni gerektirir.|Plugin'lerimiz native binary içinde derlendiği için sorun yok.|
|**5.1.1(ix)**|Yüksek düzenlemeli alanlar (kripto exchange, finansal hizmetler dahil) için ek doğrulama.|arsam emlak listesi platformudur; doğrudan finansal hizmet sunmuyorsa bu madde dışında. Komisyon/aracılık tahsilatı varsa uyum gerekir.|
|**5.1.2(i)**|Üçüncü taraflarla — özellikle üçüncü taraf AI sağlayıcılarla — paylaşım açıkça beyan edilmeli ve explicit permission alınmalı.|Vercel AI SDK + Anthropic/OpenAI/Gemini router kullanıyoruz → privacy policy ve permission akışı bu çerçevede yazılmalı.|
|**4.1(c)**|Başka geliştiricinin ikonunu/markasını/ad-soyadını kopyalama yasak.|arsam orijinal marka olduğu için sorun yok.|
|**3.1.1 / 3.1.3**|Dijital içerik/abonelik için Apple IAP zorunlu; fiziksel mal & gerçek dünya hizmetleri muaf.|arsam emlak ilanı/aracılık fiziksel dünya hizmetidir, IAP zorunluluğu yoktur. Premium üyelik abonelik "digital service" olur ve IAP gerekebilir. Karar verilmesi gereken nokta.|
|**2.5.13 / 5.1.1**|NFC kullanımı için kullanıcıya net açıklama, sadece amaca uygun veri toplama.|TC kimlik NFC plugin için Info.plist NFCReaderUsageDescription zorunlu; KVKK aydınlatma metni birlikte sunulur.|

### 2.5 App Store Connect Rolleri (Closed Beta İçin)

Apple'ın resmi açıklamasında 5 ana rol bulunur: Account Holder, Admin, Finance, App Manager, Developer, Marketing, Customer Support, Sales. TestFlight internal tester olmak için Account Holder, Admin, App Manager, Developer veya Marketing rolü gerekir.

### 2.6 iOS Distribution Setup

- **Distribution Certificate** (Apple Distribution) — fastlane match ile yönetilir, private git repo'ya şifreli olarak kayıtlı tutulur.
- **App Store Provisioning Profile** — Bundle ID `net.arsam.app` için.
- **Bundle ID**: explicit ID, push, sign-in-with-apple, associated-domains (Logto callback için universal link), NFC tag reading capability ile.
- **Xcode minimum sürümü (Mayıs 2026)**: Capacitor 7'nin gerektirdiği iOS 14+ deployment target Xcode 15+ ile uyumludur; ancak App Store'a build göndermek için App Store Connect tarafındaki güncel Xcode/SDK gereksinimleri her yıl WWDC sonrası sıkılaşır. 2026'da yeni gönderim için Xcode 16 SDK'sının (iOS 18 SDK) baseline olduğu varsayılmalı; M4 makinede en son Xcode kararlı sürümü kurulu tutulmalı (Rosetta gerekmez, Apple Silicon native).

### 2.7 TestFlight Yapılandırması — Sayısal Limitler

Apple'ın resmi developer.apple.com/testflight ve App Store Connect Help dokümanlarından doğrulanmış limitler:

|Parametre|Limit|
|---|---|
|Internal tester (App Store Connect kullanıcısı)|100 kişi (Account Holder/Admin/App Manager/Developer/Marketing rolü)|
|External tester (e-posta veya public link)|10 000 kişi|
|Test cihazı (tester başına)|30 cihaz|
|Build başına test süresi|90 gün (uzatılamaz; yeni build gerekir)|
|Aynı anda dağıtılabilen build sayısı|100 build|
|Beta App Review|External testerlerin ilk build'i için zorunlu (genellikle 24–48 saat)|
|Internal testing için Beta App Review|Gerekmez (build process bittiği gibi anında)|

**arsam closed beta önerisi**: İlk hafta yalnızca internal testing (ekip + güvenilir 30–50 kişi) → ikinci hafta external public link ile kontrollü external açılışı (50–200 kullanıcı). 100 internal limiti yetmezse external bir gruba public link verilir.

---

## 3. B — Google Play Console Organization Enrollment (2026 güncel)

### 3.1 Organization vs Personal — KRİTİK Karar

Google, 13 Kasım 2023'ten sonra kişisel (personal) hesap açan geliştiriciler için closed testing 12 tester × 14 gün kuralını uyguluyor. Resmi support.google.com/googleplay/android-developer/answer/14151465 sayfası: _"If you have a newly created personal developer account, you must run a closed test for your app with a minimum of 12 testers who have been opted-in for at least the last 14 days continuously."_

11 Aralık 2024 güncellemesinde tester minimum sayısı 20'den 12'ye indirildi; 14 gün kuralı korundu. Google Play'in Aralık 2025 — Mayıs 2026 dönemine ait bilinen bir değişikliği yok; kural Mayıs 2026 itibarıyla hâlâ geçerli.

**Önemli**: support.google.com Developer Community'deki resmi yanıt ve birçok kaynak (RevenueCat blog, PrimeTestLab analizleri, Testers Community rehberi) Organization accountların bu kuraldan muaf olduğunu doğruluyor. 12testers14days.pro: _"Verified organization developer accounts (registered with a legal business entity and DUNS number) are entirely exempt from the 20 testers for 14 days rule."_

**arsam tarafı sonuç**: Google Play Console'a Organization olarak kayıt olun. Bu, 14 günlük zorunlu bekleme penceresini Haziran takviminden çıkartır.

### 3.2 Google Play Console Organization Verification

- **Tek seferlik kayıt ücreti**: 25 USD (Google'ın resmi politikası, değişmedi).
- **Hesap tipi**: "Organization" (yasal tüzel kişilik). Apple gibi D-U-N-S üzerine inşa edilmemiştir; Google doğrudan şirket evrakları ister: tüzel kişilik adı, kayıtlı adres, vergi numarası, web sitesi, telefon, bazı durumlarda D-U-N-S veya benzeri 3rd-party iş kimlik numarası ister (Google'ın 2023'ten beri uyguladığı tightened verification kapsamında). 2023–2024 itibarıyla Google, organization account'lar için kimlik kanıtı (yetkili kişiye ait resmi kimlik) ve şirket adresi kanıtı (fatura, banka ekstresi veya benzeri) talep edebilir.
- **Süre**: Google verification tipik olarak 2–7 iş günü, bazı durumlarda 2 haftaya kadar uzayabilir.

### 3.3 Play Console Test Tracks — Farklar ve arsam Seçimi

|Track|Kimler test eder|Limitler|arsam kullanımı|
|---|---|---|---|
|**Internal testing**|E-posta listesi veya Google Group|100 tester max; build process anında hazır (Play Review yok)|Closed beta için kullanılacak|
|**Closed testing**|Email list/Google Group, herkesin opt-in'i ile|Tester sayısı sınırsız (track başına gruplar); production access için gerekli (personal hesaplarda)|Org hesabımız olduğu için zorunlu değil; istersek daha geniş 2. fazda|
|**Open testing**|Play Store'da görünür, herkes katılabilir|Geniş kitle; production öncesi son fazlandırma|Beta sonrası, production öncesi|
|**Production**|Tüm Play kullanıcıları|—|Beta + bug-fix sonrası|

Internal testing track'i Google Play Console'da herhangi bir 14-gün beklemesi olmadan çalışır; build yüklendikten birkaç dakika sonra opt-in link ile testerlara açılır.

### 3.4 Target SDK Gereksinimi (Mayıs 2026)

Google Play'in resmi support sayfası support.google.com/googleplay/android-developer/answer/11926878 (son güncelleme 2026-04-22): Yeni uygulamalar ve mevcut uygulamaların güncellenmesi için target API level Android 15 (API level 35) veya üzeri zorunluluğu 31 Ağustos 2025 itibarıyla yürürlüktedir. Wear OS / Android TV / Automotive için Android 14 (API 34).

**Capacitor 7 etkileşimi**: Capacitor 7 zaten Android 15 (compile/target SDK 35) ile geldi. capacitor.config.ts → `android/variables.gradle`'da `compileSdkVersion = 35`, `targetSdkVersion = 35`, `minSdkVersion = 23` (Capacitor 7 baseline) ayarlanır.

**2026 sonbaharında beklenen yükseltme**: Geçmiş yıllık politika döngüsüne göre Ağustos 2026 sonunda target API level 36 (Android 16) zorunlu hale gelmesi beklenir. Beta + production rolling-update planı buna göre yapılmalı.

### 3.5 Data Safety Form + Google Play Billing

- **Data Safety Form** Play Console'da zorunludur; KVKK ile doğrudan eşleşmez ama Türkçe aydınlatma metnini buraya bağlamak gerekir. Toplanan veri kategorileri (Personal info, Location, App activity, Identifiers vb.), paylaşım amaçları, üçüncü taraf kişisel veri aktarımı (Sentry, PostHog self-host olsa bile beyan edilir; AI router üçüncü taraf olduğundan açıkça belirtilir).
- **Google Play Billing**: Play Billing yalnızca dijital ürün/abonelik için zorunludur. arsam fiziksel dünya hizmeti (emlak ilanı/aracılık) sunduğundan dış ödeme link'i (banka POS, iyzico vb.) kullanabilir. Premium üyelik bir "dijital servis" sayıldığı için, eğer in-app subscription gelirse Play Billing kullanılması beklenir.

### 3.6 Play Console Rolleri

"Admin", "Developer", "Marketing", "Finance", "View app information" gibi rollerle granular yetki verilir. Beta için "Tester" ayrı bir kavram değil — opt-in link veya Google Group üyeliği ile yönetilir.

---

## 4. C — KVKK + EİDS Uyumu (Mobil)

### 4.1 KVKK Temel Yükümlülükler

- **6698 sayılı Kanun, Madde 10 (Aydınlatma)** → veri sorumlusu, kişisel verilerin elde edilmesi sırasında kimliği, işleme amaçlarını, aktarım taraflarını, hukuki sebepleri ve ilgili kişinin haklarını bizzat sağlamak zorundadır. Mobil uygulamada bu, onboarding ekranında ayrı bir "Aydınlatma Metni" ekranı olarak görüntülenir.
- **Açık Rıza ile Aydınlatma AYRI işlemler olmalı.** KVKK Kurulu'nun 2018/90 sayılı kararı: tek bir kutucukla hem aydınlatma hem açık rıza alınması Tebliğ'in 5(1)(f) bendine aykırı. arsam UI'sında iki ayrı onay olmalı: (1) "Aydınlatma metnini okudum" (zorunlu, onay değil, kabul), (2) "Pazarlama amaçlı işleme açık rıza veriyorum" (opsiyonel toggle).
- **2022/1358 sayılı karar** (çerez/site içi takip): Aydınlatma yapılmadan ve açık rıza alınmadan reklam çerezleri çalıştırılırsa 300.000 TL idari para cezası uygulanabilir. PWA tarafında PostHog için cookie banner zorunludur.

### 4.2 TC Kimlik Numarası — Veri Minimizasyonu (Kritik)

**KVKK Kurulu 17/08/2023 tarihli 2023/1430 sayılı kararı** doğrudan arsam'ı ilgilendirir. Karar özeti: Yemek kartı mobil uygulamasının doğrulama amacıyla T.C. kimlik numarası talep etmesi, daha az müdahale edici (telefon + kart no) yöntem mümkün olduğu için veri minimizasyonu ilkesine aykırı bulundu. Kurul: _"T.C. kimlik numarasının niteliği itibariyle telefon numarasına nazaran daha önemli bir veri olduğu ve veri ihlali yaşanması halinde kişiler için daha büyük zararlara yol açabileceği gözetildiğinde… tasarımda mahremiyet, veri minimizasyonu ve kişisel verilerin amaca uygun ve ölçülü işlenmesi ilkeleri"._

**arsam KYC tasarım kuralı:**

- NFC ile TC kimlik okuma → çip içeriği doğrulanır (PACE/BAC), ancak elde edilen TC kimlik numarası uygulama veritabanında saklanmaz; sadece hash veya tek seferlik doğrulama jetonu tutulur.
- DG2 (foto) lokal cihazda karşılaştırma için kullanılır, sunucuya gönderilirse özel nitelikli kişisel veri (biyometrik) kapsamındadır → ayrıca açık rıza ve KVKK Madde 6 işleme şartlarına uyulması gerekir.
- DG1 (MRZ) içindeki tüm alanlar tek tek değerlendirilmeli; sadece kimlik doğrulama için gerekli olanlar (ad-soyad eşleşmesi, doğum tarihi yaş kontrolü) saklanmalı.
- DG13 (national-specific) — TC kimliğine özel alanlar; saklama gereksizdir, sadece doğrulama amaçlı geçer.

### 4.3 EİDS — Elektronik İlan Doğrulama Sistemi

Ticaret Bakanlığı tarafından emlak ilanlarının doğruluğunu garanti etmek amacıyla Taşınmaz Ticareti Hakkında Yönetmelik kapsamında oluşturulan bir sistemdir. Sahibinden, Hepsiemlak, Emlakjet gibi büyük platformlar TKGM/EİDS entegrasyonu ile ilan veren kişinin gerçekten tapu sahibi olduğunu veya yetkili yetki belgeli emlakçı olduğunu doğrular. arsam.net özellikle land/plot listeleyen bir platform olduğu için bu entegrasyon kritik:

- **Tapu doğrulama**: TKGM Web Tapu / TAKBİS protokolleri üzerinden, kullanıcının kimliği e-Devlet entegrasyonu (Türksat / e-Devlet Kapısı) ile teyit edilir.
- **Yetki belgesi doğrulama**: Bakanlık tarafından verilen "Taşınmaz Ticareti Yetki Belgesi" numarası girilir; arsam, ilanı yayına almadan önce numarayı doğrular.
- **Resmi entegrasyon API'si**: TKGM, kamu kurumları arasında TAKBİS protokolleri sunar; özel sektör erişimi için Sanayi ve Teknoloji Bakanlığı / Bilgi Teknolojileri ve İletişim Kurumu süreçleriyle entegrasyon başvurusu yapılması gerekir. arsam'ın Haziran 2026 betası için çağrı: EİDS entegrasyon başvurusu paralel ama bağımsız bir yol (kritik path'te değil, beta sonrasına bırakılabilir).

### 4.4 ATT (App Tracking Transparency) + Google Privacy Sandbox

- **iOS ATT**: Sentry self-host + PostHog self-host kullandığımız için device-level tracking ID (IDFA) istemiyoruz; ATT prompt gerekmez. Sadece Apple'ın tanımladığı "tracking" yapılıyorsa (cross-app/site veri eşleme) ATT açıklaması zorunlu olur. arsam'ın mevcut altyapısında bu yok.
- **Google Privacy Sandbox** Android tarafında reklam ID'sini (AAID) sınırlandırır; arsam reklam ağı kullanmadığı sürece etki sınırlı. Yine de PostHog event toplaması Data Safety Form'da beyan edilir.

### 4.5 Privacy Nutrition Labels (Apple) & Data Safety (Google) — Doldurma Rehberi

**Apple Privacy Nutrition Labels** (App Store Connect → App Privacy):

|Kategori|arsam için tipik beyan|
|---|---|
|Data used to track you|None (PostHog/Sentry self-host, cross-app yok)|
|Data linked to you|Contact info (email, phone), Identifiers (user ID), Location (precise — opsiyonel), User content (ilan içerikleri), Usage data|
|Data not linked to you|Crash data, Performance data (Sentry)|

**Google Data Safety** (Play Console → App content → Data safety):

- Toplama: Personal info (name, email, phone, address, TC kimlik no doğrulama amaçlı, saklanmıyor diye işaretle), Location, App activity, Device IDs
- Paylaşım: Üçüncü taraf hesaplaşımı yok (self-host); ancak AI router → Anthropic/OpenAI/Gemini'ye prompt verisi gönderildiği için "Shared: Yes → Purpose: App functionality" işaretlenir.
- Encryption in transit: Yes (TLS); Data deletion request: Yes.

---

## 5. D — Capacitor 7 Build ve Paketleme Pipeline (Mayıs 2026)

### 5.1 Sürüm Durumu

- **Capacitor 7 GA**: Şubat 2025'te yayınlandı (Ionic Blog: "Capacitor 7 has hit GA!"). Android 15 ve iOS 18 SDK desteği eklendi.
- **Mayıs 2026 son kararlı sürüm**: 7.6.x serisi (örnek: 7.6.4). Capacitor 9 alpha henüz erken (9.0.0-alpha.0 yayınlandı, production'a uygun değil).
- **Capacitor 8**: GA, ancak arsam stack'i Capacitor 7'ye kilitli; geçiş ileride değerlendirilir. Capacitor 8 Android Studio Otter 2025.2.1 gerektiriyor ve iOS 15 baseline yapıyor.

### 5.2 Minimum Sürümler ve Build Ortamı (Capacitor 7)

|Bileşen|Capacitor 7 gereksinimi|arsam ayarı|
|---|---|---|
|Node.js|≥ 20 (LTS)|pnpm 9 ile, Node 22 önerilir|
|iOS deployment target|14.0 (Podfile)|14.0 baseline; UI testlerinde 16.0+ önerilir|
|Android minSdk|23|23 (Android 6)|
|Android compileSdk / targetSdk|35|35 (Android 15)|
|AGP (Android Gradle Plugin)|8.7+|8.7+|
|Kotlin|2.x|2.0.x (Capacitor 7)|
|Java JDK|21 (Android Studio Ladybug 2024.2.1 ile birlikte gelir)|JDK 21|
|Xcode|16+ önerilir|Xcode 16 (M4 native, Rosetta yok)|
|Swift Package Manager|iOS SPM template yeni varsayılan (Capacitor 8'den itibaren); 7'de CocoaPods hâlâ desteklenir|CocoaPods kullan (Capacitor 7 + AndyQ/NFCPassportReader uyumu)|

### 5.3 Capacitor CLI Komutları (Günlük Kullanım)

```
pnpm exec cap add ios
pnpm exec cap add android
pnpm exec cap sync          # Web dist + plugin'leri native projeye senkronlar
pnpm exec cap copy ios       # Sadece web build kopyalar
pnpm exec cap run ios --livereload --external --host=192.168.1.x
pnpm exec cap run android --livereload --external
pnpm exec cap open ios       # Xcode'da açar
pnpm exec cap open android   # Android Studio'da açar
```

### 5.4 capacitor.config.ts (arsam baseline)

```ts
import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'net.arsam.app',
  appName: 'arsam',
  webDir: 'apps/web/dist',
  bundledWebRuntime: false,
  ios: {
    contentInset: 'always',
    scheme: 'arsam',
    limitsNavigationsToAppBoundDomains: false
  },
  android: {
    allowMixedContent: false,
    captureInput: true
  },
  server: {
    androidScheme: 'https',
  },
  plugins: {
    ArsamLiveUpdates: {
      manifestUrl: 'https://ota.arsam.net/manifest.json',
      publicKey: '...',
      defaultChannel: 'beta'
    }
  }
};
export default config;
```

### 5.5 macOS M4 Üzerinde Build Notları

- Apple Silicon native; Rosetta gerekmez.
- CocoaPods 1.15+ Apple Silicon native (gem install cocoapods).
- Xcode 16 SDK iOS 18, ancak iOS 14.0 deployment target ile geriye uyumluluk korunur.
- iPhone XS+ (NFC), iPhone 14+ önerilen test cihazları.
- Universal Links: associated-domains entitlement'ı `applinks:arsam.net` + `applinks:auth.arsam.net` (Logto için).
- Custom URL scheme: `arsam://` (yedek olarak, ama universal links tercih edilir).

### 5.6 App Icon ve Splash Screen

- **capacitor-assets** CLI: `pnpm exec capacitor-assets generate` ile tek bir 1024×1024 logo'dan tüm icon/splash boyutları üretilir.

---

## 6. E — Fastlane Otomasyonu

### 6.1 Kurulum (M4 makine, Ruby + bundler)

```bash
brew install ruby
gem install bundler
bundle install
bundle exec fastlane init
```

### 6.2 fastlane match (Sertifika & Profil Yönetimi)

Match, özel git repo'sunda şifreli sertifika ve provisioning profile saklar. arsam için: `github.com/arsam-net/match-certificates` (private repo).

```bash
bundle exec fastlane match init
bundle exec fastlane match development
bundle exec fastlane match appstore
```

`Matchfile`:

```ruby
git_url("[email protected]:arsam-net/match-certificates.git")
storage_mode("git")
type("appstore")
app_identifier(["net.arsam.app"])
username("[email protected]")
```

### 6.3 Fastfile — arsam İçin Lane'ler

```ruby
# apps/mobile/ios/fastlane/Fastfile
default_platform(:ios)

platform :ios do
  desc "Build + TestFlight upload"
  lane :beta do
    setup_ci
    match(type: "appstore", readonly: true)
    api_key = app_store_connect_api_key(
      key_id: ENV["APPSTORE_KEY_ID"],
      issuer_id: ENV["APPSTORE_ISSUER_ID"],
      key_filepath: "fastlane/AuthKey.p8"
    )
    build_app(
      workspace: "App.xcworkspace",
      scheme: "App",
      configuration: "Release",
      export_method: "app-store"
    )
    upload_to_testflight(
      api_key: api_key,
      skip_waiting_for_build_processing: true,
      changelog: ENV["CHANGELOG"] || "arsam beta build"
    )
  end
end

# apps/mobile/android/fastlane/Fastfile
platform :android do
  desc "Build AAB + Internal testing upload"
  lane :beta do
    gradle(task: "clean bundleRelease")
    upload_to_play_store(
      track: "internal",
      aab: "app/build/outputs/bundle/release/app-release.aab",
      json_key: "fastlane/play-service-account.json",
      skip_upload_apk: true
    )
  end
end
```

### 6.4 API Anahtarları

- **App Store Connect API key**: App Store Connect → Users and Access → Integrations → App Store Connect API → key oluştur. `.p8` dosyası tek seferlik indirilir, GitHub secret olarak base64 saklanır.
- **Google Play Service Account JSON**: Play Console → API access → service account oluştur, Play Console'da Release manager rolü ver, JSON key indir.

### 6.5 GitHub Actions Secrets

|Secret|İçerik|
|---|---|
|`APPSTORE_KEY_ID`|App Store Connect key ID|
|`APPSTORE_ISSUER_ID`|Issuer ID (Apple Developer hesap genelinde)|
|`APPSTORE_P8_BASE64`|base64(AuthKey.p8)|
|`MATCH_PASSWORD`|Match repo şifresi (openssl encryption)|
|`MATCH_DEPLOY_KEY`|SSH deploy key (private match repo için)|
|`GOOGLE_PLAY_JSON_BASE64`|base64(play-service-account.json)|
|`ANDROID_KEYSTORE_BASE64`|base64(arsam.jks)|
|`ANDROID_KEY_ALIAS` / `ANDROID_KEY_PASSWORD`|imzalama|
|`OTA_SIGNING_PRIVATE_KEY`|OTA bundle imzalama anahtarı|
|`OTA_SERVER_DEPLOY_TOKEN`|FastAPI OTA POST token|
|`SENTRY_AUTH_TOKEN`|Sentry source map upload|

### 6.6 macOS Runner Xcode Yönetimi

```yaml
- uses: maxim-lobanov/setup-xcode@v1
  with:
    xcode-version: latest-stable
```

### 6.7 Sertifika Rotasyon Stratejisi

- iOS Distribution Certificate yıllık yenilenir (Apple Developer hesap içinde otomatik); match `nuke` + yeniden generate.
- Android keystore 20+ yıl geçerli; kaybedilmemeli, ayrıca offline yedek alınmalı.
- App Store Connect API key'i yıllık rotate edilmesi önerilir.

---

## 7. F — Kendi Kendine OTA Server (FastAPI + Hetzner)

### 7.1 Plugin Seçimi — Karar Matrisi

Stack'ta Capgo Cloud (Supabase bağımlı) ve Ionic Appflow (kapanıyor, 2027 EOL) yasak. Mevcut seçenekler:

|Seçenek|Açık kaynak|Self-host|Custom backend|arsam uyumu|
|---|---|---|---|---|
|**@capgo/capacitor-updater**|✅ MPL-2.0|✅ (capacitor.config içinde `updateUrl`, `statsUrl`, `channelUrl` parametrelerini kendi sunucuna yönlendirebilirsin)|✅|TERCİH: Plugin'i kullan, kendi FastAPI backend'ini yaz. Supabase'e bağımlılık plugin'de değil, Capgo Cloud tarafında.|
|Capawesome Cloud Live Updates|❌ (kapalı SaaS)|❌|Hayır|❌|
|Ionic Appflow Live Updates|❌|❌|Hayır|❌ (EOL 2027)|
|@capacitor/live-updates (Ionic resmi)|Ionic Appflow'a bağımlı|❌|Hayır|❌|
|Sıfırdan custom plugin yazmak|✅|✅|✅|Mümkün ama 3–4 hafta için fazla riskli; @capgo/capacitor-updater'ı self-host modunda kullanmak daha pratik|

**Sonuç**: `@capgo/capacitor-updater` paketi MPL-2.0 lisanslı ve Capgo şirketi resmi olarak self-host'u dokümante ediyor. Plugin'in kendisi açık kaynak; Capgo Cloud kapalı kaynak ve Supabase üzerinde çalışıyor. arsam, plugin'i kullanır, ancak `updateUrl`, `statsUrl`, `channelUrl`'i kendi FastAPI sunucusuna yönlendirir. Supabase dependency "arkadaki Capgo Cloud kullanmadığımız sürece" devreye girmez. Bu konsept Capgo'nun resmi blogunda "Self hosted Capgo" başlığı altında doğrulanır: _"To use the capacitor updater with self-hosted capgo edit the capacitor.config.ts ... set updateUrl/channelUrl/statsUrl"_.

### 7.2 Kendi FastAPI OTA Server (apps/ota-server)

**Manifest JSON kontratı** (plugin'in `/updates` endpoint'inden beklediği şekil):

```json
{
  "version": "1.4.2",
  "url": "https://ota.arsam.net/bundles/1.4.2.zip",
  "sessionKey": "optional-encryption-key",
  "checksum": "sha256-base64",
  "kind": "update",
  "manifest": null
}
```

Plugin `GET /updates?cap_platform=ios&cap_version_name=1.4.0&cap_app_id=net.arsam.app&cap_device_id=xxx&cap_version_build=140` çağrısı yapar; sunucu kanal/eşleştirmeyi değerlendirip yeni bundle'ı döner. `kind: "up_to_date"` veya `kind: "blocked"` da dönülebilir.

**Hetzner Object Storage** (S3-compatible, AB-compliant): bundle ZIP dosyaları `s3://arsam-ota/bundles/{version}.zip` yolunda tutulur. Signed URL ile geçici erişim verilebilir.

**Bundle imzalama**: Plugin private key + public key çifti ile bundle integrity doğrular. Capgo CLI'ın `npx @capgo/cli key save` komutuyla anahtar üretilir; `capacitor.config.ts`'e `publicKey` set edilir; build sırasında `privateKey` ile imzalanır.

**Rollback mekanizması**: Yeni bundle indirildikten sonra plugin bir sonraki uygulama açılışında aktive eder; `notifyAppReady()` çağrılmazsa otomatik bir önceki sürüme döner (`appReadyTimeout` parametresi).

**Rollout percentage**: FastAPI tarafında basit ağırlıklı dağıtım — `device_id` hash %100 üzerinden bucket'lara bölünür, manifest endpoint cihaz buck'ına göre eski/yeni bundle döner.

### 7.3 Apple Guideline 4.7 + Google'ın OTA Politikası

- **Apple Guideline 4.7** sadece HTML5/JavaScript mini-apps ve mini-games'i kapsar (13 Kasım 2025 netleştirmesi). arsam'ın OTA güncellemeleri kendi binary'sinin parçası olan web bundle'ıdır, third-party mini-app değildir → 4.7 kapsamı dışında. Ancak Apple'ın yıllardır süregelen kuralı: OTA ile native API çağrı pattern'ı değiştirilemez, sadece JS/CSS/HTML güncellenebilir. Eğer yeni Capacitor plugin eklenecekse store release şart.
- **Google Play**: Benzer kural; native değişiklik olmayan OTA tipik olarak kabul edilir. Plugin ekleme veya gradle değişikliği = store release.

### 7.4 OTA Bundle Build Pipeline

1. `pnpm run build` → `apps/web/dist`
2. `pnpm exec cap copy` → her platform için dist'i `apps/mobile/ios/App/public` ve `apps/mobile/android/app/src/main/assets/public` altına kopyalar (sadece native binary inşası için).
3. **OTA bundle**: `apps/web/dist` dizini ZIP'lenir, SHA256 hesaplanır, private key ile imzalanır.
4. Hetzner Object Storage'a `s3 cp` ile yüklenir.
5. FastAPI OTA server'a `POST /releases` ile manifest güncellenir.

---

## 8. G — KYC TC Kimlik NFC Plugin Geliştirme (3–4 Hafta Fizibilite)

### 8.1 Kütüphane Durumu

**iOS — AndyQ/NFCPassportReader (Swift Package, MIT)**:

- 800+ GitHub star, aktif sürüm. Swift Package Manager kurulumu.
- PACE-GM (Generic Mapping) destekleniyor; PACE-IM yok (issue #119, #131 hâlâ açık).
- Türkiye TC kimlik kartı desteği toplulukta doğrulandı (issue #228, ağustos 2024: _"We are using your NFC library for Turkey's identity verification, retrieving information such as the photo, date of birth, and expiry date"_). Hız yavaş bulunuyor ama çalışıyor.
- TC kimlik kartı PACE-GM ile uyumlu olduğu için AndyQ uygun bir başlangıçtır.

**Android — jmrtd (org.jmrtd:jmrtd, LGPL)**:

- Maven Central'da son sürüm 0.7.43 (Eylül 2025 yayını; Sonatype'ta yeni paketler 0.8.x serisinde mevcut, 0.8.3 dahil).
- PACE-IM tam, PACE-GM tam. SCUBA (net.sf.scuba:scuba-sc-android) ile birlikte kullanılır.
- Spongy Castle veya tam Bouncy Castle gerekir (Android sınırlı BC içeriyor).
- JPEG 2000 desteği (DG2 facial image) için jj2000 kütüphanesi.

### 8.2 Capacitor Plugin Scaffold

```bash
pnpm create @capacitor/plugin@latest
# packages/capacitor-tc-nfc/
```

Plugin yapısı:

- `src/index.ts` — JS bridge tip tanımları
- `src/definitions.ts` — TypeScript interface
- `ios/Plugin/Plugin.swift` — `@objc(TcNfcPlugin) public class TcNfcPlugin: CAPPlugin`
- `android/src/main/java/.../TcNfcPlugin.kt` — `@CapacitorPlugin(name = "TcNfc")`

### 8.3 TC Kimlik Çip İçeriği — Veri Grupları

ICAO 9303 standardına uyumlu TC kimlik çipi:

- **EF.COM** — Common Data (mevcut DG listesi)
- **EF.DG1** — MRZ (Machine Readable Zone): ad, soyad, doğum tarihi, son geçerlilik tarihi, kart no
- **EF.DG2** — Facial image (JPEG 2000)
- **EF.DG11** — Personal details (anne adı, baba adı vb. — opsiyonel)
- **EF.DG13** — National-specific data (Türkiye'ye özel: T.C. kimlik no dahil)
- **EF.DG14** — Chip Authentication Public Key Info
- **EF.SOD** — Security Object Document (DG'lerin hash'leri, ülke sertifikasıyla imzalanmış)

### 8.4 Açma Anahtarı — CAN (Card Access Number)

TC kimlik çipi okuma için CAN (6 haneli, kartın ön yüzünde yazılı) kullanılır. Pasaportta MRZ kullanılır (passport no + DoB + expiry); TC kimlikte CAN daha pratik. AndyQ ve jmrtd her ikisi de CAN-based PACE'i destekler.

### 8.5 Vibecoding ile Plugin Yazma Rehberi (AI-assisted)

Plugin geliştirme süreci 3–4 haftalık süre için agresif, ama AI-assisted yaklaşımla mümkün:

1. **Hafta 1 — scaffold + smoke test**:
    - `@capacitor/cli plugin:generate` ile boş plugin
    - AndyQ'nun `PassportReader` sınıfını Swift'te bir Capacitor `@objc` metodu olarak sar
    - jmrtd `PassportService` instance'ını Kotlin coroutine içinde sar
    - JS tarafında `await TcNfc.read({ can: '123456' })` çağrısı
2. **Hafta 2 — DG1 + DG2 parse + tek sefer doğrulama**:
    - Sadece DG1 (MRZ) ve DG13 (TC kimlik no) okunur
    - DG2 sadece local foto karşılaştırma için (cihazda kalır, sunucuya gitmez)
3. **Hafta 3 — Hata yönetimi + UX**:
    - Yanlış CAN, NFC ile temas kaybı, eski OS, NFC olmayan cihaz
    - Türkçe hata mesajları (i18n react-intl)
4. **Hafta 4 — KVKK uyumlu veri akışı + test**:
    - Yalnızca hash(TCKN + salt) saklanır
    - DG2 fotoğrafı opsiyonel, açık rıza ile

### 8.6 Entitlements ve Permissions

**iOS — Info.plist**:

```xml
<key>NFCReaderUsageDescription</key>
<string>Kimliğinizi doğrulamak için NFC ile T.C. kimlik kartınızı okuyacağız.</string>
<key>com.apple.developer.nfc.readersession.iso7816.select-identifiers</key>
<array>
  <string>A0000002471001</string>
</array>
```

Bundle ID capability'sine NFC Tag Reading eklenir (Apple Developer portal).

**Android — AndroidManifest.xml**:

```xml
<uses-permission android:name="android.permission.NFC" />
<uses-feature android:name="android.hardware.nfc" android:required="false" />
```

### 8.7 Test Cihazları

|Platform|Minimum|Önerilen|
|---|---|---|
|iOS|iPhone 7+ (NFC etiket okuma iOS 13'ten itibaren)|iPhone XS+ (Background Tag Reading, daha hızlı). iOS 16+ önerilir|
|Android|NFC sensörlü cihaz (çoğu mid-range+)|Pixel 6+, Samsung S22+|

### 8.8 Pasaport vs TC Kimlik Protokol Farkı

|Özellik|Pasaport|TC Kimlik|
|---|---|---|
|Açma yöntemi|MRZ (BAC veya PACE)|CAN (PACE)|
|Mapping|GM yaygın|GM yaygın|
|DG yapısı|DG1, DG2, DG11 standart|DG1, DG2, DG11, DG13 national-specific|
|Capacitor plugin tek başına çalışabilir mi|Evet (AndyQ örnek app)|Evet, CAN parametresi ile|

---

## 9. H — PWA Yapılandırması (Web tarafı)

### 9.1 vite-plugin-pwa

```ts
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      strategies: 'generateSW',
      manifest: {
        name: 'arsam',
        short_name: 'arsam',
        description: 'Arsa ve arazi platformu',
        theme_color: '#0f766e',
        background_color: '#ffffff',
        display: 'standalone',
        orientation: 'portrait',
        lang: 'tr',
        dir: 'ltr',
        icons: [
          { src: '/pwa-192.png', sizes: '192x192', type: 'image/png' },
          { src: '/pwa-512.png', sizes: '512x512', type: 'image/png' },
          { src: '/pwa-512-maskable.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }
        ]
      },
      workbox: {
        navigateFallback: '/index.html',
        runtimeCaching: [
          { urlPattern: /\/api\/listings/, handler: 'NetworkFirst', options: { cacheName: 'listings', networkTimeoutSeconds: 5 } },
          { urlPattern: /\/static\//, handler: 'CacheFirst' },
          { urlPattern: /tile\.openstreetmap\.org/, handler: 'StaleWhileRevalidate', options: { cacheName: 'map-tiles', expiration: { maxEntries: 500 } } }
        ]
      }
    })
  ]
});
```

### 9.2 iOS PWA Limitleri (2026)

- **Web Push** iOS 16.4+ ile destekleniyor (Safari/PWA, 2023 Mart). 2026'da yaygın kullanım mümkün, ama PWA'nın Ana Ekrana Eklenmiş olması şart (sadece installed PWA için push).
- **Background sync API** — Safari hâlâ desteklemiyor. Workbox Background Sync queue cihazda offline yazma için kullanılır ama Safari fallback poll-on-app-open ile çalışır.
- **Service Worker** — Safari iOS 16.4+ full destek, ancak storage quota ~50MB.
- **App Badging API** — Safari iOS 16.4+ destekli.

### 9.3 Lighthouse PWA Hedefi

- Score > 90 PWA, > 95 Performance hedefi.
- Lighthouse CI GitHub Actions'a entegre, PR'larda regression yakalanır.

---

## 10. I — GitHub Actions CI/CD Workflow Detayları

### 10.1 Workflow Yapısı

`.github/workflows/`:

- `web-deploy.yml` — main'e push → Hetzner'a Caddy reload
- `mobile-ios.yml` — `mobile-v*` tag → fastlane beta lane (TestFlight)
- `mobile-android.yml` — `mobile-v*` tag → fastlane beta lane (Play Internal)
- `ota-publish.yml` — `ota-v*` tag → bundle build + S3 upload + manifest POST
- `pr-checks.yml` — PR'larda Biome + Vitest + Playwright + Lighthouse CI

### 10.2 Cache Stratejileri

```yaml
- uses: pnpm/action-setup@v4
  with: { version: 9 }
- uses: actions/setup-node@v4
  with: { node-version: 22, cache: 'pnpm' }
- name: pnpm install
  run: pnpm install --frozen-lockfile

# iOS (macos-latest):
- uses: actions/cache@v4
  with:
    path: |
      apps/mobile/ios/Pods
      ~/Library/Caches/CocoaPods
    key: pods-${{ hashFiles('apps/mobile/ios/Podfile.lock') }}

# Android:
- uses: actions/cache@v4
  with:
    path: |
      ~/.gradle/caches
      ~/.gradle/wrapper
    key: gradle-${{ hashFiles('**/*.gradle*', '**/gradle-wrapper.properties') }}

# Ruby + bundler:
- uses: ruby/setup-ruby@v1
  with: { ruby-version: '3.3', bundler-cache: true, working-directory: 'apps/mobile/ios' }
```

### 10.3 iOS Beta Workflow (Özet)

```yaml
name: iOS Beta
on:
  push:
    tags: [ 'mobile-v*' ]
  workflow_dispatch:
jobs:
  ios:
    runs-on: macos-latest
    steps:
      - uses: actions/checkout@v4
      - uses: maxim-lobanov/setup-xcode@v1
        with: { xcode-version: latest-stable }
      - uses: pnpm/action-setup@v4
        with: { version: 9 }
      - uses: actions/setup-node@v4
        with: { node-version: 22, cache: 'pnpm' }
      - run: pnpm install --frozen-lockfile
      - run: pnpm --filter @arsam/web build
      - run: pnpm exec cap sync ios
      - name: Decode AuthKey
        run: echo "${{ secrets.APPSTORE_P8_BASE64 }}" | base64 -d > apps/mobile/ios/fastlane/AuthKey.p8
      - uses: ruby/setup-ruby@v1
        with: { ruby-version: '3.3', bundler-cache: true, working-directory: apps/mobile/ios }
      - name: SSH key for match repo
        uses: webfactory/ssh-agent@v0.9.0
        with: { ssh-private-key: ${{ secrets.MATCH_DEPLOY_KEY }} }
      - name: Fastlane beta
        working-directory: apps/mobile/ios
        env:
          MATCH_PASSWORD: ${{ secrets.MATCH_PASSWORD }}
          APPSTORE_KEY_ID: ${{ secrets.APPSTORE_KEY_ID }}
          APPSTORE_ISSUER_ID: ${{ secrets.APPSTORE_ISSUER_ID }}
        run: bundle exec fastlane beta
```

### 10.4 Branch Protection ve Required Checks

- `main`: PR + 1 review + tüm CI yeşil; force push yasak; linear history.
- Required checks: `biome`, `vitest`, `playwright`, `lighthouse`, `tsc`.

### 10.5 Tag Tabanlı Deploy

- `mobile-v1.0.0-beta.1` → iOS + Android beta workflow tetiklenir
- `ota-v1.0.1` → sadece OTA bundle yayınlanır
- `web-v*` → web deploy (opsiyonel; çoğunlukla main auto-deploy)

---

## 11. J — Closed Beta Stratejisi ve Test Planı

### 11.1 Hedef Tester Sayıları

|Faz|Apple TestFlight|Google Play|Toplam|
|---|---|---|---|
|Hafta 1 — Internal (ekip + güvenilir)|10–20 internal|10–20 internal|30–40|
|Hafta 2 — Closed beta (davetli)|50–100 internal veya 100–500 external|50–200 internal|150–700|
|Hafta 3 — Genişletilmiş beta|500–2000 external (public link)|1000+ open testing|3000+|

### 11.2 Beta Tester Toplama

- Email davet listesi — arsam.net üzerinde "Beta'ya kayıt ol" landing page (waitlist).
- Sosyal medya + Discord/Telegram topluluğu.
- TestFlight public link (App Review onayından sonra).

### 11.3 Geri Bildirim Toplama

- TestFlight built-in feedback — screenshot + crash report otomatik.
- PostHog session replay + feature flag — A/B testleri.
- In-app survey — Sentry "user feedback" widget veya basit React form (NPS sorusu).
- Sentry crash rate hedefi: < 0.5% (crash-free sessions > 99.5%).

### 11.4 Performans Baseline

|Metrik|Hedef|
|---|---|
|Cold start (Capacitor app)|< 2.5 s (orta seviye Android)|
|LCP (web PWA)|< 2.5 s|
|INP|< 200 ms|
|Bundle size (ilk yükleme)|< 250 KB gzip critical path|

### 11.5 Beta Test Süresi Önerisi

Google'ın 14-day kuralı bizi etkilemediği için (Organization hesap), gerçek QA için 3 hafta closed beta yeterli:

- Hafta 1: Smoke test, kritik flow (kayıt, KYC, ilan oluşturma, arama).
- Hafta 2: Edge case, çoklu cihaz, offline mod.
- Hafta 3: Stabilizasyon, performans, A/B test.

---

## 12. K — arsam.net İçin Özel Hususlar (Türkiye Emlak)

### 12.1 TKGM Entegrasyonu

TKGM (Tapu ve Kadastro Genel Müdürlüğü) kamu sistemleri:

- **Web Tapu / TAKBİS** — kurumlar arası protokollerle bankalar, noterler, belediyeler bağlı. Özel sektör entegrasyonu için TKGM ile protokol şart.
- **Parsel Sorgu** (parselsorgu.tkgm.gov.tr) — kamuya açık ada/parsel sorgulama. Resmi API olmaması nedeniyle scraping veya kullanıcı tarafından kopyala/yapıştır yöntemi.
- **MEGSİS** — Mekansal Gayrimenkul Sistemi, sadece TKGM iç kullanım.
- arsam pratik: Beta için kullanıcının ada/parsel manuel girmesi yeterli, ileride TKGM protokol başvurusu.

### 12.2 EİDS — Taşınmaz Ticareti Yetki Belgesi Doğrulaması

İlan veren bir emlak ofisi ise Ticaret Bakanlığı'nın verdiği yetki belgesi numarasını girer; arsam.net beta'da bu numaranın format doğrulamasını yapar; tam canlı doğrulama production fazına bırakılır.

### 12.3 Emlak İlanı Zorunlu Alanları (Sahibinden/Hepsiemlak Emsali)

|Alan|Açıklama|
|---|---|
|İl, ilçe, mahalle|Zorunlu|
|Ada / parsel no|Land/plot için zorunlu|
|Yüzölçümü (m²)|Zorunlu|
|Cinsi|Tarla / arsa / bağ / bahçe|
|İmar durumu|Belediye imar planı bilgisi|
|Tapu tipi|Kat irtifaklı, müstakil, hisseli|
|Fiyat (TRY)|Zorunlu|
|Sahibi/Emlak ofisi|KVKK uyumlu görüntülenecek bilgi|
|Yetki belgesi no|Emlak ofisi ilan veriyorsa|
|Fotoğraf|En az 3|

### 12.4 Harita SDK Seçimi

|Seçenek|Lisans|Maliyet|Performans (mobile)|arsam tavsiyesi|
|---|---|---|---|---|
|Google Maps SDK|Ticari, API key|Ücretli (free tier sonrası $)|İyi|İkincil seçenek|
|Apple Maps (MapKit)|Sadece iOS|—|iOS native|Capacitor bridge çift platform değil|
|**MapLibre GL + OSM**|ODbL + BSD|Ücretsiz / self-host edilebilir tile server|Mükemmel (vector tiles)|TERCİH — Hetzner'da tile sunucusu, gizlilik dostu, Türkiye için OSM kapsamı yeterli|
|Leaflet|BSD-2|Free|Bitmap tile, vector tile için eklenti|PWA için basit alternatif|

**Karar**: MapLibre GL JS + Hetzner self-host tile server (Türkiye odaklı, gizlilik dostu, ücretsiz). Geri yedek: Mapbox ücretsiz tier.

### 12.5 Türkiye Emlak Platformlarının App Store Deneyimi

- Sahibinden, Hepsiemlak, Emlakjet — hepsi App Store ve Play Store'da; tipik review süresi 1–3 gün. KVKK + EİDS uyumu, KYC doğrulama, ödeme entegrasyonu (Apple IAP yerine harici link kullanıyorlar, fiziksel hizmet muafiyeti).
- Tipik ret nedenleri: incomplete privacy policy, missing data deletion option (Apple 5.1.1(v)).

### 12.6 Türkiye İçin Test Cihazı Erişimi

- Yerel BrowserStack alternatifi: Bulutsales (Türkiye operatörü) gerçek cihazlarla saatlik kiralık (Capacitor app sideload edilebilir).
- AWS Device Farm + Maestro — gerçek cihaz farm'ı.
- Kendi cihaz havuzu: 1× iPhone 13+ (NFC, A15+), 1× Pixel 7 (NFC), 1× Samsung A serisi (orta segment Türk pazarı), 1× iPhone SE 3 (küçük ekran).

---

## 13. L — Risk ve Zaman Çizelgesi (W1–W4)

### 13.1 Kritik Path Şeması

```
W1 (15–21 Mayıs)
├── D-U-N-S başvurusu  →  5 iş günü (D&B)  ─┐
├── Google Play Org enrollment başvurusu  →  2–7 iş günü ─┐
├── Web PWA + Capacitor 7 mobile shell scaffold (paralel)
├── KYC NFC plugin scaffold (paralel)
└── FastAPI OTA server skeleton (paralel)

W2 (22–28 Mayıs)
├── D-U-N-S geldi → Apple Developer enrollment (1–7 iş günü)
├── Logto self-host kurulum (Hetzner)
├── fastlane match init → certificates üretimi
├── KYC plugin Hafta 2 milestone
└── OTA server bundle imza + manifest endpoint

W3 (29 Mayıs–4 Haziran)
├── Apple Dev hesap aktif → App Store Connect setup → Bundle ID + capabilities
├── İlk iOS build + TestFlight upload (internal tester)
├── İlk Android AAB + Play Internal Testing upload
├── Sentry/PostHog production canlı
└── KYC plugin Hafta 3 stabilizasyon

W4 (5–11 Haziran)
├── External TestFlight (Beta App Review 24–48 saat)
├── Play Internal → Closed track açılışı
├── Performans + crash rate monitoring
├── İlk OTA hot-fix denemesi (smoke test)
└── 🚀 Closed Beta lansman (haftanın sonunda)
```

### 13.2 Haftalık Detay Tablosu

|Hafta|Tarih|Kritik kalemler|Paralel iş kalemleri|
|---|---|---|---|
|**W1**|15–21 May|D-U-N-S başvuru (gün 1), Google Play Org Console kaydı (gün 1), Hetzner sunucu provisioning, monorepo iskelet, Capacitor 7 cap add ios/android|KYC plugin scaffold, PWA manifest+SW, OTA FastAPI iskelet, Logto Docker compose|
|**W2**|22–28 May|D-U-N-S ulaştı → Apple enrollment başlat, ödeme + Apple Developer App üzerinden Account Holder doğrulama, fastlane init + match|KYC plugin DG1+DG13 okuma, OTA bundle imza, react-intl TR/EN, Sentry self-host kurulumu|
|**W3**|29 May–4 Jun|Apple aktif → App Store Connect app oluştur, Bundle ID + NFC capability + push, ilk TestFlight build, Play Internal ilk build|KVKK aydınlatma + açık rıza UI, EİDS yetki belgesi format doğrulama, Lighthouse PWA score > 90|
|**W4**|5–11 Jun|TestFlight external public link açılışı (Beta App Review), Play Internal genişletme, Maestro E2E testleri yeşil, performans baseline|Beta tester davet kampanyası, geri bildirim toplama (TestFlight + PostHog), kritik hot-fix OTA denemesi|
|**Beta**|12 Jun–10 Jul|3 hafta closed beta|bug-fix sprint, sürekli OTA + native release|
|**Production**|Temmuz 2026 sonu|App Store/Play production submission|App Store Review 1–7 gün, Play Review 1–3 gün|

### 13.3 Kim Ne Yapar — Rol Matrisi

|Kişi/rol|Görev|Süre|
|---|---|---|
|Şirket yetkilisi (legal binding)|D-U-N-S başvurusu + Apple/Google enrollment yetkili kişi olarak imzalar|30 dk her|
|DevOps|Hetzner sunucular, Logto, Sentry, PostHog, FastAPI OTA server|W1-W2 yoğun|
|Mobile lead|Capacitor 7 setup, fastlane, GitHub Actions|W1-W3|
|iOS/Swift native dev|KYC plugin iOS tarafı (AndyQ entegrasyonu)|W1-W3|
|Android/Kotlin native dev|KYC plugin Android tarafı (jmrtd entegrasyonu)|W1-W3|
|Frontend leads|React 19 + Refine.dev + Flowbite Pro UI, Logto auth flow|W1-W4|
|QA|Maestro E2E, manual cihaz testleri|W3-W4|
|Legal/KVKK danışmanı|Aydınlatma metni, açık rıza UX onayı, EİDS uyumu|W2-W3|

### 13.4 Riskler ve Önlemler

|Risk|Olasılık|Etki|Önlem|
|---|---|---|---|
|D-U-N-S 5 iş gününden uzun sürerse|Orta|Yüksek (Apple enrollment blokeli)|Hemen 14 Mayıs'ta başvur; gerekirse D&B Türkiye temsilcisi ile telefonla teyit|
|Apple Beta App Review (external) reddi|Düşük-orta|Orta (1–2 gün gecikme)|Internal testing ile başla; external'a hazırlık yap|
|Google Play Organization verification 2 haftaya uzarsa|Düşük|Orta|Hemen başvur; gerekirse Internal Testing alternatif olarak doğrulama tamamlanmadan başlatılır (Play Console bu sıralamayı destekler)|
|KYC NFC plugin 4 haftada bitmezse|Orta-yüksek|Düşük (KYC beta'da MVP olarak kalır)|Beta'ya NFC olmadan manuel KYC akışı ile çıkılır, NFC plugin V1.1 OTA değil native release'le gelir|
|OTA bundle imza/rollback hatası|Düşük|Yüksek (kullanıcı app açamaz)|`notifyAppReady()` timeout korumacı, staging kanalında önce dene|
|Apple Guideline 4.7 yanlış yorumlanır|Düşük|Yüksek (red)|OTA sadece web bundle, hiçbir native API genişletme yok, hiçbir 3rd-party mini-app barındırma yok|
|KVKK Karar 2023/1430 ihlali|Orta|Yüksek (idari para cezası)|TC kimlik no kesinlikle saklanmaz — sadece hash veya doğrulama anında geçer|

### 13.5 App Store Olası Ret Nedenleri ve Önleme

|Ret nedeni|Apple Guideline|Önleme|
|---|---|---|
|Eksik veya genel privacy policy|5.1.1|KVKK uyumlu, App Privacy detayları|
|Demo content veya placeholder|2.3.3|Production veriyle review build|
|Sign-in zorunluluğu gerektirmeyen sayfa kapatılmış|5.1.1(v)|Public ilan listesi giriş yapmadan görüntülenebilir|
|Hesap silme seçeneği yok|5.1.1(v)|App içi "Hesabımı sil" akışı zorunlu (2022'den beri)|
|Crash on launch|2.1|TestFlight ile önceden test|
|Login behind paywall|3.1|Free tier korunur|
|Beklenmedik native API exposure (OTA)|4.7.2|OTA = sadece web bundle|
|AI prompt'unu üçüncü tarafa beyan etmeden gönderme|5.1.2(i)|Privacy policy + permission akışı|

---

## 14. Tek Bakışta Karar Matrisi

|Sıra|Karar|Seçim|Gerekçe|
|---|---|---|---|
|1|Apple hesap tipi|Organization|arsam tüzel kişilik; seller name şirket olur|
|2|Google hesap tipi|Organization|12-tester/14-gün kuralından muaf, kritik path kısaldı|
|3|OTA çözümü|@capgo/capacitor-updater (self-host, kendi FastAPI backend)|Açık kaynak plugin, Supabase yok, Hetzner uyumlu|
|4|KYC NFC kütüphaneleri|AndyQ (iOS) + jmrtd (Android)|Aktif, TR doğrulanmış, PACE-GM yeterli|
|5|Closed beta track|TestFlight Internal + Play Internal Testing|Hızlı, Beta App Review gerekmiyor (internal için)|
|6|Harita|MapLibre GL + OSM self-host tile|Ücretsiz, Hetzner uyumlu, gizlilik dostu|
|7|Aydınlatma + Açık Rıza|Ayrı kutucuk, ayrı onay|KVKK 2018/90 kararı zorunlu kılıyor|
|8|TC kimlik saklama|Saklama YOK; sadece hash|KVKK 2023/1430 kararı|
|9|Target SDK|Android 35 (Android 15)|Mayıs 2026 Play zorunluluğu|
|10|iOS deployment target|14.0 (Capacitor 7 baseline)|Geriye uyumluluk + güncel SDK|
|11|Premium üyelik ödeme|Beta'da yok; production'da kararlaştırılacak|IAP zorunluluğu varsa Apple/Play Billing devreye girer|
|12|KYC beta öncesi yetişmezse|Manuel KYC fallback|Native release V1.1'e bırak|

---

## 15. Resmi Kaynak Referansları

**Apple**

- developer.apple.com/programs/enroll/
- developer.apple.com/help/account/membership/program-enrollment/
- developer.apple.com/help/account/membership/D-U-N-S/
- developer.apple.com/support/compare-memberships/
- developer.apple.com/app-store/review/guidelines/
- developer.apple.com/news/?id=ey6d8onl (13 Kasım 2025 guideline güncellemesi)
- developer.apple.com/testflight/
- developer.apple.com/help/app-store-connect/test-a-beta-version/testflight-overview/

**Google**

- support.google.com/googleplay/android-developer/answer/14151465 (12 tester / 14 gün kuralı)
- support.google.com/googleplay/android-developer/answer/11926878 (Target API requirement)
- support.google.com/googleplay/android-developer/answer/16561298 (Target API policy)
- developer.android.com/google/play/requirements/target-sdk

**KVKK (Türkiye)**

- kvkk.gov.tr/Icerik/2033/Aydinlatma-Yukumlulugu-
- kvkk.gov.tr/Icerik/2037/Acik-Riza-Alirken-Dikkat-Edilecek-Hususlar
- kvkk.gov.tr/Icerik/5420/2018-90 (Aydınlatma + Açık Rıza ayrı işlemler)
- kvkk.gov.tr/Icerik/7595/2022-1358 (Çerez aydınlatma + açık rıza, 300.000 TL ceza)
- kvkk.gov.tr/Icerik/7782/2023-1430 (T.C. kimlik numarası veri minimizasyonu)
- kvkk.gov.tr/Icerik/6967/2021-389 (Hizmetin açık rıza şartına bağlanmaması)

**TKGM**

- tkgm.gov.tr (genel)
- parselsorgu.tkgm.gov.tr (kamuya açık parsel sorgu)
- tkgm.gov.tr/projeler/tapu-ve-kadastro-bilgi-sistemi-takbis (TAKBİS)

**Teknik**

- capacitorjs.com/docs/main/reference/support-policy
- capacitorjs.com/docs/updating/7-0
- ionic.io/blog/capacitor-7-has-hit-ga
- github.com/AndyQ/NFCPassportReader (issue #228 — TR doğrulaması)
- jmrtd.org / central.sonatype.com/artifact/org.jmrtd/jmrtd
- github.com/Cap-go/capacitor-updater (MPL-2.0, self-host destekli)
- capgo.app/blog/self-hosted-capgo (self-host yapılandırması)
- docs.fastlane.tools/actions/gym/ ve fastlane match dokümantasyonu

---

## 16. Sonuç

arsam.net'in Haziran 2026 closed beta lansmanı için kilitli tech stack ile tam uyumlu, takvimsel olarak gerçekçi bir yol haritası mevcuttur. D-U-N-S başvurusunun bugün (14 Mayıs) başlatılması ve Google Play Console'a Organization olarak kayıt olunması iki en kritik karardır; bu iki adım atılırsa kritik path 3,5 hafta içinde tamamlanır ve W4 sonu (8–11 Haziran) closed beta açılışı yapılabilir. KYC NFC plugin agresif bir hedeftir; gerekirse manuel KYC fallback ile beta'ya çıkılır ve NFC plugin V1.1 native release'le gelir. OTA pipeline @capgo/capacitor-updater plugin'i + kendi FastAPI backend kombinasyonu ile Capgo/Supabase bağımlılığı olmadan çalışır; bu, Hetzner self-host felsefesiyle tam uyumludur. KVKK Karar 2023/1430 ışığında TC kimlik numarası asla saklanmaz, yalnızca hash veya tek seferlik doğrulama jetonu tutulur — bu hem hukuki uyum hem ürün güvenliği açısından zorunludur.


Backend tarafında **30+ eksiklik** var. Önce iki çelişki — bunlar çözülmeden devam edilemez. Sonra altyapı, arsam-özel, ve tooling kalemleri.

---

## 1. Önce çözülmesi gereken iki çelişki

### 1.1. Prisma + FastAPI uyumsuzluğu (KRİTİK)

TECH_STACK.md'de "Prisma + PostgreSQL öncelik" yazıyor. FastAPI ise Python. Prisma resmi olarak JS/TS first. Python client (`prisma-client-py`) 2024'te maintenance mode'a alındı; 2025'te arşivlendi. Production FastAPI'de Prisma kullanılmaz.

Üç seçenek:

|Seçenek|Açıklama|Maliyet|
|---|---|---|
|**A) SQLAlchemy 2.0 + Alembic**|Python-native, async, modern type-stub. Prisma backend için iptal.|Düşük (zaten endüstri standardı)|
|B) Prisma schema source-of-truth + SQLAlchemy ayrı|İki şema yönetilir, drift riski|Yüksek bakım|
|C) SQLModel (FastAPI yazarı)|Pydantic + SQLAlchemy birleşik, ama olgun değil bazı edge case'lerde|Orta|

**Önerim: A**. "Prisma öncelik" kuralı backend kapsamı dışında tutulur (sadece frontend araç zinciri için, ki orada da gerçek değer üretmiyor). Backend kararı: **SQLAlchemy 2.0 (async) + Alembic + Pydantic v2**. Doğruluk kaynağı Postgres schema + Alembic migrations.

### 1.2. Redis (her yerde implicit, hiçbir yerde explicit)

PostHog Redis kullanıyor (kendi instance), Logto kullanıyor (kendi instance). FastAPI app'inin kendi cache/queue broker/pub-sub için ayrı bir instance yok.

Karar: ayrı **Dragonfly** instance (Redis-compatible, multi-threaded, ~25x daha az RAM). Hetzner Docker. FastAPI cache + Arq queue + rate limit + idempotency + SSE fan-out hepsi buradan geçer.

---

## 2. Eksik altyapı bileşenleri

### 2.1. Background job queue (YOK)

AI inference, OCR, KYC doğrulama, image processing, OTA bundle publishing, webhook delivery — hepsi async iş. TECH_STACK.md'de hiç queue yok.

Seçim:

|Seçenek|Asyncio|Olgunluk|arsam uyumu|
|---|---|---|---|
|**Arq**|Native|İyi, FastAPI ekibi tercih|Tercih|
|Dramatiq|Adapter|Çok olgun|İkincil|
|Celery|Sorunlu|Endüstri std ama ağır|❌|
|Taskiq|Native|Yeni, asyncio + FastAPI|Alternatif|

**Önerim: Arq**. Redis (Dragonfly) zaten var, asyncio native, FastAPI dependency injection ile uyumlu.

### 2.2. AI orchestration backend (YOK)

Frontend `packages/ai/router.ts` client-side. Sunucu tarafında multi-provider routing, fallback, cost tracking, prompt management YOK.

Bileşenler:

- **LiteLLM** — Anthropic + OpenAI + Gemini tek interface, retry, fallback, token sayımı. Library mode veya proxy mode.
- **Langfuse self-host** — prompt versioning, observability, evaluation, trace. Hetzner Docker (Postgres + ClickHouse + Redis bağımlısı; mevcut altyapı yetiyor).
- **Token/cost limiter** — Redis sliding window, per-tenant daily cap, AI router'a inject.
- **Prompt registry** — Langfuse'da versiyonlu, kod içine gömme yasak.

### 2.3. Vector DB (YOK)

Land/plot semantic search ("buna benzer arsalar"), AI'da RAG için embedding store.

Karar: **pgvector** Postgres extension. Yeni servis yok, mevcut Postgres'e extension olarak. Alternatif Qdrant ama gereksiz.

### 2.4. PostGIS (YOK — arsam için kritik)

Arsa/parsel platformu spatial query'siz çalışmaz: "şu noktanın 10km'sindeki tarlalar", "şu polygon içindeki ilanlar", "MapLibre tile-aware filtreleme".

Karar: **PostGIS** extension. Aynı Postgres, ek servis yok. Spatial index (GIST), GeoJSON I/O.

### 2.5. Search engine (YOK)

İlan arama: il/ilçe/mahalle filtreli, full-text, typo-tolerant.

|Faz|Çözüm|
|---|---|
|Beta|Postgres FTS (tsvector + tsquery + pg_trgm trigram) — yeterli|
|Production scale|Meilisearch self-host (typo-tolerant, hızlı)|

### 2.6. Email (YOK — Logto magic link blokeli)

Logto magic link, KYC email doğrulama, ilan bildirimi.

Türkiye'den gönderim oranı yüksek seçenekler:

|Seçenek|Tip|TR deliverability|Maliyet|
|---|---|---|---|
|**Resend**|Managed|İyi|Aylık fix, dev-friendly|
|Postmark|Managed|Çok iyi|Aylık fix, transactional king|
|Mailgun|Managed|İyi|Per-email|
|AWS SES|Managed|Orta-düşük|En ucuz|
|Stalwart self-host|Self-host|IP reputation kurma ay sürer|Ücretsiz ama emek|

**Önerim: Resend** (beta + ilk yıl), production scale'de değerlendir. Logto'nun SMTP config'i Resend SMTP relay'e bağlanır.

### 2.7. SMS gateway (YOK — Türkiye-spesifik)

KYC OTP, 2FA, KYB doğrulama.

|Sağlayıcı|API kalitesi|Pazar|
|---|---|---|
|**Verimor**|REST, geliştirici dostu|Tercih|
|Netgsm|XML/REST|En yaygın TR|
|İletiMerkezi|REST|Alternatif|
|Twilio|REST|TR'de pahalı, deliverability iyi|

**Önerim: Verimor** primary, Netgsm fallback.

### 2.8. Image processing pipeline (YOK)

Emlak ilanı min 3 foto. Watermark, thumbnail, WebP/AVIF varyantları.

Çözüm:

- **imgproxy** self-host (Go, Docker) — on-the-fly resize/format/watermark. URL signing ile güvenli.
- Backend Pillow + opencv-python Arq job'unda batch işler (silinmiş foto, EXIF strip, GPS koord çıkarma).
- Hetzner Object Storage'a orijinal + variant'lar.

### 2.9. Resumable upload backend (YOK)

Frontend `tus-js-client` mevcut. Backend tarafında **tusd** binary (Go) veya FastAPI'ye `fastapi-tus` adapter. Büyük dosyalar (tapu fotokopisi PDF, çoklu foto upload) için kritik.

**Önerim: tusd** ayrı Docker container, Caddy reverse proxy üzerinden, S3-uyumlu Hetzner Object Storage hooks'lu.

### 2.10. Rate limiting (YOK)

**slowapi** (FastAPI'nin defacto rate limit lib'i), Dragonfly backend. Per-tenant + per-endpoint + per-IP kombinasyonu. AI endpoint'leri ek token-based limit (LiteLLM router içinden).

### 2.11. Idempotency (YOK)

Payment, KYC submission, OTA release, AI completion gibi yan-etkili POST'lar için `Idempotency-Key` header pattern. Dragonfly-backed, 24h TTL. FastAPI middleware olarak.

### 2.12. Notification fan-out (YOK)

SSE in-app + Push (FCM/APNs server-side) + Email + SMS + WhatsApp Business — tek bir notification servisinden geçmeli (template, preference center, delivery log).

|Seçenek|Self-host|UX|
|---|---|---|
|**Novu**|✅ Hetzner Docker|Tercih, açık kaynak, template editor|
|Knock|❌ managed|UX en iyi|
|Custom (Arq + driver per channel)|✅|Esnek ama yeniden icat|

**Önerim: Novu self-host** beta sonrası (beta için custom + Arq yeterli).

### 2.13. Outgoing webhook delivery (YOK)

KYB sonucu, ödeme onayı, ilan onayı 3. taraflara (CRM, emlak ofisleri kendi sistemleri) webhook.

|Seçenek|Özellikler|
|---|---|
|**Svix self-host**|Sign, retry, replay, observability — endüstri standardı|
|Hookdeck managed|Yetenekli ama maliyet|
|Custom outbox (Postgres + Arq + HMAC)|Beta için yeterli|

**Önerim: Beta için custom outbox; production'da Svix self-host.**

### 2.14. Inbound webhook handler altyapısı (YOK)

Logto callback, Veriff KYB sonucu, Resend deliverability, Verimor delivery status, iyzico payment. Her biri için:

- Signature verification (HMAC veya provider-specific)
- Idempotency
- Retry kuyruğu (Arq)
- Dead letter queue

Tek bir generic webhook router pattern + provider-specific handler.

### 2.15. Audit log (YOK)

TECH_STACK.md "Logto OSS audit log yetersiz" notu var. Backend tarafında:

- **Append-only audit table** Postgres'te (`audit_events`)
- Alanlar: `request_id`, `tenant_id`, `actor_user_id`, `actor_type`, `action`, `entity_type`, `entity_id`, `before` (jsonb), `after` (jsonb), `ip`, `user_agent`, `created_at`
- **pgaudit** Postgres extension DB-seviyesi audit için (DDL, DML)
- SQLAlchemy event listener ile otomatik diff capture
- Retention 7 yıl (KVKK ticari kayıt zorunluluğu)

### 2.16. Backup & disaster recovery (YOK)

TECH_STACK.md hiç bahsetmiyor.

- **pgBackRest** — Postgres backup endüstri standardı, incremental + WAL archiving
- Hetzner Object Storage'a offload (encryption-at-rest)
- PITR (point-in-time recovery)
- Haftalık otomatik restore testi (n8n + Arq)
- Hetzner ikinci data center'da cold standby (Falkenstein → Helsinki)

### 2.17. Secrets management (yetersiz)

TECH_STACK.md "Hetzner Vault opsiyonel" diyor. Pratik:

|Faz|Çözüm|
|---|---|
|Beta|GitHub Secrets + Hetzner env file + lefthook pre-commit secret scanner|
|Production|**Infisical** self-host (Hetzner Docker, dev UX iyi)|

### 2.18. Connection pooler (YOK)

FastAPI async + Postgres connection limit hızlı tükenir.

**PgBouncer** transaction mode, her FastAPI replica pool üzerinden. SQLAlchemy `NullPool` (pooler kullanırken zorunlu).

### 2.19. AI safety / PII redaction (YOK)

Multi-provider AI router'a user verisi göndermeden:

- **Presidio** (Microsoft, açık kaynak) PII detection: TC kimlik no, IBAN, telefon, adres mask
- AI input/output pre/post-process middleware
- Output moderation: OpenAI moderation API veya Llama Guard self-host

### 2.20. Cron / scheduled tasks (YOK)

Günlük rollup, retention purge, backup verify, expired listing kapatma, mailer digest.

**Arq cron** (Arq'ın built-in cron job'u) — ek servis yok.

---

## 3. arsam-spesifik backend gereksinimleri

### 3.1. EİDS / TKGM entegrasyon altyapısı

Kamu API'ları için:

- **zeep** (Python SOAP client) — TKGM TAKBİS endpoint'leri muhtemelen SOAP/WSDL
- mTLS sertifika yönetimi (kamu API'ları client cert'li)
- Bakanlık başvuruları paralel sürer; backend kod altyapısı önceden hazır

### 3.2. Ödeme entegrasyonu

Premium üyelik, ilan öne çıkarma, emlak ofisi paketi:

|Sağlayıcı|TR uyumu|Komisyon|
|---|---|---|
|**iyzico**|TR standardı, 3DS, taksit|Standart|
|Param|Daha düşük komisyon|Orta|
|Stripe|Uluslararası, MENA için|Yüksek TL'de|

**Önerim: iyzico** primary, Stripe uluslararası genişlemede.

### 3.3. KVKK compliance endpoints (YASAL ZORUNLU)

- `GET /me/data-export` — kullanıcı tüm verisini ZIP/JSON indirir (KVKK Madde 11)
- `DELETE /me/account` — anonymize (audit için kayıt kalır) + 1 yıl sonra hard delete
- `GET /me/data-processing-log` — hangi verim ne zaman işlendi
- `GET /me/consents` + `PATCH /me/consents` — açık rıza yönetimi (KVKK 2018/90 kararı uyumu)

Apple 5.1.1(v) ve Google policy de hesap silme akışını zorunlu kılıyor — bu hem KVKK hem store policy.

### 3.4. KYB webhook handler (Veriff)

- Veriff webhook → signature verify → idempotency check → Postgres'e audit + KYB record yaz → n8n event (WhatsApp + email)
- Reject case'inde manuel inceleme kuyruğu (operatör paneli)

### 3.5. Tapu/parsel format validation

İl/ilçe/mahalle/ada/parsel normalize + format check. Beta'da static + lookup table (kaynak: TKGM açık veri seti). Production'da TKGM API protokolü.

### 3.6. Emlak ofisi yetki belgesi format check

Ticaret Bakanlığı'nın verdiği numara regex doğrulaması. Production'da Bakanlık'ın açtığı doğrulama servisi (varsa).

---

## 4. Backend tooling / DevEx

### 4.1. Python araç zinciri (YOK — frontend Biome kilitli, backend boş)

|Katman|Seçim|Gerekçe|
|---|---|---|
|Package manager|**uv**|Rust, pip+pip-tools+virtualenv'den 10x hızlı, lock dosyalı, monorepo dostu|
|Linter + formatter|**Ruff**|Rust, Biome'un Python karşılığı, tek araç|
|Type checker|**Pyright** (strict)|mypy'dan hızlı, VSCode native (Pylance)|
|Test runner|**pytest** + **pytest-asyncio** + **pytest-cov**|Standard|
|Test fixtures|**polyfactory**|Pydantic schema-based factory|
|DB testing|**testcontainers-python**|Gerçek Postgres + Redis container fixture|
|Property-based|**hypothesis**|Edge case keşfi|
|Migration|**Alembic**|SQLAlchemy ile birlikte|
|API docs portal|**Scalar**|openapi.json'dan modern render, embed|
|HTTP client|**httpx** (async)|requests'in async halefi|
|Serializer|**Pydantic v2**|FastAPI native, Rust core|

### 4.2. Backend test-first ritüeli (frontend ritüeline paralel)

1. `packages/domain` Zod schema → Pydantic karşılığını `datamodel-code-generator` üretir (kontrat).
2. pytest async test (failing).
3. SQLAlchemy model + Alembic revision.
4. FastAPI router + DI.
5. testcontainers integration test.
6. openapi.json snapshot diff (frontend openapi-typescript ile uyum koruma).

### 4.3. Multi-tenant DB pattern (YOK — kritik karar)

Logto org switch frontend'de var. Backend DB seviyesinde:

|Pattern|Avantaj|Dezavantaj|
|---|---|---|
|**Shared schema + tenant_id + Postgres RLS**|Tek DB, native isolation, kolay|Query her zaman tenant_id'li olmalı|
|Schema-per-tenant|Daha güçlü izolasyon|Migration N kat zor|
|DB-per-tenant|Maksimum izolasyon|Operasyonel maliyet yüksek|

**Önerim: Shared schema + tenant_id + Postgres Row Level Security**. SQLAlchemy event listener'da `SET LOCAL app.tenant_id = '...'` her connection'da. Admin endpoint'leri RLS bypass eder (audit log zorunlu).

### 4.4. Quota enforcement (YOK)

Per-tenant: storage MB, AI token, API calls/day, listing count.

- Counter Dragonfly'da (sliding window)
- Aşımda 429 + Retry-After
- Reporting Postgres günlük rollup tablosuna (Arq cron)

### 4.5. Health endpoints (YOK)

- `GET /health/live` — process up (boş 200)
- `GET /health/ready` — Postgres + Dragonfly + Logto + AI provider reachable
- `GET /health/startup` — Alembic head versionunda mı

Docker healthcheck, Caddy upstream check, Uptime Kuma probe.

### 4.6. Backend CI workflow (YOK)

GitHub Actions Ubuntu runner:

1. `uv sync --frozen`
2. Ruff check + format check
3. Pyright strict
4. pytest + testcontainers
5. Alembic revision conflict check
6. openapi.json snapshot diff (frontend ile uyum gate)
7. main merge → Docker build → Hetzner registry → SSH compose pull

---

## 5. Beta öncesi minimum backend bileşen seti

Sıralı, çelişkiler dahil:

|#|Bileşen|Sebep|
|---|---|---|
|1|SQLAlchemy 2.0 + Alembic|Prisma çelişkisi çöz|
|2|Dragonfly|Cache + queue broker|
|3|PostGIS extension|arsam spatial query|
|4|pgvector extension|AI RAG hazırlığı|
|5|pgBackRest|Backup, KVKK güvenlik|
|6|PgBouncer|Connection pooling|
|7|Arq|Background jobs|
|8|LiteLLM|Multi-provider AI router server-side|
|9|Resend|Logto magic link blokeli|
|10|Verimor|OTP, KYC SMS|
|11|tusd|Resumable upload backend|
|12|slowapi|Rate limit|
|13|Idempotency middleware|KYC/OTA güvenlik|
|14|Audit log table + pgaudit|KVKK + EİDS|
|15|RLS + tenant_id pattern|Multi-tenant izolasyon|
|16|Postgres FTS + pg_trgm|İlan arama|
|17|Presidio|AI'ya PII gitmeden mask|
|18|KVKK endpoints (export/delete/consents)|Yasal + store policy|
|19|Tapu/parsel format validation|İlan oluşturma akışı|
|20|Health endpoints|Caddy + Uptime Kuma|
|21|Backend CI|uv + Ruff + Pyright + pytest|
|22|Test-first ritüel|Zod → Pydantic + pytest|

---

## 6. Beta sırasında / sonrasında

|Bileşen|Faz|
|---|---|
|Langfuse|Beta sırası (AI gözlemlenebilirlik)|
|imgproxy|Beta sırası|
|iyzico|Beta sonrası (premium üyelik kararı sonrası)|
|KYB Veriff webhook handler|Beta sonrası (KYB akış aktivasyonu ile)|
|Svix self-host|Production webhook iş ortakları için|
|Novu self-host|Notification kanalları çoğaldığında|
|Meilisearch|Postgres FTS scale tıkanıklığı yaşandığında|
|Infisical|Production secret yönetimi sıkılaştığında|
|zeep + TKGM client|EİDS bakanlık protokolü onaylandığında|

---

## 7. Sıraya koyalım — sonraki adım

İki seçenek:

1. **`docs/BACKEND_STACK.md`** olarak ayrı doküman çıkartayım, TECH_STACK.md ile cross-reference.
2. TECH_STACK.md'ye **"Backend" bölümü** olarak inline eklensin.

**Önerim: Ayrı `BACKEND_STACK.md`** (TECH_STACK.md zaten 360+ satır; ayrı dokümanlamak ADR disiplinine de uyar).

Onayınızla iki kapatma kararı:

1. **Prisma → SQLAlchemy** kararı kilitleniyor mu? (Backend için "Prisma öncelik" kuralını backend kapsamı dışına alma)
2. **Beta öncesi 22 maddelik minimum set** kabul mü, yoksa bazı kalemleri ertelemek/eklemek istiyor musunuz?

Haklısınız, özür dilerim — Prisma'yı ben yazdım. Sizin kuralınız aslında şudur:

> "supabase yasak, (prisma ve postgresql öncelik)"

Buradaki "Prisma" frontend/Node.js dünyasında ORM olarak kullanılır. Ben bunu körü körüne TECH_STACK.md'ye "Backend: FastAPI + Postgres + Prisma" diye yazdım. **Hata bende.** FastAPI Python; Prisma Python client (`prisma-client-py`) 2024'te maintenance mode'a alındı, 2025'te arşivlendi. Yani çelişki ben yarattım; sizin kuralınız değildi.

Doğru okuma: **PostgreSQL öncelik** (bu net), **Prisma** sadece Node.js/TS projeleri için geçerli bir tercih (örnek: Logto kendi içinde Node.js, başka bir Node servisi yazarsanız Prisma kullanılır). FastAPI tarafında Prisma zaten kullanılamıyor.

---

## SQLAlchemy 2.0 + Alembic nedir?

**SQLAlchemy** — Python'un en yaygın, en olgun ORM'i (Object-Relational Mapper). 2006'dan beri. 2.0 sürümü 2023'te çıktı, **async** desteği native (asyncio + asyncpg sürücüsü ile Postgres'e bağlanır). Pydantic v2 + FastAPI ile mükemmel uyumlu.

Kavramsal karşılaştırma — siz Prisma'yı tanıyorsanız:

|Kavram|Prisma (TS)|SQLAlchemy 2.0 (Python)|
|---|---|---|
|Şema tanımı|`schema.prisma` dosyası, kendi DSL'i|Python class'ları (`Mapped[]` tipli)|
|Migration|`prisma migrate dev`|**Alembic** komutu (`alembic revision --autogenerate`)|
|Query|`prisma.user.findMany({ where: ... })`|`session.execute(select(User).where(...))`|
|Type safety|Generated client|Native Python type hints + Mapped generics|
|Async|Native|Native (`AsyncSession`)|
|Relations|`include`, `select`|`selectinload`, `joinedload`|
|Raw SQL|`$queryRaw`|`text()` veya `Core` API|

**Alembic** — SQLAlchemy'nin migration aracı (Prisma Migrate'in karşılığı). Aynı yazarın (Mike Bayer) yazdığı kardeş proje. Schema değişikliklerini versiyonlanmış Python script'leri olarak tutar, up/down migration üretir, autogenerate ile schema diff'i otomatik script'e çevirir.

**Tipik akış (Prisma → SQLAlchemy karşılığı):**

|Prisma akış|SQLAlchemy 2.0 + Alembic akış|
|---|---|
|`schema.prisma` düzenle|`app/models/user.py` Python class'ını düzenle|
|`prisma migrate dev --name add_phone`|`alembic revision --autogenerate -m "add phone"`|
|`prisma generate`|(gerekmez — Python class'ı zaten tip)|
|`prisma migrate deploy` (prod)|`alembic upgrade head`|
|`prisma db pull` (introspect)|`sqlacodegen` (third-party tool)|
|`prisma studio` (UI)|DBeaver, TablePlus, pgAdmin|

**Neden bu kombinasyon FastAPI'de fiili standart:**

- FastAPI dokümantasyonunun resmi tutorial'ı SQLAlchemy ile yazılı
- Pydantic v2 + SQLAlchemy 2.0 + FastAPI üçlüsü Python web ekosisteminin "Next.js + Prisma + tRPC" karşılığı
- asyncpg sürücüsü Postgres'e en hızlı Python erişimi (C-extension)
- Alembic 17 yıllık olgunluğu ile production migration için en güvenilir

**SQLAlchemy 2.0'ın modern sözdizimi (Prisma'ya yakın hisseder):**

```python
class User(Base):
    __tablename__ = "users"
    id: Mapped[UUID] = mapped_column(primary_key=True)
    email: Mapped[str] = mapped_column(unique=True, index=True)
    tenant_id: Mapped[UUID] = mapped_column(ForeignKey("tenants.id"))
    listings: Mapped[list["Listing"]] = relationship(back_populates="owner")
```

Bu, Prisma'nın `schema.prisma` tanımına kavramsal olarak çok yakın — type-safe, ilişkili, declarative.

---

## Düzeltme

TECH_STACK.md'deki **"Backend: FastAPI + Postgres + Prisma"** satırını **"Backend: FastAPI + Postgres + SQLAlchemy 2.0 (async) + Alembic"** olarak güncelleyeceğim. Bu, sizin orijinal "PostgreSQL öncelik" kuralınızla tutarlı; benim Prisma uydurmam değil.

Onay verirseniz hem TECH_STACK.md hem yeni hazırlayacağım BACKEND_STACK.md aynı düzeltmeyle yazılır.


mobile pwa + diğer gereksinimler için (yukarıdaki son artifact ile çelişmeyecek) geliştirme paketleme yayınlama yol haritası.İstek netleştirmek için kısa sorular — sonra dümdüz yol haritasını araştırmaya gönderiyorum.

1. Mobile binary için Apple Developer + Google Play Developer hesapları: ikisi de açık mı, yoksa hesap açma + KVKK/şirket doğrulama da yol haritasına dahil olsun mu? (Apple kurumsal D-U-N-S numarası süreci 2-4 hafta sürebilir)

2. Yayın stratejisi: closed beta (TestFlight + Play internal testing) ile mi başlıyorsunuz, yoksa direkt production release mi hedef? (İlki 2-3 ay test süresi getirir, ikincisi daha agresif takvim)

3. Hedef takvim ve scope: bu yol haritası arsam.net (Temmuz 2026) için mi, yoksa daha geniş bir SaaS platformu ([[Great Doers]], Segika, vs.) için mi geçerli? Hangi proje önce binary alıyor?

4. Apple Developer + Google Play Developer hesapları: hesap açma + KVKK/şirket doğrulama da yol haritasına dahil olsun.

5. closed beta (TestFlight + Play internal testing) ile mi başlıyorsunuz, yoksa direkt production release.

6. arsam.net (Haziran 2026) için




}



## İlgili Notlar
- [[Alibaba card]]
- [[İstoç 2]]
- [[Jobiers yeni iş planı]]
- [[Ramazan sonrası, ilk toplantı '26]]
- [[Great Doers]]
- [[Gülin]]
- [[Sözleşme yönetimi sistemi]]
- [[Çelişkiler]]
- [[AI agent]]
- [[Arsam unutulan’s]]
- [[Ezel dizisinden Mert'in Ömer'e Abi mektubu]]
- [[Kimi öldürür sevdiğini]]
- [[SalesLayer PIM Meet planla]]
- [[macbook not, gül ve inci ile gezelim]]
- [[Metin’i istihdam için yenşden alalım mı?]]
- [[Aidiyet Şirket]]
- [[Makine Ögrenmesi]]
- [[Docusign gibi sözleşme yönetim sistemi]]
