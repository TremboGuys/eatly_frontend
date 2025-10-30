<script setup>
import FavoritesContainer from '@/components/favorites/FavoritesContainer.vue'
import LoadingScreen from "@/components/global/LoadingScreen.vue"
import { useFavoriteStore } from '@/stores';
import { ref } from 'vue';
import { onMounted } from "vue";

const favoriteStore = useFavoriteStore();
const showMenu = ref(false);

onMounted(async () => {
  await favoriteStore.getFavorites();
  
  showMenu.value = true;
})
</script>

<template>
  <div>
    <FavoritesContainer v-if="showMenu" />
    <LoadingScreen v-if="favoriteStore.state.loading" />
  </div>
</template>

<style scoped>
</style>