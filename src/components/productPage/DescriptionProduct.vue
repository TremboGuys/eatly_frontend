<script setup>
import { ref } from 'vue';
const description = ref('Este é um produto incrível que você vai adorar! Este é um produto incrível que você vai adorar! Este é um produto incrível que você vai adorar! Este é um produto incrível que você vai adorar! Este é um produto incrível que você vai adorar! Este é um produto incrível que você vai adorar! Este é um produto incrível que você vai adorar! Este é um produto incrível que você vai adorar!');
</script>
<template>
    <div class="container">
        <p class="description">{{ description }}</p>
    </div>
</template>
<style scoped>
@import '@/assets/sass/productPage/_descriptionProduct.scss';
</style>