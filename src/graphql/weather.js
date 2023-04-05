import { gql } from "@apollo/client";

export const GET_WEATHER_QUERY = gql`
  query WeatherByCity($cityName: String!) {
    weatherByCity(cityName: $cityName) {
      id
      cityName
      currentWeather {
        status
        icon
        temp
        feels_like
        tempHigh
        tempLow
        pressure
        humidity
        windSpeed
      }
      sunrise
      sunset
      cod
    }
  }
`;
