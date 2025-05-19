import axios from 'axios';
const API_KEY = import.meta.env.VITE_NEWS_API;

const axiosClient = axios.create({
    baseURL: 'https://newsapi.org/v2',
    headers: {
        'Content-Type': 'application/json',
    },
    params: {
        apiKey: API_KEY,
    },
})

export default axiosClient;