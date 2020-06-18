import axios from 'axios';

const host = "https://api.openweathermap.org";
const apiKey = "b1f489eab4a67a3209b55a0957d646ad";

export const getDaily = ({ lat, lng }) => {
    return axios.get(`${host}/data/2.5/onecall?lat=${lat}&lon=${lng}&%20exclude=hourly,daily&appid=${apiKey}`)
    .then(res => res.data);
}