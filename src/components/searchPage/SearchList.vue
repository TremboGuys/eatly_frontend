<script setup>
import { ref, computed, onMounted } from "vue";
import FoodCategory from "./FoodCategory.vue";
import { useCategoryStore, useRestaurantStore } from "@/stores";

const categoryStore = useCategoryStore();
const restaurantStore = useRestaurantStore();
</script>
<template>
  <div class="list-container">
    <h1>{{ (Object.keys(restaurantStore.filters) > 0 || restaurantStore.state.searching) ? "Resultados" : "Categorias" }}</h1>
    <div v-if="Object.keys(restaurantStore.filters) == 0" class="list">
      <FoodCategory v-for="category in categoryStore.categories" :key="category.id" :category="category" />
    </div>
    <ul v-else class="results">
      <li v-for="(restaurant, restaurantIndex) in restaurantStore.restaurantsFiltered" :key="restaurantIndex" class="card">
        <RouterLink class="card-link" :to="`/restaurant/${restaurant.id}`">
          <div class="badge">
            <img :src="restaurant.photo" :alt="restaurant.name" />
          </div>
          <div class="body">
            <div class="name">
              {{ restaurant.name }}
            </div>
            <div class="meta">
              <span class="stars"><i class="fa-regular fa-star"></i>{{ restaurant.note }}</span>
              <span>{{ restaurant.average_delivery_time }}min</span>
              <span>$$</span>
              <!-- <span class="cat">{{ restaurant.category }}</span> -->
              <!-- <span class="dist">{{ restaurant.distance }}</span> -->
            </div>
            <div class="sla-price">
            </div>
            <!-- <div v-if="restaurant.reorder" class="reorder-chip">
              {{ restaurant.reorder }}
            </div> -->
            <!-- <div v-if="restaurant.closed" class="closed">Fechado</div> -->
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
