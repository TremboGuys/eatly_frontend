<script setup>
import { ref, computed, onMounted } from "vue";
import FoodCategory from "./FoodCategory.vue";
import { useCategoryComposable } from "@/composables/category";

const props = defineProps({
  query: { type: String, default: "" },
});
const allCategories = ref([]);
const { getCategories } = useCategoryComposable();
const restaurantResults = ref([]);

async function fetchRestaurants() {
  try {
    const res = await fetch("/metaDatas/restaurants.json");
    restaurantResults.value = await res.json();
  } catch (err) {
    console.error("Erro ao carregar restaurantes:", err);
  }
}
onMounted(async () => {
  allCategories.value = await getCategories();
  await fetchRestaurants();
});
const currentCategories = computed(() => {
  const q = props.query?.trim().toLowerCase();
  if (!q) return allCategories.value;
  return allCategories.value.filter((c) => c.name.toLowerCase().includes(q));
});
const filteredRestaurants = computed(() => {
  const q = props.query?.trim().toLowerCase();
  if (!q) return [];
  return restaurantResults.value.filter((r) =>
    r.name.toLowerCase().includes(q)
  );
});
</script>
<template>
  <div class="list-container">
    <h1>{{ query?.trim() ? "Resultados" : "Categorias" }}</h1>
    <div v-if="!query?.trim()" class="list">
      <FoodCategory v-for="category in currentCategories" :key="category.id" :category="category" />
    </div>
    <ul v-else class="results">
      <li v-for="restaurant in filteredRestaurants" :key="restaurant.id" class="card"
        :class="{ closed: restaurant.closed, grid: restaurant.layout === 'grid' }">
        <RouterLink class="card-link" :to="`/restaurant/${restaurant.id}`">
          <div class="badge">
            <img :src="restaurant.image" :alt="restaurant.name" />
          </div>
          <div class="body">
            <div class="name">
              {{ restaurant.name }}
            </div>
            <div class="meta">
              <span class="stars"><i class="fa-regular fa-star"></i>{{ restaurant.rating }}</span>
              <span class="cat">{{ restaurant.category }}</span>
              <span class="dist">{{ restaurant.distance }}</span>
            </div>
            <div class="sla-price">
              <span>{{ restaurant.time }}</span>
              <span>{{ restaurant.price }}</span>
            </div>
            <div v-if="restaurant.reorder" class="reorder-chip">
              {{ restaurant.reorder }}
            </div>
            <div v-if="restaurant.closed" class="closed">Fechado</div>
          </div>
          <i class="fa-regular fa-heart" aria-label="favorito"></i>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
<style scoped>
@import "@/assets/sass/searchPage/_searchList.scss";
</style>
