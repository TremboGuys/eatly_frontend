<script setup>
import { ref } from 'vue';
import { useOrderStore } from '@/stores';
import { OrderCard } from '@/components';

const orderStore = useOrderStore();
</script>
<template>
  <div class="container">
    <main class="orderMainContainer">
      <div v-if="orderStore.ordersActive.length == 0" class="card empty">
        Sem pedidos recentes por aqui
      </div>
      <div v-else>
        <h2 class="sectionTitle">Histórico</h2>
        <OrderCard :array-order="orderStore.ordersActive" />
      </div>
    </main>
  </div>
</template>
<style scoped>
@import '@/assets/sass/orders/_ordersCards.scss';
</style>
