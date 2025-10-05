<script setup>
import OrderStatus from '@/components/orderStatus/OrderStatus.vue';
</script>
<template>
    <div class="container">
        <div class="back">
            <router-link :to="`/dashboard`" class="back-link">
                <i class="fa-solid fa-arrow-left"></i>
            </router-link>
            <div class="back-menu">
                <span class="name">Voltar ao menu principal</span>
            </div>
        </div>
        <div class="order-view">
            <OrderStatus />
        </div>
    </div>
</template>
<style scoped>
.back {
    width: 100%;
    display: flex;
    align-items: center;
    margin: .8rem 0 0 1rem;
}

.back-link {
    text-decoration: none;
    color: #000;
    font-size: 1.4rem;
    display: flex;
    align-items: center;
}

.back-link:hover {
    color: #555;
}

.back-menu {
    font-family: 'Poppins', sans-serif;
    font-size: 1.4rem;
    font-weight: 600;
    color: #333;
}
.name {
    margin-left: .5rem;
}
</style>