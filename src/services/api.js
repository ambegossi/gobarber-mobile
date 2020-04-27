import axios from 'axios';

const api = axios.create({
  baseURL: 'http://3017d64b.ngrok.io',
});

export default api;
