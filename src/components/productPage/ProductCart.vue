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
    cartStore.addToCart({
        ...props.product,
        quantity: quantity.value
    });
    quantity.value = 1;
};
</script>
<template>
    <div class="container">
        <div class="top-section">
            <span class="priceValue">R${{ props.product.price.toFixed(2).replace('.', ',') }}</span>
            <span class="quantityLabel">Qtd: {{ quantity }}</span>
        </div>
        <div class="bottom-section">
            <div class="quantity">
                <button class="button remove"
                    @click="cartStore.removeFromCart({ ...props.product, quantity: 1 })">-</button>
                <span class="number">{{ quantity }}</span>
                <button class="button add" @click="cartStore.addToCart({ ...props.product, quantity: 1 })">+</button>
            </div>
            <button class="addCart" @click="addItem">
                Adicionar ao carrinho
            </button>
        </div>
    </div>
</template>
<style scoped>
@import '@/assets/sass/productPage/_productCart.scss';
</style>