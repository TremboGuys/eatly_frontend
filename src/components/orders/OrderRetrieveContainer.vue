<script setup>
import backButton from '@/components/profile/backButton.vue';
import CardInfoOrder from './CardInfoOrder.vue';
import OrderStatus from '../orderStatus/OrderStatus.vue';
import { useOrderStore } from '@/stores';

const orderStore = useOrderStore();
</script>

<template>
  <div class="OrderContainer">
    <div class="top-side">
      <backButton name="Pedidos" route="orders"/> 
    </div>
    <div class="restaurantInfo">
      <img :src="orderStore.orderRetrieve.restaurant.photo" alt="">
      <h2>{{ orderStore.orderRetrieve.restaurant.name }}</h2>
    </div>

    <CardInfoOrder />
  </div>
</template>

<style scoped>
@import "@/assets/sass/order/_orderRetrieveContainer.scss";
</style>
