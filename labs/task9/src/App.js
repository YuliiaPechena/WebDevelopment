import React, { useState } from "react";
import { Form } from "./components/Form";
import { Info } from "./components/Info";
import { Weather } from "./components/Weather";

function App() {
  const API_Key = "58c3cca0622442647544fb302144ba06";

  const [weatherData, setWeatherData] = useState({
    temp: undefined,
    city: undefined,
    country: undefined,
    sunrise: undefined,
    sunset: undefined,
    humidity: undefined,
    error: undefined,
  });

  const gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    if (city) {
      try {
        const api_url = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`
        );
        const data = await api_url.json();

        if (data.cod === "404") {
          setWeatherData({
            ...weatherData,
            error: "City not found",
          });
        } else {
          setWeatherData({
            temp: data.main.temp,
            city: data.name,
            country: data.sys.country,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset,
            humidity: data.main.humidity,
            error: "",
          });
        }
      } catch (error) {
        setWeatherData({
          ...weatherData,
          error: "Error fetching weather data",
        });
      }
    }
  };

  return (
    <div>
      <p>Hello!!!</p>
      <Info />
      <Form gettingWeather={gettingWeather} />

      <Weather
        temp={weatherData.temp}
        city={weatherData.city}
        country={weatherData.country}
        sunrise={weatherData.sunrise}
        sunset={weatherData.sunset}
        humidity={weatherData.humidity}
        error={weatherData.error}
      />
    </div>
  );
}

export default App;
