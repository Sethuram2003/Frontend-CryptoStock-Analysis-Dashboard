const BASE_URL = 'http://178.156.209.160:8000';

export const cryptoApi = {
  getCryptoData: async (coinId) => {
    try {
      const response = await fetch(`${BASE_URL}/get-crypto-data?coin_id=${coinId}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json'
        }
      });
      if (!response.ok) throw new Error('Failed to fetch crypto data');
      const data = await response.json();
      return data.message.data[coinId];
    } catch (error) {
      console.error('Error fetching crypto data:', error);
      throw error;
    }
  },

  getSentimentData: async (coinId, days) => {
    try {
      const response = await fetch(`${BASE_URL}/put-crypto-sentiment?coin_id=${coinId}&days=${days}`, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) throw new Error('Failed to fetch sentiment data');
      const data = await response.json();
      return data.response;
    } catch (error) {
      console.error('Error fetching sentiment data:', error);
      throw error;
    }
  },

  getHistoricalData: async (coinId, days) => {
    try {
      const response = await fetch(`${BASE_URL}/get-crypto-historical?coin_id=${coinId}&days=${days}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json'
        }
      });
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