<script setup>
import { ref } from 'vue'
import { InputsProps } from '../index'
const rua = ref('')
const numero = ref('')
const bairro = ref('')
const cidade = ref('')
const estado = ref('')
const suggestions = ref([])
const addresses = ref([])
function handleChange({ field, value }) {
  if (field === 'street') rua.value = value
  if (field === 'number') numero.value = value
  if (field === 'district') bairro.value = value
  if (field === 'city') cidade.value = value
  if (field === 'state') estado.value = value
}
function selectCity(name) {
  cidade.value = name
  suggestions.value = []
}
function addAddress() {
  if (!rua.value || !numero.value || !bairro.value || !cidade.value || !estado.value) return
  addresses.value.push({
    street: rua.value,
    number: numero.value,
    district: bairro.value,
    city: cidade.value,
    state: estado.value,
  })
  rua.value = ''
  numero.value = ''
  bairro.value = ''
  cidade.value = ''
  estado.value = ''
  suggestions.value = []
}
function removeAddress(index) {
  addresses.value.splice(index, 1)
}
</script>
<template>
  <div class="registration">
    <div class="card">
      <h2 class="title">
        <span class="icon-address"></span>
        Cadastro de endereços
      </h2>
      <div class="content">
        <section class="form">
          <h3 class="section-title">Novo Endereço</h3>
          <form class="form-body" @submit.prevent="addAddress">
            <InputsProps type="text" field="street" forId="street" class="input" label="Rua" :value="street"
              @changeDataUser="handleChange" />
            <InputsProps type="text" field="number" forId="number" class="input" label="Número" :value="number"
              @changeDataUser="handleChange" />
            <InputsProps type="text" field="district" forId="district" class="input" label="Bairro" :value="district"
              @changeDataUser="handleChange" />
            <div class="autocomplete">
              <InputsProps type="text" field="city" forId="city" class="input" label="Cidade" :value="city"
                @changeDataUser="handleChange" />
            </div>
            <InputsProps type="text" field="state" forId="state" class="input state" label="Estado" :value="state" maxlength="2" uppercase
              @changeDataUser="handleChange" />
            <button type="submit" class="btn-primary">Adicionar</button>
          </form>
        </section>
        <section class="list">
          <h3 class="section-title">Endereços Cadastrados</h3>
          <div class="list-wrapper">
            <p v-if="!addresses.length" class="empty">
              Nenhum endereço cadastrado.
            </p>
            <ul v-else class="address-list">
              <li v-for="(address, index) in addresses" :key="index" class="item">
                <span class="text">
                  {{ address.street }}, {{ address.number }} - {{ address.district }},
                  {{ address.city }}
                </span>
                <button class="btn-remove" @click="removeAddress(index)">
                  Remover
                </button>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import '@/assets/sass/address/_addressRegister.scss';
</style>