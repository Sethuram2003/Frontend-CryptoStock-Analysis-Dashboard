import React from 'react';

const PredictionChart = ({ data }) => {
  return (
    <div className="prediction-chart">
      <div className="chart-placeholder">
        <p>Prediction chart visualization will be implemented here</p>
        <div className="chart-bars">
          {data.map((item, index) => (
            <div key={index} className="chart-bar">
              <div className="bar-label">{item.symbol}</div>
              <div className="bar-container">
                <div 
                  className="bar-fill"
                  style={{ 
                    width: `${item.prediction_confidence}%`,
                    background: item.prediction_trend > 0 ? 
                      'var(--gradient-secondary)' : 'var(--danger-color)'
                  }}
                ></div>
              </div>
              <div className="bar-value">{item.prediction_confidence}%</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PredictionChart;