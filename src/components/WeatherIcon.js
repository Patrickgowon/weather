import React from 'react';
import './styles/WeatherIcon.css';

const WeatherIcon = ({ code, small = false }) => {
  const getAnimatedIcon = (iconCode) => {
    const iconMap = {
      '01d': 'sun',
      '01n': 'moon',
      '02d': 'cloud-sun',
      '02n': 'cloud-moon',
      '03d': 'cloud',
      '03n': 'cloud',
      '04d': 'cloud',
      '04n': 'cloud',
      '09d': 'cloud-rain',
      '09n': 'cloud-rain',
      '10d': 'cloud-sun-rain',
      '10n': 'cloud-moon-rain',
      '11d': 'cloud-bolt',
      '11n': 'cloud-bolt',
      '13d': 'snowflake',
      '13n': 'snowflake',
      '50d': 'smog',
      '50n': 'smog'
    };

    return iconMap[iconCode] || 'cloud';
  };

  return (
    <i className={`fas fa-${getAnimatedIcon(code)} ${small ? 'small' : ''}`}></i>
  );
};

export default WeatherIcon;