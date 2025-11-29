import { useState, useEffect } from 'react';
import { stockApi } from '../services/stockApi';

export const useStockData = (initialTicker = 'AAPL', initialDays = 7) => {
  const [stockData, setStockData] = useState(null);
  const [sentimentData, setSentimentData] = useState(null);
  const [historicalData, setHistoricalData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedTicker, setSelectedTicker] = useState(initialTicker);
  const [selectedDays, setSelectedDays] = useState(initialDays);

  const fetchAllData = async (ticker, days) => {
    setLoading(true);
    setError(null);
    try {
      const [stock, sentiment, historical] = await Promise.all([
        stockApi.getStockData(ticker),
        stockApi.getSentimentData(ticker, days),
        stockApi.getHistoricalData(ticker, days)
      ]);
      setStockData(stock);
      setSentimentData(sentiment);
      setHistoricalData(historical);
    } catch (err) {
      setError(err.message || 'Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllData(selectedTicker, selectedDays);
  }, [selectedTicker, selectedDays]);

  const handleTickerChange = (ticker) => setSelectedTicker(ticker);
  const handleDaysChange = (days) => setSelectedDays(days);

  return {
    stockData,
    sentimentData,
    historicalData,
    loading,
    error,
    selectedTicker,
    selectedDays,
    handleTickerChange,
    handleDaysChange
  };
};
