<script setup>
import { ref, onMounted } from 'vue';
import { BannerComp, BasicInfo, OptionsScroll, ItemMenu } from '@/components';
import { useRestaurantComposable } from '@/composables';
import { useRoute, onBeforeRouteLeave } from 'vue-router';

const activeIndex = ref(0);
const itemsMenu = ref(null);
const useRestaurant = useRestaurantComposable();
const route = useRoute();

function scrollToCategory(index) {
  itemsMenu.value.scrollToCategory(index);
}

onMounted(async () => {
  if (useRestaurant.restaurant.value.id != route.params.id) {
    await useRestaurant.getRestaurant(route.params.id);
  }
  console.log(useRestaurant.restaurant.value);
});

onBeforeRouteLeave((to, from, next) => {
  if (to.name != 'product') {
    useRestaurant.restaurant.value == {};
  }
});
</script>

<template>
  <div v-if="Object.keys(useRestaurant.restaurant).length > 0" class="container">
    <div class="banner">
      <BannerComp />
      <BasicInfo />
    </div>
    <div class="optionsScroll">
      <OptionsScroll :activeIndex="activeIndex" @selectCategory="scrollToCategory" />
    </div>
    <div class="menu">
      <ItemMenu ref="itemsMenu" v-model="activeIndex" />
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/sass/restaurantPage/_restaurantPage.scss';
</style>