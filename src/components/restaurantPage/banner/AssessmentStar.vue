<script setup>
const props = defineProps(['note', 'reviews'])
</script>

<template>
    <div class="container">
        <div class="rating">
            <i class="fas fa-star star"></i>
            <span class="score">{{ props.note }}</span>
            <span class="reviews">({{ props.reviews }} avaliações)</span>
            <i class="fas fa-circle dot"></i>
            <span class="level">Nível 4 de 5</span>
        </div>
    </div>
</template>
<style scoped>
@import '@/assets/sass/restaurantPage/banner/_assessmentStar.scss';
</style>