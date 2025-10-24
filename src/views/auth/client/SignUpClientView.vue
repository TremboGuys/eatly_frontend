<script setup>
import { InputsProps, SignUpSubmit, FaceButton, GoogleButton, HaveAnAccount, PopUpFinishLogin } from '@/components';
import { useRegisterClientComposable } from '@/composables';
import { useUserStore } from '@/stores';
import { reactive } from 'vue';
import { verifyEmail, verifyPassword, verifyCellphoneNumber } from '@/utils/validators';
import { googleSdkLoaded } from 'vue3-google-login';

const user = reactive({
  user: {
    email: '',
    password: '',
    role: 'client',
  },
  natural_person: {
    name: '',
    date_birth: '',
  },
  telephone: {
    telephone_type: 1,
    number_e164: '+',
    is_principal: true
  }
});

console.log(import.meta.env.VITE_CLIENT_ID);

const useRegisterClient = useRegisterClientComposable();

const userStore = useUserStore();

function changeDataUser(data) {
  if (['email', 'password'].includes(data.field)) {
    user.user[data.field] = data.value;

    if (data.field == 'email') {
      verifyEmail();
    }
    else {
      verifyPassword();
    }
  }

  if (['name', 'date_birth'].includes(data.field)) {
    user.natural_person[data.field] = data.value;

    if (data.field == 'date_birth') {
      verifyDateBirth()
    }
  }

  if (data.field == 'number_e164') {
    user.telephone['number_e164'] = verifyCellphoneNumber(data.value);
    useRegisterClient.formState.cellphone = true;
  }
}

function verifyDateBirth() {
  useRegisterClient.formState.date_birth = (2025 - Number(user.natural_person.date_birth.slice(0,4)) > 16) ? true : false;
}

function login() {
  googleSdkLoaded((google) => {
    google.accounts.oauth2.initTokenClient({
      client_id: import.meta.env.VITE_CLIENT_ID,
      scope: "openid email profile",
      callback: async (response) => {
        const data = {
          token: response.access_token,
          role: 'client'
        }

        await userStore.sendTokenToRegisterByGoogle(data);
      }
    }).requestAccessToken({ include_granted_scopes: true })
  })
}

const handleLoginSuccess = (response) => {
  const { credential } = response;
  console.log("Access Token", credential);
};

const handleLoginError = () => {
  console.error("Login failed");
};
</script>

<template>
  <div class="container" :style="userStore.state.successLoginGoogle ? 'filter: blur(5px);pointer-events: none;' : ''">
    <img src="@/assets/img/logo.png" class="logo" alt="">
    <h1 class="title">Cadastre-se</h1>
    <div class="hr"></div>
    <form @submit.prevent="userStore.register(user, useRegisterClient.enable, useRegisterClient.formState)">
      <InputsProps type="text" field="name" for-id="name" label="Nome" maxlength="" @change-data-user="changeDataUser" />
      <InputsProps type="text" field="email" for-id="email" label="Email" maxlength="255" @change-data-user="changeDataUser" />
      <InputsProps type="password" field="password" for-id="password" label="Senha" maxlength="50" @change-data-user="changeDataUser" />
      <InputsProps type="text" field="number_e164" for-id="cellphone" label="Telefone" maxlength="15" @change-data-user="changeDataUser" />
      <InputsProps type="date" field="date_birth" for-id="date_birth" label="Data de Nascimento" @change-data-user="changeDataUser" />
      <SignUpSubmit />
    </form>
    <div class="or">Ou</div>
    <div class="hr"></div>
    <GoogleButton @click="login" />
  </div>
  <PopUpFinishLogin v-if="userStore.state.successLoginGoogle" />
</template>

<style scoped>
/* .container {
  filter: blur(5px);
  pointer-events: none;
} */
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
</style>