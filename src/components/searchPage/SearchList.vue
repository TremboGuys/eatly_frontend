<script setup>
import { onMounted, ref } from 'vue';
import FoodCategory from './FoodCategory.vue';
import { useCategoryComposable } from '@/composables/';

const categories = ref([]);
onMounted(async () => {
  categories.value = await useCategoryComposable().getCategories();
})
</script>

<template>
  <div class="list-container">
    <FoodCategory
      v-for="category in categories"
      :key="category.id"
      :category.="category"
    />
  </div>
</template>

<style scoped>
@import "@/assets/sass/searchPage/_searchList.scss";

</style>