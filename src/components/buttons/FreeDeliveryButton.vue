<script setup>
import { ref } from 'vue';
const selected = ref(false);
function select() {
    selected.value = !selected.value;
}
</script>
<template>
    <div class="container">
        <div class="order-button">
            <button class="btn" @click="select" :class="{ active: selected }"">
                Entrega Grátis
            </button>
        </div>
    </div>
</template>
<style scoped>
@import "@/assets/sass/buttons/_freeDeliveryButton.scss";
</style>