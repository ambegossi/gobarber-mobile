import axios from 'axios';

const api = axios.create({
  baseURL: 'http://2d6a0c81.ngrok.io',
});

export default api;
