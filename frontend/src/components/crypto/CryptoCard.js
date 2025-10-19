import React from 'react';
import SentimentGauge from '../sentiment/SentimentGauge';

const CryptoCard = ({ crypto }) => {
  const getTrendIcon = (change) => {
    if (change > 0) return '↗️';
    if (change < 0) return '↘️';
    return '→';
  };

  const getTrendColor = (change) => {
    if (change > 0) return '#10b981';
    if (change < 0) return '#ef4444';
    return '#6b7280';
  };

  return (
    <div className="card crypto-card">
      <div className="card-header">
        <div className="crypto-info">
          <div className="crypto-icon">
            <img src={crypto.image} alt={crypto.name} />
          </div>
          <div>
            <h3 className="crypto-name">{crypto.name}</h3>
            <span className="crypto-symbol">{crypto.symbol}</span>
          </div>
        </div>
        <SentimentGauge sentiment={crypto.sentiment} />
      </div>

      <div className="crypto-price">
        <span className="price">${crypto.price_usd.toLocaleString()}</span>
        <span 
          className="price-change"
          style={{ color: getTrendColor(crypto.change_24h) }}
        >
          {getTrendIcon(crypto.change_24h)} {Math.abs(crypto.change_24h)}%
        </span>
      </div>

      <div className="crypto-stats">
        <div className="stat">
          <label>Market Cap</label>
          <span>${(crypto.market_cap / 1e9).toFixed(2)}B</span>
        </div>
        <div className="stat">
          <label>Volume (24h)</label>
          <span>${(crypto.volume_24h / 1e6).toFixed(2)}M</span>
        </div>
      </div>

      <div className="prediction-indicator">
        <div className="prediction-label">
          <span>7-day Prediction</span>
          <span style={{ 
            color: crypto.prediction_trend > 0 ? '#10b981' : '#ef4444' 
          }}>
            {crypto.prediction_trend > 0 ? 'Bullish' : 'Bearish'}
          </span>
        </div>
        <div className="prediction-bar">
          <div 
            className="prediction-fill"
            style={{ 
              width: `${Math.abs(crypto.prediction_confidence)}%`,
              background: crypto.prediction_trend > 0 ? 
                'var(--gradient-secondary)' : 'var(--danger-color)'
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default CryptoCard;