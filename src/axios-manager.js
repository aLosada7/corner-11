import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5000'
});

// Interceptor for api calls
instance.interceptors.request.use(
    async config => {
        const token = localStorage.getItem('token');
        config.headers = {
            'Authorization': `Bearer ${token}`
        }
        return config;
    },
    error => {
        Promise.reject(error);
    }
)

// http://localhost:5000
// https://corner-11-api.herokuapp.com

export default instance;