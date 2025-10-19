import React from 'react';

const SentimentGauge = ({ sentiment }) => {
  const getSentimentColor = (score) => {
    if (score >= 70) return '#10b981'; // Positive
    if (score >= 30) return '#f59e0b'; // Neutral
    return '#ef4444'; // Negative
  };

  const getSentimentLabel = (score) => {
    if (score >= 70) return 'Bullish';
    if (score >= 30) return 'Neutral';
    return 'Bearish';
  };

  return (
    <div className="sentiment-gauge">
      <div className="gauge-container">
        <div 
          className="gauge-fill"
          style={{ 
            background: getSentimentColor(sentiment),
            width: `${sentiment}%`
          }}
        ></div>
      </div>
      <span 
        className="sentiment-label"
        style={{ color: getSentimentColor(sentiment) }}
      >
        {getSentimentLabel(sentiment)}
      </span>
    </div>
  );
};

export default SentimentGauge;