<script setup>
import { ref, computed } from 'vue'
const props = defineProps({
  method: String
})
const card = ref({
  number: '',
  name: '',
  expiry: '',
  cvv: ''
})
const isCard = computed(() => props.method === 'credito' || props.method === 'debito')
async function createPayment() {
  loading.value = true
  try {
    const response = await axios.post('http://localhost:3000/', {
      transaction_amount: cartStore.totalPrice,
      description: 'Pagamento Pix de teste',
      payment_method_id: 'pix',
      payer: { email: 'comprador@email.com' }
    })
    const transData = response.data.point_of_interaction?.transaction_data
    qrCodeBase64.value = transData?.qr_code_base64 || ''
    pixCode.value = transData?.qr_code || ''
    if (!transData) error.value = 'Erro: resposta inválida do servidor.'
  } catch (e) {
    error.value = 'Erro ao criar pagamento: ' + (e.response?.data?.error || e.message || e)
  }
  loading.value = false
}

function submitCard() {
  alert(`Pagamento com cartão de ${props.method === 'credito' ? 'crédito' : 'débito'} enviado!`)
}
</script>

<template>
  <div class="containerScreen">
    <div v-if="isCard" class="cardForm">
      <h2>Pagamento com Cartão de {{ props.method === 'credito' ? 'Crédito' : 'Débito' }}</h2>
      <form @submit.prevent="submitCard">
        <div class="formGroup">
          <label for="cardNumber">Número do Cartão</label>
          <input id="cardNumber" v-mask="'#### #### #### ####'" type="text" v-model="card.number"
            placeholder="0000 0000 0000 0000" required />
        </div>
        <div class="formGroup">
          <label for="cardName">Nome no Cartão</label>
          <input id="cardName" type="text" v-model="card.name" placeholder="Seu nome completo" required />
        </div>
        <div class="formRow">
          <div class="formGroup">
            <label for="expiry">Validade</label>
            <input id="expiry" v-mask="'##/##'" type="text" v-model="card.expiry" placeholder="MM/AA" required />
          </div>
          <div class="formGroup">
            <label for="cvv">CVV</label>
            <input id="cvv" v-mask="'###'" type="text" v-model="card.cvv" placeholder="123" required />
          </div>
        </div>
        <button type="submit">Confirmar Pagamento</button>
      </form>
    </div>
    <div v-else-if="props.method === 'pix'" class="pix-section">
      <h2>Pagamento via Pix</h2>
      <button @click="createPayment" class="btn" :disabled="loading">Pagar com Pix</button>
      <div v-if="error" style="color: red; margin-top: 8px;">{{ error }}</div>
      <div v-if="qrCodeBase64" class="qr-code">
        <h3>Escaneie com seu app Pix:</h3>
        <img :src="'data:image/png;base64,' + qrCodeBase64" alt="QR Code Pix"/>
        <p><strong>Copia e cola:</strong> <span class="pix-code">{{ pixCode }}</span></p>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import "@/assets/sass/payment/_paymentScreen.scss";
</style>
