import './ArticleCard.css';

export const ArticleCard = ({ article }) => {
  const isBullish = article.sentiment > 0;
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="article-card"
    >
      <div className="article-content">
        <p className="article-title">{article.title}</p>
      </div>
      <span className={`sentiment-badge ${isBullish ? 'bullish' : 'bearish'}`}>
        {article.sentiment > 0 ? '+' : ''}{article.sentiment.toFixed(2)}
      </span>
    </a>
  );
};
