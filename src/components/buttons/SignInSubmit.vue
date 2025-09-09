<script setup>
defineProps({
  customClass: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(['submitLogin'])
</script>
<template>
    <div class="container">
        <button type="submit" class="send-button" :class="['signInButton', 'customClass']" @click="emit('submitLogin')" >Fazer Login</button>
    </div>
</template>
<style scoped>
@import '@/assets/sass/buttons/_sendButton.scss';
</style>