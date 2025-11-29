import { ExternalLink, TrendingUp, TrendingDown, Newspaper } from 'lucide-react';
import './ArticleCard.css';

export const ArticleCard = ({ article }) => {
  const sentiment = article.sentiment;
  const isBullish = sentiment > 0;
  const sentimentValue = sentiment.toFixed(2);
  
  // Determine sentiment strength
  const getSentimentStrength = (value) => {
    const abs = Math.abs(value);
    if (abs >= 0.7) return 'very-strong';
    if (abs >= 0.4) return 'strong';
    if (abs >= 0.2) return 'moderate';
    return 'weak';
  };

  const sentimentStrength = getSentimentStrength(sentiment);
  
  // Extract domain from URL for display
  const getDomain = (url) => {
    try {
      const domain = new URL(url).hostname.replace('www.', '');
      return domain.split('.')[0].toUpperCase();
    } catch {
      return 'NEWS';
    }
  };

  // Generate a preview text from title (first 100 chars)
  const getPreview = (title) => {
    if (title.length <= 100) return title;
    return title.substring(0, 100) + '...';
  };

  // Get sentiment description
  const getSentimentDescription = (value) => {
    const abs = Math.abs(value);
    if (abs >= 0.7) return isBullish ? 'Very Bullish' : 'Very Bearish';
    if (abs >= 0.4) return isBullish ? 'Bullish' : 'Bearish';
    if (abs >= 0.2) return isBullish ? 'Slightly Bullish' : 'Slightly Bearish';
    return 'Neutral';
  };

  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`article-card ${isBullish ? 'bullish-card' : 'bearish-card'} ${sentimentStrength}`}
    >
      <div className="article-preview">
        <div className="article-thumbnail">
          <div className={`thumbnail-placeholder ${isBullish ? 'bullish-bg' : 'bearish-bg'}`}>
            {isBullish ? (
              <TrendingUp className="thumbnail-icon bullish" />
            ) : (
              <TrendingDown className="thumbnail-icon bearish" />
            )}
            <div className="sentiment-overlay">
              <span className="sentiment-score-large">{sentimentValue}</span>
            </div>
          </div>
        </div>
        
        <div className="article-content">
          <div className="article-meta">
            <div className="source-badge">
              <Newspaper className="source-icon" />
              <span className="article-source">{getDomain(article.url)}</span>
            </div>
            <ExternalLink className="external-icon" />
          </div>
          
          <h3 className="article-title">{article.title}</h3>
          
          <div className="article-preview-text">
            <p className="preview-excerpt">{getPreview(article.title)}</p>
          </div>
          
          <div className="article-footer">
            <div className={`sentiment-badge ${isBullish ? 'bullish' : 'bearish'} ${sentimentStrength}`}>
              <div className="badge-content">
                {isBullish ? <TrendingUp className="badge-icon" /> : <TrendingDown className="badge-icon" />}
                <div className="badge-info">
                  <span className="sentiment-value">
                    {sentiment > 0 ? '+' : ''}{sentimentValue}
                  </span>
                  <span className="sentiment-label">
                    {getSentimentDescription(sentiment)}
                  </span>
                </div>
              </div>
              <div className="sentiment-meter">
                <div 
                  className={`meter-fill ${isBullish ? 'bullish-fill' : 'bearish-fill'}`}
                  style={{ width: `${Math.abs(sentiment) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};
