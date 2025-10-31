<script setup>
import { onMounted } from 'vue';
import { useAuthStore } from '@/stores';

const authStore = useAuthStore();

onMounted(() => {
    authStore.logout();
})
</script>

<template>
  <div></div>
</template>

<style scoped>
</style>