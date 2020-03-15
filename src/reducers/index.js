import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const currentWeather = handleActions({
  [actions.getCurrentWeatherSuccess](state, { payload: { weatherNow } }) {
    return weatherNow;
  },
}, {
  name: '',
  main: {},
  weather: [
    {
      icon: '',
      description: '',
    },
  ],
  sys: {},
});

const fiveDaysWeatherForecast = handleActions({
  [actions.getWeatherForFiveDaysSuccess](state, { payload: { weather } }) {
    return weather;
  },
}, {
  list: [],
  city: {
    name: '',
  },
});

const weatherUI = handleActions({
  [actions.getWeatherRequest](state) {
    return {
      ...state,
      requestingState: 'request',
    };
  },
  [actions.getWeatherFailure](state) {
    return {
      ...state,
      requestingState: 'failure',
    };
  },
  [actions.getWeatherSuccess](state) {
    return {
      ...state,
      requestingState: 'success',
    };
  },
}, {});

export default combineReducers({
  fiveDaysWeatherForecast,
  currentWeather,
  weatherUI,
  form: formReducer,
});
