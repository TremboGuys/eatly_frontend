import { api } from "@/plugins/axios"

class RestaurantService {
    async   getRestaurants(page=1) {
      const response = await api.get(`restaurants?page=${page}`);
      return response.data;
    }

    async getRestaurant(id) {
      const response = await api.get(`restaurants/${id}/`);
      return response.data;
    }

    async getRestaurantRecentlyViewed() {
      const response = await api.get('recently-restaurant-views');
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

    async createViewedRestaurant(id) {
      const response = await api.post('recently-restaurant-views/', id);
      return response.data;
    }

    async updateViewedRestaurant(id) {
      await api.patch(`recently-restaurant-views/${id}/`);
      return true;
    }
}

export default new RestaurantService();