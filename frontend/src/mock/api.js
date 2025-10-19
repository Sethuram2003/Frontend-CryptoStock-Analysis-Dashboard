import { 
  cryptoData, 
  stockData, 
  newsData, 
  marketOverview,
  generateAllPriceHistory 
} from './data';

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Mock API responses that match your backend API structure
export const mockApi = {
  // Cryptocurrency endpoints
  async getCryptos() {
    await delay(800);
    return {
      success: true,
      data: {
        cryptos: cryptoData,
        timestamp: new Date().toISOString()
      }
    };
  },

  async getCrypto(symbol) {
    await delay(500);
    const crypto = cryptoData.find(c => c.symbol === symbol);
    return {
      success: !!crypto,
      data: {
        crypto,
        price_history: generateAllPriceHistory()[symbol] || []
      },
      message: crypto ? 'Crypto data retrieved successfully' : 'Crypto not found'
    };
  },

  // Stock endpoints
  async getStocks() {
    await delay(800);
    return {
      success: true,
      data: {
        stocks: stockData,
        timestamp: new Date().toISOString()
      }
    };
  },

  async getStock(symbol) {
    await delay(500);
    const stock = stockData.find(s => s.symbol === symbol);
    return {
      success: !!stock,
      data: {
        stock,
        price_history: generateAllPriceHistory()[symbol] || []
      },
      message: stock ? 'Stock data retrieved successfully' : 'Stock not found'
    };
  },

  // News endpoints
  async getNews() {
    await delay(600);
    return {
      success: true,
      data: {
        news: newsData,
        count: newsData.length
      }
    };
  },

  // Market data endpoints
  async getMarketOverview() {
    await delay(400);
    return {
      success: true,
      data: {
        overview: marketOverview,
        timestamp: new Date().toISOString()
      }
    };
  },

  // Sentiment analysis endpoints
  async getSentimentAnalysis() {
    await delay(700);
    const allAssets = [...cryptoData, ...stockData];
    const sentimentAnalysis = allAssets.map(asset => ({
      symbol: asset.symbol,
      name: asset.name,
      sentiment: asset.sentiment,
      trend: asset.prediction_trend > 0 ? 'bullish' : asset.prediction_trend < 0 ? 'bearish' : 'neutral',
      confidence: asset.prediction_confidence,
      key_metrics: {
        price: asset.current_price,
        change_24h: asset.price_change_percentage_24h,
        volume: asset.volume_24h
      }
    }));

    return {
      success: true,
      data: {
        analysis: sentimentAnalysis,
        overall_sentiment: 'bullish',
        average_confidence: 72.5
      }
    };
  },

  // Prediction endpoints
  async getPredictions() {
    await delay(900);
    const predictions = [...cryptoData, ...stockData].map(asset => ({
      symbol: asset.symbol,
      name: asset.name,
      current_price: asset.current_price,
      prediction_7d: asset.prediction_price_7d,
      prediction_30d: asset.prediction_price_30d,
      confidence: asset.prediction_confidence,
      trend: asset.prediction_trend,
      expected_return_7d: ((asset.prediction_price_7d - asset.current_price) / asset.current_price * 100).toFixed(2)
    }));

    return {
      success: true,
      data: {
        predictions,
        last_updated: new Date().toISOString()
      }
    };
  },

  // Search endpoint
  async searchAssets(query) {
    await delay(300);
    const allAssets = [...cryptoData, ...stockData];
    const results = allAssets.filter(asset => 
      asset.symbol.toLowerCase().includes(query.toLowerCase()) ||
      asset.name.toLowerCase().includes(query.toLowerCase())
    );

    return {
      success: true,
      data: {
        results,
        query,
        count: results.length
      }
    };
  }
};

export default mockApi;