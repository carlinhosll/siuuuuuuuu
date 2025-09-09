from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient
import os
from dotenv import load_dotenv
from datetime import datetime
import uuid

load_dotenv()

app = FastAPI(title="CR7 Website API", version="1.0.0")

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# MongoDB connection
MONGO_URL = os.environ.get("MONGO_URL")
client = MongoClient(MONGO_URL)
db = client.get_database()

@app.get("/api/health")
def health_check():
    return {"status": "healthy", "service": "CR7 Website API"}

@app.get("/api/stats")
def get_cr7_stats():
    return {
        "career_stats": {
            "total_goals": 892,
            "total_assists": 245,
            "total_matches": 1207,
            "trophies": 35,
            "ballon_dor": 5,
            "uefa_best_player": 3
        },
        "club_stats": [
            {
                "club": "Sporting CP",
                "period": "2002-2003",
                "goals": 5,
                "matches": 31,
                "trophies": 0
            },
            {
                "club": "Manchester United",
                "period": "2003-2009",
                "goals": 118,
                "matches": 292,
                "trophies": 9
            },
            {
                "club": "Real Madrid",
                "period": "2009-2018",
                "goals": 451,
                "matches": 438,
                "trophies": 15
            },
            {
                "club": "Juventus",
                "period": "2018-2021",
                "goals": 101,
                "matches": 134,
                "trophies": 5
            },
            {
                "club": "Manchester United",
                "period": "2021-2022",
                "goals": 27,
                "matches": 54,
                "trophies": 0
            },
            {
                "club": "Al Nassr",
                "period": "2023-presente",
                "goals": 68,
                "matches": 75,
                "trophies": 2
            }
        ]
    }

@app.get("/api/timeline")
def get_timeline():
    return {
        "timeline": [
            {
                "year": 1985,
                "title": "Nascimento",
                "description": "Nasce em Funchal, Madeira, Portugal",
                "type": "birth"
            },
            {
                "year": 1997,
                "title": "Início no Andorinha",
                "description": "Começa a jogar futebol no Nacional da Madeira",
                "type": "career"
            },
            {
                "year": 2002,
                "title": "Sporting CP",
                "description": "Estreia profissional no Sporting aos 17 anos",
                "type": "transfer"
            },
            {
                "year": 2003,
                "title": "Manchester United",
                "description": "Transferência histórica para o United por €19 milhões",
                "type": "transfer"
            },
            {
                "year": 2008,
                "title": "Primeira Bola de Ouro",
                "description": "Ganha sua primeira Bola de Ouro aos 23 anos",
                "type": "award"
            },
            {
                "year": 2009,
                "title": "Real Madrid",
                "description": "Transferência recorde mundial por €94 milhões",
                "type": "transfer"
            },
            {
                "year": 2016,
                "title": "Eurocopa",
                "description": "Conquista a Eurocopa com Portugal",
                "type": "achievement"
            },
            {
                "year": 2018,
                "title": "Juventus",
                "description": "Transferência para a Juventus por €117 milhões",
                "type": "transfer"
            },
            {
                "year": 2021,
                "title": "Retorno ao United",
                "description": "Volta ao Manchester United",
                "type": "transfer"
            },
            {
                "year": 2023,
                "title": "Al Nassr",
                "description": "Transferência milionária para o futebol saudita",
                "type": "transfer"
            }
        ]
    }

@app.get("/api/quiz")
def get_quiz_questions():
    return {
        "questions": [
            {
                "id": 1,
                "question": "Em que ano Cristiano Ronaldo nasceu?",
                "options": ["1984", "1985", "1986", "1987"],
                "correct_answer": "1985",
                "difficulty": "easy"
            },
            {
                "id": 2,
                "question": "Quantas Bolas de Ouro Cristiano ganhou?",
                "options": ["4", "5", "6", "7"],
                "correct_answer": "5",
                "difficulty": "medium"
            },
            {
                "id": 3,
                "question": "Por qual valor foi transferido para o Real Madrid?",
                "options": ["€80 milhões", "€94 milhões", "€100 milhões", "€120 milhões"],
                "correct_answer": "€94 milhões",
                "difficulty": "hard"
            },
            {
                "id": 4,
                "question": "Em que clube fez sua estreia profissional?",
                "options": ["Nacional", "Sporting CP", "Manchester United", "Real Madrid"],
                "correct_answer": "Sporting CP",
                "difficulty": "medium"
            },
            {
                "id": 5,
                "question": "Quantos gols marcou pelo Real Madrid?",
                "options": ["430", "445", "451", "465"],
                "correct_answer": "451",
                "difficulty": "hard"
            }
        ]
    }

@app.get("/api/news")
def get_latest_news():
    return {
        "news": [
            {
                "id": 1,
                "title": "CR7 marca dois gols na vitória do Al Nassr",
                "summary": "Cristiano brilha mais uma vez e lidera vitória importante no campeonato saudita",
                "date": "2024-03-15",
                "image": "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400"
            },
            {
                "id": 2,
                "title": "Ronaldo se torna o jogador com mais gols na história",
                "summary": "Português ultrapassa marca histórica e consolida legado no futebol mundial",
                "date": "2024-03-10",
                "image": "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=400"
            },
            {
                "id": 3,
                "title": "CR7 renova contrato com Al Nassr até 2026",
                "summary": "Renovação milionária mantém craque português no futebol saudita",
                "date": "2024-03-05",
                "image": "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=400"
            }
        ]
    }

@app.get("/api/gallery")
def get_gallery():
    return {
        "photos": [
            {
                "id": 1,
                "url": "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800",
                "caption": "CR7 comemorando gol",
                "category": "goals"
            },
            {
                "id": 2,
                "url": "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=800",
                "caption": "Ronaldo com a camisa de Portugal",
                "category": "national_team"
            },
            {
                "id": 3,
                "url": "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=800",
                "caption": "Treinamento intenso",
                "category": "training"
            },
            {
                "id": 4,
                "url": "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800",
                "caption": "Celebração de título",
                "category": "trophies"
            },
            {
                "id": 5,
                "url": "https://images.unsplash.com/photo-1556056504-5c7696c4c28d?w=800",
                "caption": "CR7 em ação",
                "category": "action"
            },
            {
                "id": 6,
                "url": "https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=800",
                "caption": "Momento histórico",
                "category": "historic"
            }
        ]
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)