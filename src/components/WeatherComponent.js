import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherDayComponent from './WeatherDayComponent';
import './WeatherComponent.css';

const weather_api_url = 'https://www.metaweather.com/api/location/';
const cors_proxy = 'https://cors-anywhere.herokuapp.com/';


const WeatherComponent = props => {

  const [weather, updateWeather] = useState({
    info: {}
  });

  useEffect(() => {
    axios.get(cors_proxy + weather_api_url + props.woeid + "/").then(
      (response) => {
        updateWeather({ info: response.data ? response.data : {} });
      });
  }, [props.woeid]);

  return (
    <div className="weather_info">
      {weather.info.consolidated_weather ? weather.info.consolidated_weather.map((day, index) => (<WeatherDayComponent day={day} index={index}/>)) : ""}
    </div>
  );
};

export default WeatherComponent;