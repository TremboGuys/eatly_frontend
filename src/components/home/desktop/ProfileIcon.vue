<script setup>
import profile from '@/assets/img/navigationBar/profile.svg?component';

</script>

<template>
    <RouterLink to="/profile">
    <div class="pic-container">
        <img src="../../../assets/img/navigationBar/Profile.png" class="profile-icon" alt="">
    </div>
    </RouterLink>
</template>

<style scoped>
@import "@/assets/sass/home/_profileIcon.scss";
</style>