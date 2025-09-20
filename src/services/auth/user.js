import { api } from "@/plugins/axios";
import { useToastStore } from "@/stores/toastStore";

class UserService {
    async registerUser(user) {
        console.log(user.get("email"));
        const response = await api.post('user/register/', user, { headers: { skipAuth: true } });
        return response.data;
    }

    async registerTelephone(telephone) {
        await api.post('telephones/', telephone, { headers: { skipAuth: true } });
        return true;
    }

    async regiterAddress(address) {
        await api.post('addresses/', address, { headers: { skipAuth: true } });
        return true;
    }

    async registerNaturalPerson(naturalPersonData) {
        await api.post('naturalPersons/', naturalPersonData, { headers: { skipAuth: true } });
        return true;
    }
}

export default new UserService();