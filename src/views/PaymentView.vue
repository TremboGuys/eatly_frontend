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
    <SelectOption @selectMethod="handleSelect" />
    <PaymentScreen v-if="selectedMethod" :method="selectedMethod" />
  </div>
</template>
<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;

  h1 {
    margin-bottom: 1.5rem;
    color: #333;
  }
}
</style>