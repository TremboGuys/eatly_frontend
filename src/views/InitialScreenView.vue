<script setup>
import InitialScreen from '@/components/initialScreen/InitialScreen.vue';
</script>
<template>
  <main>
    <InitialScreen />
  </main>
</template>
<style scoped>
@media (max-width: 425px) {
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
}
</style>