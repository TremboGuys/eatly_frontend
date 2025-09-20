<script setup>
import { useWindowSize } from '@vueuse/core'
import LogoArea from './LogoArea.vue';
import BestSellersContainer from './bestsellers/BestSellersContainer.vue';
import HomeCarousel from './carousel/HomeCaroulselContainer.vue';
import HomeCategories from './categories/HomeCategories.vue';
import HeaderDesktop from './desktop/HeaderDesktop.vue';
import BottomSize from './BottomAds.vue';
import SeenPreviously from './SeenPreviously.vue';
const {width} = useWindowSize();
</script>

<template>
    <div class="home-container">
        <component :is="width >= 425 ? HeaderDesktop : LogoArea" />

            <HomeCarousel />
        <HomeCategories />
        <BestSellersContainer />
        <SeenPreviously />

    </div>
</template>

<style scoped>
@import "@/assets/sass/home/_homeContainer.scss";
</style>