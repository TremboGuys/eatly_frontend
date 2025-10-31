<script setup>
import OrderContainer from '@/components/orders/OrderContainer.vue';
import { useOrderStore } from '@/stores';
import { ref } from 'vue';
import { onMounted } from 'vue';

const orderStore = useOrderStore();
const showComponent = ref(false);

onMounted(async () => {
    await orderStore.getOrdersActive();
    showComponent.value = true;
});
</script>
<template>
    <OrderContainer v-if="showComponent" />
</template>