import { useState, useEffect } from 'react';
import mockApi from '../mock/api';

export const useMockApi = (apiFunction, dependencies = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await apiFunction();
        
        if (response.success) {
          setData(response.data);
        } else {
          setError(response.message || 'Failed to fetch data');
        }
      } catch (err) {
        setError(err.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiFunction, ...dependencies]); // Spread dependencies to make it a literal array

  return { data, loading, error };
};

// Specific hooks for different data types
export const useCryptos = () => useMockApi(mockApi.getCryptos);
export const useStocks = () => useMockApi(mockApi.getStocks);
export const useNews = () => useMockApi(mockApi.getNews);
export const useMarketOverview = () => useMockApi(mockApi.getMarketOverview);
export const useSentimentAnalysis = () => useMockApi(mockApi.getSentimentAnalysis);
export const usePredictions = () => useMockApi(mockApi.getPredictions);

// Hook for individual asset
export const useAsset = (symbol, type) => {
  return useMockApi(
    () => type === 'crypto' ? mockApi.getCrypto(symbol) : mockApi.getStock(symbol),
    [symbol, type]
  );
};

export default useMockApi;