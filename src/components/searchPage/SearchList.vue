<script setup>
import { ref, computed, onMounted } from 'vue'
import FoodCategory from './FoodCategory.vue'
import { useCategory } from '@/composables/category'

const props = defineProps({
  query: { type: String, default: '' }
})

const allCategories = ref([])
const { getCategories } = useCategory()

onMounted(async () => {
  //MOCK temporário
  // allCategories.value = [
  //   { id: 1, name: 'Pizzas',   url_image: 'pizza-category.png' },
  //   { id: 2, name: 'Burgers',  url_image: 'burger-category.png' },
  //   { id: 3, name: 'Sushi',    url_image: 'sushi-category.png' },
  //   { id: 4, name: 'Salads',   url_image: 'salad-category.png' },
  //   { id: 5, name: 'Desserts', url_image: 'dessert-category.png' }
  // ]

  allCategories.value = await getCategories()
})

const currentCategories = computed(() => {
  const q = props.query?.trim().toLowerCase()
  if (!q) return allCategories.value
  return allCategories.value.filter(c => c.name.toLowerCase().includes(q))
})
</script>

<template>
  <div class="list-container">
    <h1>Categorias</h1>
    <FoodCategory
      v-for="category in currentCategories"
      :key="category.id"
      :category="category"
    />
  </div>
</template>

<style scoped>
@import "@/assets/sass/searchPage/_searchList.scss";
</style>
