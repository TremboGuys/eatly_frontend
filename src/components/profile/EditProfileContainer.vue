<script setup>
import InputsProps from '../inputs/InputsProps.vue';
</script>

<template>

<div class="editContainer">
    <div class="top-side">
        <div class="back">
        <router-link :to="`/profile`" class="back-link">
            <i class="fa-solid fa-arrow-left"></i>
        </router-link>
        <div class="nameRestaurant">
            <span class="name">Perfil</span>
        </div>
    </div>
    <div class="editArea">
        <div class="profile-pic">
            <img src="../../assets/img/burger.png" alt="">
            <i class="fa-solid fa-pencil"></i>
        </div>
            <InputsProps type="text" field="name" for-id="name" label="Lucas Diniz" maxlength="40" />
            <InputsProps type="email" field="email" for-id="email" label="lucasdiniz1708@gmail.com" maxlength="100" />
            <InputsProps type="text" field="phone" for-id="phone" label="47992451352" maxlength="15" />
            <InputsProps type="text" field="address" for-id="address" label="Rua Exemplo, 123" maxlength="100" />            
    </div>
    </div>
    <div class="save-area">
        <button class="save-button" @click="saveProfile">Salvar</button>
    </div>
</div>
</template>

<style>
@import "@/assets/sass/profile/_editProfile.scss";
</style>