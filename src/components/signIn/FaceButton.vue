<script setup>
</script>
<template>
    <div class="container">
        <button class="face-button" @click="signInWithFace">
            <div class="logo-face">
                <img src="@/assets/img/signIn/logo-face.png" alt="Logo" />
            </div>Continuar com Facebook
        </button>
    </div>
</template>
<style scoped>
@import '@/assets/sass/signIn/_faceButton.scss';
</style>