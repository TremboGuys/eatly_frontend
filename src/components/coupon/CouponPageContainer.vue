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
      <div class="line" v-if="tab == 'available'">
        <p>blab</p>
        <p>Disponíveis.</p>
      </div>
      <div class="line" v-else>
        <p>blab</p>
        <p>Meus cupons.</p>
      </div>
  </header>
</template>


<style scoped>
@import '@/assets/sass/coupon/_couponPageContainer.scss';
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

</style>