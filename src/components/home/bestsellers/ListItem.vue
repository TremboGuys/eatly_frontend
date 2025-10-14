<script setup>
import "@fortawesome/fontawesome-free/css/all.css";
import { useRestaurantStore } from "@/stores";
import { ref } from 'vue'

const isFavorite = ref(false)

const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value;
};

const props = defineProps({
  restaurant: {
    type: Object,
  },
});

const showMenu = ref(false);

const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};

const restaurantStore = useRestaurantStore();
</script>

<template>

    <div class="listItem">
          <router-link
    :to="`/restaurant/${props.restaurant.id}`"
    class="listItemLink"
    v-if="props.restaurant"
  >
      <div class="left-side">
        <div class="logo">
          <img :src="props.restaurant.photo" alt="" />
        </div>
        <div class="info">
          <p class="restaurant-name">{{ props.restaurant.name }}</p>
          <p class="restaurant-description">
            {{ props.restaurant.description }}
          </p>
          <div class="more-info">
            <div class="rating-container">
              <i class="fa fa-star"></i>
              <p class="restaurant-rating">{{ props.restaurant.note }}</p>
            </div>
            <div class="delivery-container">
              <i class="fa fa-clock"></i>
              <p class="delivery-time">
                {{ props.restaurant.average_delivery_time }} min
              </p>
            </div>
          </div>
        </div>
      </div>
    </router-link>
      <div class="select">
        <button class="dots" @click="toggleMenu">
          <i class="fa fa-circle" aria-hidden="true"></i>
          <i class="fa fa-circle" aria-hidden="true"></i>
          <i class="fa fa-circle" aria-hidden="true"></i>
        </button>

        <ul v-if="showMenu">
          <li class="AddOrRemFav" @click="toggleFavorite">
            {{ isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos' }}
          </li>
        </ul>
      </div>
    </div>
</template>

<style scoped>
@import "@/assets/sass/home/_listItem.scss";
</style>
