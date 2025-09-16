import { ref } from "vue";
import { useToastStore } from "@/stores";
import { ProductService } from "@/services";

export const useProductComposable = () => {
    const toastStore = useToastStore();

    async function getProduct(id) {
        try {
            const response = await ProductService.getProduct(id);
            return response;
        } catch(error) {
            console.error('Error in GET product: ', error);
            toastStore.notify("Erro ao ver produto!", "error");
        }
    }

    return {
        getProduct
    }
};