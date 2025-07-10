import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api', //base endpoint of the server api's
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
