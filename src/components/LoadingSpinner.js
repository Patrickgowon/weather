import React from 'react';
import './styles/LoadingSpinner.css';

const LoadingSpinner = ({ variant = "default", size = "medium" }) => {
  const spinnerClass = `spinner ${variant} ${size}`;
  
  return (
    <div className="loading-spinner-container">
      <div className={spinnerClass} aria-label="Loading weather data">
        {variant === 'dots' && (
          <>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </>
        )}
      </div>
      <p className="loading-text">Loading weather data...</p>
    </div>
  );
};

export default LoadingSpinner;