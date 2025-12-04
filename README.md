# 📊 Market Analytics Dashboard

A modern, professional web application for real-time cryptocurrency and stock market analysis with AI-powered insights. Built with React and featuring beautiful glassmorphism UI, interactive charts, sentiment analysis, and an intelligent chatbot assistant.

![Market Analytics Dashboard](https://img.shields.io/badge/React-18.2.0-blue) ![License](https://img.shields.io/badge/license-MIT-green) ![Status](https://img.shields.io/badge/status-active-success)

## 🌐 Live Demo

**[View Live Application →](https://frontend-cryptostock.vercel.app/)**

Experience the full application with real-time data, interactive charts, and AI-powered insights!

## 🔗 Related Repositories

**Backend API**: [Crypto and Stock Analysis - Data Aggregation](https://github.com/Sethuram2003/Crypto-and-Stock-Analysis---DA-and-Agg)

The backend repository contains the API services, data aggregation logic, and AI chat functionality that powers this frontend application.

## ✨ Features

### 🪙 Cryptocurrency Analytics
- **Real-time Price Data** - Live cryptocurrency prices for Bitcoin, Ethereum, and Cardano
- **Interactive Charts** - Beautiful gradient-filled area charts with historical price data
- **Market Metrics** - Current price, 24h change, market cap rank, and trading volume
- **Sentiment Analysis** - AI-powered news sentiment analysis with top articles
- **Supply Information** - Circulating supply, market cap, and max supply data

### 📈 Stock Market Analytics
- **Live Stock Data** - Real-time stock information for AAPL, GOOGL, MSFT, TSLA, AMZN
- **Price History** - Historical price charts with customizable time periods (7, 30, 90 days)
- **Stock Metrics** - Open price, previous close, exchange, and currency information
- **News Sentiment** - Sentiment analysis of stock-related news articles
- **Market Insights** - Comprehensive market data visualization

### 🤖 AI Chat Assistant
- **Intelligent Chatbot** - AI-powered assistant for crypto and stock queries
- **Markdown Support** - Rich text formatting with bold, italic, code blocks, and lists
- **Real-time Responses** - Instant answers to market-related questions
- **Chat History** - Persistent conversation within session
- **New Chat Feature** - Clear conversation and start fresh anytime

### 🎨 Modern UI/UX
- **Glassmorphism Design** - Beautiful frosted glass effects with blur
- **Gradient Accents** - Stunning purple-pink gradient theme throughout
- **Smooth Animations** - Fluid transitions and hover effects
- **Responsive Layout** - Fully responsive design for all screen sizes
- **Dark Theme** - Eye-friendly dark mode with vibrant accents
- **Professional Navigation** - Sticky navigation bar with tab switching

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn** package manager
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Sethuram2003/Crypto_-_Stock_Analysis_Frontend/tree/master
cd Crypto_-_Stock_Analysis_Frontend
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Start the development server**
```bash
npm start
# or
yarn start
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

The app will automatically reload when you make changes to the code.

## 📁 Project Structure

```
frontend-CryptoStock/
├── public/                      # Static files
│   ├── index.html              # HTML template
│   ├── favicon.ico             # App icon
│   └── manifest.json           # PWA manifest
│
├── src/
│   ├── components/             # React components
│   │   ├── Navigation/         # Navigation bar
│   │   │   ├── Navigation.js
│   │   │   └── Navigation.css
│   │   │
│   │   ├── Header/             # Page header
│   │   │   ├── Header.js
│   │   │   └── Header.css
│   │   │
│   │   ├── Controls/           # Crypto controls
│   │   │   ├── Controls.js
│   │   │   └── Controls.css
│   │   │
│   │   ├── StockControls/      # Stock controls
│   │   │   ├── StockControls.js
│   │   │   └── StockControls.css
│   │   │
│   │   ├── MetricsCard/        # Crypto metrics display
│   │   │   ├── MetricsCard.js
│   │   │   └── MetricsCard.css
│   │   │
│   │   ├── StockMetrics/       # Stock metrics display
│   │   │   ├── StockMetrics.js
│   │   │   └── StockMetrics.css
│   │   │
│   │   ├── PriceChart/         # Price history chart
│   │   │   ├── PriceChart.js
│   │   │   └── PriceChart.css
│   │   │
│   │   ├── SentimentPanel/     # Sentiment analysis panel
│   │   │   ├── SentimentPanel.js
│   │   │   └── SentimentPanel.css
│   │   │
│   │   ├── ArticleCard/        # News article cards
│   │   │   ├── ArticleCard.js
│   │   │   └── ArticleCard.css
│   │   │
│   │   ├── LoadingSpinner/     # Loading indicator
│   │   │   ├── LoadingSpinner.js
│   │   │   └── LoadingSpinner.css
│   │   │
│   │   └── ChatWidget/         # AI chat assistant
│   │       ├── ChatWidget.js
│   │       └── ChatWidget.css
│   │
│   ├── hooks/                  # Custom React hooks
│   │   ├── useCryptoData.js   # Crypto data management
│   │   └── useStockData.js    # Stock data management
│   │
│   ├── services/               # API services
│   │   ├── cryptoApi.js       # Crypto API calls
│   │   └── stockApi.js        # Stock API calls
│   │
│   ├── App.js                  # Main application component
│   ├── App.css                 # Global styles
│   └── index.js                # Application entry point
│
├── package.json                # Dependencies and scripts
├── vercel.json                 # Vercel deployment config
└── README.md                   # This file
```

## 🔧 Technology Stack

### Frontend Framework
- **React 18.2.0** - Modern UI library with hooks
- **React DOM** - DOM rendering for React

### Data Visualization
- **Recharts 3.5.1** - Composable charting library
- **Chart.js 4.5.1** - Flexible charting library

### UI Components & Icons
- **Lucide React 0.555.0** - Beautiful icon library
- **React Markdown** - Markdown rendering for chat

### Styling
- **CSS3** - Modern styling with animations
- **Glassmorphism** - Frosted glass effects
- **Gradient Backgrounds** - Dynamic color transitions

### HTTP Client
- **Axios 1.13.2** - Promise-based HTTP client
- **Fetch API** - Native browser API for requests

### Development Tools
- **React Scripts 5.0.1** - Build tooling
- **Testing Library** - Component testing utilities

## 🌐 API Integration

The application integrates with a backend API hosted at:
```
https://crypto-and-stock-analysis-da-and-ag.vercel.app
```

### Cryptocurrency Endpoints

#### Get Crypto Data
```bash
GET /get-crypto-data?coin_id={coin_id}
```
Returns current cryptocurrency data including price, market cap, volume, etc.

#### Get Crypto Historical Data
```bash
GET /get-crypto-historical?coin_id={coin_id}&days={days}
```
Returns historical price data for the specified time period.

#### Get Crypto Sentiment
```bash
PUT /put-crypto-sentiment?coin_id={coin_id}&days={days}
```
Returns sentiment analysis with top news articles.

### Stock Market Endpoints

#### Get Stock Data
```bash
GET /get-stock-data?ticker={ticker}
```
Returns current stock data including price, exchange, currency, etc.

#### Get Stock Historical Data
```bash
GET /get-stock-historical?ticker={ticker}&days={days}
```
Returns historical stock price data.

#### Get Stock Sentiment
```bash
PUT /put-stock-sentiment?ticker={ticker}&days={days}
```
Returns sentiment analysis for stock-related news.

### AI Chat Endpoint

#### Chat with AI
```bash
POST /chat?query={query}
```
Returns AI-generated responses to user queries.

## 🎯 Component Architecture

### Navigation Component
- **Purpose**: Top navigation bar with tab switching
- **Features**: Sticky positioning, mobile menu, smooth transitions
- **State**: Active tab (crypto/stocks)

### Header Component
- **Purpose**: Dynamic page header
- **Features**: Changes title and icon based on active tab
- **Props**: `activeTab`

### Controls Components
- **Purpose**: Asset and time period selection
- **Crypto**: Bitcoin, Ethereum, Cardano
- **Stocks**: AAPL, GOOGL, MSFT, TSLA, AMZN
- **Time Periods**: 7, 30, 90 days

### Metrics Components
- **Purpose**: Display key market metrics
- **Crypto Metrics**: Price, 24h change, market cap rank, volume
- **Stock Metrics**: Open price, previous close, exchange, symbol

### PriceChart Component
- **Purpose**: Visualize price history
- **Features**: Area chart with gradient fill, price change indicator
- **Library**: Recharts with custom styling

### SentimentPanel Component
- **Purpose**: Display sentiment analysis
- **Features**: Average sentiment score, trend, top articles
- **Sub-components**: ArticleCard for individual articles

### ArticleCard Component
- **Purpose**: Display news articles with sentiment
- **Features**: Thumbnail, source badge, sentiment meter, preview text
- **Sentiment Levels**: Very Strong, Strong, Moderate, Weak

### ChatWidget Component
- **Purpose**: AI-powered chat assistant
- **Features**: Markdown rendering, typing indicator, message history
- **Actions**: Send message, clear chat, close widget

### Custom Hooks

#### useCryptoData
```javascript
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
```

#### useStockData
```javascript
const {
  stockData,
  sentimentData,
  historicalData,
  loading,
  error,
  selectedTicker,
  selectedDays,
  handleTickerChange,
  handleDaysChange
} = useStockData();
```

## 🎨 Styling Guide

### Color Palette
- **Primary Gradient**: `#a855f7` → `#ec4899` (Purple to Pink)
- **Secondary Gradient**: `#3b82f6` → `#06b6d4` (Blue to Cyan)
- **Background**: `#0a0e27` → `#2d1b69` (Dark Blue to Purple)
- **Success**: `#22c55e` (Green)
- **Error**: `#ef4444` (Red)
- **Text Primary**: `#ffffff` (White)
- **Text Secondary**: `#cbd5e1` (Light Gray)
- **Text Muted**: `#94a3b8` (Gray)

### Design Principles
- **Glassmorphism**: Frosted glass effects with `backdrop-filter: blur()`
- **Smooth Animations**: `cubic-bezier(0.4, 0, 0.2, 1)` for natural motion
- **Gradient Accents**: Linear and radial gradients for depth
- **Hover Effects**: Transform, scale, and shadow on interaction
- **Responsive Design**: Mobile-first approach with breakpoints

### Animation Examples
```css
/* Fade In Up */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Pulse Effect */
@keyframes pulse {
  0%, 100% {
    box-shadow: 0 0 30px rgba(168, 85, 247, 0.5);
  }
  50% {
    box-shadow: 0 0 40px rgba(168, 85, 247, 0.8);
  }
}
```

## 📱 Responsive Design

### Breakpoints
- **Desktop**: > 1024px - Full layout with all features
- **Tablet**: 768px - 1024px - Adjusted grid layouts
- **Mobile**: < 768px - Stacked layout, mobile menu

### Mobile Optimizations
- Hamburger menu for navigation
- Full-screen chat widget
- Stacked article cards
- Simplified metrics grid
- Touch-optimized buttons

## 🚀 Deployment

### Vercel Deployment (Recommended)

1. **Push to GitHub**
```bash
git add .
git commit -m "Ready for deployment"
git push origin master
```

2. **Connect to Vercel**
- Go to [vercel.com](https://vercel.com)
- Import your GitHub repository
- Configure settings:
  - Framework: Create React App
  - Build Command: `npm run build`
  - Output Directory: `build`
  - Production Branch: `master`

3. **Deploy**
- Click "Deploy"
- Your app will be live at `https://your-project.vercel.app`

### Manual Build

```bash
# Create production build
npm run build

# The build folder contains optimized production files
# Deploy the build folder to any static hosting service
```

## 🧪 Testing

### Run Tests
```bash
npm test
```

### Test Coverage
```bash
npm test -- --coverage
```

## 🔍 Troubleshooting

### Common Issues

**Issue**: `npm install` fails
- **Solution**: Delete `node_modules` and `package-lock.json`, then run `npm install` again

**Issue**: Port 3000 already in use
- **Solution**: Kill the process using port 3000 or set a different port:
```bash
PORT=3001 npm start
```

**Issue**: API requests failing
- **Solution**: Check your internet connection and verify the API endpoint is accessible

**Issue**: Charts not rendering
- **Solution**: Ensure Recharts is properly installed: `npm install recharts`

**Issue**: Markdown not rendering in chat
- **Solution**: Verify react-markdown is installed: `npm install react-markdown`

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors

- **Sethuram** - [@Sethuram2003](https://github.com/Sethuram2003)
- **Sanjay** - [@Sanjay-RK-27](https://github.com/Sanjay-RK-27)
- **Praveen** - [@apraveen001](https://github.com/apraveen001)
- **Sriram** - [@SriramV1212](https://github.com/SriramV1212)
- **Adebayo** - [@AdebayoBraimah](https://github.com/AdebayoBraimah)

## 🙏 Acknowledgments

- **Recharts** - For the beautiful charting library
- **Lucide React** - For the amazing icon set
- **React Community** - For the excellent ecosystem
- **Vercel** - For seamless deployment

## 📞 Support

For support, email your-email@example.com or open an issue in the repository.

---

**Made with ❤️ and React**
