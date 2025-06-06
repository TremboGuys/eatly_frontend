import { ref } from "vue"
import APICategory from "@/api/category"
import { useToastStore } from "@/stores/toastStore";
export const useCategoryComposable = () => {
  const toastStore = useToastStore();
  async function getCategories() {

        data = APICategory.getCategories();

      if (data.length == 0) {
        toastStore.notify("Nenhuma categoria encontrada.", "error");
        return [];
      }
      return data;

    }
    return {
        getCategories
    }
}
