<script setup>
import { NavigationBar } from "@/components"
</script>

<template>
    <div class="layoutContainer">
        <div class="pageContent">
            <RouterView />
        </div>
        <NavigationBar />
    </div>
</template>

<style scoped>
/* .pageContent {
    padding-bottom: 7vh;
} */
</style>