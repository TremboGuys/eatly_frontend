<script setup>
const props = defineProps({
  customClass: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  }
});
</script>
<template>
  <div class="container">
    <button type="submit" class="send-button" :class="['submitButton', 'customClass']">{{ props.name }}</button>
  </div>
</template>
<style scoped>
@import '@/assets/sass/buttons/_sendButton.scss';
/* @media (max-width: 425px) {
  .container {
    margin-top: 35vh;
  }
} */
</style>