/**
 * Vitest birim testleri — Decision Engine
 *
 * Çalıştır:
 *   npm i -D vitest @vitest/ui
 *   npx vitest --run
 *
 * Not: prototype.html'deki engine fonksiyonlarını ayrı bir module'e
 * çıkardığında bu testler doğrudan çalışır. Şimdilik test planı +
 * beklenen davranış spec'i olarak duruyor (kullanıcı: test-first).
 */

import { describe, it, expect, beforeEach } from 'vitest';

// type imports — gerçek modülünden alınacak
type Answers = Record<string, string>;
type Conditions = Record<string, string[]>;

// Engine'den alınacak fonksiyon (DRY için ayrı dosyaya çıkarılmalı)
function conditionsMatch(conditions: Conditions, answers: Answers): boolean {
  if (!conditions || Object.keys(conditions).length === 0) return true;
  return Object.entries(conditions).every(([stepId, allowed]) => {
    const a = answers[stepId];
    if (!a) return false;
    return allowed.includes(a);
  });
}

describe('conditionsMatch', () => {
  it('boş koşul → her zaman true', () => {
    expect(conditionsMatch({}, {})).toBe(true);
    expect(conditionsMatch({}, { domain: 'suite' })).toBe(true);
  });

  it('tek anahtar, eşleşen değer → true', () => {
    expect(conditionsMatch({ tenancy: ['multi-shared'] }, { tenancy: 'multi-shared' })).toBe(true);
  });

  it('tek anahtar, eşleşmeyen değer → false', () => {
    expect(conditionsMatch({ tenancy: ['multi-shared'] }, { tenancy: 'single' })).toBe(false);
  });

  it('cevap yoksa → false', () => {
    expect(conditionsMatch({ tenancy: ['multi-shared'] }, {})).toBe(false);
  });

  it('OR within key: birden çok değer geçerli', () => {
    expect(conditionsMatch({ tenancy: ['multi-shared', 'multi-isolated'] }, { tenancy: 'multi-isolated' })).toBe(true);
  });

  it('AND across keys: her ikisi sağlanmalı', () => {
    const cond = { domain: ['commerce'], search: ['hybrid'] };
    expect(conditionsMatch(cond, { domain: 'commerce', search: 'hybrid' })).toBe(true);
    expect(conditionsMatch(cond, { domain: 'commerce', search: 'basic' })).toBe(false);
    expect(conditionsMatch(cond, { domain: 'cms', search: 'hybrid' })).toBe(false);
  });
});

describe('Kanban grouping davranışı', () => {
  it.todo('öneriler kolonlara doğru gruplanır');
  it.todo('boş kolon "öneri yok" gösterir');
  it.todo('priority must > should > could sıralanır');
  it.todo('aynı priority içinde effort XS > S > M > L sıralanır');
});

describe('State machine', () => {
  it.todo('başlangıç: currentStep=0, answers boş');
  it.todo('answer çağrısı currentStep arttırır');
  it.todo('back son cevabı siler ve currentStep azaltır');
  it.todo('tüm adımlar cevaplanınca isComplete=true');
  it.todo('reset her şeyi başa alır');
});

describe('Erişilebilirlik (jsdom)', () => {
  it.todo('tüm option button\'larında aria-label var');
  it.todo('hiçbir bileşen 1rem altında font-size kullanmıyor');
  it.todo('Phosphor ikonları render oluyor (sınıf eki kontrolü)');
});

describe('Lisans + öneri tutarlılığı', () => {
  it.todo('license=mit-hosted seçilince Managed Edition kartı çıkar');
  it.todo('license=mit-enterprise seçilince Open Core kartı çıkar');
  it.todo('mit-pure seçilince ticari edition kartları çıkmaz');
});
