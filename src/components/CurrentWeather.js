import React from 'react';
import WeatherIcon from './WeatherIcon';
import './styles/CurrentWeather.css';

const CurrentWeather = ({ data, unit }) => {
  const {
    name,
    sys,
    main,
    weather,
    wind,
    visibility,
    dt,
    timezone
  } = data;

  const localTime = new Date((dt + timezone) * 1000).toUTCString().replace('GMT', '');
  const tempUnit = unit === 'metric' ? '°C' : '°F';
  const speedUnit = unit === 'metric' ? 'm/s' : 'mph';
  const visibilityKm = (visibility / 1000).toFixed(1);

  return (
    <div className="current-weather">
      <div className="location-time">
        <h2>{name}, {sys.country}</h2>
        <p>{localTime}</p>
      </div>
      
      <div className="weather-main">
        <div className="temp-icon">
          <WeatherIcon code={weather[0].icon} />
          <span className="temp">{Math.round(main.temp)}{tempUnit}</span>
        </div>
        
        <div className="details">
          <p className="description">{weather[0].description}</p>
          <p>Feels like: {Math.round(main.feels_like)}{tempUnit}</p>
        </div>
      </div>
      
      <div className="weather-stats">
        <div>
          <span>Humidity</span>
          <span>{main.humidity}%</span>
        </div>
        <div>
          <span>Wind</span>
          <span>{wind.speed} {speedUnit}</span>
        </div>
        <div>
          <span>Pressure</span>
          <span>{main.pressure} hPa</span>
        </div>
        <div>
          <span>Visibility</span>
          <span>{visibilityKm} km</span>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;