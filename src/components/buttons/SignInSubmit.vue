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
        <button type="submit" class="send-button" :class="['signInButton', 'customClass']" >Fazer Login</button>
    </div>
</template>
<style scoped>
@import '@/assets/sass/buttons/_sendButton.scss';
</style>