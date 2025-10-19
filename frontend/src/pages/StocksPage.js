import React, { useEffect, useState } from 'react';
import StockCard from '../components/stocks/StockCard';
import StockChart from '../components/stocks/StockChart';

const StocksPage = () => {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedStock, setSelectedStock] = useState(null);
  const [timeRange, setTimeRange] = useState('1m');

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:8001/stocks');
        if (!response.ok) throw new Error('Failed to fetch stock data');
        const data = await response.json();
        setStocks(data.stocks || []);
        if (data.stocks && data.stocks.length > 0) {
          setSelectedStock(data.stocks[0]);
        }
      } catch (error) {
        console.error('Error fetching stock data:', error);
        // Fallback dummy data
        const dummyStocks = [
          {
            symbol: 'AAPL',
            name: 'Apple Inc.',
            price: 182.63,
            change: 1.25,
            volume: 58392000,
            market_cap: 2860000000000,
            pe_ratio: 29.5,
            dividend_yield: 0.5,
            sentiment: 75,
            prediction_trend: 1,
            prediction_confidence: 68,
            exchange: 'NASDAQ'
          },
          {
            symbol: 'GOOGL',
            name: 'Alphabet Inc.',
            price: 138.21,
            change: -0.45,
            volume: 28746500,
            market_cap: 1750000000000,
            pe_ratio: 24.8,
            dividend_yield: 0.0,
            sentiment: 62,
            prediction_trend: 1,
            prediction_confidence: 55,
            exchange: 'NASDAQ'
          },
          {
            symbol: 'TSLA',
            name: 'Tesla Inc.',
            price: 234.50,
            change: 3.2,
            volume: 98346500,
            market_cap: 745000000000,
            pe_ratio: 68.2,
            dividend_yield: 0.0,
            sentiment: 58,
            prediction_trend: -1,
            prediction_confidence: 72,
            exchange: 'NASDAQ'
          },
          {
            symbol: 'MSFT',
            name: 'Microsoft Corporation',
            price: 378.85,
            change: 0.8,
            volume: 23456700,
            market_cap: 2810000000000,
            pe_ratio: 32.1,
            dividend_yield: 0.7,
            sentiment: 80,
            prediction_trend: 1,
            prediction_confidence: 75,
            exchange: 'NASDAQ'
          }
        ];
        setStocks(dummyStocks);
        setSelectedStock(dummyStocks[0]);
      } finally {
        setLoading(false);
      }
    };

    fetchStocks();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading stock market data...</p>
      </div>
    );
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
                  <div className="price">${stock.price?.toLocaleString()}</div>
                  <div 
                    className={`change ${stock.change >= 0 ? 'positive' : 'negative'}`}
                  >
                    {stock.change >= 0 ? '+' : ''}{stock.change}%
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