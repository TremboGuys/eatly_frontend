import { defineStore } from "pinia";
import { ref } from "vue";
import { RestaurantService } from "@/services";
import { useToastStore } from "@/stores/toastStore";
import router from "@/router";

export const useRestaurantStore = defineStore('restaurant', () => {
  const toastStore = useToastStore();
  const restaurant = ref({});
  const restaurants = ref([]);
  const restaurantsRecentlyViewed = ref([]);
  const categoriesRestaurant = ref([]);

  async function getRestaurants() {
    try {
      const data = await RestaurantService.getRestaurants();

      if (data.length == 0) {
        toastStore.notify("Nenhum restaurante encontrado.", "error");
        return [];
      }
      restaurants.value = data;

    } catch (error) {
      console.error('Error in GET restaurants: ', error);
      toastStore.notify(
        "Erro ao buscar restaurantes. Por favor, tente novamente.",
        "error"
      );
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

  async function getRestaurantRecentlyViewed() {
    try {
      const response = await RestaurantService.getRestaurantRecentlyViewed();
      restaurantsRecentlyViewed.value = response;
    } catch(error) {
      console.error('Error in GET restaurants recently viewed: ', error);
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

  async function createRestaurantView(idRestaurant) {
    const indexView = restaurantsRecentlyViewed.value.findIndex(i => i.restaurant_data.id == idRestaurant.restaurant);
    if (indexView != -1) {
      try {
        const restaurantView = restaurantsRecentlyViewed.value[indexView];
        await RestaurantService.updateViewedRestaurant(restaurantsRecentlyViewed.value[indexView].id);
        restaurantsRecentlyViewed.value = [restaurantView, ...restaurantsRecentlyViewed.value.filter(i => i.restaurant_data.id != idRestaurant.restaurant)];
      }
      catch(error) {
        console.error("Error in UPDATE restaurant viewed: ", error);
      }
    }
    else {
      try {
        const restaurantView = await RestaurantService.createViewedRestaurant(idRestaurant);

        if (restaurantsRecentlyViewed.value.length == 10) {
          restaurantsRecentlyViewed.value.splice(9, 1);
        }
        restaurantsRecentlyViewed.value = [restaurantView, ...restaurantsRecentlyViewed.value];
      }
      catch(error) {
        console.error("Error in POST restaurant view: ", error);
      }
    }
  }
  return {
    restaurant,
    restaurants,
    restaurantsRecentlyViewed,
    categoriesRestaurant,
    getRestaurant,
    getRestaurants,
    getRestaurantRecentlyViewed,
    createRestaurant,
    createRestaurantView
  };
});