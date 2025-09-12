<script setup>
import { ImageProduct, TitleProduct, RatingProduct, DescriptionProduct } from '@/components';
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
        </div>
    </div>
</template>