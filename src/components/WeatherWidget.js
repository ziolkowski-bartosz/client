import React, { useState, useRef, useEffect } from 'react'
import "../styles/WeatherWidget.css"
import { useLazyQuery } from '@apollo/client'
import { GET_WEATHER_QUERY } from '../graphql/Queries'

const WeatherWidget = () => {
  const [cityName, setCityName] = useState("");
  const inputRef = useRef(null);

  const [getWeather, { data, error, loading }] = useLazyQuery(GET_WEATHER_QUERY, {
    variables: {
      cityName: cityName
    },
  });


  return (
    <div className="weatherWidget">
      <h2 className="weatherWidgetSlogan">Check the weather! 🌅</h2>
      <div>
        <input
          ref={inputRef}
          type="text"
          className="form-control weatherWidgetInput"
          placeholder="Enter city name..."
        />
        <button
          className="submit-btn weatherBtn"
          onClick={() => {
            setCityName(inputRef.current.value);
            getWeather();
          }}
        >
          Search
        </button>
      </div>
      <div className="weatherContainer">
        {(error && error.message === "404: Not Found" && (
          <h1 className="weatherNotFnd">Place not found 🤔</h1>
        )) ||
          (loading && <h1 className="weatherLoading">Loading ...</h1>) ||
          (error && error.message === "404: Not Found" && (
            <h1 className="weatherNotFnd">Place not found 🤔</h1>
          )) || (data && (
            <>
              <h2 className="weatherInfo weatherDesc">
                {data.weatherByCity.currentWeather.status}
              </h2>
              <h2 className="weatherInfo">
                🌡: {data.weatherByCity.currentWeather.temp} &#8451;
              </h2>
              <h2 className="weatherInfo weatherHumidity">
                ☔: {data.weatherByCity.currentWeather.humidity}%
              </h2>
              <img
                className="weatherIcon"
                alt="weather icon"
                src={`http://openweathermap.org/img/w/${data.weatherByCity.currentWeather.icon}.png`}
              />
              <h2 className="weatherInfo weatherSunrise">
                🌅: {data.weatherByCity.sunrise}
              </h2>
              <h2 className="weatherInfo weatherSunset">
                🌇: {data.weatherByCity.sunset}
              </h2>
            </>
          )) || (<h1 className="weatherLoading">👨‍🍳🍳👩‍🍳</h1>)}
      </div>
    </div>
  );
}

export default WeatherWidget