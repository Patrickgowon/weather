import React from 'react';
import WeatherIcon from './WeatherIcon';
import './styles/Forecast.css';

const Forecast = ({ data, unit }) => {
  const tempUnit = unit === 'metric' ? '°C' : '°F';

  // Group forecast by day
  const dailyForecast = data.list.reduce((acc, item) => {
    const date = new Date(item.dt * 1000).toLocaleDateString();
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(item);
    return acc;
  }, {});

  // Get next 5 days
  const forecastDays = Object.keys(dailyForecast).slice(1, 6);

  return (
    <div className="forecast">
      <h3>5-Day Forecast</h3>
      <div className="forecast-days">
        {forecastDays.map((day) => {
          const dayData = dailyForecast[day];
          const dayName = new Date(day).toLocaleDateString('en', { weekday: 'short' });
          const temps = dayData.map(item => item.main.temp);
          const minTemp = Math.min(...temps);
          const maxTemp = Math.max(...temps);
          const mostCommonWeather = dayData.reduce((acc, curr) => {
            acc[curr.weather[0].main] = (acc[curr.weather[0].main] || 0) + 1;
            return acc;
          }, {});

          const predominantWeather = Object.entries(mostCommonWeather).sort((a, b) => b[1] - a[1])[0][0];
          const weatherIcon = dayData.find(item => item.weather[0].main === predominantWeather).weather[0].icon;

          return (
            <div key={day} className="forecast-day">
              <p className="day-name">{dayName}</p>
              <WeatherIcon code={weatherIcon} small />
              <div className="day-temps">
                <span className="max-temp">{Math.round(maxTemp)}{tempUnit}</span>
                <span className="min-temp">{Math.round(minTemp)}{tempUnit}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Forecast;