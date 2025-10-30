<script setup>
import SearchBarContainer from "./SearchBarContainer.vue";
import { ref } from 'vue'
import SearchBar from './SearchBar.vue'
import SearchList from './SearchList.vue'
</script>

<template>
  <div class="page-container">
    <div class="search-bar-container">
      <SearchBar v-model="searchInput" />
    </div>
    <SearchList />
  </div>
</template>
<style scoped>
@import "@/assets/sass/searchPage/_SearchBarContainer.scss";
</style>
