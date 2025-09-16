<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { ImageProduct, TitleProduct, RatingProduct, DescriptionProduct, ProductCart } from '@/components';
import img1 from "@/assets/img/productPage/imageProduct.jpg";
import { useProductComposable } from '@/composables';

const useProduct = useProductComposable();
const route = useRoute();

onMounted(async () => {
    await useProduct.getProduct(route.params.id);
});
</script>

<template>
    <div class="container" v-if="Object.keys(useProduct.product).length > 0">
        <div class="banner">
            <ImageProduct v-if="Object.hasOwn(useProduct.product.value, 'url_file')" :url="useProduct.product.value.url_file" />
        </div>
        <div class="info">
            <TitleProduct :name="useProduct.product.value.name" />
            <DescriptionProduct :description="useProduct.product.value.description" />
        </div>
        <div class="addToCart">
            <ProductCart :product="useProduct.product.value" />
        </div>
    </div>
</template>