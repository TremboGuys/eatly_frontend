import { api } from "@/plugins/axios"

class OwnerService {
    async getOwner(id) {
      try {
        const response = await api.get(`owners/${id}`);
        return response.data;
      }
      catch (error) {
        console.error("Error in GET owner: ", error);
        return false;
      }
    }

    async createOwner(owner) {
      try {
        const response = await api.post('owners/', owner);
        return response.data;
      }
      catch (error) {
        console.error("Error in POST owner: ", error);
        throw error;
      }
    }

    async updateOwner(id, owner) {
      try {
        const response = await api.patch(`/api/owners/${id}`, owner);
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