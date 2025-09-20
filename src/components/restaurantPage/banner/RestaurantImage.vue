<script setup>
const props = defineProps(['photo'])
</script>

<template>
    <div class="container">
        <div class="img">
            <img :src="props.photo" alt="">
        </div>
    </div>
</template>
<style scoped>
@import '@/assets/sass/restaurantPage/banner/_restaurantImage.scss';
</style>