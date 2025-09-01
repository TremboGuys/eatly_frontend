<script setup>
import { ref } from 'vue';

const isLoading = ref(true);

// Simulate a data fetch
setTimeout(() => {
    isLoading.value = false;
}, 2000);
</script>

<template>
    <div class="container">
        <div class="shine"></div>
    </div>
</template>

<style scoped>
.container {
    width: 300px;
    height: 200px;
    background-color: #222;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: sans-serif;
}

.shine {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%);
    transform: rotate(0deg);
    animation: shineMove 2s infinite;
    box-shadow: 20px 20px 30px rgba(255, 255, 255, 0.5);
}

@keyframes shineMove {
    0% {
        transform: translate(-100%, -100%) rotate(45deg);
    }

    100% {
        transform: translate(100%, 100%) rotate(45deg);
    }
}
</style>