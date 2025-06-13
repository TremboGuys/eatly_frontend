import { ref } from "vue";
import { CategoryService } from "@/services";
import { useToastStore } from "@/stores/toastStore";

export const useCategoryComposable = () => {
  const toastStore = useToastStore();
  async function getCategories() {

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

  async function createCategory(category) {
    try {
      const data = await CategoryService.createCategory(category);
      return data;

      console.log(data);
    } catch(error) {
      toastStore.notify("Erro ao criar categoria.", "error");
      return false;
    }
  }

  return {
    getCategories,
    createCategory
  };
};
