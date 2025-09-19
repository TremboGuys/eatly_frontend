<script setup>
import { ref } from 'vue';

const props = defineProps({
    description: {
        type: String
    }
})
</script>
<template>
    <div class="container">
        <p class="description">{{ props.description }}</p>
    </div>
</template>
<style scoped>
@import '@/assets/sass/productPage/_descriptionProduct.scss';
</style>