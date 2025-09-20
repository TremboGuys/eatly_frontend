<script setup>
import CategoryBox from './CategoryBox.vue';
import hamburgerImage from '../../../assets/img/burger.png';
import pizzaImage from '../../../assets/img/pizza.png';
import refriImage from '../../../assets/img/refrigerantes.png';
import carrinhoImage from '../../../assets/img/carrinho.png';
</script>
<template>
    <div class="categoriesContainer">
        
        <CategoryBox :categoryImage="hamburgerImage" />
        <CategoryBox :categoryImage="pizzaImage" />
        <CategoryBox :categoryImage="refriImage" />
        <CategoryBox :categoryImage="carrinhoImage" />

    </div>
</template>

<style scoped>
@import "@/assets/sass/home/_categories.scss";
</style>