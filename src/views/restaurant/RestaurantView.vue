<script setup>
import { ref, onMounted, computed } from 'vue';
import { BannerComp, BasicInfo, OptionsScroll, ItemMenu } from '@/components';
import { useRestaurantStore } from '@/stores';
import { useRoute, onBeforeRouteLeave } from 'vue-router';

const activeIndex = ref(0);
const itemsMenu = ref(null);
const restaurantStore = useRestaurantStore();
const route = useRoute();
const enableTemplate = computed(() => {
  return Object.keys(restaurantStore.restaurant).length > 0
});

function scrollToCategory(index) {
  itemsMenu.value.scrollToCategory(index);
}

onMounted(async () => {
  if (Object.keys(restaurantStore.restaurant).length > 0) {
    if (restaurantStore.restaurant.id != route.params.id) {
      await restaurantStore.getRestaurant(route.params.id);
    }
  }
  else {
      await restaurantStore.getRestaurant(route.params.id);
  }
});

onBeforeRouteLeave((to, from, next) => {
  if (to.name !== 'product') {
    if (restaurantStore.restaurant.value) {
      restaurantStore.restaurant.value = {};
    }
  }
  next();
});
</script>

<template>
  <div v-if="enableTemplate" class="container">
    <div class="banner">
      <BannerComp />
      <BasicInfo />
    </div>
    <div class="optionsScroll">
      <OptionsScroll :categoriesRestaurant="restaurantStore.categoriesRestaurant" :activeIndex="activeIndex" @selectCategory="scrollToCategory" />
    </div>
    <div class="menu">
      <ItemMenu ref="itemsMenu" v-model="activeIndex" />
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/sass/restaurantPage/_restaurantPage.scss';
</style>