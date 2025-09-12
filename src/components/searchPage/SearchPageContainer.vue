<script setup>
import { ref } from 'vue'
import SearchBar from './SearchBar.vue'
import SearchList from './SearchList.vue'

const searchInput = ref('')
</script>

<template>
  <div class="page-container">
    <div class="search-bar-container">
      <SearchBar v-model="searchInput" />
    </div>
    <SearchList :query="searchInput" />
  </div>
</template>
<style scoped>
@import "@/assets/sass/searchPage/_SearchBarContainer.scss";
</style>