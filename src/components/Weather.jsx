import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { head } from 'lodash';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const Weather = () => {
  const weatherList = useSelector((state) => state.fiveDaysWeatherForecast.list);
  return (
    <div>
      <h2 style={{ marginTop: '70px', fontSize: '30px' }}>Почасовой прогноз</h2>
      <List className="weather-list">
        {
          weatherList.map((weatherItem) => (
            <ListItem className="weather-list-item" key={weatherItem.dt}>
              <ListItemAvatar>
                <Avatar>
                  <img src={`http://openweathermap.org/img/wn/${head(weatherItem.weather).icon}.png`} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={`${Math.round(weatherItem.main.temp)} °C ${head(weatherItem.weather).description} Ветер: ${weatherItem.wind.speed} м/с`}
                secondary={moment.unix(weatherItem.dt).locale('ru').format('llll')}
              />
            </ListItem>
          ))
        }
      </List>
    </div>
  );
};

export default Weather;
