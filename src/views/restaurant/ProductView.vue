<script setup>
import { ImageProduct, TitleProduct, RatingProduct, DescriptionProduct, InfosRestaurant } from '@/components';
</script>
<template>
    <div class="container">
        <div class="banner">
            <ImageProduct />
        </div>
        <div class="info">
            <TitleProduct />
            <RatingProduct />
            <DescriptionProduct />
            <InfosRestaurant />
        </div>
    </div>
</template>