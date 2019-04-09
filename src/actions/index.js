// axios will handle the ajax api request to the weather-map site
// containing the api we will use
import axios from 'axios';

// Api key for mock weather data
const API_KEY = '6f5242710fe360fb2cf785c505ebeb76';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const url = `${ROOT_URL}q=${city},ca&appid=${API_KEY}`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
