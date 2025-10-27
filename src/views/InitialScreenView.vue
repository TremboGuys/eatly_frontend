<script setup>
import { ref } from 'vue';
// import InitialScreen from '@/components/initialScreen/InitialScreen.vue';
import SelectedAddress from '@/components/address/SelectedAddress.vue';
const selectedAddress = ref({
  street: "Rua das Flores",
  number: "123",
  city: "São Paulo",
  state: "SP"
})
</script>
<template>
  <main>
    <!-- <InitialScreen /> -->
    <SelectedAddress :address="selectedAddress" />
  </main>
</template>
<style scoped>
/* @media (max-width: 425px) {
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #444801;
  }
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
} */
</style>