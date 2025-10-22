<template>
    <div class="back">
        <router-link :to="`/profile`" class="back-link">
            <i class="fa-solid fa-arrow-left"></i>
        </router-link>
        <div class="nameRestaurant">
            <span class="name">Perfil</span>
        </div>
    </div>
</template>

<style scoped>
@import "@/assets/sass/profile/_backButton.scss";
</style>