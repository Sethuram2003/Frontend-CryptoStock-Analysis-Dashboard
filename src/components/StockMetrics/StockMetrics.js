import { DollarSign, TrendingUp, Building2, Calendar } from 'lucide-react';
import './StockMetrics.css';

const MetricsCard = ({ icon: Icon, label, value, subtext }) => (
  <div className="metrics-card">
    <div className="metrics-content">
      <p className="metrics-label">{label}</p>
      <p className="metrics-value">{value}</p>
      {subtext && <p className="metrics-subtext">{subtext}</p>}
    </div>
    <Icon className="metrics-icon" />
  </div>
);

export const StockMetrics = ({ stockData }) => {
  if (!stockData) return null;

  const metrics = [
    {
      icon: DollarSign,
      label: 'Open Price',
      value: stockData.open_price !== 'N/A' ? `$${stockData.open_price.toFixed(2)}` : 'N/A'
    },
    {
      icon: TrendingUp,
      label: 'Previous Close',
      value: stockData.previous_close !== 'N/A' ? `$${stockData.previous_close}` : 'N/A'
    },
    {
      icon: Building2,
      label: 'Exchange',
      value: stockData.exchange,
      subtext: stockData.currency
    },
    {
      icon: Calendar,
      label: 'Symbol',
      value: stockData.symbol
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
