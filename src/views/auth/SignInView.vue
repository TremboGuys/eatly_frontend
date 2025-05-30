<script setup>
import { InputsProps, SignInSubmit, FaceButton, GoogleButton, HaveAnAccount } from '@/components';
import { reactive } from 'vue';

const user = reactive({
        name: '',
        genre: '',
        dateBirth: '',
        email: '',
        password: '',
        cellphone: ''
})

function changeDataUser(data) {
  user[data.field] = data.value;
  console.log(user[data.field]);
}
</script>

<template>
  <div class="container">
    <img src="@/assets/img/logo.png" class="logo" alt="">
    <h1 class="title">Bem vindo de volta!</h1>
    <div class="hr"></div>
    <form @submit.prevent="">
      <InputsProps type="text" field="email" for-id="email" label="Email" maxlength="255" @change-data-user="changeDataUser" />
      <InputsProps type="password" field="password" for-id="password" label="Senha" maxlength="50" @change-data-user="changeDataUser" />
      <SignInSubmit />
    </form>
    <div class="or">Ou</div>
    <div class="hr"></div>
    <FaceButton />
    <GoogleButton />
    <HaveAnAccount />
  </div>
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