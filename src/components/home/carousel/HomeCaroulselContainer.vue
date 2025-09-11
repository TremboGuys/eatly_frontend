<script setup>
import { ref } from 'vue';

const categories = ref([
  { id: 1, name: "Lanches", url_image: "/img/lanche.jpg" },
  { id: 2, name: "Pizzas", url_image: "/img/pizza.jpg" },
  { id: 3, name: "Japonesa", url_image: "/img/japonesa.jpg" },
  { id: 4, name: "Bebidas", url_image: "/img/bebidas.jpg" },
  { id: 5, name: "Sobremesas", url_image: "/img/sobremesa.jpg" }
]);

const carousel = ref(null);

function scrollLeft() {
  carousel.value.scrollBy({ left: -200, behavior: "smooth" });
}
function scrollRight() {
  carousel.value.scrollBy({ left: 200, behavior: "smooth" });
}
</script>

<template>
  <div class="carousel-container">
    <button class="nav-btn left" @click="scrollLeft">‹</button>
    
    <div class="carousel" ref="carousel">
      <div 
        v-for="category in categories" 
        :key="category.id" 
        class="card"
        :style="{ backgroundImage: `url(${category.url_image})` }"
      >
        <h3>{{ category.name }}</h3>
      </div>
    </div>

    <button class="nav-btn right" @click="scrollRight">›</button>
  </div>
</template>

<style scoped>
@import "@/assets/sass/home/_homeCarousel.scss";
</style>
