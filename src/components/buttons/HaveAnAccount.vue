<script setup>
import { useRoute, RouterLink } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

const isOnSignIn = computed(() => route.name === 'signin')
const isOnSignUp = computed(() => route.name === 'signup')
</script>
<template>
    <h2 v-if="isOnSignUp">Não possui uma conta? <router-link class="link" to="/signin">Entrar</router-link></h2>
    <h2 v-else-if="isOnSignIn">Já possui uma conta? <router-link class="link" to="/signup">Cadastrar</router-link></h2>
</template>

<style scoped>
@import '@/assets/sass/buttons/_haveAnAccount.scss';
</style>