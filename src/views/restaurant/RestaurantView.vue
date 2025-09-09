<script setup>
import { ref } from 'vue';
import { BannerComp, BasicInfo, OptionsScroll, ItemMenu } from '@/components';
const activeIndex = ref(0);
const itemsMenu = ref(null);
function scrollToCategory(index) {
  itemsMenu.value.scrollToCategory(index);
}
</script>

<template>
  <div class="container">
    <div class="banner">
      <BannerComp />
      <BasicInfo />
    </div>
    <div class="optionsScroll">
      <OptionsScroll :activeIndex="activeIndex" @selectCategory="scrollToCategory" />
    </div>
    <div class="menu">
      <ItemMenu ref="itemsMenu" v-model="activeIndex" />
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/sass/restaurantPage/_restaurantPage.scss';
</style>