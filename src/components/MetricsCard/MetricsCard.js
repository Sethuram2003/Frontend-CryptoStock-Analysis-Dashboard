import { DollarSign, Zap, Activity, TrendingUp } from 'lucide-react';
import './MetricsCard.css';

export const MetricsCard = ({ icon: Icon, label, value, subtext, isTrend = false }) => {
  const isNegative = isTrend && value < 0;

  return (
    <div className="metrics-card">
      <div className="metrics-content">
        <p className="metrics-label">{label}</p>
        <p className={`metrics-value ${isTrend && isNegative ? 'negative' : ''} ${isTrend && !isNegative ? 'positive' : ''}`}>
          {value}
        </p>
        {subtext && <p className="metrics-subtext">{subtext}</p>}
      </div>
      <Icon className="metrics-icon" />
    </div>
  );
};

export const MetricsGrid = ({ cryptoData }) => {
  // Add null check here
  if (!cryptoData) {
    return (
      <div className="metrics-grid">
        <div className="metrics-card skeleton">
          <div className="skeleton-content"></div>
        </div>
        <div className="metrics-card skeleton">
          <div className="skeleton-content"></div>
        </div>
        <div className="metrics-card skeleton">
          <div className="skeleton-content"></div>
        </div>
        <div className="metrics-card skeleton">
          <div className="skeleton-content"></div>
        </div>
      </div>
    );
  }

  // Safe access with correct field names from API
  const currentPrice = cryptoData.current_price_usd 
    ? cryptoData.current_price_usd.toLocaleString() 
    : 'N/A';
    
  const change24h = cryptoData['24h_change_percentage'] !== undefined 
    ? cryptoData['24h_change_percentage'].toFixed(2) 
    : 'N/A';
    
  const marketRank = cryptoData.market_cap_rank || 'N/A';
  
  const volume24h = cryptoData['24h_volume_usd'] 
    ? (cryptoData['24h_volume_usd'] / 1e9).toFixed(2) 
    : 'N/A';

  const metrics = [
    {
      icon: DollarSign,
      label: 'Current Price',
      value: `$${currentPrice}`
    },
    {
      icon: Zap,
      label: '24h Change',
      value: `${change24h}%`,
      isTrend: true
    },
    {
      icon: Activity,
      label: 'Market Cap Rank',
      value: `#${marketRank}`
    },
    {
      icon: TrendingUp,
      label: '24h Volume',
      value: `$${volume24h}B`
    }
  ];

  return (
    <div className="metrics-grid">
      {metrics.map((metric, idx) => (
        <MetricsCard key={idx} {...metric} />
      ))}
    </div>
  );
};