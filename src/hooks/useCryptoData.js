import { useState, useEffect } from 'react';
import { cryptoApi } from '../services/cryptoApi';

export const useCryptoData = (initialCoin = 'bitcoin', initialDays = 7) => {
  const [cryptoData, setCryptoData] = useState(null);
  const [sentimentData, setSentimentData] = useState(null);
  const [historicalData, setHistoricalData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedCoin, setSelectedCoin] = useState(initialCoin);
  const [selectedDays, setSelectedDays] = useState(initialDays);

  const fetchAllData = async (coin, days) => {
    setLoading(true);
    setError(null);
    try {
      const [crypto, sentiment, historical] = await Promise.all([
        cryptoApi.getCryptoData(coin),
        cryptoApi.getSentimentData(coin, days),
        cryptoApi.getHistoricalData(coin, days)
      ]);
      setCryptoData(crypto);
      setSentimentData(sentiment);
      setHistoricalData(historical);
    } catch (err) {
      setError(err.message || 'Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllData(selectedCoin, selectedDays);
  }, [selectedCoin, selectedDays]);

  const handleCoinChange = (coin) => setSelectedCoin(coin);
  const handleDaysChange = (days) => setSelectedDays(days);

  return {
    cryptoData,
    sentimentData,
    historicalData,
    loading,
    error,
    selectedCoin,
    selectedDays,
    handleCoinChange,
    handleDaysChange
  };
};
