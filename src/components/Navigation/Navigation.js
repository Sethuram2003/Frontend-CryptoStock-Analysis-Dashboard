import { TrendingUp, BarChart3, Menu, X } from 'lucide-react';
import { useState } from 'react';
import './Navigation.css';

export const Navigation = ({ activeTab, onTabChange }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const tabs = [
    { id: 'crypto', label: 'Cryptocurrency', icon: TrendingUp },
    { id: 'stocks', label: 'Stock Market', icon: BarChart3 }
  ];

  const handleTabClick = (tabId) => {
    onTabChange(tabId);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-brand">
          <div className="brand-icon">
            <TrendingUp className="brand-logo" />
          </div>
          <div className="brand-text">
            <h1 className="brand-title">Market Analytics</h1>
            <p className="brand-subtitle">Real-time insights</p>
          </div>
        </div>

        <button 
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>

        <div className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          {tabs.map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`nav-link ${activeTab === tab.id ? 'active' : ''}`}
              >
                <Icon className="nav-icon" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
