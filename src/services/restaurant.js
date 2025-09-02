import { api } from "@/plugins/axios"

class RestaurantService {
    async getRestaurant() {
      try {
        const response = await api.get('/api/restaurants/');
        return response.data;
      }
      catch (error) {
        console.error("Error in GET restaurants: ", error);
        throw error;
      }
    }

    async createRestaurant(restaurant) {
      try {
        const response = await api.post('/api/restaurants/', restaurant);
        return response.data;
      }
      catch (error) {
        console.error("Error in POST restaurant: ", error);
        throw error;
      }
    }

    async updateRestaurant(restaurant) {
      try {
        const response = await api.patch('/api/restaurants/', restaurant);
        return response.data;
      }
      catch (error) {
        console.error("Error in PATCH restaurant: ", error);
        throw error;
      }
    }

    async deleteRestaurant(id) {
      try {
        const response = await api.delete(`/api/restaurants/${id}`);
        return true;
      }
      catch (error) {
        console.error("Error in DELETE restaurant: ", error);
        throw error;
      }
    }
}

export default new RestaurantService();