import axios from 'axios';

const API_KEY = '53bc5ae6a66d17b1ec4d3b57b05317f7';
const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}q=${city},us&appid=${API_KEY}`;
    const req = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: req
    };
}
