import axios from 'axios';

const api = axios.create({
  baseURL: 'http://6a8578f8.ngrok.io',
});

export default api;
