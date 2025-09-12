<script setup>
import router from '@/router';
import { ref } from 'vue';
// import axios from 'axios';

// const bannerImage = ref('');

// onMounted(async () => {
//     const response = await axios.get('');
//     bannerImage.value = response.data.imageUrl;
// });
const toggleFavorite = () => {
    // Lógica para favoritar o restaurante
};
</script>
<template>
    <div class="container">
        <div class="buttons">
            <router-link class="router" to="/">
                <div class="back">
                    <i class="fa-solid fa-arrow-left"></i>
                </div>
            </router-link>
            <div class="favorite" @click="toggleFavorite">
                <div class="heart">
                    <i class="fa-regular fa-heart"></i>
                </div>
            </div>
        </div>
        <div class="img">
            <img class="banner" src="@/assets/img/banner.png" alt="banner" />
        </div>
    </div>
</template>
<style scoped>
@import '@/assets/sass/restaurantPage/banner/_bannerComp.scss';
</style>