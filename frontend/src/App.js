import React, { useState } from 'react';
import './App.css';
import Header from './components/common/Header';
import Sidebar from './components/common/Sidebar';
import Dashboard from './pages/Dashboard';
import CryptoPage from './pages/CryptoPage';
import StocksPage from './pages/StocksPage';
import AnalyticsPage from './pages/AnalyticsPage';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'crypto':
        return <CryptoPage />;
      case 'stocks':
        return <StocksPage />;
      case 'analytics':
        return <AnalyticsPage />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="app">
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />
      <div className="main-content">
        <Header 
          onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
          currentView={activeTab}
        />
        <main className="content-area">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;