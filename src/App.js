import React, { useState } from 'react';
import { Navigation } from './components/Navigation/Navigation';
import { Header } from './components/Header/Header';
import { Controls } from './components/Controls/Controls';
import { StockControls } from './components/StockControls/StockControls';
import { MetricsGrid } from './components/MetricsCard/MetricsCard';
import { StockMetrics } from './components/StockMetrics/StockMetrics';
import { PriceChart } from './components/PriceChart/PriceChart';
import { SentimentPanel } from './components/SentimentPanel/SentimentPanel';
import { LoadingSpinner } from './components/LoadingSpinner/LoadingSpinner';
import { ChatWidget } from './components/ChatWidget/ChatWidget';
import { useCryptoData } from './hooks/useCryptoData';
import { useStockData } from './hooks/useStockData';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('crypto');

  // Crypto data
  const {
    cryptoData,
    sentimentData: cryptoSentiment,
    historicalData: cryptoHistorical,
    loading: cryptoLoading,
    error: cryptoError,
    selectedCoin,
    selectedDays: cryptoDays,
    handleCoinChange,
    handleDaysChange: handleCryptoDaysChange
  } = useCryptoData();

  // Stock data
  const {
    stockData,
    sentimentData: stockSentiment,
    historicalData: stockHistorical,
    loading: stockLoading,
    error: stockError,
    selectedTicker,
    selectedDays: stockDays,
    handleTickerChange,
    handleDaysChange: handleStockDaysChange
  } = useStockData();

  const isCrypto = activeTab === 'crypto';
  const loading = isCrypto ? cryptoLoading : stockLoading;
  const error = isCrypto ? cryptoError : stockError;

  return (
    <div className="app">
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      
      <div className="app-container">
        <Header activeTab={activeTab} />

        {isCrypto ? (
          <>
            <Controls
              selectedCoin={selectedCoin}
              selectedDays={cryptoDays}
              onCoinChange={handleCoinChange}
              onDaysChange={handleCryptoDaysChange}
            />

            {error && <div className="error-message">{error}</div>}

            {loading ? (
              <LoadingSpinner />
            ) : (
              <>
                <MetricsGrid cryptoData={cryptoData} />
                <PriceChart data={cryptoHistorical} />
                <SentimentPanel sentimentData={cryptoSentiment} />
                {cryptoData && (
                  <div className="stats-grid">
                    <div className="stat-card">
                      <p className="stat-label">Circulating Supply</p>
                      <p className="stat-value">
                        {(cryptoData.circulating_supply / 1e6).toFixed(2)}M
                      </p>
                      <p className="stat-subtext">{cryptoData.symbol}</p>
                    </div>
                    <div className="stat-card">
                      <p className="stat-label">Market Cap</p>
                      <p className="stat-value">
                        ${(cryptoData.market_cap_usd / 1e9).toFixed(2)}B
                      </p>
                    </div>
                    <div className="stat-card">
                      <p className="stat-label">Max Supply</p>
                      <p className="stat-value">
                        {(cryptoData.max_supply / 1e6).toFixed(2)}M
                      </p>
                      <p className="stat-subtext">{cryptoData.symbol}</p>
                    </div>
                  </div>
                )}
              </>
            )}
          </>
        ) : (
          <>
            <StockControls
              selectedTicker={selectedTicker}
              selectedDays={stockDays}
              onTickerChange={handleTickerChange}
              onDaysChange={handleStockDaysChange}
            />

            {error && <div className="error-message">{error}</div>}

            {loading ? (
              <LoadingSpinner />
            ) : (
              <>
                <StockMetrics stockData={stockData} />
                <PriceChart data={stockHistorical} />
                <SentimentPanel sentimentData={stockSentiment} />
              </>
            )}
          </>
        )}
      </div>

      <ChatWidget />
    </div>
  );
}

export default App;
