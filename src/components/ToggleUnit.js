import React from 'react';
import './styles/ToggleUnit.css';

const ToggleUnit = ({ unit, onChange }) => {
  return (
    <div className="toggle-unit">
      <button 
        className={`unit-btn ${unit === 'metric' ? 'active' : ''}`}
        onClick={() => onChange()}
        aria-label="Toggle temperature unit"
      >
        <span>°C</span>
        <span>°F</span>
        <div className={`toggle-switch ${unit === 'metric' ? 'celsius' : 'fahrenheit'}`}></div>
      </button>
    </div>
  );
};

export default ToggleUnit;