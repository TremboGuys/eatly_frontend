<script setup>
import { ref, onMounted } from 'vue';
import FoodCategory from './FoodCategory.vue';
import { useCategory } from '@/composables/category';
const categories = ref([]);
const { getCategories } = useCategory();
onMounted(async () => {
  categories.value = await getCategories();
});
</script>
<template>
  <div class="list-container">
    <FoodCategory
      v-for="category in categories"
      :key="category.id"
      :category="category"
    />
  </div>
</template>
<style scoped>
@import "@/assets/sass/searchPage/_searchList.scss";
</style>