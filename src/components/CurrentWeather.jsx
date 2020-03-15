import React from 'react';
import { useSelector } from 'react-redux';
import { head } from 'lodash';
import moment from 'moment';
import Weather from './Weather';

const CurrentWeather = () => {
    const weatherNow = useSelector((state) => state.currentWeather);
    const {
      name, sys, weather, main, dt, wind, coord,
    } = weatherNow;
    return name
        ? <>
            <div className="weather-now">
              <h1 style={{color: '#fff'}}>{ name }</h1>
              <div className="weather-now-data">
                <img src={`http://openweathermap.org/img/wn/${head(weather).icon}@2x.png`} />
                <strong>{ `${Math.round(main.temp)} °C` }</strong>
                <p>{ head(weather).description }</p>
              </div>
              <p>{ moment.unix(dt).locale('ru').format('LLL') }</p>
              <table>
                <tr>
                  <td>Ветер</td>
                  <td>{ wind.speed } м\с</td>
                </tr>
                <tr>
                  <td>Давление</td>
                  <td>{ main.pressure }гПа</td>
                </tr>
                <tr>
                  <td>Влажность</td>
                  <td>{ main.humidity }%</td>
                </tr>
                <tr>
                  <td>Восход</td>
                  <td>{ moment.unix(sys.sunrise).locale('ru').format('LT') }</td>
                </tr>
                <tr>
                  <td>Закат</td>
                  <td>{ moment.unix(sys.sunset).locale('ru').format('LT') }</td>
                </tr>
                <tr>
                  <td>Гео координаты</td>
                  <td style={{ color: '#eb7f4e' }}>[{ coord.lat }, { coord.lon }]</td>
                </tr>
              </table>
            </div>
            <Weather/>
          </>

        : null;
};

export default CurrentWeather;
