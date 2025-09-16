<script setup>
import { ImageProduct, TitleProduct, RatingProduct, DescriptionProduct, ProductCart } from '@/components';
import img1 from "@/assets/img/productPage/imageProduct.jpg";
const product = {
  title: "Product Title",
  description: "Este é um produto incrível que você vai adorar!",
  price: 25.0,
  image: img1,
};
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
        <div class="addToCart">
            <ProductCart :product="product" />
        </div>
    </div>
</template>