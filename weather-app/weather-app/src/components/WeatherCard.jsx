import React from 'react';
import './WeatherCard.css';

const WeatherCard = ({ weather }) => {
  const { name, main, weather: weatherData } = weather;

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <p>{weatherData[0].description}</p>
      <p>Temperature: {main.temp}°C</p>
      <p>Feels Like: {main.feels_like}°C</p>
      <p>Humidity: {main.humidity}%</p>
    </div>
  );
};

export default WeatherCard;
