<script setup>
import { useRestaurantStore } from '@/stores';
import NameComp from './NameComp.vue';
import PriceTime from './PriceTime.vue';
import AssessmentStar from './AssessmentStar.vue';
import DeliveryComp from './DeliveryComp.vue';
import RestaurantImage from './RestaurantImage.vue';

const restaurantStore = useRestaurantStore();
</script>
<template>
    <div class="container">
        <div class="content">
            <div class="logo">
                <RestaurantImage :photo="restaurantStore.restaurant.photo" />
            </div>
            <div class="banner-info">
                <div class="title">
                    <NameComp :name="restaurantStore.restaurant.name" />
                    <!-- <PriceTime /> -->
                </div>
                <div class="description title">
                    <AssessmentStar :note="restaurantStore.restaurant.note" :reviews="restaurantStore.restaurant.total_reviews" />
                </div>
                <div class="delivery">
                    <DeliveryComp :average_delivery_time="restaurantStore.restaurant.average_delivery_time" />
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
@import '@/assets/sass/restaurantPage/banner/_basicInfo.scss';
</style>