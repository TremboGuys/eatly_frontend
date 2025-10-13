<script setup>
defineProps({
  selected: String
})
</script>
<template>
  <div class="container">
    <button @click="$emit('selectMethod', 'credito')" :class="{ active: selected === 'credito' }">Cartão de
      Crédito</button>
    <button @click="$emit('selectMethod', 'debito')" :class="{ active: selected === 'debito' }">Cartão de
      Débito</button>
    <button @click="$emit('selectMethod', 'pix')" :class="{ active: selected === 'pix' }">Pix</button>
  </div>
</template>
<style scoped>
@import "@/assets/sass/payment/_selectOption.scss";
</style>