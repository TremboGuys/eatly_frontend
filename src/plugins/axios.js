import axios from 'axios';

export const api = axios.create({
  // baseURL: 'https://eatly-backend-cbai.onrender.com/',
  baseURL: 'http://127.0.0.1:8000/', 
  withCredentials: true,           
});