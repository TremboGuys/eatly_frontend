import { api } from "@/plugins/axios";

class AuthService {
    async login(user) {
        const response = await api.post('/token/', user, { headers: { skipAuth: true } });
        return response.data;
    }    
    async refresh(token) {
        const response = await api.post('/token/refresh/', { refresh: token }, { headers: { skipAuth: true } });
        return response.data;
    }
    async loginByGoogle(access_token) {
        const response = await api.post('/user/login/google/', access_token, { headers: { skipAuth: true } });
        return response.data;
    }
}

export default new AuthService();