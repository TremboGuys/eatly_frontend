import axios from 'axios';
import { useAuthStore } from '@/stores';

export const api = axios.create({
  baseURL: 'https://eatly-backend-cbai.onrender.com/api/',
  // baseURL: 'http://127.0.0.1:8000/api/',
  withCredentials: true,        
});

api.interceptors.request.use(async (config) => {
  if (config.headers?.skipAuth) return config;

  const authStore = useAuthStore();
  if (await authStore.verifyAuth()) {
    const token = localStorage.getItem('access');
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
