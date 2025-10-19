import React, { useState } from 'react';
import StockCard from '../components/stocks/StockCard';
import StockChart from '../components/stocks/StockChart';
import { useStocks, useMarketOverview } from '../hooks/useMockApi';

const StocksPage = () => {
  const { data: stockData, loading, error } = useStocks();
  const { data: marketData } = useMarketOverview();
  const [selectedStock, setSelectedStock] = useState(null);
  const [timeRange, setTimeRange] = useState('1m');

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading stock market data...</p>
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

  const stocks = stockData?.stocks || [];
  const overview = marketData?.overview || {};

  // Set default selected stock if not set
  if (!selectedStock && stocks.length > 0) {
    setSelectedStock(stocks[0]);
  }

  return (
    <div className="stocks-page">
      <div className="page-header">
        <h1>Stock Market Insights</h1>
        <p>Real-time stock analysis, sentiment, and predictions</p>
      </div>

      <div className="grid-container">
        {/* Chart Section */}
        <div className="card grid-wide">
          <div className="card-header">
            <h2 className="card-title">
              {selectedStock ? `${selectedStock.name} (${selectedStock.symbol})` : 'Select a Stock'}
            </h2>
            <div className="time-filter">
              <select 
                className="filter-select"
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
              >
                <option value="1d">1D</option>
                <option value="1w">1W</option>
                <option value="1m">1M</option>
                <option value="3m">3M</option>
                <option value="1y">1Y</option>
              </select>
            </div>
          </div>
          <StockChart stock={selectedStock} timeRange={timeRange} />
        </div>

        {/* Stock List */}
        <div className="card">
          <h3 className="card-title">Stocks</h3>
          <div className="stock-list">
            {stocks.map(stock => (
              <div
                key={stock.symbol}
                className={`stock-list-item ${selectedStock?.symbol === stock.symbol ? 'active' : ''}`}
                onClick={() => setSelectedStock(stock)}
              >
                <div className="stock-list-info">
                  <div className="stock-icon-small">
                    <div className="stock-symbol-small">{stock.symbol}</div>
                  </div>
                  <div>
                    <div className="stock-list-name">{stock.symbol}</div>
                    <div className="stock-list-fullname">{stock.name}</div>
                  </div>
                </div>
                <div className="stock-list-price">
                  <div className="price">${stock.current_price?.toLocaleString()}</div>
                  <div 
                    className={`change ${stock.price_change_percentage_24h >= 0 ? 'positive' : 'negative'}`}
                  >
                    {stock.price_change_percentage_24h >= 0 ? '+' : ''}{stock.price_change_percentage_24h.toFixed(2)}%
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
              <label>S&P 500</label>
              <span className="positive">+0.8%</span>
            </div>
            <div className="market-stat">
              <label>NASDAQ</label>
              <span className="positive">+1.2%</span>
            </div>
            <div className="market-stat">
              <label>DOW JONES</label>
              <span className="negative">-0.3%</span>
            </div>
            <div className="market-stat">
              <label>VIX Index</label>
              <span>15.2</span>
            </div>
          </div>
        </div>
      </div>

      {/* All Stocks Grid */}
      <section className="section">
        <h2 className="section-title">Popular Stocks</h2>
        <div className="grid-container">
          {stocks.map(stock => (
            <StockCard key={stock.symbol} stock={stock} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default StocksPage;