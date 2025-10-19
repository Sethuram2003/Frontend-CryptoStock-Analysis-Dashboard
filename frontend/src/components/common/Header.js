import React from 'react';
import './Header.css';

const Header = ({ onMenuToggle, currentView }) => {
  const getViewTitle = (view) => {
    const titles = {
      dashboard: 'Dashboard Overview',
      crypto: 'Cryptocurrency Analysis',
      stocks: 'Stock Market Insights',
      analytics: 'Advanced Analytics'
    };
    return titles[view] || 'Financial Dashboard';
  };

  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-btn" onClick={onMenuToggle}>
          <span className="menu-icon">☰</span>
        </button>
        <h1 className="header-title">{getViewTitle(currentView)}</h1>
      </div>
      
      <div className="header-right">
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search assets..." 
            className="search-input"
          />
          <span className="search-icon">🔍</span>
        </div>
        
        <div className="header-actions">
          <button className="icon-btn">🔔</button>
          <button className="icon-btn">⚙️</button>
          <div className="user-avatar">
            <img src="/api/placeholder/32/32" alt="User" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;