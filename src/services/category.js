import { api } from "@/plugins/axios"

class CategoryService {
    async getCategories() {
      try {
        const response = await api.get('categories/');
        return response.data;
      }
      catch (error) {
        console.error("Error in GET categories: ", error);
        throw error;
      }
    }

    async createCategory(category) {
      try {
        const response = await api.post('categories/', category);
        return response.data;
      }
      catch (error) {
        console.error("Error in POST category: ", error);
        throw error;
      }
    }

    async updateCategory(category) {
      try {
        const response = await api.patch('categories/', category);
        return response.data;
      }
      catch (error) {
        console.error("Error in PATCH categories: ", error);
        throw error;
      }
    }

    async deleteCategory(id) {
      try {
        const response = await api.delete(`categories/${id}`);
        return true;
      }
      catch (error) {
        console.error("Error in DELETE category: ", error);
        throw error;
      }
    }
}

export default new CategoryService();