<script setup>
const props = defineProps({
    title: {
        type: String,
        default: 'Restaurantes'
    },
    link: {
        type: String,
        default: '/restaurant/1'
    }
});
</script>

<template>
    <div class="HeaderList">
        <div class="headerTitle"><p>{{ title }}</p></div>
        <div class="viewMore"><router-link :to="link" class="viewMore">Ver mais</router-link></div>
    </div>
</template>

<style scoped>
@import "@/assets/sass/home/_headerList.scss";
</style>