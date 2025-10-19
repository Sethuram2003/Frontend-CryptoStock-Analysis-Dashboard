import React, { useEffect, useState } from 'react';
import CryptoCard from '../components/crypto/CryptoCard';
import CryptoChart from '../components/crypto/CryptoChart';

const CryptoPage = () => {
  const [cryptos, setCryptos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCrypto, setSelectedCrypto] = useState(null);
  const [timeRange, setTimeRange] = useState('7d');

  useEffect(() => {
    const fetchCryptos = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:8001/cryptos');
        if (!response.ok) throw new Error('Failed to fetch crypto data');
        const data = await response.json();
        setCryptos(data.cryptos || []);
        if (data.cryptos && data.cryptos.length > 0) {
          setSelectedCrypto(data.cryptos[0]);
        }
      } catch (error) {
        console.error('Error fetching crypto data:', error);
        // Fallback dummy data
        const dummyCryptos = [
          {
            symbol: 'BTC',
            name: 'Bitcoin',
            price_usd: 43250.75,
            change_24h: 2.34,
            market_cap: 845000000000,
            volume_24h: 18500000000,
            sentiment: 78,
            prediction_trend: 1,
            prediction_confidence: 82,
            image: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png'
          },
          {
            symbol: 'ETH',
            name: 'Ethereum',
            price_usd: 2580.40,
            change_24h: -1.2,
            market_cap: 310000000000,
            volume_24h: 12000000000,
            sentiment: 65,
            prediction_trend: 1,
            prediction_confidence: 71,
            image: 'https://cryptologos.cc/logos/ethereum-eth-logo.png'
          },
          {
            symbol: 'ADA',
            name: 'Cardano',
            price_usd: 0.52,
            change_24h: 0.8,
            market_cap: 18500000000,
            volume_24h: 450000000,
            sentiment: 72,
            prediction_trend: 1,
            prediction_confidence: 65,
            image: 'https://cryptologos.cc/logos/cardano-ada-logo.png'
          },
          {
            symbol: 'DOT',
            name: 'Polkadot',
            price_usd: 7.25,
            change_24h: -2.1,
            market_cap: 9300000000,
            volume_24h: 280000000,
            sentiment: 58,
            prediction_trend: -1,
            prediction_confidence: 60,
            image: 'https://cryptologos.cc/logos/polkadot-new-dot-logo.png'
          }
        ];
        setCryptos(dummyCryptos);
        setSelectedCrypto(dummyCryptos[0]);
      } finally {
        setLoading(false);
      }
    };

    fetchCryptos();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading cryptocurrency data...</p>
      </div>
    );
  }

  return (
    <div className="crypto-page">
      <div className="page-header">
        <h1>Cryptocurrency Analysis</h1>
        <p>Real-time prices, sentiment analysis, and predictions</p>
      </div>

      <div className="grid-container">
        {/* Chart Section */}
        <div className="card grid-wide">
          <div className="card-header">
            <h2 className="card-title">
              {selectedCrypto ? `${selectedCrypto.name} (${selectedCrypto.symbol})` : 'Select a Cryptocurrency'}
            </h2>
            <div className="time-filter">
              <select 
                className="filter-select"
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
              >
                <option value="24h">24H</option>
                <option value="7d">7D</option>
                <option value="1m">1M</option>
                <option value="3m">3M</option>
                <option value="1y">1Y</option>
              </select>
            </div>
          </div>
          <CryptoChart crypto={selectedCrypto} timeRange={timeRange} />
        </div>

        {/* Crypto List */}
        <div className="card">
          <h3 className="card-title">Cryptocurrencies</h3>
          <div className="crypto-list">
            {cryptos.map(crypto => (
              <div
                key={crypto.symbol}
                className={`crypto-list-item ${selectedCrypto?.symbol === crypto.symbol ? 'active' : ''}`}
                onClick={() => setSelectedCrypto(crypto)}
              >
                <div className="crypto-list-info">
                  <div className="crypto-icon-small">
                    <img src={crypto.image} alt={crypto.name} />
                  </div>
                  <div>
                    <div className="crypto-list-name">{crypto.symbol}</div>
                    <div className="crypto-list-fullname">{crypto.name}</div>
                  </div>
                </div>
                <div className="crypto-list-price">
                  <div className="price">${crypto.price_usd.toLocaleString()}</div>
                  <div 
                    className={`change ${crypto.change_24h >= 0 ? 'positive' : 'negative'}`}
                  >
                    {crypto.change_24h >= 0 ? '+' : ''}{crypto.change_24h}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Market Overview */}
        <div className="card">
          <h3 className="card-title">Market Overview</h3>
          <div className="market-stats">
            <div className="market-stat">
              <label>Total Market Cap</label>
              <span>$1.72T</span>
            </div>
            <div className="market-stat">
              <label>24h Volume</label>
              <span>$68.4B</span>
            </div>
            <div className="market-stat">
              <label>BTC Dominance</label>
              <span>52.3%</span>
            </div>
            <div className="market-stat">
              <label>Fear & Greed Index</label>
              <span className="greed">74 (Greed)</span>
            </div>
          </div>
        </div>
      </div>

      {/* All Cryptocurrencies Grid */}
      <section className="section">
        <h2 className="section-title">All Cryptocurrencies</h2>
        <div className="grid-container">
          {cryptos.map(crypto => (
            <CryptoCard key={crypto.symbol} crypto={crypto} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default CryptoPage;