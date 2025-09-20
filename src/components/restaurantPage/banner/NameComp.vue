<script setup>
const props = defineProps(['name'])
</script>

<template>
    <div class="container">
        <div class="title">
            <h1>{{ props.name }}</h1>
        </div>
    </div>
</template>
<style scoped>
@import '@/assets/sass/restaurantPage/banner/_nameComp.scss';
</style>