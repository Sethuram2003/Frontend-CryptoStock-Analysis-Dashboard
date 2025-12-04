const BASE_URL = 'http://178.156.209.160:8000';

export const stockApi = {
  getStockData: async (ticker) => {
    try {
      const response = await fetch(`${BASE_URL}/get-stock-data?ticker=${ticker}`);
      if (!response.ok) throw new Error('Failed to fetch stock data');
      const data = await response.json();
      return data.message.data[ticker];
    } catch (error) {
      console.error('Error fetching stock data:', error);
      throw error;
    }
  },

  getSentimentData: async (ticker, days) => {
    try {
      const response = await fetch(`${BASE_URL}/put-stock-sentiment?ticker=${ticker}&days=${days}`, {
        method: 'PUT'
      });
      if (!response.ok) throw new Error('Failed to fetch sentiment data');
      const data = await response.json();
      return data.response;
    } catch (error) {
      console.error('Error fetching sentiment data:', error);
      throw error;
    }
  },

  getHistoricalData: async (ticker, days) => {
    try {
      const response = await fetch(`${BASE_URL}/get-stock-historical?ticker=${ticker}&days=${days}`);
      if (!response.ok) throw new Error('Failed to fetch historical data');
      const data = await response.json();
      return data.message.data.prices.map(([timestamp, price]) => ({
        timestamp: new Date(timestamp).toLocaleString(),
        price: parseFloat(price.toFixed(2)),
        time: new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }));
    } catch (error) {
      console.error('Error fetching historical data:', error);
      throw error;
    }
  }
};
