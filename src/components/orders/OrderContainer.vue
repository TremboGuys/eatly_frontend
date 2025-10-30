<script setup>
import { useOrderStore } from '@/stores'
import { ref } from 'vue'
import { OrdersInProgress, HistoryOrders, OrderHeader } from '../index.js'

const orderStore = useOrderStore();
const tab = ref('in-progress')
const updateTab = (newTab) => {
  tab.value = newTab
}
</script>
<template>
  <header class="orderHeaderContainer">
    <OrderHeader :tab="tab" @update-tab="updateTab" />
  </header>
  <main class="orderMainContainer">
    <OrdersInProgress v-if="tab === 'in-progress'" />
    <div class="line" v-else>
      <HistoryOrders />
    </div>
  </main>
</template>
