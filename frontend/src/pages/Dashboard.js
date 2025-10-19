import React, { useEffect, useState } from 'react';
import CryptoCard from '../components/crypto/CryptoCard';
import StockCard from '../components/stocks/StockCard';
import PredictionChart from '../components/sentiment/PredictionChart';
import NewsFeed from '../components/sentiment/NewsFeed';

const Dashboard = () => {
  const [cryptos, setCryptos] = useState([]);
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Fetch crypto data
        const cryptoResponse = await fetch('http://localhost:8001/cryptos');
        if (!cryptoResponse.ok) throw new Error('Failed to fetch crypto data');
        const cryptoData = await cryptoResponse.json();
        
        // Fetch stock data
        const stockResponse = await fetch('http://localhost:8001/stocks');
        if (!stockResponse.ok) throw new Error('Failed to fetch stock data');
        const stockData = await stockResponse.json();

        setCryptos(cryptoData.cryptos || []);
        setStocks(stockData.stocks || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading market data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <div className="error-icon">⚠️</div>
        <h3>Unable to load data</h3>
        <p>{error}</p>
        <button className="btn btn-primary" onClick={() => window.location.reload()}>
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="dashboard">
      {/* Market Overview */}
      <div className="grid-container">
        <div className="card grid-wide">
          <div className="card-header">
            <h2 className="card-title">Market Overview</h2>
            <div className="time-filter">
              <select className="filter-select">
                <option>24H</option>
                <option>7D</option>
                <option>1M</option>
                <option>1Y</option>
              </select>
            </div>
          </div>
          <PredictionChart data={[...cryptos.slice(0, 3), ...stocks.slice(0, 3)]} />
        </div>
      </div>

      {/* Top Cryptocurrencies */}
      <section className="section">
        <h2 className="section-title">Top Cryptocurrencies</h2>
        <div className="grid-container">
          {cryptos.slice(0, 6).map(crypto => (
            <CryptoCard key={crypto.symbol} crypto={crypto} />
          ))}
        </div>
      </section>

      {/* Stock Market */}
      <section className="section">
        <h2 className="section-title">Stock Market</h2>
        <div className="grid-container">
          {stocks.slice(0, 6).map(stock => (
            <StockCard key={stock.symbol} stock={stock} />
          ))}
        </div>
      </section>

      {/* News & Sentiment */}
      <div className="grid-container">
        <div className="card">
          <h3 className="card-title">Market Sentiment</h3>
          <div className="sentiment-overview">
            <div className="sentiment-item">
              <span className="sentiment-bullish">Bullish: 65%</span>
            </div>
            <div className="sentiment-item">
              <span className="sentiment-neutral">Neutral: 25%</span>
            </div>
            <div className="sentiment-item">
              <span className="sentiment-bearish">Bearish: 10%</span>
            </div>
          </div>
        </div>
        
        <div className="card">
          <NewsFeed />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;