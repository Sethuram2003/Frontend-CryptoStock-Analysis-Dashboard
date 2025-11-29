import { TrendingUp, BarChart3 } from 'lucide-react';
import './Header.css';

export const Header = ({ activeTab }) => {
  const isCrypto = activeTab === 'crypto';
  
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-title">
          {isCrypto ? <TrendingUp className="header-icon" /> : <BarChart3 className="header-icon" />}
          <h1>{isCrypto ? 'Crypto Analytics Dashboard' : 'Stock Market Dashboard'}</h1>
        </div>
        <p className="header-subtitle">
          {isCrypto 
            ? 'Real-time cryptocurrency data and sentiment analysis' 
            : 'Real-time stock market data and sentiment analysis'}
        </p>
      </div>
    </header>
  );
};
