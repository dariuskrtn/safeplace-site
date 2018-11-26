import axios from 'axios';
import * as config from './config';

export default() => {
    return axios.create({
        baseURL: config.default.baseUrl,
        withCredentials: false,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
}