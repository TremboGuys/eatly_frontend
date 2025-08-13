import { api } from "@/plugins/axios"

class OwnerService {
    async getOwner() {
      try {
        const response = await api.get('/api/owners/');
        return response.data;
      }
      catch (error) {
        console.error("Error in GET owners: ", error);
        throw error;
      }
    }

    async createOwner(owner) {
      try {
        const response = await api.post('/api/owners/', owner);
        return response.data;
      }
      catch (error) {
        console.error("Error in POST owner: ", error);
        throw error;
      }
    }

    async updateOwner(owner) {
      try {
        const response = await api.patch('/api/owners/', owner);
        return response.data;
      }
      catch (error) {
        console.error("Error in PATCH owner: ", error);
        throw error;
      }
    }

    async deleteOwners(id) {
      try {
        const response = await api.delete(`/api/owners/${id}`);
        return true;
      }
      catch (error) {
        console.error("Error in DELETE owner: ", error);
        throw error;
      }
    }
}

export default new OwnerService();