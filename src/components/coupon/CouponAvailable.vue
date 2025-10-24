<script setup>
import { ref } from 'vue'
import PopupConfirm from './PopupConfirm.vue'
const showPopup = ref(false)
const handleRedeem = () => {
    showPopup.value = true
}
const closePopup = () => {
    showPopup.value = false
}
</script>
<template>
    <div class="container">
        <main class="couponMainContainer">
            <div class="card">
                <div class="icon"></div>
                <div class="info">
                    <h3>50% de desconto na sua primeira compra!</h3>
                    <p>Em qualquer produto</p>
                    <span class="date">Válido até: 30/12/2024</span>
                </div>
                <button class="resgate" @click="handleRedeem">Resgatar</button>
            </div>
        </main>
        <PopupConfirm :show="showPopup" title="Cupom Resgatado!" message="Seu cupom foi salvo na sua conta"
            @close="closePopup" />
    </div>
</template>
<style scoped>
@import '@/assets/sass/coupon/_couponMainContainer.scss';
</style>