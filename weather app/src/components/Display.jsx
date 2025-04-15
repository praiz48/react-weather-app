import React from "react";

const Display = ({
  Country = "no where",
  Temp = 0,
  Weather = "unknown",
  Icon = "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png",
}) => {
  return (
    <div>
      <ul className="weather-info-list">
        <li className="weather-info-item">
          <img src={Icon} alt="weather icon" />
        </li>
        <li className="weather-info-item">Weather: {Weather}</li>
        <li className="weather-info-item">Country : {Country}</li>
        <li className="weather-info-item">Temperature: {Temp}°C</li>
      </ul>
    </div>
  );
};

export default Display;
