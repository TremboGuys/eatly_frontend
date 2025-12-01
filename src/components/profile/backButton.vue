<script setup>

const props = defineProps({
  name: String,
  route: String
});

</script>

<template>
    <div class="back">
        <router-link :to="`/profile`" class="back-link">
            <i class="fa-solid fa-arrow-left"></i>
        </router-link>
        <div class="nameRestaurant">
            <span class="name">{{ props.name }}</span>
        </div>
    </div>
</template>

<style scoped>
@import "@/assets/sass/profile/_backButton.scss";
</style>