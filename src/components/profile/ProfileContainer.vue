<script setup>
import { ProfileListContainer } from '@/components';
import { useProfileStore } from '@/stores';
import Burguer from '../../assets/img/burger.png';

const { profile } = useProfileStore();
</script>

<template>
    <div class="profile-container">
        <h1>Perfil</h1>
        <div class="info-container">
            <div class="profile-pic">
                <img :src="profile.photo != '' ? profile.photo : Burguer" alt="">
                <!-- <i class="fa-solid fa-pencil"></i> -->
            </div>
            <h2 class="user-name">{{ profile.name }}</h2>
            <p class="user-email">{{ profile.email }}</p>
        </div>
        <div class="profile-list">
            <ProfileListContainer />
        </div>
    </div>
</template>

<style scoped>
@import "@/assets/sass/profile/_profileContainer.scss";
</style>