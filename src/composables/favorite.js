// composables/useFavorites.js
import { ref, onMounted } from "vue";
import FavoriteService from "@/services/favorite";
import ProductService from "@/services/product";
import { useToastStore } from "@/stores";

export const useFavorites = () => {
  const favoriteProducts = ref([]);
  const loading = ref(true);
  const toastStore = useToastStore();

  const loadFavorites = async () => {
    try {
      const favorites = await FavoriteService.getFavorites();
      const uniqueIds = [...new Set(favorites.map(f => f.product))];
      favoriteProducts.value = await Promise.all(
        uniqueIds.map(id => ProductService.getProduct(id))
      );
    } catch (error) {
      console.error(error);
      toastStore.notify("Erro ao carregar favoritos", "error");
    } finally {
      loading.value = false;
    }
  };

  onMounted(loadFavorites);

  return { favoriteProducts, loading, loadFavorites };
};
