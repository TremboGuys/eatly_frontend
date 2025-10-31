import { ref } from "vue";
import { useToastStore, useCartStore } from "@/stores";
import { ProductService } from "@/services";

export const useProductComposable = () => {
    const product = ref({});
    const useCart = useCartStore();
    const toastStore = useToastStore();

    async function getProduct(id) {
        try {
            const response = await ProductService.getProduct(id);
            product.value = response;
            useCart.product.product = product.value.id;
            useCart.product.price = parseFloat(product.value.price);
        } catch(error) {
            console.error('Error in GET product: ', error);
            toastStore.notify("Erro ao ver produto!", "error");
        }
    }

    return {
        product,
        getProduct
    }
};