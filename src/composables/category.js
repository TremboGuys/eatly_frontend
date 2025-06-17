import { ref } from "vue";
import { CategoryService } from "@/services";
import { useToastStore } from "@/stores/toastStore";

export const useCategoryComposable = () => {
  const toastStore = useToastStore();
  async function getCategories() {

    try {
      const data = await CategoryService.getCategories();

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

  async function createCategory(category) {
    try {
      const categoryFormData = new FormData();
      categoryFormData.append("name", category.name);
      categoryFormData.append("file", category.file);

      await CategoryService.createCategory(categoryFormData);
      toastStore.notify("Categoria criada com sucesso!", "success");
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
