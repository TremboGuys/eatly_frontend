<script setup>
import FavItem from "@/components/favorites/FavItem.vue";
import { useFavorites } from "@/composables/favorite";

const { favoriteProducts, loading } = useFavorites();
</script>

<template>
  <div class="favorites-container">
    <div class="titleSection">
      <span class="text">Favoritos</span>
    </div>

    <div v-if="loading" class="loading"><img src="../../assets/img/eatly.gif" alt=""></div>
    <div class="lista">

      <FavItem 
        v-for="product in favoriteProducts" 
        :key="product.id" 
        :product="product" 
      />
      
      <div v-if="!loading && favoriteProducts.length === 0" class="empty">
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
