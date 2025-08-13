import React from 'react';
import WeatherCard from './WeatherCard';
import './styles/WeatherCard.css';

const WeatherDisplay = ({ data }) => {
  return (
    <div className="weather-display">
      <WeatherCard data={data} />
    </div>
  );
};

export default WeatherDisplay;