import React from "react";

export const Weather = ({ temp, city, country, sunrise, sunset, humidity, error }) => {
  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : (
        <div>
          <p>Location: {city}, {country}</p>
          <p>Temperature: {temp}°C</p>
          <p>Humidity: {humidity}%</p>
          <p>Sunrise: {new Date(sunrise * 1000).toLocaleTimeString()}</p>
          <p>Sunset: {new Date(sunset * 1000).toLocaleTimeString()}</p>
        </div>
      )}
    </div>
  );
};
