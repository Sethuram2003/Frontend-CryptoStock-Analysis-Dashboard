import React from 'react';

const CryptoChart = ({ crypto, timeRange }) => {
  if (!crypto) {
    return (
      <div className="chart-placeholder">
        <p>Select a cryptocurrency to view chart</p>
      </div>
    );
  }

  return (
    <div className="crypto-chart">
      <div className="chart-header">
        <div className="chart-price-info">
          <div className="current-price">${crypto.price_usd.toLocaleString()}</div>
          <div className={`price-change ${crypto.change_24h >= 0 ? 'positive' : 'negative'}`}>
            {crypto.change_24h >= 0 ? '+' : ''}{crypto.change_24h}% (24h)
          </div>
        </div>
      </div>
      <div className="chart-container">
        <div className="chart-visual">
          {/* This would be replaced with a real chart library like Chart.js */}
          <div className="mock-chart">
            <div className="chart-line"></div>
          </div>
        </div>
        <div className="chart-stats">
          <div className="chart-stat">
            <label>24h High</label>
            <span>${(crypto.price_usd * 1.02).toLocaleString()}</span>
          </div>
          <div className="chart-stat">
            <label>24h Low</label>
            <span>${(crypto.price_usd * 0.98).toLocaleString()}</span>
          </div>
          <div className="chart-stat">
            <label>Market Cap</label>
            <span>${(crypto.market_cap / 1e9).toFixed(2)}B</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoChart;