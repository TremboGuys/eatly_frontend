<script setup>
import BestSellersList from '../home/bestsellers/BestSellersList.vue';
import ListItem from '@/components/home/bestsellers/ListItem.vue';
import { useRestaurantStore } from "@/stores";

const restaurantStore = useRestaurantStore();

</script>
<template>
    <div class="favorites-container">
        <div class="titleSection">
            <span class="text">Favoritos</span>
            <div class="hr"></div>
        </div>
        <div class="lista">
            <ListItem v-for="(restaurant, index) in restaurantStore.restaurants" :key="index" :restaurant="restaurant" @click="restaurantStore.createRestaurantView({restaurant: restaurant.id})" />

        </div>
    </div>
</template>

<style>
@import "@/assets/sass/favorites/_favoritesContainer.scss";
.lista{
    display: flex;
    flex-direction: column;
    gap: 10px;
}
</style>