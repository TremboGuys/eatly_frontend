<script setup>
import { useRestaurantStore } from '@/stores'

const restaurantStore = useRestaurantStore();

const props = defineProps({
  modelValue: { type: [String, Number], default: '' }
})

const clear = () => emit('update:modelValue', '')
</script>

<template>
  <div :class="['input-container', { active: !!props.modelValue }]">
    <input
      @focus="restaurantStore.state.searching = true"
      @blur="restaurantStore.state.searching = false"
      v-model="restaurantStore.filters['search']"
      type="text"
      placeholder="O que vai pedir hoje?"
      class="search-input"
      @keyup.enter="restaurantStore.getRestaurantsFiltered()"
    />
    <img class="search-icon" src="../../assets/img/navigationBar/search.svg" alt="">
    <button class="cancel" @click="delete restaurantStore.filters['search']; restaurantStore.restaurantsFiltered = []">x</button>
  </div>
</template>

<style scoped>
@import "@/assets/sass/searchPage/_searchBar.scss";
</style>