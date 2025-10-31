<script setup>
import { CartPage } from '@/components';
import { useCartStore } from '@/stores';
import { ref } from 'vue';
import { onBeforeMount, onMounted } from 'vue';

const cartStore = useCartStore();
const showComponent = ref(false);

onMounted(async() => {
  if (cartStore.cart == null) {
    await cartStore.getCartOrders();
  }
  showComponent.value = true;
})
</script>

<template>
  <div class="container">
    <CartPage v-if="showComponent" />
  </div>
</template>

<style scoped>
</style>