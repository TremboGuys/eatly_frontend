<script setup>
import ProfileListContainer from './ProfileListContainer.vue';
</script>

<template>
    <div class="profile-container">
        <h1>Perfil</h1>
        <div class="info-container">
            <div class="profile-pic">
                <img src="../../assets/img/burger.png" alt="">
                <!-- <i class="fa-solid fa-pencil"></i> -->
            </div>
            <h2 class="user-name">Lucas Diniz</h2>
            <p class="user-email">lucasdiniz1708@gmail.com</p>
        </div>
        <div class="profile-list">
            <ProfileListContainer />
        </div>
    </div>
</template>

<style scoped>
@import "@/assets/sass/profile/_profileContainer.scss";
</style>