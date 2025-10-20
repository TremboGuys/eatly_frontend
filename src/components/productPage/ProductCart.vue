<script setup>
import { ref } from 'vue';
import { useCartStore } from '@/stores/cartStore';

const cartStore = useCartStore();

const props = defineProps({
    product: {
        type: Object,
        required: true
    }
});

const quantity = ref(1);

const addToCart = () => quantity.value++;
const removeFromCart = () => {
    if (quantity.value > 1) quantity.value--;
};
const addItem = () => {
    cartStore.addToCart({ ...props.product, quantity: quantity.value });
};
</script>
<template>
    <div class="container">
        <div class="top-section">
            <div class="quantity">
                <button class="button remove"
                    @click="cartStore.removeFromCart({ ...props.product }); quantity > 0 ? quantity-- : quantity">-</button>
                <span class="number">{{ quantity }}</span>
                <button class="button add" @click="quantity++">+</button>
            </div>
        </div>
        <div class="bottom-section">
            <button class="addCart" v-if="Object.hasOwn(product, 'price')"
                @click="cartStore.addToCart({ ...props.product, quantity: quantity, total: props.product.price * quantity }); console.log(props.product)">
                Adicionar ao carrinho (R$ {{ quantity == 0 ? '40,00' : (props.product.price * (quantity)).toFixed(2).toString().replace(".", ",") }})
            </button>
        </div>
    </div>
</template>
<style scoped>
@import '@/assets/sass/productPage/_productCart.scss';
</style>