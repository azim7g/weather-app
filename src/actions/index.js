import { createAction } from 'redux-actions';
import axios from 'axios';
import routes from '../routes';

export const getWeatherRequest = createAction('WEATHER_GET_REQUEST');
export const getWeatherFailure = createAction('WEATHER_GET_FAILURE');
export const getWeatherSuccess = createAction('WEATHER_GET_SUCCESS');

export const getCurrentWeatherSuccess = createAction('CURRENT_WEATHER_GET_SUCCESS');

export const getCurrentWeather = (city) => async (dispatch) => {
  dispatch(getWeatherRequest());
  try {
    const response = await axios.get(routes.currentWeather(), {
      params: {
        q: city,
        appid: '2d55fd7f7981a260efa634d67d490300',
        units: 'metric',
        lang: 'ru',
      },
    });
    dispatch(getCurrentWeatherSuccess({ weatherNow: response.data }));
    dispatch(getWeatherSuccess());
  } catch (e) {
    dispatch(getWeatherFailure());
    console.log(e);
  }
};

export const getWeatherForFiveDaysSuccess = createAction('WEATHER_FOR_FIVE_DAYS_GET_SUCCESS');

export const getWeatherForFiveDays = (city) => async (dispatch) => {
  dispatch(getWeatherRequest());
  try {
    const response = await axios.get(routes.weather(), {
      params: {
        q: city,
        appid: '2d55fd7f7981a260efa634d67d490300', // этот ключ здесь хранить не стоит, его лучше подключать в момент создания папки dist, чаще всего это делается с помощью CI/CD в терминале создается переменная окружения и в нее заносится этот ключ
        units: 'metric',
        lang: 'ru',
      },
    });
    dispatch(getWeatherForFiveDaysSuccess({ weather: response.data }));
    dispatch(getWeatherSuccess());
    // дата погоды приходит в виде  timestamp - количество секунд от начало создания linux, т.е с 1970г
  } catch (e) {
    dispatch(getWeatherFailure());
    console.log(e);
  }
};
