<script setup>
import { ref } from 'vue';


const tab = ref('cupons');

</script>

<template>
  <header class="couponHeaderContainer">
    <div class="ArrowAvaiable">
    <i class="fa-regular fa-arrow-left"></i>
      <h2>Meus cupons</h2>
    </div>

    <h3>Hamburgueria - Magia Urbana</h3>

    <div class="AvaiableStatus">
      <div class="statusGroup">
        <span class="status" :class="{'is-active': tab == 'available'}" @click="tab='available'">Disponível</span>
        <span class="status" :class="{'is-active': tab == 'cupons'}" @click="tab='cupons'">Seus cupons</span>
      </div>
    </div>
      
  </header>
  <main class="couponMainContainer"> 

<div class="line" v-if="tab == 'available'">
      <div class="card">
  <div class="icon"></div>
  <div class="info">
    <h3>50% de desconto na sua primeira compra!!!!</h3>
    <p>em qualquer produto</p>
    <div class="validade">
      <span class="date">Valido até:
     30/12/2024</span>
    </div>
  </div>
  <button class="resgate">resgate agora</button>
</div>
      </div>
      <div class="line" v-else>
        <p>nenhum cupom resgatado</p>
      </div>

  </main>
</template>


<style scoped>
@import '@/assets/sass/coupon/_couponMainContainer.scss';
@import '@/assets/sass/coupon/_couponHeaderContainer.scss';

.status {
  width: 30vw;
  display: flex;
  justify-content: center;
  color: black !important;
}

span.is-active {
  border-bottom: 2px solid #4c4b00;
  color: #4c4b00 !important;
}
.line {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'poppins', sans-serif;
  font-weight: bold;
  font-size: 10px;
}
</style>