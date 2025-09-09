<script setup>
import { BannerComp, BasicInfo, OptionsScroll, ItemMenu } from '@/components';
</script>

<template>
  <div class="container">
    <div class="banner">
      <BannerComp />
      <BasicInfo />
    </div>
    <div class="optionsScroll">
      <OptionsScroll />
    </div class="menu">
      <ItemMenu />
    </div>
</template>

<style scoped>
@import '@/assets/sass/restaurantPage/_restaurantPage.scss';
</style>