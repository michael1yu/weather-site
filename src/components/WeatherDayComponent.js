import React from 'react';
import './WeatherDayComponent.css'

const weather_icon_url = "https://www.metaweather.com/static/img/weather/png/64/";

const images = {
    "Snow": "sn",
    "Sleet": "sl",
    "Hail": "h",
    "Thunder": "t",
    "Heavy Rain": "hr",
    "Light Rain": "lr",
    "Showers": "s",
    "Heavy Cloud": "hc",
    "Light Cloud": "lc",
    "Clear": "c"
};

const dayOftheWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];


const WeatherDayComponent = ({ day, index }) => {

    return (
        <div className={index == 0 ? "forecast_today" : "forecast"}>
            <h1>{day ? dayOftheWeek[(new Date(day.applicable_date)).getDay()] : ""}</h1>
            <h3>{day ? day.weather_state_name : ""}</h3>
            {day && <img src={weather_icon_url + images[day.weather_state_name] + ".png"} />}
        </div>
    );
}

export default WeatherDayComponent;