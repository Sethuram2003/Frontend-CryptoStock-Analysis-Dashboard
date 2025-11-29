import { ArticleCard } from '../ArticleCard/ArticleCard';
import './SentimentPanel.css';

const getSentimentColor = (sentiment) => {
  if (sentiment > 0.3) return 'bullish';
  if (sentiment < -0.3) return 'bearish';
  return 'neutral';
};

const getSentimentLabel = (sentiment) => {
  if (sentiment > 0.3) return 'Bullish';
  if (sentiment < -0.3) return 'Bearish';
  return 'Neutral';
};

export const SentimentPanel = ({ sentimentData }) => {
  if (!sentimentData) return null;

  const sentiment = getSentimentColor(sentimentData.average_sentiment);
  const label = getSentimentLabel(sentimentData.average_sentiment);

  return (
    <div className="sentiment-grid">
      <div className="sentiment-overview">
        <h2 className="panel-title">Sentiment Overview</h2>
        <div className="sentiment-content">
          <div className="sentiment-stat">
            <p className="stat-label">Average Sentiment</p>
            <p className={`sentiment-score ${sentiment}`}>
              {sentimentData.average_sentiment.toFixed(2)}
            </p>
            <p className={`sentiment-label ${sentiment}`}>{label}</p>
          </div>
          <div className="sentiment-stat border-top">
            <p className="stat-label">Sentiment Trend</p>
            <p className="trend-value">{sentimentData.sentiment_trend}</p>
          </div>
        </div>
      </div>

      <div className="articles-panel">
        <h2 className="panel-title">Top Articles</h2>
        <div className="articles-list">
          {sentimentData.top_articles.map((article, idx) => (
            <ArticleCard key={idx} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
};
