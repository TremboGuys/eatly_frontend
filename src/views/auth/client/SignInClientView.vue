<script setup>
import { reactive } from 'vue';
import { InputsProps, ButtonSubmit, FaceButton, GoogleButton, HaveAnAccount, LoadingScreen } from '@/components';
import { useUserStore } from '@/stores';
import { googleSdkLoaded } from 'vue3-google-login';

const user = reactive({
    email: '',
    password: '',
});

const userStore = useUserStore();

function changeDataUser(data) {
  user[data.field] = data.value;
}

function login() {
  googleSdkLoaded((google) => {
    google.accounts.oauth2.initTokenClient({
      client_id: import.meta.env.VITE_CLIENT_ID,
      scope: "openid email profile",
      callback: async (response) => {
        await userStore.loginByGoogle({token: response.access_token});
      }
    }).requestAccessToken()
  })
}
</script>

<template>
  <div class="container" v-if="!userStore.state.loading">
    <img src="@/assets/img/logo.png" class="logo" alt="">
    <h1 class="title">Bem vindo de volta!</h1>
    <div class="hr"></div>
    <form @submit.prevent="userStore.login(user)">
      <InputsProps type="text" field="email" for-id="email" label="Email" maxlength="255" @change-data-user="changeDataUser" />
      <InputsProps type="password" field="password" for-id="password" label="Senha" maxlength="50" @change-data-user="changeDataUser" />
      <ButtonSubmit name="Realizar Login" />
    </form>
    <div class="or">Ou</div>
    <div class="hr"></div>
    <GoogleButton @click="login" />
    <HaveAnAccount />
  </div>
  <LoadingScreen v-else />
</template>

<style scoped>
@media (max-width: 425px) {
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "poppins", sans-serif;
}
.logo {
  width: 140px;
  height: auto;
  margin-top: 20px;
  margin-bottom: 2rem;
}
.title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  font-family: 'Poppins', sans-serif;
}
.hr {
  width: 80vw;
  height: 1px;
  background-color: #dddddd;
  margin-bottom: 2rem;
}
.or {
  font-size: 1.2rem;
  margin: 1rem 0;
  font-family: 'Poppins', sans-serif;
  color: #666;
}
}
</style>