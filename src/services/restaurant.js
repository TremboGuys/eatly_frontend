import { api } from "@/plugins/axios"

class RestaurantService {
    async getRestaurants() {
      const response = await api.get('restaurants/');
      return response.data;
    }

    async getRestaurant(id) {
      const response = await api.get(`restaurants/${id}/`);
      return response.data;
    }

    async createRestaurant(restaurant) {
        const response = await api.post('restaurants/', restaurant);
        return response.data;
    }

    async updateRestaurant(restaurant) {
      const response = await api.patch('restaurants/', restaurant);
      return response.data;
    }

    async deleteRestaurant(id) {
      const response = await api.delete(`restaurants/${id}`);
      return true;
    }
}

export default new RestaurantService();