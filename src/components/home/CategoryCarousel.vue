<script setup>
</script>
<template>
  <div class="category-carousel">
    <h2>Categories</h2>
    <div class="carousel">
      <div class="carousel-item" v-for="category in categories" :key="category.id">
        <img :src="category.image" :alt="category.name" />
        <p>{{ category.name }}</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
</style>