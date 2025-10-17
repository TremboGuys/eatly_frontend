<script setup>
import { ref } from 'vue';
import { useFavoriteStore } from '@/stores';
const favoriteStore = useFavoriteStore();
const props = defineProps({
  name: { type: String, required: true },
  idProduct: { type: String, required: true }
});
</script>
<template>
  <div class="container">
    <h1>{{ props.name }}</h1>
    <div class="hr"></div>
  </div>
</template>

<style scoped>
@import '@/assets/sass/productPage/_titleProduct.scss';
</style>