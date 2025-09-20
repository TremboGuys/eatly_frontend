<script setup>
const props = defineProps(['average_delivery_time'])
</script>

<template>
    <div class="container">
        <div class="delivery">
            <span class="label">Entrega</span>
            <i class="fas fa-chevron-right arrow"></i>
            <span class="time">Hoje, {{ props.average_delivery_time }} min</span>
            <i class="fas fa-circle dot"></i>
            <span class="free">Grátis</span>
        </div>
    </div>
</template>
<style scoped>
@import '@/assets/sass/restaurantPage/banner/_deliveryComp.scss';
</style>