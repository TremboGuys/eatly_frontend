import { api } from "@/plugins/axios";
import { useToastStore } from "@/stores/toastStore";

class UserService {
    async register(user) {
        const request = await api.post('/user/register/', user, { headers: { skipAuth: true } });
        return true;
    }
}

export default new UserService();