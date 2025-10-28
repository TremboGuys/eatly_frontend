<script setup>
import InputsProps from "../inputs/InputsProps.vue";
import backButton from "./backButton.vue";
</script>

<template>
  <div class="editContainer">
    <div class="top-side">
        <backButton />
      <div class="editArea">
        <div class="profile-pic">
          <img src="../../assets/img/burger.png" alt="" />
          <i class="fa-solid fa-pencil"></i>
        </div>
        <InputsProps
          type="text"
          field="name"
          for-id="name"
          label="Nome"
          maxlength="40"
          value="Lucas"
        />
        <InputsProps
          type="email"
          field="email"
          for-id="email"
          label="Email"
          maxlength="100"
          value="lucasdiniz1708@gmail.com"

        />
        <InputsProps
          type="text"
          field="phone"
          for-id="phone"
          label="Telefone"
          maxlength="15"
          value="47992451352"
        />
        <InputsProps
          type="text"
          field="address"
          for-id="address"
          label="Endereço"
          maxlength="100"
          value="Rua Exemplo, 123"
        />
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
