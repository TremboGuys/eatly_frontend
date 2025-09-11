import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useCartStore = defineStore("cart", () => {
    const cart = ref([]);

    function addToCart(item) {
        const found = cart.value.find(i => i.id === item.id);
        if (found) {
            found.quantity++;
        }
        else {
            cart.value.push({ ...item, price: parseFloat(item.price), quantity: 1 })
        }
    }
    function removeFromCart(item) {
        const found = cart.value.find(i => i.id === item.id);
        if (found) {
            found.quantity--;
            if (found.quantity <= 0) {
                cart.value = cart.value.filter(i => i.id !== item.id);
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