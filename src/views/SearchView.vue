<script setup>
import SearchPageContainer from '@/components/searchPage/SearchPageContainer.vue';
import { useCategoryStore } from '@/stores';
import { ref } from 'vue';
import { onMounted } from 'vue';

const categoryStore = useCategoryStore();
const showComponent = ref(false);

onMounted(async () => {
  await categoryStore.getCategories();
  showComponent.value = true;
});
</script>

<template>
  <SearchPageContainer v-if="showComponent" />
</template>

<style scoped>
</style>