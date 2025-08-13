export const fetchCurrentWeather = async (location, apiKey, units = 'metric') => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=${units}`
    );
    if (!response.ok) {
      throw new Error('Location not found');
    }
    return await response.json();
  };
  
  export const fetchForecast = async (location, apiKey, units = 'metric') => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}&units=${units}`
    );
    if (!response.ok) {
      throw new Error('Forecast not available');
    }
    return await response.json();
  };