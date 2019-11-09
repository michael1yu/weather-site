import React from 'react';
import WeatherComponent from './WeatherComponent';
import './LocationCard.css';

const LocationCard = props => {
    return(
        <div className="card">
            <h1 className="title">{props.title}</h1>
            <WeatherComponent woeid={props.woeid} />
        </div>
    );
}

export default LocationCard;