<script setup>
import { ref } from 'vue';
import { menu } from '@/metaDatas/menuData';

const menuItems = ref(menu);


const addToCart = () => {
    console.log('Add to cart clicked');
};
</script>
<template>
    <div class="container">
        <div v-for="(category, catIndex) in menuItems" :key="catIndex" class="categorySection">
            <div class="titleSection">
                <span class="text">{{ category.title }}</span>
                <div class="hr"></div>
            </div>

            <div class="item" v-for="(item, index) in category.items" :key="index">
                <div class="top">
                    <div class="image">
                        <img :src="item.image" :alt="item.title">
                    </div>
                    <div class="info">
                        <div class="title">{{ item.title }}</div>
                        <div class="description">{{ item.description }}</div>
                    </div>
                </div>
                <div class="bottom">
                    <div class="price">{{ item.price }}</div>
                </div>
                <div class="addToCart">
                    <button class="button" @click="addToCart(item)">Adicionar</button>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
@import "@/assets/sass/restaurantPage/menu/_itemsMenu.scss";
</style>