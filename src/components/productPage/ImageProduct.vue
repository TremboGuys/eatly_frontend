<script setup>
import { ref, computed } from "vue";
import { useRestaurantStore } from "@/stores";

const { restaurant } = useRestaurantStore();
const props = defineProps({
    url: {
        type: String
    },
    restaurant: {
        type: Object
    }
});

const currentIndex = ref(0);
const isDragging = ref(false);
const startX = ref(0);
const translate = ref(0);
const trackStyle = computed(() => {
    const percent = -currentIndex.value * 100;
    return {
        transform: `translateX(calc(${percent}% + ${translate.value}px))`,
        transition: isDragging.value ? "none" : "transform 0.3s ease"
    };
});
</script>
<template>
    <div class="container">
        <div class="back">
            <router-link :to="`/restaurant/${props.restaurant.id}`" class="back-link">
                <i class="fa-solid fa-arrow-left"></i>
            </router-link>
        </div>
        <div class="carousel">
            <div class="track" :style="trackStyle">
                <!-- <div class="slide" v-for="(img, i) in product.url_field" :key="i">
                    <img :src="img" class="image" alt="produto" draggable="false" />
                </div> -->
                <img :src="props.url" class="image" alt="produto" draggable="false">
            </div>
        </div>
        <!-- <div class="indicators">
            <span v-for="(img, i) in images" :key="i" class="dot" :class="{ active: i === currentIndex }"></span>
        </div> -->
    </div>
</template>
<style scoped>
@import '@/assets/sass/productPage/_imageProduct.scss';
</style>