<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'Cupom Resgatado!'
  },
  message: {
    type: String,
    default: 'Seu cupom foi resgatado com sucesso 🎉'
  },
  show: {
    type: Boolean,
    required: true
  }
})
const emit = defineEmits(['close'])
</script>
<template>
  <div v-if="show" class="popupContainer" @click.self="emit('close')">
    <div class="popup">
      <div class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="none" viewBox="0 0 24 24" stroke="green" stroke-width="2">
          <circle cx="12" cy="12" r="10" stroke="green" stroke-width="2" fill="none"/>
          <path stroke="green" stroke-width="2" d="M8 12l2.5 2.5L16 9"/>
        </svg>
      </div>
      <h2>{{ title }}</h2>
      <p>{{ message }}</p>
      <div class="buttons">
        <button class="close" @click="emit('close')">Fechar</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import '@/assets/sass/popUp/_popUpConfirm.scss';
</style>