import React, { useState } from 'react';

const AnalyticsPage = () => {
  const [selectedMetric, setSelectedMetric] = useState('sentiment');

  const metrics = [
    { id: 'sentiment', label: 'Sentiment Analysis', icon: '😊' },
    { id: 'predictions', label: 'Price Predictions', icon: '🔮' },
    { id: 'volatility', label: 'Volatility', icon: '📊' },
    { id: 'correlation', label: 'Correlation', icon: '🔄' },
  ];

  const sentimentData = [
    { asset: 'BTC', sentiment: 78, trend: 'bullish', confidence: 82 },
    { asset: 'ETH', sentiment: 65, trend: 'neutral', confidence: 71 },
    { asset: 'AAPL', sentiment: 75, trend: 'bullish', confidence: 68 },
    { asset: 'TSLA', sentiment: 58, trend: 'bearish', confidence: 72 },
    { asset: 'GOOGL', sentiment: 62, trend: 'neutral', confidence: 55 },
  ];

  return (
    <div className="analytics-page">
      <div className="page-header">
        <h1>Advanced Analytics</h1>
        <p>Deep insights and predictive analytics</p>
      </div>

      {/* Metrics Selection */}
      <div className="metrics-selector">
        {metrics.map(metric => (
          <button
            key={metric.id}
            className={`metric-btn ${selectedMetric === metric.id ? 'active' : ''}`}
            onClick={() => setSelectedMetric(metric.id)}
          >
            <span className="metric-icon">{metric.icon}</span>
            <span className="metric-label">{metric.label}</span>
          </button>
        ))}
      </div>

      {/* Analytics Content */}
      <div className="grid-container">
        {/* Main Chart */}
        <div className="card grid-wide">
          <h3 className="card-title">Market Sentiment Analysis</h3>
          <div className="analytics-chart">
            <div className="chart-placeholder-large">
              <div className="chart-content">
                <div className="sentiment-distribution">
                  <div className="sentiment-category bullish">
                    <div className="category-label">Bullish</div>
                    <div className="category-bar">
                      <div className="bar-fill" style={{ width: '65%' }}></div>
                    </div>
                    <div className="category-value">65%</div>
                  </div>
                  <div className="sentiment-category neutral">
                    <div className="category-label">Neutral</div>
                    <div className="category-bar">
                      <div className="bar-fill" style={{ width: '25%' }}></div>
                    </div>
                    <div className="category-value">25%</div>
                  </div>
                  <div className="sentiment-category bearish">
                    <div className="category-label">Bearish</div>
                    <div className="category-bar">
                      <div className="bar-fill" style={{ width: '10%' }}></div>
                    </div>
                    <div className="category-value">10%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sentiment Table */}
        <div className="card">
          <h3 className="card-title">Asset Sentiment</h3>
          <div className="sentiment-table">
            <div className="table-header">
              <div>Asset</div>
              <div>Sentiment</div>
              <div>Trend</div>
              <div>Confidence</div>
            </div>
            <div className="table-body">
              {sentimentData.map((item, index) => (
                <div key={index} className="table-row">
                  <div className="asset-cell">
                    <span className="asset-symbol">{item.asset}</span>
                  </div>
                  <div className="sentiment-cell">
                    <div className="sentiment-score">{item.sentiment}</div>
                  </div>
                  <div className="trend-cell">
                    <span className={`trend ${item.trend}`}>
                      {item.trend.charAt(0).toUpperCase() + item.trend.slice(1)}
                    </span>
                  </div>
                  <div className="confidence-cell">
                    <div className="confidence-bar">
                      <div 
                        className="confidence-fill"
                        style={{ width: `${item.confidence}%` }}
                      ></div>
                    </div>
                    <span className="confidence-value">{item.confidence}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Prediction Accuracy */}
        <div className="card">
          <h3 className="card-title">Prediction Accuracy</h3>
          <div className="accuracy-stats">
            <div className="accuracy-item">
              <div className="accuracy-label">7-day Predictions</div>
              <div className="accuracy-value">76.3%</div>
            </div>
            <div className="accuracy-item">
              <div className="accuracy-label">30-day Predictions</div>
              <div className="accuracy-value">68.7%</div>
            </div>
            <div className="accuracy-item">
              <div className="accuracy-label">Sentiment Analysis</div>
              <div className="accuracy-value">82.1%</div>
            </div>
          </div>
        </div>

        {/* Risk Assessment */}
        <div className="card">
          <h3 className="card-title">Risk Assessment</h3>
          <div className="risk-meters">
            <div className="risk-meter">
              <div className="risk-label">Market Volatility</div>
              <div className="risk-bar">
                <div className="risk-fill medium" style={{ width: '65%' }}></div>
              </div>
              <div className="risk-value">Medium</div>
            </div>
            <div className="risk-meter">
              <div className="risk-label">Liquidity Risk</div>
              <div className="risk-bar">
                <div className="risk-fill low" style={{ width: '30%' }}></div>
              </div>
              <div className="risk-value">Low</div>
            </div>
            <div className="risk-meter">
              <div className="risk-label">Regulatory Risk</div>
              <div className="risk-bar">
                <div className="risk-fill high" style={{ width: '75%' }}></div>
              </div>
              <div className="risk-value">High</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;