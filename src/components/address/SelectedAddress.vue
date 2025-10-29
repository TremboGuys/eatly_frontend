<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const props = defineProps({
  address: {
    type: Object,
    default: () => ({
      street: 'Nenhum endereço selecionado',
      number: '',
      city: '',
      state: ''
    })
  }
})

const goToAddressRegister = () => {
  router.push('/address')
}
</script>

<template>
  <div class="addressContainer">
    <div class="addressCard" @click="goToAddressRegister">
      <div class="icon">
        <i class="fa-solid fa-location-dot"></i>
      </div>

      <div class="info">
        <h3>{{ address.street }} <span v-if="address.number">, {{ address.number }}</span></h3>
        <p v-if="address.city && address.state">{{ address.city }} - {{ address.state }}</p>
        <p v-else>Clique para cadastrar seu endereço</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import '@/assets/sass/address/_selectedAddress.scss';
</style>