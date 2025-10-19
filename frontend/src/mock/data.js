// Uniform schema for all assets
export const assetSchema = {
  id: 'string',
  symbol: 'string',
  name: 'string',
  current_price: 'number',
  price_change_24h: 'number',
  price_change_percentage_24h: 'number',
  market_cap: 'number',
  volume_24h: 'number',
  sentiment: 'number', // 0-100 scale
  prediction_trend: 'number', // -1 (bearish), 0 (neutral), 1 (bullish)
  prediction_confidence: 'number', // 0-100
  prediction_price_7d: 'number',
  prediction_price_30d: 'number',
  last_updated: 'string',
  image: 'string',
  type: 'string' // 'crypto' or 'stock'
};

// Cryptocurrency Mock Data
export const cryptoData = [
  {
    id: 'bitcoin',
    symbol: 'BTC',
    name: 'Bitcoin',
    current_price: 45230.75,
    price_change_24h: 1250.50,
    price_change_percentage_24h: 2.84,
    market_cap: 885000000000,
    volume_24h: 21500000000,
    sentiment: 78,
    prediction_trend: 1,
    prediction_confidence: 82,
    prediction_price_7d: 46800,
    prediction_price_30d: 48500,
    last_updated: '2024-01-15T10:30:00Z',
    image: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
    type: 'crypto'
  },
  {
    id: 'ethereum',
    symbol: 'ETH',
    name: 'Ethereum',
    current_price: 2680.40,
    price_change_24h: -32.15,
    price_change_percentage_24h: -1.18,
    market_cap: 322000000000,
    volume_24h: 14500000000,
    sentiment: 65,
    prediction_trend: 1,
    prediction_confidence: 71,
    prediction_price_7d: 2750,
    prediction_price_30d: 2900,
    last_updated: '2024-01-15T10:30:00Z',
    image: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
    type: 'crypto'
  },
  {
    id: 'cardano',
    symbol: 'ADA',
    name: 'Cardano',
    current_price: 0.52,
    price_change_24h: 0.008,
    price_change_percentage_24h: 1.56,
    market_cap: 18560000000,
    volume_24h: 485000000,
    sentiment: 72,
    prediction_trend: 1,
    prediction_confidence: 65,
    prediction_price_7d: 0.55,
    prediction_price_30d: 0.58,
    last_updated: '2024-01-15T10:30:00Z',
    image: 'https://cryptologos.cc/logos/cardano-ada-logo.png',
    type: 'crypto'
  },
  {
    id: 'solana',
    symbol: 'SOL',
    name: 'Solana',
    current_price: 98.75,
    price_change_24h: 4.25,
    price_change_percentage_24h: 4.50,
    market_cap: 42800000000,
    volume_24h: 2850000000,
    sentiment: 85,
    prediction_trend: 1,
    prediction_confidence: 88,
    prediction_price_7d: 105,
    prediction_price_30d: 115,
    last_updated: '2024-01-15T10:30:00Z',
    image: 'https://cryptologos.cc/logos/solana-sol-logo.png',
    type: 'crypto'
  },
  {
    id: 'ripple',
    symbol: 'XRP',
    name: 'XRP',
    current_price: 0.58,
    price_change_24h: -0.02,
    price_change_percentage_24h: -3.33,
    market_cap: 31500000000,
    volume_24h: 1250000000,
    sentiment: 58,
    prediction_trend: -1,
    prediction_confidence: 62,
    prediction_price_7d: 0.56,
    prediction_price_30d: 0.54,
    last_updated: '2024-01-15T10:30:00Z',
    image: 'https://cryptologos.cc/logos/xrp-xrp-logo.png',
    type: 'crypto'
  },
  {
    id: 'polkadot',
    symbol: 'DOT',
    name: 'Polkadot',
    current_price: 7.25,
    price_change_24h: -0.15,
    price_change_percentage_24h: -2.03,
    market_cap: 9280000000,
    volume_24h: 285000000,
    sentiment: 61,
    prediction_trend: 0,
    prediction_confidence: 55,
    prediction_price_7d: 7.30,
    prediction_price_30d: 7.45,
    last_updated: '2024-01-15T10:30:00Z',
    image: 'https://cryptologos.cc/logos/polkadot-new-dot-logo.png',
    type: 'crypto'
  }
];

// Stock Market Mock Data
export const stockData = [
  {
    id: 'apple',
    symbol: 'AAPL',
    name: 'Apple Inc.',
    current_price: 182.63,
    price_change_24h: 2.25,
    price_change_percentage_24h: 1.25,
    market_cap: 2860000000000,
    volume_24h: 58392000,
    sentiment: 75,
    prediction_trend: 1,
    prediction_confidence: 68,
    prediction_price_7d: 185,
    prediction_price_30d: 190,
    last_updated: '2024-01-15T10:30:00Z',
    image: 'https://logo.clearbit.com/apple.com',
    type: 'stock',
    exchange: 'NASDAQ',
    pe_ratio: 29.5,
    dividend_yield: 0.5,
    sector: 'Technology'
  },
  {
    id: 'microsoft',
    symbol: 'MSFT',
    name: 'Microsoft Corporation',
    current_price: 378.85,
    price_change_24h: 3.02,
    price_change_percentage_24h: 0.80,
    market_cap: 2810000000000,
    volume_24h: 23456700,
    sentiment: 80,
    prediction_trend: 1,
    prediction_confidence: 75,
    prediction_price_7d: 385,
    prediction_price_30d: 395,
    last_updated: '2024-01-15T10:30:00Z',
    image: 'https://logo.clearbit.com/microsoft.com',
    type: 'stock',
    exchange: 'NASDAQ',
    pe_ratio: 32.1,
    dividend_yield: 0.7,
    sector: 'Technology'
  },
  {
    id: 'google',
    symbol: 'GOOGL',
    name: 'Alphabet Inc.',
    current_price: 138.21,
    price_change_24h: -0.62,
    price_change_percentage_24h: -0.45,
    market_cap: 1750000000000,
    volume_24h: 28746500,
    sentiment: 62,
    prediction_trend: 1,
    prediction_confidence: 55,
    prediction_price_7d: 140,
    prediction_price_30d: 145,
    last_updated: '2024-01-15T10:30:00Z',
    image: 'https://logo.clearbit.com/google.com',
    type: 'stock',
    exchange: 'NASDAQ',
    pe_ratio: 24.8,
    dividend_yield: 0.0,
    sector: 'Technology'
  },
  {
    id: 'tesla',
    symbol: 'TSLA',
    name: 'Tesla Inc.',
    current_price: 234.50,
    price_change_24h: 7.28,
    price_change_percentage_24h: 3.20,
    market_cap: 745000000000,
    volume_24h: 98346500,
    sentiment: 58,
    prediction_trend: -1,
    prediction_confidence: 72,
    prediction_price_7d: 225,
    prediction_price_30d: 210,
    last_updated: '2024-01-15T10:30:00Z',
    image: 'https://logo.clearbit.com/tesla.com',
    type: 'stock',
    exchange: 'NASDAQ',
    pe_ratio: 68.2,
    dividend_yield: 0.0,
    sector: 'Automotive'
  },
  {
    id: 'amazon',
    symbol: 'AMZN',
    name: 'Amazon.com Inc.',
    current_price: 155.18,
    price_change_24h: 1.85,
    price_change_percentage_24h: 1.21,
    market_cap: 1600000000000,
    volume_24h: 38472900,
    sentiment: 71,
    prediction_trend: 1,
    prediction_confidence: 64,
    prediction_price_7d: 158,
    prediction_price_30d: 165,
    last_updated: '2024-01-15T10:30:00Z',
    image: 'https://logo.clearbit.com/amazon.com',
    type: 'stock',
    exchange: 'NASDAQ',
    pe_ratio: 58.3,
    dividend_yield: 0.0,
    sector: 'Consumer Cyclical'
  },
  {
    id: 'nvidia',
    symbol: 'NVDA',
    name: 'NVIDIA Corporation',
    current_price: 547.10,
    price_change_24h: 12.45,
    price_change_percentage_24h: 2.33,
    market_cap: 1350000000000,
    volume_24h: 45218900,
    sentiment: 88,
    prediction_trend: 1,
    prediction_confidence: 85,
    prediction_price_7d: 565,
    prediction_price_30d: 590,
    last_updated: '2024-01-15T10:30:00Z',
    image: 'https://logo.clearbit.com/nvidia.com',
    type: 'stock',
    exchange: 'NASDAQ',
    pe_ratio: 42.7,
    dividend_yield: 0.03,
    sector: 'Technology'
  }
];

// News and Sentiment Data
export const newsData = [
  {
    id: 1,
    title: 'Bitcoin ETF Approval Expected to Drive Institutional Adoption',
    summary: 'Major financial institutions are preparing for Bitcoin ETF approval, which could bring billions in new investments.',
    source: 'Crypto News',
    published_at: '2024-01-15T08:30:00Z',
    sentiment: 'positive',
    tags: ['BTC', 'ETF', 'Regulation'],
    url: '#'
  },
  {
    id: 2,
    title: 'Federal Reserve Holds Interest Rates Steady Amid Inflation Concerns',
    summary: 'The Federal Reserve maintains current interest rates while monitoring inflation trends and economic indicators.',
    source: 'Financial Times',
    published_at: '2024-01-15T07:15:00Z',
    sentiment: 'neutral',
    tags: ['FED', 'Economy', 'Interest Rates'],
    url: '#'
  },
  {
    id: 3,
    title: 'Tech Stocks Rally on Strong Quarterly Earnings Reports',
    summary: 'Major technology companies exceed earnings expectations, driving market optimism and stock price increases.',
    source: 'Wall Street Journal',
    published_at: '2024-01-15T06:45:00Z',
    sentiment: 'positive',
    tags: ['Tech', 'Earnings', 'Stocks'],
    url: '#'
  },
  {
    id: 4,
    title: 'Regulatory Scrutiny Intensifies for Cryptocurrency Exchanges',
    summary: 'Global regulators are increasing oversight on cryptocurrency exchanges to ensure compliance and investor protection.',
    source: 'Bloomberg',
    published_at: '2024-01-14T16:20:00Z',
    sentiment: 'negative',
    tags: ['Regulation', 'Crypto', 'Exchanges'],
    url: '#'
  }
];

// Market Overview Data
export const marketOverview = {
  total_market_cap: 1720000000000,
  total_volume_24h: 68400000000,
  btc_dominance: 52.3,
  fear_greed_index: 74,
  market_sentiment: 'bullish',
  trending_assets: ['BTC', 'SOL', 'NVDA', 'AAPL'],
  top_gainers: ['SOL', 'NVDA', 'BTC'],
  top_losers: ['XRP', 'DOT']
};

// Price History for Charts (last 30 days)
export const generatePriceHistory = (currentPrice, volatility = 0.02) => {
  const history = [];
  let price = currentPrice;
  
  for (let i = 30; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    
    // Random walk with some volatility
    const change = (Math.random() - 0.5) * volatility * price;
    price += change;
    
    history.push({
      time: date.toISOString().split('T')[0],
      price: Math.max(price, currentPrice * 0.8) // Prevent going too low
    });
  }
  
  return history;
};

// Generate price history for all assets
export const generateAllPriceHistory = () => {
  const allAssets = [...cryptoData, ...stockData];
  const history = {};
  
  allAssets.forEach(asset => {
    history[asset.symbol] = generatePriceHistory(asset.current_price);
  });
  
  return history;
};

export default {
  assetSchema,
  cryptoData,
  stockData,
  newsData,
  marketOverview,
  generatePriceHistory,
  generateAllPriceHistory
};