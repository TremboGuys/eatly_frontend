import { ref } from "vue";
import { RestaurantService } from "@/services";
import { useToastStore } from "@/stores/toastStore";

export const useRestaurantComposable = () => {
  const toastStore = useToastStore();
  async function getRestaurants() {

    try {
      const data = await RestaurantService.getRestaurants();

      if (data.length == 0) {
        toastStore.notify("Nenhuma categoria encontrada.", "error");
        return [];
      }

      return data;

    } catch (error) {
      toastStore.notify(
        "Erro ao buscar categorias. Por favor, tente novamente.",
        "error"
      );
      return false;
    }
  }

  async function createRestaurant(restaurant) {
    try {
      const restaurantFormData = new FormData();
      restaurantFormData.append("name", restaurant.name);
      restaurantFormData.append("file", restaurant.file);

      await RestaurantService.createRestaurant(restaurantFormData);
      toastStore.notify("Restaurante criado com sucesso!", "success");
    } catch(error) {
      toastStore.notify("Erro ao criar restaurante.", "error");
      return false;
    }
  }

  return {
    getRestaurants,
    createRestaurant
  };
};
