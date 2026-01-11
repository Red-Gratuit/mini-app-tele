from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Autoriser les requêtes depuis Cloudflare / Telegram
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"status": "ok"}

@app.get("/api/ping")
def ping():
    return {"message": "pong"}

@app.post("/api/init")
async def init(request: Request):
    data = await request.json()
    user = data.get("user")

    if not user:
        return {"message": "Utilisateur non trouvé"}

    first_name = user.get("first_name", "Utilisateur")

    return {
        "message": f"Bienvenue {first_name} 🚀"
    }
