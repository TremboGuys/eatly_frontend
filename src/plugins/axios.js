import axios from 'axios';
import { useAuthStore } from '@/stores';
import { useRouter } from 'vue-router';
import { useToastStore } from '@/stores';
import router from '@/router';

export const api = axios.create({
  // baseURL: 'https://eatly-backend-cbai.onrender.com/api/',
  baseURL: 'http://127.0.0.1:8000/api/',
  withCredentials: true,        
});

api.interceptors.request.use(async (config) => {
  if (config.headers?.skipAuth) return config;

  const authStore = useAuthStore();
  if (await authStore.verifyAuth()) {
    const token = localStorage.getItem("access");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  }

  return Promise.reject(new axios.Cancel("Sessão expirada"));
});

api.interceptors.response.use(
  res => res,
  err => {
    if (axios.isCancel(err)) {
      const toastStore = useToastStore();
      router.push({ path: "/signin" });

      router.afterEach((to) => {
        if (to.path == "/signin") {
          toastStore.notify("Seu login expirou, por favor, logue novamente!", "error");
        }
      })
    }
    return Promise.reject(err);
  }
);