import React from 'react';

const NewsFeed = () => {
  const newsItems = [
    {
      id: 1,
      title: 'Bitcoin ETF Approval Expected Soon',
      source: 'Crypto News',
      time: '2 hours ago',
      sentiment: 'positive'
    },
    {
      id: 2,
      title: 'Federal Reserve Holds Interest Rates Steady',
      source: 'Financial Times',
      time: '4 hours ago',
      sentiment: 'neutral'
    },
    {
      id: 3,
      title: 'Major Tech Stocks Face Regulatory Scrutiny',
      source: 'Wall Street Journal',
      time: '6 hours ago',
      sentiment: 'negative'
    }
  ];

  const getSentimentColor = (sentiment) => {
    switch (sentiment) {
      case 'positive': return '#10b981';
      case 'negative': return '#ef4444';
      default: return '#f59e0b';
    }
  };

  return (
    <div className="news-feed">
      <h3 className="card-title">Market News</h3>
      <div className="news-list">
        {newsItems.map(news => (
          <div key={news.id} className="news-item">
            <div className="news-content">
              <h4 className="news-title">{news.title}</h4>
              <div className="news-meta">
                <span className="news-source">{news.source}</span>
                <span className="news-time">{news.time}</span>
              </div>
            </div>
            <div 
              className="sentiment-dot"
              style={{ backgroundColor: getSentimentColor(news.sentiment) }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;