<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const bannerImage = ref('');

onMounted(async () => {
    const response = await axios.get('your-api-endpoint');
    bannerImage.value = response.data.imageUrl;
});
</script>
<template>
    <div class="container">
        <img class="banner" :src="bannerImage" src="@/assets/banner.png" alt="banner"/>
    </div>
</template>
<style scoped>
</style>