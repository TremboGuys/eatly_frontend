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

const qrCode = ref('')
const isCard = computed(() => props.method === 'credito' || props.method === 'debito')

function submitCard() {
  alert(`Pagamento com cartão de ${props.method === 'credito' ? 'crédito' : 'débito'} enviado!`)
}

async function generateQRCode() {
  const pixKey = 'chavepix@exemplo.com'
  qrCode.value = await QRCode.toDataURL(`Pagamento via Pix - chave: ${pixKey}`)
}
</script>
<template>
  <div class="container">
    <div v-if="isCard" class="cardForm">
      <h2>
        Pagamento com Cartão de
        {{ method === 'credito' ? 'Crédito' : 'Débito' }}
      </h2>
      <form @submit.prevent="submitCard">
        <div class="formGroup">
          <label for="cardNumber">Número do Cartão</label>
          <input id="cardNumber" v-model="card.number" placeholder="0000 0000 0000 0000" required />
        </div>

        <div class="formGroup">
          <label for="cardName">Nome no Cartão</label>
          <input id="cardName" v-model="card.name" placeholder="Seu nome completo" required />
        </div>
        <div class="formRow">
          <div class="formGroup">
            <label for="expiry">Validade</label>
            <input id="expiry" v-model="card.expiry" placeholder="MM/AA" required />
          </div>
          <div class="formGroup">
            <label for="cvv">CVV</label>
            <input id="cvv" v-model="card.cvv" placeholder="123" required />
          </div>
        </div>
        <button type="submit">
          Confirmar Pagamento
        </button>
      </form>
    </div>
    <div v-else-if="method === 'pix'" class="pix-section">
      <h2>Pagamento via Pix</h2>
      <button @click="generateQRCode">Gerar QR Code</button>
      <div v-if="qrCode" class="qrcode">
        <img src="@/assets/img/refrigerantes.png" alt="QR Code Pix" />
      </div>
    </div>
  </div>
</template>
<style scoped>
@import "@/assets/sass/payment/_paymentScreen.scss";
</style>
