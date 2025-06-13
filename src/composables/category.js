import { ref } from "vue";
import APICategory from "@/api/category";
import { useToastStore } from "@/stores/toastStore";

export const useCategory = () => {
  async function getCategories() {
    const toastStore = useToastStore();

    try {
      const data = await APICategory.getCategories(); // <- AQUI o await

      if (!data || data.length === 0) {
        toastStore.notify("Nenhuma categoria encontrada.", "error");
        return [];
      }

      return data;

    } catch (error) {
      toastStore.notify(
        "Erro ao buscar categorias. Por favor, tente novamente.",
        "error"
      );
      console.error("Erro em getCategories:", error);
      return [];
    }
  }

  return {
    getCategories,
  };
};
