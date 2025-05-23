<script setup>
</script>
<template>
    <div class="container">
        <button class="google-button" @click="signInWithGoogle">
            <div class="logo-google">
                <img src="@/assets/img/signIn/logo-google.png" alt="Logo" />
            </div>Continuar com o Google
        </button>
    </div>
</template>
<style scoped>
@import '@/assets/sass/signUp/_googleButton.scss';
</style>