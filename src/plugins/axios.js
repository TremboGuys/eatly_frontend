import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://eatly-backend-cbai.onrender.com/api/',
  // baseURL: 'http://127.0.0.1:8000/api/',
  withCredentials: true,        
});

api.interceptors.request.use(config => {
  const token = localStorage.getItem('access');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});