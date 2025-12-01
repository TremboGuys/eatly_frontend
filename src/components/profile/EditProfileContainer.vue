<script setup>
import InputsProps from "../inputs/InputsProps.vue";
import backButton from "./backButton.vue";
import Burguer from '../../assets/img/burger.png';
import { ButtonSubmit, InputFile } from "@/components";
import { createURL } from "@/utils/createURL";
import { useProfileStore } from "@/stores";

const profileStore = useProfileStore();

function changeDataUser(data) {
  if (['email', 'file'].includes(data.field)) {
    if (!profileStore.newProfile.hasOwnProperty('user')) {
      profileStore.newProfile['user'] = {};
    }
    profileStore.newProfile['user'][data.field] = data.value;

    if (data.field === 'file') {
      profileStore.newProfile['preViewFile'] = createURL(data.value);
    }
  }
  else if (['name', 'date_birth'].includes(data.field)) {
    if (!profileStore.newProfile.hasOwnProperty('natural_person')) {
      profileStore.newProfile['natural_person'] = {};
    }
    profileStore.newProfile['natural_person'][data.field] = data.value;
  }
  else {
    if (!profileStore.newProfile.hasOwnProperty('telephone')) {
      profileStore.newProfile['telephone'] = {};
    }
    profileStore.newProfile['telephone'][data.field] = data.value;
  }
};
</script>

<template>
  <div class="editContainer">
    <div class="top-side">
      <backButton />
      <form class="editArea" @submit.prevent="profileStore.updateProfile()">
        <div class="profile-pic">
          <img :src="profileStore.newProfile['preViewFile'] != null ? profileStore.newProfile['preViewFile'] : profileStore.profile.photo != '' ? profileStore.profile.photo : Burguer" alt="" />
          <i class="fa-solid fa-pencil" @click="profileStore.editImage = true;"></i>
          <InputFile field="file" :invisible="true" @change-data-user="changeDataUser" />
        </div>
        <InputsProps
          type="text"
          field="name"
          for-id="name"
          label="Nome"
          maxlength="40"
          :value="profileStore.profile.name"
          @change-data-user="changeDataUser"
        />
        <InputsProps
          type="email"
          field="email"
          for-id="email"
          label="Email"
          maxlength="100"
          :value="profileStore.profile.email"
          @change-data-user="changeDataUser"
        />
        <InputsProps
          type="date"
          field="date_birth"
          for-id="dateBirth"
          label="Data de nascimento"
          maxlength="100"
          :value="profileStore.profile.date_birth"
          @change-data-user="changeDataUser"
        />
        <InputsProps
          type="text"
          field="number_e164"
          for-id="telephone"
          label="Telefone"
          maxlength="15"
          :value="profileStore.profile.telephone"
          @change-data-user="changeDataUser"
        />
        <div class="save-area">
          <!-- <button class="save-button" @click="saveProfile">Salvar</button> -->
           <ButtonSubmit v-if="!profileStore.state.loading" name="Salvar" :loading="false" />
           <ButtonSubmit v-else :loading="true" />
        </div>
      </form>
    </div>
  </div>
</template>

<style>
@import "@/assets/sass/profile/_editProfile.scss";
</style>
