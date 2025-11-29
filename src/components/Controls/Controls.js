import './Controls.css';

export const Controls = ({ selectedCoin, selectedDays, onCoinChange, onDaysChange }) => {
  const coins = ['bitcoin', 'ethereum', 'cardano'];
  const dayOptions = [7, 30, 90];

  return (
    <div className="controls-container">
      <div className="control-group">
        <label className="control-label">Select Coin</label>
        <div className="button-group">
          {coins.map(coin => (
            <button
              key={coin}
              onClick={() => onCoinChange(coin)}
              className={`control-button ${selectedCoin === coin ? 'active' : ''}`}
            >
              {coin.charAt(0).toUpperCase() + coin.slice(1)}
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
