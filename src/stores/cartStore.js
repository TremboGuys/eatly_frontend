import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useCartStore = defineStore("cart", () => {
    const cart = ref([]);

    function addToCart(item) {
        const found = cart.value.findIndex(i => i.id === item.id);
        if (found != -1) {
            cart.value[found].quantity++;
        }
        else {
            item.price = parseFloat(item.price);
            cart.value.push({ ...item })
        }
    }
    function removeFromCart(item) {
        const found = cart.value.findIndex(i => i.id === item.id);
        if (found != - 1) {
            cart.value[found].quantity--;
            if (cart.value[found].quantity <= 0) {
                cart.value.splice(found, 1);
            }
        }
    }
    const totalItems = computed(() =>
        cart.value.reduce((sum, item) => sum + (item.quantity || 0), 0)
    );
    const totalPrice = computed(() =>
        cart.value.reduce((sum, item) => sum + (Number(item.price) * (item.quantity || 0)), 0)
    );
    return { cart, addToCart, removeFromCart, totalItems, totalPrice }
});