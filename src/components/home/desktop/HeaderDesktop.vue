<script setup>
import { useWindowSize } from '@vueuse/core'
import { RouterLink } from 'vue-router';
import LogoArea from '../LogoArea.vue';
import cart from '@/assets/img/navigationBar/cart.svg?component';
import heart from '@/assets/img/navigationBar/heart.svg?component';
import SearchButton from './SearchButton.vue';
import SearchBar from '@/components/searchPage/SearchBar.vue';
import ProfileIcon from './ProfileIcon.vue';

const {width} = useWindowSize();

const buttons = [
    {
        name: 'favorites',
        icon: heart,
        route: '/favorites',
    },
    {
        name: 'cart',
        icon: cart,
        route: '/cart',
    },
];

</script>
    
<template>
    <div class="header-container">
        <LogoArea />
        <div class="page-icons">
            <RouterLink v-for="button in buttons" :key="button.name" :to="button.route">
                <component :is="button.icon" class="navIcon" />
            </RouterLink>
            <component :is="width >=575 ? SearchBar : SearchButton" />
            <ProfileIcon />
        </div>
    </div>
</template>

<style scoped>
@import "@/assets/sass/home/_headerDesktop.scss";
</style>