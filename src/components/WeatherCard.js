import React from 'react';
import './styles/WeatherCard.css';

const WeatherCard = ({ data }) => {
  const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  return (
    <div className="weather-card">
      <h2>{data.name}, {data.sys.country}</h2>
      <div className="weather-main">
        <img src={iconUrl} alt={data.weather[0].description} />
        <div className="weather-temp">{Math.round(data.main.temp)}°C</div>
      </div>
      <div className="weather-desc">{data.weather[0].description}</div>
      <div className="weather-details">
        <div>Feels like: {Math.round(data.main.feels_like)}°C</div>
        <div>Humidity: {data.main.humidity}%</div>
        <div>Wind: {data.wind.speed} m/s</div>
        <div>Pressure: {data.main.pressure} hPa</div>
      </div>
    </div>
  );
};

export default WeatherCard;