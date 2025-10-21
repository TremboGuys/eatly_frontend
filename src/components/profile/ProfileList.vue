<script setup>
const props = defineProps({
  icon: String,
  text: String
});
</script>

<template>
  <div class="prof-list">
      <div class="left-side">
          <i :class="icon"></i>
          <p>{{ text }}</p>
      </div>
      <div class="right-side">
          <i class="fa-solid fa-arrow-right"></i>
      </div>
  </div>
</template>

<style scoped>
@import "@/assets/sass/profile/_profileList.scss";
</style>
