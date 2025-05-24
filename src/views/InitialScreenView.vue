<script setup>
import InitialScreen from '@/components/initialScreen/InitialScreen.vue';
</script>

<template>
  <main>
    <InitialScreen />
  </main>
</template>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #444801;
}
</style>