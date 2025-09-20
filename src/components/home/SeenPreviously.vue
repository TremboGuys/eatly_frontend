<script setup>
import { HeaderList, ListItem } from "@/components";
import { useRestaurantStore } from "@/stores";

const restaurantStore = useRestaurantStore();
</script>
<template>
    <div class="seen-previously">        
        <HeaderList title="Vistos recentemente" link="/product/1" />
        <ListItem v-for="(restaurant, index) in restaurantStore.restaurantsRecentlyViewed" :key="index" :restaurant="restaurant.restaurant" />
    </div>
</template>
<style scoped>
@import "@/assets/sass/home/_bestSellersContainer.scss";

.seen-previously {
    gap: 10px;
}
</style>