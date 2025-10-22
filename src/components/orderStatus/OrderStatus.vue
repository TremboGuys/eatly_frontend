<script setup>
import { OrderStatusComp } from '@/components';
</script>
<template>
  <div class="container">
    <div class="id">
        <h2>ID do pedido: #23232323</h2>
    </div>
    <OrderStatusComp />
  </div>
</template>
<style scoped>
@import "@/assets/sass/order/_orderStatus.scss";
</style>
