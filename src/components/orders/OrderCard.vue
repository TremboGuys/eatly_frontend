<script setup>
import { useOrderStore } from '@/stores';

const props = defineProps({
    arrayOrder: {
        type: Array,
    }
})

const orderStore = useOrderStore();
</script>

<template>
    <div v-for="(order, orderIndex) in props.arrayOrder" :key="orderIndex" class="card">
        <div class="orderHeader">
            <div class="restaurantInfo">
                <img class="logo" :src="order.restaurant.photo" alt="Logo" />
                <div class="details">
                    <h3>{{ order.restaurant.name }}</h3>
                    <p class="status" v-if="order.status < 4">Status: {{ order.status == 2 ? 'Preparando' : 'Chegando a sua casa' }}</p>
                    <p class="status" v-else>Status: Entregue</p>
                    <p class="status" v-if="order.status < 4">Tempo de entrega: <span :style="order.restaurant.average_delivery_time < 30 ? 'color: green;' : order.restaurant.average_delivery_time < 50 ? 'color: orange;' : 'color: red;'">{{ order.restaurant.average_delivery_time }}min</span></p>
                </div>
            </div>
        </div>
        <div class="orderBody">
            <div class="itemText">
                <span v-for="(product, productIndex) in order.products" :key="productIndex">{{ product.quantity }}x {{ product.name }} </span>
            </div>
        </div>
        <div class="orderActions">
            <button class="add">Adicione ao carrinho</button>
        </div>
    </div>
</template>

<style scoped>
@import '@/assets/sass/orders/_ordersCards.scss';
</style>