// App.js
import React, { useState, useEffect } from "react";
import SearchBox from "./components/SearchBox";
import WeatherCard from "./components/WeatherCard";
import "./App.css";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState("London");
  const [error, setError] = useState(null);

  const fetchWeatherData = async (location) => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=8c1747d9dfdf463b967132045240411&q=${location}`
      );
      if (!response.ok) throw new Error("Failed to fetch weather data.");
      const data = await response.json();
      setWeatherData(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchWeatherData(location);
  }, [location]);

  return (
    <div className="app-container">
      <h1>Weather App</h1>
      <div className="weatherCard1">
        <SearchBox onSearch={(newLocation) => setLocation(newLocation)} />
        {error ? (
          <p>Error: {error}</p>
        ) : (
          weatherData && <WeatherCard data={weatherData} />
        )}
      </div>
    </div>
  );
};

export default App;
