<script setup>
import { reactive } from 'vue';
const state = reactive({
    isSelect: false,
});
const select = () => {
    state.isSelect = !state.isSelect;
}
</script>
<template>
    <div class="container">
        <div class="order-button" @click="select">
            <button class="btn">
                Entrega Grátis
            </button>
        </div>
    </div>
</template>
<style scoped>
@import "@/assets/sass/buttons/_freeDeliveryButton.scss";
</style>