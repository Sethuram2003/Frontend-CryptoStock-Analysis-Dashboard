# Crypto Analytics Dashboard

A modern, real-time cryptocurrency analytics dashboard built with React, featuring market data visualization, sentiment analysis, and historical price tracking.

## Features

- 📊 Real-time cryptocurrency data (Bitcoin, Ethereum, Cardano)
- 📈 Interactive price history charts
- 💭 Sentiment analysis with article tracking
- 🎨 Modern glassmorphism UI design
- 📱 Fully responsive layout
- ⚡ Fast data fetching with parallel API calls

## Tech Stack

- **React 18** - UI framework
- **Recharts** - Data visualization
- **Lucide React** - Icon library
- **CSS3** - Styling with modern effects

## Getting Started

### Prerequisites

- Node.js 14+ and npm/yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd frontend-CryptoStock
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

### Deploy to Vercel

This project is configured for easy deployment on Vercel from the `master` branch.

#### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

#### Option 2: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "New Project"
4. Import your GitHub repository
5. Configure:
   - **Framework Preset**: Create React App
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
   - **Production Branch**: `master`
6. Click "Deploy"

The `vercel.json` configuration file is already set up to:
- Build from the `master` branch
- Use the correct build directory
- Handle client-side routing
- Serve static assets properly

### Environment Variables

If you need to add environment variables:

1. Create a `.env.production` file (already exists)
2. Add your variables with `REACT_APP_` prefix
3. In Vercel Dashboard, go to Project Settings → Environment Variables
4. Add the same variables there

## Project Structure

```
src/
├── components/
│   ├── Header/
│   ├── Controls/
│   ├── MetricsCard/
│   ├── PriceChart/
│   ├── SentimentPanel/
│   ├── ArticleCard/
│   └── LoadingSpinner/
├── hooks/
│   └── useCryptoData.js
├── services/
│   └── cryptoApi.js
├── App.js
└── App.css
```

## API Endpoints

The dashboard connects to:
- `GET /get-crypto-data` - Current cryptocurrency data
- `GET /put-crypto-sentiment` - Sentiment analysis
- `GET /get-crypto-historical` - Historical price data

## Available Scripts

- `npm start` - Run development server
- `npm build` - Build for production
- `npm test` - Run tests
- `npm eject` - Eject from Create React App

## License

MIT

## Contributing

Pull requests are welcome! For major changes, please open an issue first.
