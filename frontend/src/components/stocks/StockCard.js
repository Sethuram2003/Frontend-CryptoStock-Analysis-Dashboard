import React from 'react';
import SentimentGauge from '../sentiment/SentimentGauge';

const StockCard = ({ stock }) => {
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
    <div className="card stock-card">
      <div className="card-header">
        <div className="stock-info">
          <div className="stock-icon">
            <div className="stock-symbol">{stock.symbol}</div>
          </div>
          <div>
            <h3 className="stock-name">{stock.name}</h3>
            <span className="stock-exchange">{stock.exchange || 'NASDAQ'}</span>
          </div>
        </div>
        <SentimentGauge sentiment={stock.sentiment} />
      </div>

      <div className="stock-price">
        <span className="price">${stock.price?.toLocaleString() || stock.price_usd?.toLocaleString()}</span>
        <span 
          className="price-change"
          style={{ color: getTrendColor(stock.change || stock.change_24h) }}
        >
          {getTrendIcon(stock.change || stock.change_24h)} {Math.abs(stock.change || stock.change_24h)}%
        </span>
      </div>

      <div className="stock-stats">
        <div className="stat">
          <label>Volume</label>
          <span>{(stock.volume / 1e6).toFixed(1)}M</span>
        </div>
        <div className="stat">
          <label>P/E Ratio</label>
          <span>{stock.pe_ratio || 'N/A'}</span>
        </div>
        <div className="stat">
          <label>Market Cap</label>
          <span>${(stock.market_cap / 1e9).toFixed(1)}B</span>
        </div>
        <div className="stat">
          <label>Dividend</label>
          <span>{stock.dividend_yield || '0.0'}%</span>
        </div>
      </div>

      <div className="prediction-indicator">
        <div className="prediction-label">
          <span>7-day Prediction</span>
          <span style={{ 
            color: stock.prediction_trend > 0 ? '#10b981' : '#ef4444' 
          }}>
            {stock.prediction_trend > 0 ? 'Bullish' : 'Bearish'}
          </span>
        </div>
        <div className="prediction-bar">
          <div 
            className="prediction-fill"
            style={{ 
              width: `${Math.abs(stock.prediction_confidence)}%`,
              background: stock.prediction_trend > 0 ? 
                'var(--gradient-secondary)' : 'var(--danger-color)'
            }}
          ></div>
        </div>
      </div>

      <div className="stock-actions">
        <button className="btn btn-outline">Watch</button>
        <button className="btn btn-primary">Trade</button>
      </div>
    </div>
  );
};

export default StockCard;