import React from 'react';

const StockChart = ({ stock, timeRange }) => {
  if (!stock) {
    return (
      <div className="chart-placeholder">
        <p>Select a stock to view chart</p>
      </div>
    );
  }

  return (
    <div className="stock-chart">
      <div className="chart-header">
        <div className="chart-price-info">
          <div className="current-price">${stock.price?.toLocaleString()}</div>
          <div className={`price-change ${stock.change >= 0 ? 'positive' : 'negative'}`}>
            {stock.change >= 0 ? '+' : ''}{stock.change}% (Today)
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
            <label>Open</label>
            <span>${(stock.price * 0.995).toLocaleString()}</span>
          </div>
          <div className="chart-stat">
            <label>Volume</label>
            <span>{(stock.volume / 1e6).toFixed(1)}M</span>
          </div>
          <div className="chart-stat">
            <label>P/E Ratio</label>
            <span>{stock.pe_ratio || 'N/A'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockChart;