import React, { useState } from "react";
import { fetchWeather } from "../../api/fetchWeather";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});

  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchWeather(city);

      setWeather(data);
      setCity("");
    }
  };

  return (
    <div className="main-container">
      <div className="search-content">
        <input
          type="text"
          className="search"
          placeholder="Search..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={search}
        />
      </div>
      <div className="weather-detalies">
        {weather.main && (
          <div className="city">
            <h2 className="city-name">
              <span>{weather.name}</span>
              <sup>{weather.sys.country}</sup>
            </h2>
            <div className="city-temp">
              {Math.round(weather.main.temp)}
              <sup>&deg;C</sup>
            </div>
            <div className="info">
              <p>
                {weather.weather[0].description === "clear sky"
                  ? "Aydın səma"
                  : "scattered clouds"
                  ? "Az buludlu"
                  : "Günəşli"}
              </p>
              <img
                className="city-icon"
                src={
                  `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png` ===
                  "https://openweathermap.org/img/wn/01d@2x.png"
                    ? "https://www.freeiconspng.com/uploads/sunny-icon-0.png"
                    : "http://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Cloud-PNG-Transparent-Image-500x272.png"
                }
                alt={weather.weather[0].description}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
