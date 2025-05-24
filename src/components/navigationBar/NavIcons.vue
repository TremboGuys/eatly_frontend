<script setup>

import { RouterLink } from 'vue-router';
import search from '@/assets/img/navigationBar/search.svg?component';
import profile from '@/assets/img/navigationBar/profile.svg?component';
import home from '@/assets/img/navigationBar/home.svg?component';
import cart from '@/assets/img/navigationBar/cart.svg?component';
import heart from '@/assets/img/navigationBar/heart.svg?component';

const buttons = [
    {
        name: 'search',
        icon:  search,
        route: '/search',
    },
    {
        name: 'favorites',
        icon: heart,
        route: '/favorites',
    },
    {
        name: 'home',
        icon: home,
        route: '/dashboard',
    },
    {
        name: 'cart',
        icon: cart,
        route: '/cart',
    },
    {
        name: 'profile',
        icon: profile,
        route: '/profile',
    },
];

</script>

<template>
        <div class="navIcons">
            <RouterLink v-for="button in buttons" :key="button.name" :to="button.route">
                <component :is="button.icon" class="navIcon" />
            </RouterLink>
        </div>
</template>

<style>
@import "@/assets/sass/navigationBar/_navIcons.scss";
</style>