<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
  icon: String,
  text: String,
  link: {
    type: String,
    default: '#',
  },
});
</script>

<template>
  <RouterLink class="profItem" :to="link" style="text-decoration: none; color: inherit;">
    <div class="prof-list">
      <div class="left-side">
          <i :class="icon"></i>
          <p>{{ text }}</p>
      </div>
      <div class="right-side">
          <i class="fa-solid fa-arrow-right"></i>
      </div>
  </div>
  </RouterLink>
</template>

<style scoped>
@import "@/assets/sass/profile/_profileList.scss";
</style>
