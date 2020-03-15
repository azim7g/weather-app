const host = 'http://api.openweathermap.org';

export default {
  weather: () => [host, 'data/2.5/forecast'].join('/'),
  currentWeather: () => [host, 'data/2.5/weather'].join('/'),
};
