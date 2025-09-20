<script setup>
import '@fortawesome/fontawesome-free/css/all.css';
import { useRestaurantStore } from '@/stores';

const props = defineProps({
    restaurant: {
        type: Object
    }
});

const restaurantStore = useRestaurantStore();
</script>

<template>
    <router-link :to="`/restaurant/${props.restaurant.id}`" class="listItemLink" v-if="props.restaurant">
        <div class="listItem">
        <div class="logo">
            <img :src="props.restaurant.photo" alt="">
        </div>
        <div class="info">
            <p class="restaurant-name">{{ props.restaurant.name }}</p>
            <p class="restaurant-description">{{ props.restaurant.description }}</p>
                <div class="more-info">
                    <div class="rating-container">
                        <i class="fa fa-star"></i>
                        <p class="restaurant-rating">{{ props.restaurant.note }}</p>
                    </div>
                    <div class="delivery-container">
                        <i class="fa fa-clock"></i>
                        <p class="delivery-time">{{ props.restaurant.average_delivery_time }} min</p>
                    </div>
                </div>
        </div>
    </div>
    </router-link>
</template>

<style scoped>
@import "@/assets/sass/home/_listItem.scss";
</style>