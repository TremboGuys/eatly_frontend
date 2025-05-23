<script setup>

import search from '@/assets/img/navigationBar/search.png';
import person from '@/assets/img/navigationBar/user.png';
import home from '@/assets/img/navigationBar/home.png';
import cart from '@/assets/img/navigationBar/cart.png';
import heart from '@/assets/img/navigationBar/heart.png';

const icons = [
    {
        name: 'search',
        icon:  search,
    },
    {
        name: 'heart',
        icon: 'person',
    },
    {
        name: 'home',
        icon: 'home',
    },
];

</script>

<template>
    <div class="icons">
        <ul>
            <li v-for="icon in icons" :key="icon.name">
                <img :src="icon.icon" :alt="icon.name" />
            </li>
        </ul>
    </div>
</template>

<style scoped>
@import "@/assets/sass/navigationBar/_navIcons.scss";
</style>