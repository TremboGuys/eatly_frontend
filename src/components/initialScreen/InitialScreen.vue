<script setup>
import InitialScreenButtons from '../buttons/InitialScreenButtons.vue';
</script>
<template>
    <div class="container">
        <div class="logo">
            <img src="@/assets/img/logo-white.png" alt="Logo" />
        </div>
        <div class="buttons">
            <InitialScreenButtons class="sign-up-custom" text="Cadastrar" />
        </div>
    </div>
</template>
<style scoped lang="scss">
@media (max-width: 425px) {
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .logo {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .buttons {
            margin-top: 10rem;
            animation: fadeIn 0.5s ease forwards;
            @keyframes fadeIn {
                0% {
                    opacity: 0;
                    transform: translateY(20px);
                }
                100% {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        }
    }
}
</style>