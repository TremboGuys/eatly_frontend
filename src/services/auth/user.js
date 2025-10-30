import { api } from "@/plugins/axios";
import { useToastStore } from "@/stores/toastStore";

class UserService {
    async registerUser(user) {
        const response = await api.post('user/register/', user, { headers: { skipAuth: true } });
        return response.data;
    }

    async updateUser(user) {
        const response = await api.patch('user/update/', user);
        return true;
    }

    async registerTelephone(telephone) {
        await api.post('telephones/', telephone, { headers: { skipAuth: true } });
        return true;
    }

    async updateTelephone(telephone) {
        await api.patch('telephones/me/', telephone);
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

    async updateNaturalPersonGoogle(naturalPersonData) {
        await api.patch(`naturalPersons/me/google/`, naturalPersonData, { headers: { skipAuth: true } });
        return true;
    }

    async updateProfileNaturalPerson(naturalPersonData) {
        await api.patch(`naturalPersons/me/`, naturalPersonData);
        return true;
    }

    async registerByGoogle(data) {
        const response = await api.post('user/register/google/', data, { headers: { skipAuth: true } });
        return response.data;
    }

    async verifyEmail(token) {
        const response = await api.post('user/register/code/', token, { headers: { skipAuth: true } });
        return response.data;
    }
}

export default new UserService();