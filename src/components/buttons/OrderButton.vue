<script setup>
import { reactive } from 'vue';
const state = reactive({
    isOpen: false,
});
const dropdown = () => {
    state.isOpen = !state.isOpen;
};
const data = reactive({
    options: [
        {
            id: 1,
            name: 'Ordenação Padrão',
            image: '@/assets/img/logo.png',
            default: true,
        },
        {
            id: 2,
            name: 'Teste2',
            image: '@/assets/img/logo.png',
        },
    ],
})
</script>
<template>
    <div class="container">
        <div class="order-button" @click="dropdown">
            <button class="btn">Order</button>
            <div class="orderOptions" v-if="state.isOpen">
                <div class="option">
                    <div class="circle">
                        <img src="@/assets/img/logo.png" alt="">
                    </div>
                    <div class="text">
                        <p>Teste</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped></style>