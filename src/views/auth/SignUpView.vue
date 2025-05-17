<script setup>
import InputEmail from '@/components/signUp/InputEmail.vue';
import PasswordInput from '@/components/signUp/PasswordInput.vue';
import SendButton from '@/components/signUp/SendButton.vue';
import FaceButton from '@/components/signUp/FaceButton.vue';
import GoogleButton from '@/components/signUp/GoogleButton.vue';
import PhoneInput from '@/components/signUp/PhoneInput.vue';
import CPFInput from '@/components/signUp/CPFInput.vue';
import HaveAnAccount from '@/components/signUp/HaveAnAccount.vue';
</script>

<template>
  <div class="container">
    <img src="@/assets/img/logo.png" class="logo" alt="">
    <h1 class="title">Cadastre-se</h1>
    <div class="hr"></div>
    <InputEmail />
    <PasswordInput />
    <PhoneInput />
    <CPFInput />
    <SendButton />
    <div class="or">Ou</div>
    <div class="hr"></div>
    <FaceButton />
    <GoogleButton />
    <HaveAnAccount />
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: poppins;
}
.logo {
  width: 140px;
  height: auto;
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