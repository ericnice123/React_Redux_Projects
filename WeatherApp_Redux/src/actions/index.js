import axios from 'axios';
const API_KEY = 'e7cb038a6874833cab3f0d50225dfdb6';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`; // es6 string concate

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather( city ) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get( url );
    console.log( 'request: ', request );

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}