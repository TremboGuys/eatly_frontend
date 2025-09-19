<script setup>
import { ref } from 'vue';
const rating = ref(1);
</script>
<template>
    <div class="container">
        <div class="stars">
            <i class="fa-solid fa-star"></i>
            <span class="rating-value">4.9</span>
            <span class="reviews">(120 avaliações)</span>
        </div>
    </div>
</template>
<style scoped>
@import '@/assets/sass/productPage/_ratingProduct.scss';
</style>