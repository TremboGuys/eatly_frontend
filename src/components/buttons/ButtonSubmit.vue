<script setup>
import { VueSpinner } from 'vue3-spinners';
const props = defineProps({
  customClass: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  },
  loading: {
    type: Boolean,
    default: false
  }
});
</script>
<template>
  <div class="container" v-if="!props.loading">
    <button type="submit" class="send-button" :class="['submitButton', 'customClass']">{{ props.name }}</button>
  </div>
  <div class="container" v-else>
    <button type="submit" class="send-button" :class="['submitButton', 'customClass']" disabled>
      <VueSpinner :size="30" :color="'#FFFFFF'" />
    </button>
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