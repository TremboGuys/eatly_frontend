import { api } from "@/plugins/axios";

class AuthService {
    async login(user) {
        try {
            const request = await api.post('/token/', user);
            return request.data;
        }
        catch(error) {
            console.error(error);
            return false;
        }
    }

    async refresh(token) {
        try {
            const request = await api.post('/token/refresh/', { refresh: token }, { headers: { skipAuth: true } });
            return request.data;
        }
        catch(error) {
            console.error(error);
            return false;
        }
    }
}

export default new AuthService();