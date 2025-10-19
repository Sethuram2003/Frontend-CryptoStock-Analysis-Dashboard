import React from 'react';
import CryptoCard from '../components/crypto/CryptoCard';
import StockCard from '../components/stocks/StockCard';
import PredictionChart from '../components/sentiment/PredictionChart';
import NewsFeed from '../components/sentiment/NewsFeed';
import { useCryptos, useStocks, useMarketOverview } from '../hooks/useMockApi';

const Dashboard = () => {
  const { data: cryptoData, loading: cryptoLoading, error: cryptoError } = useCryptos();
  const { data: stockData, loading: stockLoading, error: stockError } = useStocks();
  const { data: marketData } = useMarketOverview();

  const loading = cryptoLoading || stockLoading;
  const error = cryptoError || stockError;

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

  const cryptos = cryptoData?.cryptos || [];
  const stocks = stockData?.stocks || [];
  const overview = marketData?.overview || {};

  return (
    <div className="dashboard">
      {/* Market Overview */}
      <div className="grid-container">
        <div className="card grid-wide">
          <div className="card-header">
            <h2 className="card-title">Market Overview</h2>
            <div className="market-overview-stats">
              <div className="market-stat-large">
                <label>Total Market Cap</label>
                <span>${(overview.total_market_cap / 1e12).toFixed(2)}T</span>
              </div>
              <div className="market-stat-large">
                <label>24h Volume</label>
                <span>${(overview.total_volume_24h / 1e9).toFixed(2)}B</span>
              </div>
              <div className="market-stat-large">
                <label>Fear & Greed</label>
                <span className="greed">{overview.fear_greed_index} (Greed)</span>
              </div>
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