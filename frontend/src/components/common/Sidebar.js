import React from 'react';
import './Sidebar.css';

const Sidebar = ({ activeTab, setActiveTab, isOpen, setIsOpen }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'crypto', label: 'Cryptocurrency', icon: '₿' },
    { id: 'stocks', label: 'Stocks', icon: '📈' },
    { id: 'analytics', label: 'Analytics', icon: '🔍' },
  ];

  return (
    <>
      {isOpen && <div className="sidebar-overlay" onClick={() => setIsOpen(false)}></div>}
      <aside className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
        <div className="sidebar-header">
          <h2 className="sidebar-logo">💰 FinDash</h2>
          <button className="close-btn" onClick={() => setIsOpen(false)}>×</button>
        </div>
        
        <nav className="sidebar-nav">
          {menuItems.map(item => (
            <button
              key={item.id}
              className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
              onClick={() => {
                setActiveTab(item.id);
                setIsOpen(false);
              }}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </button>
          ))}
        </nav>
        
        <div className="sidebar-footer">
          <div className="user-info">
            <div className="user-avatar">
              <img src="/api/placeholder/40/40" alt="User" />
            </div>
            <div className="user-details">
              <span className="user-name">John Doe</span>
              <span className="user-role">Premium Member</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;