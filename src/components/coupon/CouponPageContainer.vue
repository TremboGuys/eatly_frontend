<script setup>
import { ref } from 'vue';
import { CouponAvailable, CouponRedeemed, CouponHeader } from '../index.js';
const tab = ref('cupons');
const updateTab = (newTab) => {
  tab.value = newTab
}
</script>
<template>
  <header class="couponHeaderContainer">
    <CouponHeader :tab="tab" @update-tab="updateTab" />
  </header>
  <main class="couponMainContainer">
    <CouponAvailable v-if="tab == 'available'" />
    <div class="line" v-else>
      <CouponRedeemed />
    </div>
  </main>
</template>