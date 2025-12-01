<script setup>
import { reactive, ref } from 'vue';
import { useProductComposable } from '@/composables';
import { useCartStore } from '@/stores/cartStore';
import { useRoute } from 'vue-router';
import { VueSpinner } from 'vue3-spinners';

const cartStore = useCartStore();
const { product } = useProductComposable();
const useCart = useCartStore();
const route = useRoute();
</script>
<template>
    <div class="container">
        <div class="top-section">
            <span class="priceValue" v-if="Object.hasOwn(product, 'price')">R$ {{ useCart.product.quantity == 1 ? '40,00' : (product.price * (useCart.product.quantity)).toFixed(2).toString().replace(".", ",") }}</span>
            <span class="product.quantityLabel">Qtd: {{ useCart.product.quantity }}</span>
        </div>
        <div class="bottom-section">
            <div class="quantity">
                <button class="button remove"
                    @click="useCart.product.quantity > 1 ? useCart.product.quantity-- : useCart.product.quantity">-</button>
                <span class="number">{{ useCart.product.quantity }}</span>
                <button class="button add" @click="useCart.product.quantity++">+</button>
            </div>
            <button v-if="!cartStore.state.loading" class="addCart" @click="cartStore.addToCart(route.params.idRestaurant)">
                Adicionar ao carrinho
            </button>
            <button class="addCart" v-else>
                <VueSpinner :size="10" :color="'#FFFFFF'" />
            </button>
        </div>
    </div>
</template>
<style scoped>
@import '@/assets/sass/productPage/_productCart.scss';
</style>