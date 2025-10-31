import { ref } from "vue";
import { defineStore } from "pinia";
import { CategoryService } from "@/services";
import { useToastStore } from "@/stores/toastStore";

export const useCategoryStore = defineStore('category', () => {
  const categories = ref(null);
  const toastStore = useToastStore();
  async function getCategories() {
    if (categories.value == null) {
      try {
        const data = await CategoryService.getCategories();
  
        if (data.length == 0) {
          toastStore.notify("Nenhuma categoria encontrada.", "error");
          categories.value = [];
        }
  
        categories.value = data;
  
      } catch (error) {
        toastStore.notify(
          "Erro ao buscar categorias. Por favor, tente novamente.",
          "error"
        );
      }
    }
  };
  
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
    categories,
    getCategories,
    createCategory
  };
});
