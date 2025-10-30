<script setup>
import backButton from '@/components/profile/backButton.vue';
import CardInfoOrder from './CardInfoOrder.vue';
import OrderStatus from '../orderStatus/OrderStatus.vue';

</script>

<template>
  <div class="OrderContainer">
    <div class="top-side">
      <backButton name="Pedidos" route="orders"/> 
    </div>
    <div class="restaurantInfo">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/1200px-McDonald%27s_Golden_Arches.svg.png" alt="">
      <h2>mecdonaud</h2>

    </div>

    <CardInfoOrder />
  </div>
</template>

<style scoped>
@import "@/assets/sass/order/_orderRetrieveContainer.scss";
</style>
