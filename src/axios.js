import axios from 'axios';

const request = axios.create({
    baseURL: 'https://cata-16.herokuapp.com'
});

export default request;
