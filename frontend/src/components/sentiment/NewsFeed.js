import React from 'react';
import { useNews } from '../../hooks/useMockApi';

const NewsFeed = () => {
  const { data: newsData, loading, error } = useNews();

  if (loading) {
    return (
      <div className="news-loading">
        <div className="loading-spinner small"></div>
        <p>Loading news...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="news-error">
        <p>Unable to load news</p>
      </div>
    );
  }

  const newsItems = newsData?.news || [];

  const getSentimentColor = (sentiment) => {
    switch (sentiment) {
      case 'positive': return '#10b981';
      case 'negative': return '#ef4444';
      default: return '#f59e0b';
    }
  };

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffHours = Math.floor((now - date) / (1000 * 60 * 60));
    
    if (diffHours < 1) return 'Just now';
    if (diffHours < 24) return `${diffHours}h ago`;
    return `${Math.floor(diffHours / 24)}d ago`;
  };

  return (
    <div className="news-feed">
      <h3 className="card-title">Market News</h3>
      <div className="news-list">
        {newsItems.map(news => (
          <div key={news.id} className="news-item">
            <div className="news-content">
              <h4 className="news-title">{news.title}</h4>
              <p className="news-summary">{news.summary}</p>
              <div className="news-meta">
                <span className="news-source">{news.source}</span>
                <span className="news-time">{formatTime(news.published_at)}</span>
              </div>
              <div className="news-tags">
                {news.tags.map(tag => (
                  <span key={tag} className="news-tag">#{tag}</span>
                ))}
              </div>
            </div>
            <div 
              className="sentiment-dot"
              style={{ backgroundColor: getSentimentColor(news.sentiment) }}
              title={news.sentiment}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;