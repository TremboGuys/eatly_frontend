<script setup>
import SearchBarContainer from './SearchBarContainer.vue';
import SearchList from './SearchList.vue';
</script>

<template>
  <header>
    <SearchBarContainer />
  </header>
  <main>
    <SearchList />
  </main>
</template>

<style scoped>
@import "@/assets/sass/searchPage/_searchPage.scss";

</style>