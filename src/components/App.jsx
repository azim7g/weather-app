import React from 'react';
import { useSelector } from 'react-redux';
import Form from './Form';
import Weather from './Weather';
import NotFoundPage from './NotFoundPage';
import CurrentWeather from './CurrentWeather';

const App = () => {
  const requestState = useSelector((state) => state.weatherUI.requestingState);
  return (
    <div className="weather">
      <div className="weather-container">
        <h2 className="weather-title">Прогноз погоды</h2>
        <hr/>
        <Form/>
        <p className="weather-description">Текущая погода и прогнозы  в твоем городе</p>
        { requestState === 'failure' ? <NotFoundPage/> : <CurrentWeather/> }
      </div>
    </div>
  );
};

export default App;
