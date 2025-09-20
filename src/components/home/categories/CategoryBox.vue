<script setup>

const props = defineProps({
    // Define any props if needed
    categoryImage: {
        type: String,
        required: true
    }
});

</script>
<template>
    <div class="categoryBox">
        <img :src="categoryImage" alt="">
    </div>
</template>

<style scoped>
@import "@/assets/sass/home/_categoryBox.scss";
</style>