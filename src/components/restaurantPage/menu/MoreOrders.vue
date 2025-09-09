<script setup>
import { ref } from 'vue';

const addToCart = () => {
    console.log('Add to cart clicked');
};
</script>
<template>
    <div class="container">
        <div class="moreOrders">
            <span class="MoreOrdersText">Mais Pedidos</span>
            <div class="hr"></div>
        </div>
        <div class="item">
            <div class="top">
                <div class="image">
                    <img src="@/assets/img/signIn/logo-face.png" alt="Pizza">
                </div>
                <div class="info">
                    <div class="title">PROMOÇÃO PIZZA BROTO + PIZZA GIGANTE + COCA COLA 2L</div>
                    <div class="description">Pizza Broto 6 Fatias + Pizza Gigante 16 Fatias + Coca Cola 2L</div>
                </div>
            </div>
            <div class="bottom">
                <div class="price">R$ 129,90</div>
            </div>
            <div class="addToCart">
                <button class="button">Promoção</button>
            </div>
        </div>
    </div>
</template>
<style scoped>
@import "@/assets/sass/restaurantPage/menu/_moreOrders.scss";
</style>