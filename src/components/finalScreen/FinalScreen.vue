<script setup>
import { ref, computed } from 'vue'
const qty = ref(1)
const priceUnit = 48
const delivery = 6
const method = ref('Mastercard')
const doc = ref('')
const saveCard = ref(false)

const subtotal = computed(() => qty.value * priceUnit)
const total = computed(() => subtotal.value + delivery)

function inc() { qty.value++ }
function dec() { if (qty.value > 1) qty.value-- }
function placeOrder() {
  console.log({ qty: qty.value, method: method.value, doc: doc.value, saveCard: saveCard.value, total: total.value })
}
</script>
<template>
  <main class="orderMainContainer">
    <section class="card">
      <div class="icon">🍕</div>
      <div class="info">
        <h3>Grande</h3>
        <p>1x sem borda • 1x aliche</p>
        <div class="row">
          <div class="qty">
            <button aria-label="diminuir" @click="dec">−</button>
            <span>{{ qty }}</span>
            <button aria-label="aumentar" @click="inc">+</button>
          </div>
          <span class="price">R$ {{ subtotal.toFixed(2) }}</span>
        </div>
      </div>
    </section>
    <section class="card summary">
      <div class="info">
        <p>Subtotal</p>
        <span class="price">R$ {{ subtotal.toFixed(2) }}</span>
      </div>
      <div class="info">
        <p>Entrega</p>
        <span class="price">R$ {{ delivery.toFixed(2) }}</span>
      </div>
      <div class="info total">
        <h3>Total</h3>
        <span class="price">R$ {{ total.toFixed(2) }}</span>
      </div>
    </section>
    <section class="card payment">
      <div class="info">
        <h3>Pagamento</h3>
        <p>Débito • {{ method }}</p>
      </div>
      <button class="swap">Trocar</button>
    </section>
    <section class="card empty">
      <div class="info">
        <h3>Salvar cartão</h3>
        <p>Ativar para próximas compras</p>
      </div>
      <label class="switch">
        <input type="checkbox" v-model="saveCard" />
        <span></span>
      </label>
    </section>
    <section class="card">
      <div class="info">
        <h3>CPF na nota</h3>
        <input class="docInput" type="text" v-model="doc" placeholder="Digite aqui" maxlength="14" v-mask="'###.###.###-##'" />
      </div>
    </section>
    <section class="card footer">
      <button class="cta" @click="placeOrder">Fazer pedido</button>
    </section>
  </main>
</template>
<style scoped lang="scss">
@import "@/assets/sass/finalScreen/_finalScreen.scss";
</style>