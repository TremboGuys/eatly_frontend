<script setup>
import { useRestaurantStore } from "@/stores";
import HeaderList from './HeaderList.vue';
import ListItem from './ListItem.vue';
import { watch } from 'vue';

const restaurantStore = useRestaurantStore();
</script>

<template>
    <div class="bestSellerContainer">
        <HeaderList />
        <ListItem v-for="(restaurant, index) in restaurantStore.restaurants" :key="index" :restaurant="restaurant" />
    </div>
</template>

<style scoped>
@import "@/assets/sass/home/_bestSellersContainer.scss";

.bestSellerContainer{
    gap: 10px
}
</style>