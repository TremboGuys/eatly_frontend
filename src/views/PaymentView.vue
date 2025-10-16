<script setup>
import { ref } from 'vue'
import axios from 'axios'
const qrCodeBase64 = ref('')
const pixCode = ref('')
const loading = ref(false)
const error = ref('')

async function criarPagamento() {
  loading.value = true
  error.value = ''
  try {
    const response = await axios.post('http://localhost:3000/', {
      transaction_amount: 100,
      description: 'Pagamento Pix de teste',
      payment_method_id: 'pix',
      payer: { email: 'comprador@email.com' }
    })
    qrCodeBase64.value = response.data.point_of_interaction.transaction_data.qr_code_base64
    pixCode.value = response.data.point_of_interaction.transaction_data.qr_code
  } catch (e) {
    error.value = 'Erro ao criar pagamento: ' + (e.message || e)
  }
  loading.value = false
}
</script>
<template>
  <button @click="criarPagamento" :disabled="loading">Pagar com Pix</button>
  <div v-if="error" style="color: red">{{ error }}</div>
  <div v-if="qrCodeBase64">
    <h3>Escaneie com seu app Pix:</h3>
    <img :src="'data:image/png;base64,' + qrCodeBase64" alt="QR Code Pix" />
    <p><strong>Copia e cola:</strong> <input :value="pixCode" readonly /></p>
  </div>
</template>
