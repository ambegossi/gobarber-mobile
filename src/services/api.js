import axios from 'axios';

const api = axios.create({
  baseURL: 'http://4fb985a7.ngrok.io',
});

export default api;
