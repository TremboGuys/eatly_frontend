<script setup>
import { ref } from 'vue'
import { PaymentScreen, SelectOption, FullPayment } from '@/components/index.js'

const selectedMethod = ref(null)

function handleSelect(method) {
  selectedMethod.value = method
}
</script>
<template>
  <div class="container">
    <h1>Método de Pagamento</h1>

    <div class="options">
      <SelectOption :selected="selectedMethod" @selectMethod="handleSelect" />
    </div>

    <PaymentScreen v-if="selectedMethod" :method="selectedMethod" />

    <FullPayment v-if="selectedMethod" :orderTotal="150.00" :deliveryFee="15.00" :couponDiscount="20.00" />
  </div>
</template>
<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;

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
    width: 100%;
  }
}
</style>