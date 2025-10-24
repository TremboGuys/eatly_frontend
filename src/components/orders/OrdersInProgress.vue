<script setup>
import { ref } from 'vue';
const cart = ref([
    {
        id: 1,
        title: "Aborgue assado",
        url_file: "https://via.placeholder.com/150",
        price: 19.90,
        quantity: 2
    },
    {
        id: 2,
        title: "Lanche gostoso 123",
        url_file: "https://via.placeholder.com/150",
        price: 9.90,
        quantity: 1
    }
]);
</script>
<template>
    <div class="container">
        <main class="orderMainContainer">
            <div v-if="cart.length === 0" class="card empty">
                Nenhum pedido realizado
            </div>
            <div v-else>
                <div v-for="item in cart" :key="item.id" class="card">
                    <div class="icon">
                        <img :src="item.url_file" :alt="item.title" />
                    </div>
                    <div class="info">
                        <h3>{{ item.title }}</h3>
                        <p>Quantidade: {{ item.quantity }}</p>
                        <span class="price">R$ {{ (item.price * item.quantity).toFixed(2).replace('.', ',') }}</span>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>
<style scoped>
@import '@/assets/sass/orders/_ordersCards.scss';
</style>
