"""
FastAPI mock backend — Meta-Framework Karar Sihirbazı
Kullanıcı kuralı: backend FastAPI, AI-first yapı.

Çalıştır:
    pip install fastapi uvicorn pydantic
    uvicorn backend.main:app --reload --port 8000

Endpoint'ler:
    GET  /decisions        → karar grafı (form adımları + seçenekler)
    POST /recommend        → cevap setine göre öneri listesi
    POST /ai/explain       → mock SSE stream (gerçek modelde Claude/OpenAI)
    GET  /health           → sağlık kontrolü

Üretimde:
    - PostgreSQL + Prisma (Python: prisma-client-py veya SQLAlchemy)
    - Redis (cache + rate limit)
    - OpenSearch (tahta: Couch → Elastic)
    - AI Provider abstraction (Anthropic/OpenAI/Ollama)
"""

from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
from pydantic import BaseModel, Field
from typing import Dict, List, Optional
import asyncio
import json

app = FastAPI(
    title="Meta-Framework Karar Sihirbazı",
    description="Koşullu form → Kanban motoru için karar API'si",
    version="0.1.0",
)

# CORS — vibecoding/development için açık, prod'da daralt
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -----------------------------------------------------------
# Pydantic Modelleri
# -----------------------------------------------------------

class DecisionOption(BaseModel):
    id: str
    label: str
    desc: str
    icon: str
    rationale: str

class DecisionStep(BaseModel):
    id: str
    title: str
    subtitle: Optional[str] = None
    options: List[DecisionOption]

class Recommendation(BaseModel):
    id: str
    column: str
    title: str
    icon: str
    desc: str
    why: Optional[str] = None
    priority: str = Field(..., description="must|should|could")
    effort: str = Field(..., description="XS|S|M|L")
    license: Optional[str] = None

class AnswerPayload(BaseModel):
    answers: Dict[str, str] = Field(..., description="stepId → optionId map")

# -----------------------------------------------------------
# Sahte data store (gerçekte DB'den okunur)
# -----------------------------------------------------------

STEPS_DATA: List[DecisionStep] = []  # Üretimde Prisma'dan yüklenir

# Buraya prototype.html'deki RECS listesinin Python yansıması gelir.
# DRY için ayrı bir JSON dosyasına çıkarmak en temizi.
# Bu mock için boş bırakıyoruz; /recommend dönüşü esnek tutuldu.

# -----------------------------------------------------------
# Endpoint'ler
# -----------------------------------------------------------

@app.get("/health")
async def health():
    return {"status": "ok", "service": "meta-framework-wizard"}

@app.get("/decisions")
async def get_decisions():
    """Karar grafı: tüm adımlar + seçenekler."""
    # Üretimde: DecisionStep.objects.all() — Prisma sorgusu
    return {"steps": [s.model_dump() for s in STEPS_DATA]}

@app.post("/recommend")
async def recommend(payload: AnswerPayload):
    """
    Cevap setinden öneri üretir.
    Üretimde:
      1. Cevapları Recommendation.conditions ile eşleştir (AND across keys, OR within)
      2. priority + effort'a göre sırala
      3. Kanban kolon → kart yapısı döndür
    """
    # Mock: cevap sayısına göre dummy öneri sayısı
    n = len(payload.answers)
    return {
        "received": payload.answers,
        "recommendations": [],
        "summary": f"{n} cevap alındı, {n*4} öneri üretilebilir.",
    }

@app.post("/ai/explain")
async def ai_explain(payload: AnswerPayload):
    """
    Mock SSE stream — gerçek modelde:
        - Anthropic Claude API (Sonnet/Opus)
        - Tool calling: 'get_recommendations', 'search_docs'
        - Akışı kullanıcıya stream eder
    """
    async def gen():
        text = (
            f"Seçimlerini inceledim. {len(payload.answers)} cevap aldım.\n\n"
            "Mimari paradigma kararı önce gelmeli, sonra kernel, sonra "
            "system modules, en son plugin/extension katmanı.\n\n"
            "(Bu mock. Gerçek motorda Claude/OpenAI API'sine bağlanır.)"
        )
        for token in text.split(" "):
            await asyncio.sleep(0.04)
            yield f"data: {json.dumps({'token': token + ' '})}\n\n"
        yield "data: [DONE]\n\n"

    return StreamingResponse(gen(), media_type="text/event-stream")

# -----------------------------------------------------------
# Write Protection middleware (tahtada daire içinde işaretliydi)
# -----------------------------------------------------------

@app.middleware("http")
async def write_protection(request: Request, call_next):
    """
    Yazma uçları (POST/PUT/PATCH/DELETE) için gatekeeper.
    Üretimde:
      - JWT/session doğrulama
      - Tenant + RBAC + ABAC kontrolü
      - Rate limit (Redis token bucket)
      - Audit log
    """
    if request.method in ("POST", "PUT", "PATCH", "DELETE"):
        # Burada gerçek kontroller — şimdilik passthrough
        pass
    response = await call_next(request)
    return response

# -----------------------------------------------------------
# Lokal koşum
# -----------------------------------------------------------

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("backend.main:app", host="0.0.0.0", port=8000, reload=True)
