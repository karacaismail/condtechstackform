/**
 * MetaWork Karar Çerçevesi — Engine + UI
 *
 * Soruları render eder, cevapları toplar, JSON export sağlar,
 * "Custom" seçimini "belirsiz" olarak işaretler.
 *
 * Yatırımcı dilinde — Detaylar butonuyla gerçek dünya senaryoları.
 */

import {
  CATEGORIES,
  QUESTIONS,
  CUSTOM_OPTION,
  type Question,
  type Option,
  type Category,
} from "./research-data";

// =============================================================
// State
// =============================================================

interface AnswerEntry {
  questionId: string;
  question: string;
  categoryId: string;
  selectedOptionId: string;       // option.id veya "custom"
  selectedLabel: string;
  techLabel?: string;
  isCustom: boolean;
  customText: string | null;      // sadece custom seçilirse dolu
  status: "answered" | "belirsiz";
  timestamp: number;
}

interface AppState {
  answers: Map<string, AnswerEntry>;
  activeCategoryId: string;
  // Branching kuyruğu: option.nextQuestions ile eklenen sorular
  unlockedQuestionIds: Set<string>;
}

const state: AppState = {
  answers: new Map(),
  activeCategoryId: CATEGORIES[0]!.id,
  unlockedQuestionIds: new Set(),
};

// =============================================================
// Helpers
// =============================================================

function $(sel: string): HTMLElement {
  const el = document.querySelector(sel);
  if (!el) throw new Error(`Element bulunamadı: ${sel}`);
  return el as HTMLElement;
}

function escape(s: string): string {
  const map: Record<string, string> = {
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;",
  };
  return String(s).replace(/[&<>"']/g, (m) => map[m]!);
}

function getQuestion(id: string): Question | undefined {
  return QUESTIONS.find((q) => q.id === id);
}

function visibleQuestions(categoryId: string): Question[] {
  const all = QUESTIONS.filter((q) => q.categoryId === categoryId);
  return all.filter((q) => {
    // Eğer koşul yoksa görünür (baz soru)
    if (!q.condition) return true;
    // Branching ile açıldıysa görünür
    if (state.unlockedQuestionIds.has(q.id)) return true;
    return false;
  });
}

function setAnswer(question: Question, opt: Option | typeof CUSTOM_OPTION, customText: string | null): void {
  const isCustom = opt.id === "custom";
  state.answers.set(question.id, {
    questionId: question.id,
    question: question.question,
    categoryId: question.categoryId,
    selectedOptionId: opt.id,
    selectedLabel: opt.trLabel,
    techLabel: opt.techLabel,
    isCustom,
    customText,
    status: isCustom ? "belirsiz" : "answered",
    timestamp: Date.now(),
  });

  // Branching: bu option.nextQuestions varsa unlock
  if (!isCustom) {
    const realOpt = opt as Option;
    realOpt.nextQuestions?.forEach((qid) => state.unlockedQuestionIds.add(qid));
  }

  renderCategory();
  renderSidebar();
  renderJsonPreview();
}

function totalAnswered(): number { return state.answers.size; }
function totalBelirsiz(): number {
  let n = 0;
  state.answers.forEach((a) => { if (a.status === "belirsiz") n++; });
  return n;
}
function totalQuestions(): number {
  // Toplam: baz sorular + unlock edilmiş branching
  return QUESTIONS.filter((q) => !q.condition || state.unlockedQuestionIds.has(q.id)).length;
}

// =============================================================
// Render — Sidebar (kategori nav + ilerleme)
// =============================================================

function renderSidebar(): void {
  const root = $("#sidebar");
  root.innerHTML = CATEGORIES.map((cat) => {
    const inCat = QUESTIONS.filter((q) => q.categoryId === cat.id && (!q.condition || state.unlockedQuestionIds.has(q.id)));
    const ansInCat = inCat.filter((q) => state.answers.has(q.id)).length;
    const belInCat = inCat.filter((q) => state.answers.get(q.id)?.status === "belirsiz").length;
    const active = state.activeCategoryId === cat.id ? "active" : "";
    return `
      <button class="sidebar-cat ${active}" data-cat="${escape(cat.id)}">
        <span class="cat-icon ${escape(cat.colorClass)}"><i class="ph-duotone ${escape(cat.icon)}"></i></span>
        <span class="cat-text">
          <span class="cat-title">${escape(cat.title)}</span>
          <span class="cat-desc">${escape(cat.description)}</span>
        </span>
        <span class="cat-meta">
          <span class="cat-count">${ansInCat}/${inCat.length}</span>
          ${belInCat > 0 ? `<span class="cat-bel">${belInCat} ?</span>` : ""}
        </span>
      </button>
    `;
  }).join("");
  root.querySelectorAll<HTMLButtonElement>(".sidebar-cat").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.activeCategoryId = btn.dataset["cat"]!;
      renderSidebar();
      renderCategory();
    });
  });

  $("#progress-total").textContent = `${totalAnswered()}/${totalQuestions()} cevap`;
  $("#progress-bel").textContent = `${totalBelirsiz()} belirsiz`;
}

// =============================================================
// Render — Aktif kategori soruları
// =============================================================

function renderCategory(): void {
  const cat = CATEGORIES.find((c) => c.id === state.activeCategoryId);
  if (!cat) return;
  const root = $("#category-area");
  const qs = visibleQuestions(cat.id);

  root.innerHTML = `
    <div class="category-head">
      <div class="cat-icon-big ${escape(cat.colorClass)}"><i class="ph-duotone ${escape(cat.icon)}"></i></div>
      <div>
        <h2>${escape(cat.title)}</h2>
        <p>${escape(cat.description)}</p>
      </div>
    </div>
    <div class="questions">${qs.map((q) => renderQuestionCard(q)).join("")}</div>
  `;
  attachQuestionHandlers(root);
}

function renderQuestionCard(q: Question): string {
  const allOptions: Array<Option | typeof CUSTOM_OPTION> = [...q.options, CUSTOM_OPTION];
  const ans = state.answers.get(q.id);
  return `
    <div class="qcard" data-q="${escape(q.id)}">
      <div class="qcard-head">
        <div>
          <h3>${escape(q.question)}</h3>
          <div class="qcard-purpose"><strong>Amaç:</strong> ${escape(q.purpose)}</div>
          ${q.condition ? `<div class="qcard-cond"><strong>Koşul:</strong> ${escape(q.condition)}</div>` : ""}
        </div>
        ${ans ? `<span class="qcard-status ${ans.status}">${ans.status === "belirsiz" ? "BELİRSİZ" : "CEVAPLANDI"}</span>` : ""}
      </div>
      <div class="opt-grid">
        ${allOptions.map((opt) => renderOptionCard(q, opt, ans)).join("")}
      </div>
      ${ans?.isCustom ? renderCustomTextarea(q, ans) : ""}
    </div>
  `;
}

function renderOptionCard(q: Question, opt: Option | typeof CUSTOM_OPTION, ans?: AnswerEntry): string {
  const selected = ans?.selectedOptionId === opt.id ? "selected" : "";
  const isCustom = opt.id === "custom";
  const hasScenarios = !isCustom && (opt as Option).scenarios && (opt as Option).scenarios!.length > 0;
  const realOpt = opt as Option;

  return `
    <button class="opt ${selected} ${isCustom ? "opt-custom" : ""}" data-q="${escape(q.id)}" data-opt="${escape(opt.id)}">
      <div class="opt-head">
        <span class="opt-tech">${escape(opt.techLabel)}</span>
        ${opt.acronym ? `<span class="opt-acronym">${escape(opt.acronym)}</span>` : ""}
      </div>
      ${opt.acronymExpansion ? `<div class="opt-expansion"><strong>Açılım:</strong> ${escape(opt.acronymExpansion)}</div>` : ""}
      <div class="opt-tr"><strong>Türkçe:</strong> ${escape(opt.trLabel)}</div>
      <div class="opt-explain">${escape(opt.trExplanation)}</div>
      ${realOpt.pros && realOpt.pros.length ? `
        <div class="opt-pros">
          <strong>Avantaj:</strong> ${realOpt.pros.map((p) => `<span class="pill pill-pro">${escape(p)}</span>`).join(" ")}
        </div>` : ""}
      ${realOpt.cons && realOpt.cons.length ? `
        <div class="opt-cons">
          <strong>Dezavantaj:</strong> ${realOpt.cons.map((c) => `<span class="pill pill-con">${escape(c)}</span>`).join(" ")}
        </div>` : ""}
      ${hasScenarios ? `
        <button class="opt-details-btn" data-q="${escape(q.id)}" data-opt="${escape(opt.id)}" type="button">
          <i class="ph ph-magnifying-glass"></i> Detaylar — gerçek dünya senaryoları
        </button>` : ""}
    </button>
  `;
}

function renderCustomTextarea(q: Question, ans: AnswerEntry): string {
  return `
    <div class="custom-input">
      <label><strong>Custom — kendi sorum / cevabım:</strong></label>
      <textarea data-q="${escape(q.id)}" placeholder="Bu sorunun seçeneklerini anlamadım veya hiçbiri uymuyor. Kendi durumumu/sorumu buraya yazıyorum (Claude sonraki turda detaylıca açıklayacak)">${escape(ans.customText || "")}</textarea>
      <div class="custom-status"><i class="ph ph-question"></i> Bu cevap JSON'da <code>"status": "belirsiz"</code> olarak işaretlendi.</div>
    </div>
  `;
}

function attachQuestionHandlers(root: HTMLElement): void {
  // Option click
  root.querySelectorAll<HTMLButtonElement>(".opt").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      // Details butonu içeride — onun click'ini ele alalım ayrıca
      const target = e.target as HTMLElement;
      if (target.closest(".opt-details-btn")) return;

      const qid = btn.dataset["q"]!;
      const optId = btn.dataset["opt"]!;
      const q = getQuestion(qid);
      if (!q) return;
      const opt = optId === "custom" ? CUSTOM_OPTION : q.options.find((o) => o.id === optId);
      if (!opt) return;
      const existing = state.answers.get(qid);
      const customText = optId === "custom" ? (existing?.customText || "") : null;
      setAnswer(q, opt, customText);
    });
  });

  // Details modal
  root.querySelectorAll<HTMLButtonElement>(".opt-details-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const qid = btn.dataset["q"]!;
      const optId = btn.dataset["opt"]!;
      openDetailsModal(qid, optId);
    });
  });

  // Custom textarea input
  root.querySelectorAll<HTMLTextAreaElement>(".custom-input textarea").forEach((ta) => {
    ta.addEventListener("input", () => {
      const qid = ta.dataset["q"]!;
      const ans = state.answers.get(qid);
      if (!ans) return;
      ans.customText = ta.value;
      state.answers.set(qid, ans);
      renderJsonPreview();
      renderSidebar();
    });
  });
}

// =============================================================
// Details Modal
// =============================================================

function openDetailsModal(qid: string, optId: string): void {
  const q = getQuestion(qid);
  if (!q) return;
  const opt = q.options.find((o) => o.id === optId);
  if (!opt || !opt.scenarios) return;

  const modal = $("#details-modal");
  const body = $("#details-body");
  body.innerHTML = `
    <div class="modal-head">
      <div class="modal-head-icon"><i class="ph-duotone ph-lightbulb"></i></div>
      <div class="modal-head-text">
        <div class="modal-eyebrow">${escape(q.question)}</div>
        <h2>${escape(opt.techLabel)}</h2>
        ${opt.acronym ? `<p class="modal-acronym">${escape(opt.acronym)} = ${escape(opt.acronymExpansion || "")}</p>` : ""}
        <p class="modal-tr">${escape(opt.trLabel)}</p>
      </div>
    </div>
    <div class="modal-section">
      <h3><i class="ph ph-book-open"></i> Açıklama</h3>
      <p>${escape(opt.trExplanation)}</p>
    </div>
    <div class="modal-section">
      <h3><i class="ph ph-globe"></i> Gerçek dünya senaryoları</h3>
      <ol class="scenario-list">
        ${opt.scenarios.map((s) => `<li>${escape(s)}</li>`).join("")}
      </ol>
    </div>
    ${opt.pros && opt.pros.length ? `
      <div class="modal-section">
        <h3><i class="ph ph-thumbs-up"></i> Avantajlar</h3>
        <ul>${opt.pros.map((p) => `<li>${escape(p)}</li>`).join("")}</ul>
      </div>` : ""}
    ${opt.cons && opt.cons.length ? `
      <div class="modal-section">
        <h3><i class="ph ph-warning-circle"></i> Dezavantajlar</h3>
        <ul>${opt.cons.map((c) => `<li>${escape(c)}</li>`).join("")}</ul>
      </div>` : ""}
    <div class="modal-actions">
      <button class="btn" id="modal-close-btn"><i class="ph ph-x"></i> Kapat</button>
      <button class="btn btn-primary" id="modal-select-btn"><i class="ph ph-check"></i> Bu seçeneği işaretle</button>
    </div>
  `;
  modal.classList.add("show");
  document.body.style.overflow = "hidden";

  $("#modal-close-btn").addEventListener("click", closeDetailsModal);
  $("#modal-select-btn").addEventListener("click", () => {
    setAnswer(q, opt, null);
    closeDetailsModal();
  });
}

function closeDetailsModal(): void {
  $("#details-modal").classList.remove("show");
  document.body.style.overflow = "";
}

// =============================================================
// JSON export
// =============================================================

function buildJson(): string {
  const answers = Array.from(state.answers.values()).sort((a, b) => a.timestamp - b.timestamp);
  const out = {
    project: "MetaWork",
    schema: "metawork-decision-frame@1",
    generatedAt: new Date().toISOString(),
    summary: {
      totalAnswered: answers.length,
      totalQuestions: totalQuestions(),
      totalBelirsiz: totalBelirsiz(),
      categoriesCovered: Array.from(new Set(answers.map((a) => a.categoryId))),
    },
    answers,
    nextResearchQueue: answers
      .filter((a) => a.status === "belirsiz")
      .map((a) => ({
        questionId: a.questionId,
        question: a.question,
        userClarification: a.customText,
        note: "Claude bu kalemi sonraki turda detaylıca araştırıp açıklayacak (teknik dilden arındırılmış).",
      })),
  };
  return JSON.stringify(out, null, 2);
}

function renderJsonPreview(): void {
  const pre = $("#json-preview");
  pre.textContent = buildJson();
}

function downloadJson(): void {
  const blob = new Blob([buildJson()], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `metawork-decisions-${new Date().toISOString().slice(0,10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function copyJson(): void {
  navigator.clipboard.writeText(buildJson()).then(() => {
    const btn = $("#btn-copy");
    const orig = btn.innerHTML;
    btn.innerHTML = '<i class="ph ph-check"></i> Kopyalandı';
    setTimeout(() => { btn.innerHTML = orig; }, 1500);
  });
}

function resetAll(): void {
  if (!confirm("Tüm cevaplar silinecek. Emin misin?")) return;
  state.answers.clear();
  state.unlockedQuestionIds.clear();
  renderSidebar();
  renderCategory();
  renderJsonPreview();
}

// =============================================================
// Init
// =============================================================

document.addEventListener("DOMContentLoaded", () => {
  $("#btn-download").addEventListener("click", downloadJson);
  $("#btn-copy").addEventListener("click", copyJson);
  $("#btn-reset").addEventListener("click", resetAll);
  $("#details-modal").addEventListener("click", (e) => {
    if ((e.target as HTMLElement).id === "details-modal") closeDetailsModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeDetailsModal();
  });
  renderSidebar();
  renderCategory();
  renderJsonPreview();
});

// Test edilebilirlik için
(window as unknown as { __research: unknown }).__research = {
  state, buildJson, CATEGORIES, QUESTIONS,
};

export {};
