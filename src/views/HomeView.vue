<script setup>
import { ref, onMounted } from 'vue';
import { useRestaurantStore } from '@/stores';
import { HomeContainer } from '@/components';

const restaurantStore = useRestaurantStore();
const loading = ref(true);

onMounted(async () => {
  if (restaurantStore.restaurants.length === 0) {
    await restaurantStore.getRestaurants();
    await restaurantStore.getRestaurantRecentlyViewed();
  }
  loading.value = false;
});
</script>

<template>
  <main>
    <div v-if="loading" class="loading" style=" position: absolute; top: 40%; left: 38%;" >
      <img src="../assets/img/eatly.gif" alt="">
    </div>

    <HomeContainer v-else />
  </main>
</template>
