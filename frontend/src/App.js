import React, { useEffect, useState } from "react";

function App() {
  const [cryptos, setCryptos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/cryptos")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch crypto data");
        }
        return response.json();
      })
      .then((data) => {
        setCryptos(data.cryptos || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        backgroundColor: "#f7f9fc",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#333" }}>
        💰 Crypto Dashboard (Dummy Data)
      </h1>

      {loading ? (
        <p style={{ textAlign: "center" }}>Loading data...</p>
      ) : error ? (
        <p style={{ color: "red", textAlign: "center" }}>{error}</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          {cryptos.map((crypto) => (
            <div
              key={crypto.symbol}
              style={{
                backgroundColor: "white",
                borderRadius: "12px",
                padding: "20px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                textAlign: "center",
              }}
            >
              <h2>{crypto.name}</h2>
              <p>
                <strong>Symbol:</strong> {crypto.symbol}
              </p>
              <p>
                <strong>Price (USD):</strong> ${crypto.price_usd.toLocaleString()}
              </p>
              <p
                style={{
                  color: crypto.change_24h >= 0 ? "green" : "red",
                  fontWeight: "bold",
                }}
              >
                24h Change: {crypto.change_24h}%
              </p>
              <p>
                <strong>Volume (24h):</strong>{" "}
                ${crypto.volume_24h.toLocaleString()}
              </p>
              <p>
                <strong>Market Cap:</strong>{" "}
                ${crypto.market_cap.toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
