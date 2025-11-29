import React from 'react';
import { Header } from './components/Header/Header';
import { Controls } from './components/Controls/Controls';
import { MetricsGrid } from './components/MetricsCard/MetricsCard';
import { PriceChart } from './components/PriceChart/PriceChart';
import { SentimentPanel } from './components/SentimentPanel/SentimentPanel';
import { LoadingSpinner } from './components/LoadingSpinner/LoadingSpinner';
import { useCryptoData } from './hooks/useCryptoData';
import './App.css';

function App() {
  const {
    cryptoData,
    sentimentData,
    historicalData,
    loading,
    error,
    selectedCoin,
    selectedDays,
    handleCoinChange,
    handleDaysChange
  } = useCryptoData();

  return (
    <div className="app">
      <div className="app-container">
        <Header />

        <Controls
          selectedCoin={selectedCoin}
          selectedDays={selectedDays}
          onCoinChange={handleCoinChange}
          onDaysChange={handleDaysChange}
        />

        {error && <div className="error-message">{error}</div>}

        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            <MetricsGrid cryptoData={cryptoData} />
            <PriceChart data={historicalData} />
            <SentimentPanel sentimentData={sentimentData} />

            {cryptoData && (
              <div className="stats-grid">
                <div className="stat-card">
                  <p className="stat-label">Circulating Supply</p>
                  <p className="stat-value">
                    {cryptoData.circulating_supply 
                      ? (cryptoData.circulating_supply / 1e6).toFixed(2) 
                      : 'N/A'}M
                  </p>
                  <p className="stat-subtext">{cryptoData.symbol || 'N/A'}</p>
                </div>
                <div className="stat-card">
                  <p className="stat-label">Market Cap</p>
                  <p className="stat-value">
                    ${cryptoData.market_cap_usd 
                      ? (cryptoData.market_cap_usd / 1e9).toFixed(2) 
                      : 'N/A'}B
                  </p>
                </div>
                <div className="stat-card">
                  <p className="stat-label">Max Supply</p>
                  <p className="stat-value">
                    {cryptoData.max_supply 
                      ? (cryptoData.max_supply / 1e6).toFixed(2) 
                      : 'Unlimited'}M
                  </p>
                  <p className="stat-subtext">{cryptoData.symbol || 'N/A'}</p>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;