import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { TrendingUp, TrendingDown, Activity } from 'lucide-react';
import './PriceChart.css';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const price = payload[0].value;
    return (
      <div className="custom-tooltip">
        <div className="tooltip-header">
          <Activity className="tooltip-icon" />
          <span className="tooltip-time">{label}</span>
        </div>
        <div className="tooltip-price">
          <span className="price-label">Price:</span>
          <span className="price-value">${price.toLocaleString()}</span>
        </div>
      </div>
    );
  }
  return null;
};

export const PriceChart = ({ data }) => {
  if (!data || data.length === 0) return null;

  // Calculate price change
  const firstPrice = data[0]?.price || 0;
  const lastPrice = data[data.length - 1]?.price || 0;
  const priceChange = lastPrice - firstPrice;
  const priceChangePercent = ((priceChange / firstPrice) * 100).toFixed(2);
  const isPositive = priceChange >= 0;

  // Calculate min and max for better Y-axis scaling
  const prices = data.map(d => d.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  const padding = (maxPrice - minPrice) * 0.1;

  return (
    <div className="price-chart-container">
      <div className="chart-header">
        <div className="chart-title-section">
          <h2 className="chart-title">📈 Price History</h2>
          <div className={`price-change ${isPositive ? 'positive' : 'negative'}`}>
            {isPositive ? <TrendingUp className="change-icon" /> : <TrendingDown className="change-icon" />}
            <span className="change-value">
              {isPositive ? '+' : ''}{priceChangePercent}%
            </span>
            <span className="change-label">
              ({isPositive ? '+' : ''}${Math.abs(priceChange).toLocaleString()})
            </span>
          </div>
        </div>
        <div className="chart-stats">
          <div className="stat-item">
            <span className="stat-label">High</span>
            <span className="stat-value">${maxPrice.toLocaleString()}</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-label">Low</span>
            <span className="stat-value">${minPrice.toLocaleString()}</span>
          </div>
        </div>
      </div>
      
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#a855f7" stopOpacity={0.8}/>
              <stop offset="50%" stopColor="#ec4899" stopOpacity={0.4}/>
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
            </linearGradient>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#a855f7"/>
              <stop offset="50%" stopColor="#ec4899"/>
              <stop offset="100%" stopColor="#3b82f6"/>
            </linearGradient>
          </defs>
          <CartesianGrid 
            strokeDasharray="3 3" 
            stroke="rgba(168, 85, 247, 0.1)" 
            vertical={false}
          />
          <XAxis 
            dataKey="time" 
            stroke="rgba(203, 213, 225, 0.5)"
            tick={{ fill: '#94a3b8', fontSize: 12 }}
            tickLine={false}
            axisLine={{ stroke: 'rgba(168, 85, 247, 0.2)' }}
          />
          <YAxis 
            stroke="rgba(203, 213, 225, 0.5)"
            tick={{ fill: '#94a3b8', fontSize: 12 }}
            tickLine={false}
            axisLine={{ stroke: 'rgba(168, 85, 247, 0.2)' }}
            domain={[minPrice - padding, maxPrice + padding]}
            tickFormatter={(value) => `$${value.toLocaleString()}`}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#a855f7', strokeWidth: 2, strokeDasharray: '5 5' }} />
          <Area
            type="monotone"
            dataKey="price"
            stroke="url(#lineGradient)"
            strokeWidth={3}
            fill="url(#colorPrice)"
            fillOpacity={1}
            isAnimationActive={true}
            animationDuration={1500}
            animationEasing="ease-in-out"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
