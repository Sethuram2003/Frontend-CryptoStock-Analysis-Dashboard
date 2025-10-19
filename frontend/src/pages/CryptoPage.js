import React, { useState } from 'react';
import CryptoCard from '../components/crypto/CryptoCard';
import CryptoChart from '../components/crypto/CryptoChart';
import { useCryptos, useMarketOverview } from '../hooks/useMockApi';

const CryptoPage = () => {
  const { data: cryptoData, loading, error } = useCryptos();
  const { data: marketData } = useMarketOverview();
  const [selectedCrypto, setSelectedCrypto] = useState(null);
  const [timeRange, setTimeRange] = useState('7d');

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading cryptocurrency data...</p>
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
  const overview = marketData?.overview || {};

  // Set default selected crypto if not set
  if (!selectedCrypto && cryptos.length > 0) {
    setSelectedCrypto(cryptos[0]);
  }

  return (
    <div className="crypto-page">
      <div className="page-header">
        <h1>Cryptocurrency Analysis</h1>
        <p>Real-time prices, sentiment analysis, and predictions</p>
      </div>

      <div className="grid-container">
        {/* Chart Section */}
        <div className="card grid-wide">
          <div className="card-header">
            <h2 className="card-title">
              {selectedCrypto ? `${selectedCrypto.name} (${selectedCrypto.symbol})` : 'Select a Cryptocurrency'}
            </h2>
            <div className="time-filter">
              <select 
                className="filter-select"
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
              >
                <option value="24h">24H</option>
                <option value="7d">7D</option>
                <option value="1m">1M</option>
                <option value="3m">3M</option>
                <option value="1y">1Y</option>
              </select>
            </div>
          </div>
          <CryptoChart crypto={selectedCrypto} timeRange={timeRange} />
        </div>

        {/* Crypto List */}
        <div className="card">
          <h3 className="card-title">Cryptocurrencies</h3>
          <div className="crypto-list">
            {cryptos.map(crypto => (
              <div
                key={crypto.symbol}
                className={`crypto-list-item ${selectedCrypto?.symbol === crypto.symbol ? 'active' : ''}`}
                onClick={() => setSelectedCrypto(crypto)}
              >
                <div className="crypto-list-info">
                  <div className="crypto-icon-small">
                    <img src={crypto.image} alt={crypto.name} />
                  </div>
                  <div>
                    <div className="crypto-list-name">{crypto.symbol}</div>
                    <div className="crypto-list-fullname">{crypto.name}</div>
                  </div>
                </div>
                <div className="crypto-list-price">
                  <div className="price">${crypto.current_price.toLocaleString()}</div>
                  <div 
                    className={`change ${crypto.price_change_percentage_24h >= 0 ? 'positive' : 'negative'}`}
                  >
                    {crypto.price_change_percentage_24h >= 0 ? '+' : ''}{crypto.price_change_percentage_24h.toFixed(2)}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Market Overview */}
        <div className="card">
          <h3 className="card-title">Market Overview</h3>
          <div className="market-stats">
            <div className="market-stat">
              <label>Total Market Cap</label>
              <span>${(overview.total_market_cap / 1e12).toFixed(2)}T</span>
            </div>
            <div className="market-stat">
              <label>24h Volume</label>
              <span>${(overview.total_volume_24h / 1e9).toFixed(2)}B</span>
            </div>
            <div className="market-stat">
              <label>BTC Dominance</label>
              <span>{overview.btc_dominance?.toFixed(1) || '52.3'}%</span>
            </div>
            <div className="market-stat">
              <label>Fear & Greed Index</label>
              <span className="greed">{overview.fear_greed_index || '74'} (Greed)</span>
            </div>
          </div>
        </div>
      </div>

      {/* All Cryptocurrencies Grid */}
      <section className="section">
        <h2 className="section-title">All Cryptocurrencies</h2>
        <div className="grid-container">
          {cryptos.map(crypto => (
            <CryptoCard key={crypto.symbol} crypto={crypto} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default CryptoPage;