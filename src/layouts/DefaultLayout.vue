<script setup>
import { NavigationBar } from "@/components"
</script>

<template>
    <div class="layoutContainer">
        <div class="pageContent">
            <RouterView />
        </div>

        <div class="navWrapper">
            <NavigationBar />
        </div>
    </div>
</template>

<style scoped>
.layoutContainer {
    position: relative;
}

.navWrapper {
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 999;
    padding-bottom: 1.5vh;
}

.pageContent {
    padding-bottom: 8vh; 
}
</style>
