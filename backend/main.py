from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime, timedelta
import random

app = FastAPI(title="Crypto Analysis Backend", version="1.0")

# Allow requests from React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Replace * with your frontend URL for production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Dummy Data Generator Functions ---
def generate_dummy_crypto_data(symbol: str):
    """Generate random dummy crypto price data"""
    price = round(random.uniform(20000, 70000), 2)
    change_24h = round(random.uniform(-5, 5), 2)
    volume = round(random.uniform(1_000_000, 50_000_000), 2)
    market_cap = round(price * volume / 100, 2)
    return {
        "symbol": symbol,
        "name": symbol.capitalize(),
        "price_usd": price,
        "change_24h": change_24h,
        "volume_24h": volume,
        "market_cap": market_cap,
    }

def generate_historical_data(symbol: str):
    """Generate 7 days of dummy historical data"""
    base_price = random.uniform(20000, 70000)
    data = []
    for i in range(7):
        date = (datetime.utcnow() - timedelta(days=i)).strftime("%Y-%m-%d")
        price = round(base_price + random.uniform(-2000, 2000), 2)
        data.append({"date": date, "price_usd": price})
    return list(reversed(data))

# --- API Routes ---

@app.get("/")
def home():
    return {"message": "Welcome to the Crypto Analysis API", "status": "running"}

@app.get("/cryptos")
def get_cryptos():
    """Return list of dummy cryptocurrencies"""
    symbols = ["BTC", "ETH", "BNB", "SOL", "XRP", "ADA", "DOGE", "AVAX"]
    data = [generate_dummy_crypto_data(symbol) for symbol in symbols]
    return {"cryptos": data}

@app.get("/crypto/{symbol}")
def get_crypto_details(symbol: str):
    """Return detailed dummy data for a specific cryptocurrency"""
    crypto = generate_dummy_crypto_data(symbol.upper())
    history = generate_historical_data(symbol.upper())
    return {
        "crypto": crypto,
        "history": history,
        "message": f"Dummy data for {symbol.upper()} fetched successfully."
    }

@app.get("/market/overview")
def get_market_overview():
    """Return dummy market overview stats"""
    return {
        "total_market_cap": round(random.uniform(1, 3) * 1_000_000_000_000, 2),
        "total_volume_24h": round(random.uniform(100, 300) * 1_000_000_000, 2),
        "btc_dominance": round(random.uniform(40, 50), 2),
        "eth_dominance": round(random.uniform(15, 25), 2),
        "updated_at": datetime.utcnow().isoformat()
    }
