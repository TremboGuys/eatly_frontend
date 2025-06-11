<script setup>
defineProps({
  customClass: {
    type: String,
    default: ''
  }
});
</script>
<template>
  <div class="container">
    <button type="submit" class="send-button" :class="['submitButton', 'customClass']">Finalizar Cadastro</button>
  </div>
</template>
<style scoped>
@import '@/assets/sass/buttons/_sendButton.scss';
@media (max-width: 425px) {
  .container {
    margin-top: 35vh;
  }
}
</style>