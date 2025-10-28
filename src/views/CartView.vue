<script setup>
import { CartPage } from '@/components';
import { useCartStore } from '@/stores';
import { ref } from 'vue';
import { onBeforeMount, onMounted } from 'vue';

const useCart = useCartStore();
</script>

<template>
  <div class="container">
    <CartPage />
  </div>
</template>

<style scoped>
</style>