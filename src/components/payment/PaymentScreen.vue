<script setup>
import { ref, computed, onMounted } from 'vue'
import { QrCodePix } from 'qrcode-pix';
import QrcodeVue from 'qrcode.vue';
const props = defineProps({
  method: String
})
const card = ref({
  number: '',
  name: '',
  expiry: '',
  cvv: ''
})
const pixData = {
  key: '47999185924',
  name: 'Luiz Fernando Blume Jacinto',
  city: 'JOINVILLE',
  transactionId: '123456789',
  message: 'Pagamento',
  value: 150.99,
};
const isCard = computed(() => props.method === 'credito' || props.method === 'debito')
const pixPayload = ref('')
onMounted(() => {
  if (props.method === 'pix') {
    const qrCodePix = QrCodePix({
      version: '01',
      key: pixData.key,
      name: pixData.name,
      city: pixData.city,
      transactionId: pixData.transactionId,
      message: pixData.message,
      value: pixData.value,
    });
    pixPayload.value = qrCodePix.payload();
  }
})
function submitCard() {
  alert(`Pagamento com cartão de ${props.method === 'credito' ? 'crédito' : 'débito'} enviado!`)
}
</script>
<template>
  <div class="containerScreen">
    <div v-if="isCard" class="cardForm">
      <h2>Pagamento com Cartão de {{ method === 'credito' ? 'Crédito' : 'Débito' }}</h2>
      <form @submit.prevent="submitCard">
        <div class="formGroup">
          <label for="cardNumber">Número do Cartão</label>
          <input id="cardNumber" v-mask="'#### #### #### ####'" type="text" v-model="card.number" placeholder="0000 0000 0000 0000" required />
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
      <div class="qrcode" v-if="pixPayload">
        <qrcode-vue :value="pixPayload.value" :size="300" level="M" />
        <p>Payload: {{ pixPayload.value }}</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import "@/assets/sass/payment/_paymentScreen.scss";
</style>
