<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { menu } from '@/metaDatas/menuData';
import { useRestaurantStore } from '@/stores/';
import { useRouter } from 'vue-router';

const menuItems = ref(menu);
const restaurantStore = useRestaurantStore();

const categoryRefs = ref([]);
const activeIndex = ref(0);
const emit = defineEmits(['update:activeIndex']);

function scrollToCategory(index) {
  const el = categoryRefs.value[index];
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    activeIndex.value = index;
    emit('update:activeIndex', index);
  }
}

function onScroll() {
  for (let i = 0; i < categoryRefs.value.length; i++) {
    const el = categoryRefs.value[i];
    const rect = el.getBoundingClientRect();
    if (rect.top <= 150 && rect.bottom > 150) {
      if (activeIndex.value !== i) {
        activeIndex.value = i;
        emit('update:activeIndex', i);
      }
      break;
    }
  }
}

onMounted(() => window.addEventListener('scroll', onScroll));
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll));

defineExpose({ scrollToCategory });

const router = useRouter();
</script>
<template>
    <div class="container">
        <div v-for="(product, productIndex) in restaurantStore.restaurant.products" :key="productIndex" class="categorySection" :ref="el => categoryRefs[productIndex] = el">
            <div class="titleSection">
                <span class="text">{{ product.categories[0].name }}</span>
                <div class="hr"></div>
            </div>

            <router-link class="itemLink" :to="`/product/${product.id}`">
              <div class="item" :key="index">
                  <div class="top">
                      <div class="image">
                          <img :src="product.url_file" :alt="product.name">
                      </div>
                      <div class="info">
                          <div class="title">{{ product.name }}</div>
                          <div class="description">{{ product.description }}</div>
                      </div>
                  </div>
                  <div class="bottom">
                      <div class="price">R${{ product.price.toString().replace(".", ",") }}</div>
                  </div>
                </div>
              </router-link>
        </div>
    </div>
</template>
<style scoped>
@import "@/assets/sass/restaurantPage/menu/_itemsMenu.scss";
</style>