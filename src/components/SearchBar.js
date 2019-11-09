import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LocationCard from './LocationCard';
import './SearchBar.css';

const weather_api_url = 'https://www.metaweather.com/api/location/search/?query=';
const cors_proxy = 'https://cors-anywhere.herokuapp.com/';

const SearchBar = () => {
    const [inputState, updateInputState] = useState({
        enter: false,
        search: ""
    });
    const [locations, updateLocations] = useState({
        results: []
    })

    useEffect(
        () => {
            axios.get(cors_proxy + weather_api_url + inputState.search).then((response) => {
                updateLocations({ results: response.data ? response.data : [] });
            });
        }
        , [inputState]
    );

    const handleEnter = (e) => {
        if (e.key == "Enter") {
            updateInputState({ enter: true, search: e.target.value });
        }
    };

    return (
        <div>
            <div className="search">
                {!inputState.enter ? <h1>Welcome to Weather Search!</h1> : <h1>Weather Search</h1>}
                <input placeholder="City" onKeyDown={handleEnter} />
            </div>
            {!inputState.enter ? null : locations.results.map(location => (
                <div>
                    <LocationCard title={location.title} woeid={location.woeid} />
                </div>
            ))}
            {locations.results.length == 0 && <h1>No Results</h1>}
        </div>
    );
};

export default SearchBar;