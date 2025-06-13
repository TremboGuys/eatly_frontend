import { ref } from "vue";
import { CategoryService } from "@/services";
import { useToastStore } from "@/stores/toastStore";

export const useCategory = () => {
  async function getCategories() {
    const toastStore = useToastStore();

    try {
      const data = await CategoryService.getCategories(); // <- AQUI o await

      if (data.length == 0) {
        toastStore.notify("Nenhuma categoria encontrada.", "error");
        return [];
      }

      console.log(data);

      return data;

    } catch (error) {
      toastStore.notify(
        "Erro ao buscar categorias. Por favor, tente novamente.",
        "error"
      );
      console.error("Erro em getCategories:", error);
      return false;
    }
  }

  return {
    getCategories,
  };
};
