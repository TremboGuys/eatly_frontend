<script setup>
import { useWindowSize } from '@vueuse/core'
import LogoArea from './LogoArea.vue';
import BestSellersContainer from './bestsellers/BestSellersContainer.vue';
import HomeCarousel from './carousel/HomeCaroulselContainer.vue';
import HomeCategories from './categories/HomeCategories.vue';
import HeaderDesktop from './desktop/HeaderDesktop.vue';

const {width} = useWindowSize();
</script>

<template>
    <component :is="width >= 425 ? HeaderDesktop : LogoArea" />
        <HomeCategories />
    <HomeCarousel />
    <BestSellersContainer />
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
*{
    font-family: 'Poppins';
}
</style>