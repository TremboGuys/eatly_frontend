<script setup>
import { onMounted, ref, computed } from 'vue';
import FoodCategory from './FoodCategory.vue';
import { useCategory, useSearchCategory } from '@/composables';

const useSearch = useSearchCategory();
const currentCategories = computed(() => {
  return allCategories.value.filter(category =>
    category.name.toLowerCase().startsWith(useSearch.searchInput.value.toLowerCase())
  );
});

onMounted(async () => {
  allCategories.value = await useCategory().getCategories();
  currentCategories.value = allCategories.value;
});

const allCategories = ref([]);

</script>

<template>
  <div class="list-container">
    <FoodCategory
      v-for="category in currentCategories"
      :key="category.id"
      :category.="category"
    />
  </div>
</template>

<style scoped>
@import "@/assets/sass/searchPage/_searchList.scss";

</style>