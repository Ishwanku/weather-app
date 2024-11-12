import React from "react";

const WeatherCard = ({ data }) => {
  return (
    <div className="weather-card">
      <h2>
        {data.location.name}, {data.location.country}
      </h2>
      <p>
        Temperature: {data.current.temp_c} °C / {data.current.temp_f} °F
      </p>
      <p>Condition: {data.current.condition.text}</p>
      <p>Wind Speed: {data.current.wind_kph} kph</p>
      <p>Humidity: {data.current.humidity} %</p>
      <p>Cloud Coverage: {data.current.cloud} %</p>
      <p>Last Updated: {data.current.last_updated}</p>
      <img
        src={data.current.condition.icon}
        alt={data.current.condition.text}
      />
    </div>
  );
};

export default WeatherCard;
