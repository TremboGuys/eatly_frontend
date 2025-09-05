import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://eatly-backend-cbai.onrender.com/api/',
  baseURL: 'http://127.0.0.1:8000/api/',
  withCredentials: true,
  headers: {
    Authorization: `${localStorage.getItem('refresh') != 'undefined' ? 'Bearer ' + localStorage.getItem('refresh') : ''}`
  }           
});