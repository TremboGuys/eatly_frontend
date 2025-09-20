<script setup>
import { ref, onMounted } from 'vue';
import { useRestaurantStore } from '@/stores';
import { HomeContainer } from '@/components';

const restaurantStore = useRestaurantStore();
const mounted = ref(false);

onMounted(async () => {
  if (restaurantStore.restaurants.length == 0) {
    await restaurantStore.getRestaurants();
    await restaurantStore.getRestaurantRecentlyViewed();
  }
  mounted.value = true;
})
</script>

<template>
  <main v-if="mounted">
    <HomeContainer />
  </main>
</template>
