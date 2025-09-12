<script setup>
import { ref } from 'vue';

const categories = ref([
  { id: 1, name: "Lanches", bannerImage: "https://template.canva.com/EAFh8EnFLW4/1/0/1600w-xPGAjV9zPS0.jpg" },
  { id: 2, name: "Pizzas", bannerImage: "https://template.canva.com/EAFKIvQG0XE/2/0/1600w-02i-a7aM_k8.jpg" },
  { id: 3, name: "Japonesa", bannerImage: "https://template.canva.com/EAE75YWNr84/1/0/1600w-2AqTRj1JTvQ.jpg" },
  { id: 4, name: "Bebidas", bannerImage: "https://template.canva.com/EAE5PJ2iSJs/1/0/1600w-ETpMxiC9aXg.jpg" },
  { id: 5, name: "Sobremesas", bannerImage: "/img/sobremesa.jpg" }
]);

const carousel = ref(null);

function scrollLeft() {
  carousel.value.scrollBy({ left: -405, behavior: "smooth" });
}
function scrollRight() {
  carousel.value.scrollBy({ left: 405, behavior: "smooth" });
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
        :style="{ backgroundImage: `url(${category.bannerImage})` }"
      >
      </div>
    </div>

    <button class="nav-btn right" @click="scrollRight">›</button>
  </div>
</template>

<style scoped>
@import "@/assets/sass/home/_homeCarousel.scss";
</style>
