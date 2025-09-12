<script setup>
import { ref } from 'vue';

const isActive = ref(false);
const title = ref('Product Title');
const toggleActive = () => {
    isActive.value = !isActive.value;
};
</script>
<template>
    <div class="container">
        <h1>{{ title }}</h1>
        <i class="fa-heart" :class="isActive ? 'fa-solid active' : 'fa-regular'" @click="toggleActive"></i>
    </div>
</template>
<style scoped>
@import '@/assets/sass/productPage/_titleProduct.scss';
</style>