import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080/rest/api',
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true
});

export default api; 