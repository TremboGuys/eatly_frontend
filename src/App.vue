<script setup>
import { onMounted } from 'vue';
import { useCartStore } from './stores';

const cartStore = useCartStore();

onMounted(async() => {
  await cartStore.getCartOrders();
})
</script>

<template>
  <RouterView />
</template>

<style scoped>
</style>
