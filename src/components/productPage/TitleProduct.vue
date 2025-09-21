<script setup>
import { ref } from 'vue';
import { useFavoriteStore } from '@/stores';
const favoriteStore = useFavoriteStore();
const props = defineProps({
  name: { type: String, required: true },
  idProduct: { type: String, required: true }
});
const toggleActive = async () => {
  favoriteStore.isFavorite = !favoriteStore.isFavorite;

  const response = await favoriteStore.createFavorite({ product: props.idProduct });

  if (!response) {
    favoriteStore.isFavorite = !favoriteStore.isFavorite;
  }
};
</script>
<template>
  <div class="container">
    <h1>{{ props.name }}</h1>
    <i 
      class="fa-heart" 
      :class="favoriteStore.isFavorite ? 'fa-solid active' : 'fa-regular'" 
      @click="toggleActive"
    ></i>
  </div>
</template>

<style scoped>
@import '@/assets/sass/productPage/_titleProduct.scss';
</style>