<script setup>
import { ref } from 'vue'
import { PaymentScreen, SelectOption } from '@/components/index.js'

const selectedMethod = ref(null)

function handleSelect(method) {
  selectedMethod.value = method
}
</script>
<template>
  <div class="container">
    <h1>Método de Pagamento</h1>
    <div class="options">
      <SelectOption @selectMethod="handleSelect" />
    </div>
    <PaymentScreen v-if="selectedMethod" :method="selectedMethod" />
  </div>
</template>
<style scoped lang="scss">
.container {
  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    color: #333;
    font-family: 'Poppins', sans-serif;
  }
  .options {
    display: flex;
    flex-direction: column;
    width: 100vw;
  }
}
</style>