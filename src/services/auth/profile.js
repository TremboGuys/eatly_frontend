import { api } from "@/plugins/axios";

class ProfileService {
    async getProfile() {
        const response = await api.get('user/profile/natural-person/');
        return response.data;
    };
};

export default new ProfileService();