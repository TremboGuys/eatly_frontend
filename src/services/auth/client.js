import { api } from "@/plugins/axios";
import { useToastStore } from "@/stores/toastStore";

class ClientService {
    async register(user) {
        try {
            const request = await api.post('/users/register/person/', user);
            return true;
        } catch(error) {
            console.error(error);
            return false;
        }
    }
}

export default new ClientService();