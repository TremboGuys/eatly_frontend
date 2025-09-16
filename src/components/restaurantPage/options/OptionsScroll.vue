<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue';
import { useRestaurantComposable } from '@/composables';

const { categoriesRestaurant } = useRestaurantComposable();
const activeTab = ref(0);
const props = defineProps({ activeIndex: Number });

watch(() => props.activeIndex, (val) => {
  if (val !== undefined) activeTab.value = val;
});
const emit = defineEmits(['selectCategory']);
function SetActive(index) {
  activeTab.value = index;
  emit('selectCategory', index);
}
</script>
<template>
    <div class="container">
        <div class="options" ref="scrollContainer">
            <div v-for="(option, index) in categoriesRestaurant" :key="index" :class="['option', { active: activeTab === index }]" @click="SetActive(index)">{{ option }}</div>
        </div>
    </div>
</template>
<style scoped>
@import '@/assets/sass/restaurantPage/options/_optionsScroll.scss';
</style>