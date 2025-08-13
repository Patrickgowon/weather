import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import ToggleUnit from './components/ToggleUnit';
import LoadingSpinner from './components/LoadingSpinner';
import { fetchCurrentWeather, fetchForecast } from './utils/api';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [unit, setUnit] = useState('metric');
  const [location, setLocation] = useState('');

  const API_KEY = 'f036cbe26134c3e2b9fe93b678f553dc';

  const getWeather = async (loc) => {
    setLoading(true);
    setError(null);
    try {
      const [current, forecast] = await Promise.all([
        fetchCurrentWeather(loc, API_KEY, unit),
        fetchForecast(loc, API_KEY, unit)
      ]);
      setWeatherData(current);
      setForecastData(forecast);
      setLocation(loc);
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
      setForecastData(null);
    } finally {
      setLoading(false);
    }
  };

  const handleUnitChange = () => {
    const newUnit = unit === 'metric' ? 'imperial' : 'metric';
    setUnit(newUnit);
    if (location) {
      getWeather(location);
    }
  };

  useEffect(() => {
    // Try geolocation on first load
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          getWeather(`${latitude},${longitude}`);
        },
        () => {
          // Default to London if geolocation fails
          getWeather('London');
        }
      );
    } else {
      getWeather('London');
    }
  }, []);

  return (
    <div className="app">
      <header>
        <h1>Weather Forecast</h1>
        <div className="controls">
          <SearchBar onSearch={getWeather} />
          <ToggleUnit unit={unit} onChange={handleUnitChange} />
        </div>
      </header>
      
      <main>
        {loading && <LoadingSpinner />}
        {error && <p className="error">{error}</p>}
        {weatherData && (
          <>
            <CurrentWeather data={weatherData} unit={unit} />
            <Forecast data={forecastData} unit={unit} />
          </>
        )}
      </main>
      
      <footer>
        <p>Data provided by OpenWeatherMap</p>
      </footer>
    </div>
  );
}

export default App;