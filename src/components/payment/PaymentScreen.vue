<script setup>
import { ref, computed } from 'vue';
import { useCartStore, usePaymentStore } from '@/stores';
import FullPayment from './FullPayment.vue';

const selectedMethod = ref(null)
const cartStore = useCartStore();
const paymentStore = usePaymentStore();
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
      <button @click="paymentStore.createPayment" class="btn" :disabled="paymentStore.state.loading">Pagar com
        Pix</button>
      <div v-if="paymentStore.payment?.qr_code_base64" class="qr-code">
        <h3>Escaneie com seu app Pix:</h3>
        <img :src="'data:image/png;base64,' + paymentStore.payment.qr_code_base64" alt="QR Code Pix" />
        <p><strong>Copia e cola:</strong> <span class="pix-code">{{ paymentStore.payment.qr_code }}</span></p>
      </div>
    </div>
  </div>
    <FullPayment v-if="selectedMethod" :orderTotal="150.00" :deliveryFee="15.00" :couponDiscount="20.00" />
</template>

<style scoped>
@import "@/assets/sass/payment/_paymentScreen.scss";
</style>
