<script setup>
import { useWindowSize } from '@vueuse/core'
import LogoArea from './LogoArea.vue';
import { HomeCarousel, HomeCategories, BestSellersList, HeaderDesktop, BottomSize, SeenPreviously } from "@/components";
const {width} = useWindowSize();
</script>

<template>
    <div class="home-container">
        <HeaderDesktop v-if="width > 425" />
        <LogoArea v-else />
        <HomeCarousel />
        <!-- <HomeCategories /> -->
        <BestSellersList />
        <SeenPreviously />
    </div>
</template>

<style scoped>
@import "@/assets/sass/home/_homeContainer.scss";
</style>