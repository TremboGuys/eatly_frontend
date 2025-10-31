<script setup>
import FavItem from "@/components/favorites/FavItem.vue";
import { useFavoriteStore } from "@/stores";

const favoriteStore = useFavoriteStore();
</script>

<template>
  <div class="favorites-container">
    <div class="titleSection">
      <span class="text">Favoritos</span>
    </div>

    <div class="lista">
      <FavItem
        v-for="(favorite, favoriteIndex) in favoriteStore.favorites" 
        :key="favoriteIndex" 
        :favorite="favorite" 
      />
      
      <div v-if="!favoriteStore.state.loading && (favoriteStore.favorites == null || favoriteStore.favorites.length == 0)" class="empty">
        Nenhum favorito encontrado.
      </div>
    </div>
  </div>
</template>
<style>
@import "@/assets/sass/favorites/_favoritesContainer.scss";
.lista {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
}
</style>
