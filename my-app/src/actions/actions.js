import { 
  FETCH_WEATHER_REQUESTS, 
  FETCH_WEATHER_ERR,
  FETCH_WEATHER_SUCCESS,
  API_KEY,
} from '../constants/action-types';
import { BASE_URL } from '../constants/weather-url';

export const fetchWeatherRequest = (url) => ({
  type: FETCH_WEATHER_REQUESTS,
  payload: {
    url,
  },
});

export const fetchWeatherError = (err) => ({
  type: FETCH_WEATHER_ERR,
  payload: {
    err,
  },
});

export const fetchCurrentWeatherSuccess = (todaysWeather) => ({
  type: FETCH_WEATHER_SUCCESS,
  payload: {
    todaysWeather,
  },
});

export const fetchWeather = (param) => (dispatch) => {
  const url = BASE_URL + param + API_KEY;
  dispatch(fetchWeatherRequest(url));
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const todaysWeather = {
        description: data.weather[0].description,
        currentTemp: data.main.temp,
        maxTemp: data.main.temp_max,
        minTemp: data.main.temp_min,
        humidity: data.main.humidity,
      }
      dispatch(fetchCurrentWeatherSuccess(todaysWeather));
    })
    .catch((err) => { dispatch(fetchWeatherError(err)); });
};