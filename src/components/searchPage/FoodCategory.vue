<script setup>
import { ref, onMounted } from 'vue';

defineProps({
    category: {
        type: Object,
        required: true
    }

});


</script>

<template>
    
<RouterLink class="food-card" to="/">
    <div
  class="ctg-container"
  :style="{
    backgroundImage: `url(${category.url_image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }"
>
  <h2 class="title">{{ category.name }}</h2>
</div>
</RouterLink>

</template>

<style scoped>
@import "@/assets/sass/searchPage/_foodCategory.scss";
</style>