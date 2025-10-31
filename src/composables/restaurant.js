import { ref } from "vue";
import { RestaurantService } from "@/services";
import { useToastStore } from "@/stores/toastStore";

export const useRestaurantComposable = () => {
  const restaurants = ref([]);
  const loading = ref(false);
  const toastStore = useToastStore();

  async function searchRestaurants(query) {
    if (!query.trim()) {
      restaurants.value = [];
      return;
    }

    loading.value = true;

    try {
      // 🔹 Se sua API suportar busca por nome:
      // const data = await RestaurantService.searchRestaurantsByName(query);

      // 🔹 Caso contrário, busca tudo e filtra localmente:
      const data = await RestaurantService.getRestaurants();
      restaurants.value = data.filter((r) =>
        r.name.toLowerCase().includes(query.toLowerCase())
      );
    } catch (error) {
      toastStore.notify("Erro ao buscar restaurantes.", "error");
      restaurants.value = [];
    } finally {
      loading.value = false;
    }
  }

  return { restaurants, loading, searchRestaurants };
};
