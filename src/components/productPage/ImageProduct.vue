<script setup>
import { ref, computed } from "vue";
import { useRestaurantComposable } from "@/composables";

const { restaurant } = useRestaurantComposable();
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

const onPointerDown = (e) => {
    isDragging.value = true;
    startX.value = e.clientX;
    e.currentTarget.setPointerCapture?.(e.pointerId);
};
const onPointerMove = (e) => {
    if (!isDragging.value) return;
    translate.value = e.clientX - startX.value;
};
const onPointerUp = (e) => {
    if (!isDragging.value) return;
    isDragging.value = false;

    const diff = translate.value;
    if (diff < -50) nextImage();
    else if (diff > 50) prevImage();

    translate.value = 0;
    e.currentTarget.releasePointerCapture?.(e.pointerId);
};
const onPointerCancel = (e) => {
    isDragging.value = false;
    translate.value = 0;
    if (e?.pointerId) e.currentTarget.releasePointerCapture?.(e.pointerId);
};
const nextImage = () =>
    (currentIndex.value = (currentIndex.value + 1) % images.length);
const prevImage = () =>
(currentIndex.value =
    (currentIndex.value - 1 + images.length) % images.length);
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
            <div class="nameRestaurant">
                <span class="name">{{ props.restaurant.name }}</span>
            </div>
        </div>
        <div class="carousel" @pointerdown="onPointerDown" @pointermove="onPointerMove" @pointerup="onPointerUp"
            @pointercancel="onPointerCancel" @mouseleave="onPointerCancel">
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