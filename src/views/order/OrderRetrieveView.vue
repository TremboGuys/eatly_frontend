<script setup>
import OrderRetrieverContainer from '@/components/orders/OrderRetrieveContainer.vue';
import LoadingScreen from '@/components/global/LoadingScreen.vue';
import { useOrderStore } from '@/stores';
import { ref } from 'vue';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const orderStore = useOrderStore();
const showComponent = ref(false);
const route = useRoute();

onMounted(async () => {
  await orderStore.getOrderRetrieve(route.params.id);
  showComponent.value = true;
});
</script>

<template>
  <OrderRetrieverContainer v-if="showComponent" />
  <LoadingScreen v-if="orderStore.state.loading" />
</template>

<style scoped>
</style>