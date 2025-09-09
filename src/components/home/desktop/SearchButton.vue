<script setup>
import { RouterLink } from 'vue-router';
import search from '@/assets/img/navigationBar/search.svg?component';

const button = {
    icon: search
};</script>

<template>
    <RouterLink to="/search">
    <component :is="button.icon" class="navIcon" />
</RouterLink>
</template>