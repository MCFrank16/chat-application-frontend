import axios from 'axios';

const request = axios.create({
    // https://cata-16.herokuapp.com
    baseURL: 'http://localhost:9000'
});

export default request;
