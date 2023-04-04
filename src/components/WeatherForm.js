import "../assets/styles/WeatherForm.css";

import React, { useRef, useState } from "react";

import { GET_WEATHER_QUERY } from "../graphql/weather";
import { useLazyQuery } from "@apollo/client";

function WeatherWidget() {
  const [cityName, setCityName] = useState("");
  const cityInputRef = useRef(null);

  const [getWeather, { data, error, loading }] = useLazyQuery(
    GET_WEATHER_QUERY,
    {
      variables: {
        cityName: cityName,
      },
    }
  );

  const handleGetWeather = () => {
    setCityName(cityInputRef.current.value);
    getWeather();
  };

  return (
    <div className="inbuilt-form">
      <h2 className="form-slogan">Check the weather! 🌅</h2>
      <div className="form-group">
        <input
          ref={cityInputRef}
          className="form-control weather-widget-input"
          placeholder="Enter city name..."
        />
        <button className="form-btn submit-btn" onClick={handleGetWeather}>
          Search
        </button>
      </div>
      <div className="weather-widget-info-container">
        {(loading && <h1 className="weather-widget-notice">Loading ...</h1>) ||
          (error?.message && error.message === "404: Not Found" && (
            <h1 className="weather-widget-notice">Place not found 🤔</h1>
          )) ||
          (data && (
            <>
              <div className="form-group">
                <h2>🌡: {data.weatherByCity.currentWeather.temp} &#8451;</h2>
                <h2>☔: {data.weatherByCity.currentWeather.humidity}%</h2>
              </div>
              <h2>
                {data.weatherByCity.currentWeather.status}
                <img
                  className="weather-icon"
                  alt="weather icon"
                  src={`http://openweathermap.org/img/w/${data.weatherByCity.currentWeather.icon}.png`}
                />
              </h2>
              <div className="form-group">
                <h2>🌅: {data.weatherByCity.sunrise}</h2>
                <h2>🌇: {data.weatherByCity.sunset}</h2>
              </div>
            </>
          )) || <h1 className="weather-widget-notice">👨‍🍳🍳👩‍🍳</h1>}
      </div>
    </div>
  );
}

export default WeatherWidget;
