<script setup>
import { ref, computed, onMounted } from "vue";
import FoodCategory from "./FoodCategory.vue";
import { useCategoryComposable } from "@/composables/category";
const props = defineProps({
  query: { type: String, default: "" },
});
const allCategories = ref([]);
const { getCategories } = useCategoryComposable();
onMounted(async () => {
  //MOCK temporário
  // allCategories.value = [
  //   { id: 1, name: 'Pizzas',   url_image: 'pizza-category.png' },
  //   { id: 2, name: 'Burgers',  url_image: 'burger-category.png' },
  //   { id: 3, name: 'Sushi',    url_image: 'sushi-category.png' },
  //   { id: 4, name: 'Salads',   url_image: 'salad-category.png' },
  //   { id: 5, name: 'Desserts', url_image: 'dessert-category.png' }
  // ]

  allCategories.value = await getCategories();
});
const currentCategories = computed(() => {
  const q = props.query?.trim().toLowerCase();
  if (!q) return allCategories.value;
  return allCategories.value.filter((c) => c.name.toLowerCase().includes(q));
});
</script>
<template>
  <div class="list-container">
    <h1>{{ query?.trim() ? 'Resultados' : 'Categorias' }}</h1>
    <div v-if="!query?.trim()" class="list">
      <FoodCategory v-for="category in currentCategories" :key="category.id" :category="category" />
    </div>
    <ul v-else class="results">
      <li v-for="item in currentCategories" :key="item.id" class="row">
        <RouterLink class="row-link" :to="`/categoria/${item.id}`">
          <img class="thumb" :src="item.url_image" :alt="item.name" />
          <span class="title">{{ item.name }}</span>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
<style scoped>
@import "@/assets/sass/searchPage/_searchList.scss";
</style>
