<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
    <div class="container">
        <router-link class="router" to="/signup"><button class="send-button signUp">Cadastrar</button></router-link>
        <router-link class="router" to="/signin"><button class="send-button signIn">Entrar</button></router-link>
    </div>
</template>
<style scoped>
@import '@/assets/sass/buttons/_initialScreenButtons.scss';
</style>