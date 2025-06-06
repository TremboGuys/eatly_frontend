import { ref } from "vue"
import APICategory from "@/api/category"
import { useToastStore } from "@/stores/toastStore";

export const useCategory = () => {
    async function getCategories() {
        let data;

        data = APICategory.getCategories();

        const toastStore = useToastStore();

        if (data == false) {
            toastStore.toast("Erro interno ao encontrar categorias. Por favor, reinicie a página", error)
            return;
        }

        return data;
    }
    return {
        getCategories
    }
}