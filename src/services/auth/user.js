import { api } from "@/plugins/axios";
import { useToastStore } from "@/stores/toastStore";

class UserService {
    async registerUser(user) {
        const response = await api.post('user/register/', user, { headers: { skipAuth: true } });
        return response.data;
    }

    async registerTelephone(telephone) {
        await api.post('telephones/', telephone);
        return true;
    }

    async updateTelephone(telephone) {
        await api.patch('telephones/me/', telephone);
        return true;
    }

    async regiterAddress(address) {
        await api.post('addresses/', address);
        return true;
    }

    async registerNaturalPerson(naturalPersonData) {
        await api.post('naturalPersons/', naturalPersonData);
        return true;
    }

    async updateNaturalPerson(naturalPersonData) {
        await api.patch(`naturalPersons/me/`, naturalPersonData);
        return true;
    }

    async registerByGoogle(data) {
        const response = await api.post('user/register/google/', data, { headers: { skipAuth: true } });
        console.log(response);
        return response.data;
    }
}

export default new UserService();