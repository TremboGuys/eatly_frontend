<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { menu } from '@/metaDatas/menuData';
import { useCartStore } from '@/stores/cartStore';

const menuItems = ref(menu);
const cartStore = useCartStore();

const categoryRefs = ref([]);
const activeIndex = ref(0);
const emit = defineEmits(['update:activeIndex']);

function addItem(item) {
  cartStore.addToCart(item);
}

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
</script>
<template>
    <div class="container">
        <div v-for="(category, categoryIndex) in menuItems" :key="categoryIndex" class="categorySection" :ref="el => categoryRefs[categoryIndex] = el">
            <div class="titleSection">
                <span class="text">{{ category.title }}</span>
                <div class="hr"></div>
            </div>

            <div class="item" v-for="(item, index) in category.items" :key="index">
                <div class="top">
                    <div class="image">
                        <img :src="item.image" :alt="item.title">
                    </div>
                    <div class="info">
                        <div class="title">{{ item.title }}</div>
                        <div class="description">{{ item.description }}</div>
                    </div>
                </div>
                <div class="bottom">
                    <div class="price">R${{ item.price.toFixed(2).replace('.', ',') }}</div>
                </div>
                <div class="addToCart">
                    <button class="button" @click="addItem(item)">Adicionar</button>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
@import "@/assets/sass/restaurantPage/menu/_itemsMenu.scss";
</style>