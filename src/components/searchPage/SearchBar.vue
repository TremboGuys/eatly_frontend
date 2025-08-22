<script setup>
import { ref } from 'vue';
const search = ref('');


function clearSearch() {
search.value = '';
}
</script>

<template>
  <div :class="['input-container', { active: search }]">
    <input v-model="search" type="text" placeholder="O que você vai pedir hoje?" class="search-input" />
    <img class="search-icon" src="../../assets/img/navigationBar/search.svg" alt="">
    <button v-if="search" class="cancel" @click="clearSearch">x</button>
  </div>
</template>

<style scoped>
@import "@/assets/sass/searchPage/_searchBar.scss";
</style>