<script setup>
import InputEmail from '@/components/signIn/InputEmail.vue';
import PasswordInput from '@/components/signIn/PasswordInput.vue';
import SendButton from '@/components/signIn/SendButton.vue';
import FaceButton from '@/components/signIn/FaceButton.vue';
import GoogleButton from '@/components/signIn/GoogleButton.vue';
</script>

<template>
  <div class="container">
    <img src="@/assets/img/logo.png" class="logo" alt="">
    <h1 class="title">Bem vindo de volta!</h1>
    <div class="hr"></div>
    <InputEmail />
    <PasswordInput />
    <SendButton />
    <div class="or">Ou</div>
    <div class="hr"></div>
    <FaceButton />
    <GoogleButton />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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