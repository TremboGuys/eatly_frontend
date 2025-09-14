<script setup>
import { ref, onMounted } from 'vue';

const loading = ref(true);

// Exemplo de como remover o preloader depois de 2s
onMounted(() => {
    setTimeout(() => {
        loading.value = false;
    }, 2000);
});
</script>

<template>
    <div class="preloader" v-if="loading">
        <div class="spinner"></div>
    </div>
</template>

<style scoped>
.preloader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

.spinner {
    width: 50px;
    height: 50px;
    border: 6px solid #ccc;
    border-top-color: #444801;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}
</style>