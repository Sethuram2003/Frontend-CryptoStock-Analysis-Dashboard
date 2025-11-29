import { TrendingUp } from 'lucide-react';
import './Header.css';

export const Header = () => (
  <header className="header">
    <div className="header-content">
      <div className="header-title">
        <TrendingUp className="header-icon" />
        <h1>Crypto Analytics Dashboard</h1>
      </div>
      <p className="header-subtitle">Real-time market data and sentiment analysis</p>
    </div>
  </header>
);
