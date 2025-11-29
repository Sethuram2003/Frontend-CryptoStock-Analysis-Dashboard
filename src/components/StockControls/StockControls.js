import './StockControls.css';

export const StockControls = ({ selectedTicker, selectedDays, onTickerChange, onDaysChange }) => {
  const tickers = ['AAPL', 'GOOGL', 'MSFT', 'TSLA', 'AMZN'];
  const dayOptions = [7, 30, 90];

  return (
    <div className="controls-container">
      <div className="control-group">
        <label className="control-label">Select Stock</label>
        <div className="button-group">
          {tickers.map(ticker => (
            <button
              key={ticker}
              onClick={() => onTickerChange(ticker)}
              className={`control-button ${selectedTicker === ticker ? 'active' : ''}`}
            >
              {ticker}
            </button>
          ))}
        </div>
      </div>

      <div className="control-group">
        <label className="control-label">Time Period</label>
        <div className="button-group">
          {dayOptions.map(days => (
            <button
              key={days}
              onClick={() => onDaysChange(days)}
              className={`control-button ${selectedDays === days ? 'active' : ''}`}
            >
              {days}d
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
