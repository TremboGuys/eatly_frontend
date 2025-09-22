import { api } from "@/plugins/axios";

class AuthService {
    async login(user) {
        const request = await api.post('/token/', user, { headers: { skipAuth: true } });
        return request.data;
    }

    async refresh(token) {
        const request = await api.post('/token/refresh/', { refresh: token }, { headers: { skipAuth: true } });
        return request.data;
    }
}

export default new AuthService();