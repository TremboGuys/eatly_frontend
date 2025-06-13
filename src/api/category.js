import { api } from "@/plugins/axios"

export default {
    async getCategories() {
      const response = await api.get('/api/categories/');
      return response.data;
    }
  };