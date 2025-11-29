import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './PriceChart.css';

export const PriceChart = ({ data }) => {
  if (!data || data.length === 0) return null;

  return (
    <div className="price-chart-container">
      <h2 className="chart-title">Price History</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(168, 85, 247, 0.1)" />
          <XAxis dataKey="time" stroke="rgba(156, 163, 175, 0.5)" />
          <YAxis stroke="rgba(156, 163, 175, 0.5)" />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1e293b',
              border: '1px solid rgba(168, 85, 247, 0.3)',
              borderRadius: '0.5rem'
            }}
            labelStyle={{ color: '#fff' }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#a855f7"
            dot={false}
            strokeWidth={2}
            isAnimationActive={true}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
