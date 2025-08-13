<script setup>
import { useSearchCategory } from '@/composables';

const useSearch = useSearchCategory();


function clearSearch() {
  useSearch.searchInput = "";
}
</script>

<template>
  <div :class="['input-container', { active: useSearch.searchInput }]">
    <input v-model="useSearch.searchInput.value" type="text" placeholder="O que você vai pedir hoje?" class="search-input" />
    <img class="search-icon" src="../../assets/img/navigationBar/search.svg" alt="">
    <button v-if="useSearch.searchInput" class="cancel" @click="clearSearch">x</button>
  </div>
</template>

<style scoped>
@import "@/assets/sass/searchPage/_searchBar.scss";
</style>