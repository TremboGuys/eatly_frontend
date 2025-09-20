import { ref } from "vue";
import { RestaurantService } from "@/services";
import { useToastStore } from "@/stores/toastStore";
import router from "@/router";
import { categories } from "@/metaDatas/categories";

export const useRestaurantComposable = () => {
  const toastStore = useToastStore();
  const restaurant = ref({});
  const categoriesRestaurant = ref([]);

  async function getRestaurants() {
    try {
      const data = await RestaurantService.getRestaurants();

      if (data.length == 0) {
        toastStore.notify("Nenhum restaurante encontrado.", "error");
        return [];
      }

      return data;

    } catch (error) {
      toastStore.notify(
        "Erro ao buscar restaurantes. Por favor, tente novamente.",
        "error"
      );
      return false;
    }
  }

  async function getRestaurant(id) {
    try {
      const response = await RestaurantService.getRestaurant(id);
      restaurant.value = response;
      getCategories();
    } catch(error) {
      console.error('Error in GET retrieve Restaurant: ', error);
      toastStore.notify("Erro ao abrir restaurante!", "error");
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

  function getCategories() {
    const categoriesSet = new Set();
    for (const product of restaurant.value.products) {
      for (const category of product.categories) {
        categoriesSet.add(category.name);
      }
    }
    categoriesRestaurant.value = Array.from(categoriesSet);
    console.log(categoriesRestaurant.value);
  }

  return {
    restaurant,
    categoriesRestaurant,
    getRestaurant,
    getRestaurants,
    createRestaurant
  };
};
