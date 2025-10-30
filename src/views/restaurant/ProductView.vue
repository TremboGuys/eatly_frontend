<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { ImageProduct, TitleProduct, RatingProduct, DescriptionProduct, ProductCart, ObservationProduct } from '@/components';
import img1 from "@/assets/img/productPage/imageProduct.jpg";
import { useProductComposable } from '@/composables';
import { useFavoriteStore } from '@/stores';

const useProduct = useProductComposable();
const favoriteStore = useFavoriteStore();
const route = useRoute();
const mounted = ref(false);

onMounted(async () => {
    await useProduct.getProduct(route.params.idProduct);
    await favoriteStore.verifyProductIsFavoriteById(route.params.id);
    mounted.value = true;
});
</script>

<template>
    <div class="container" v-if="mounted">
        <div class="banner">
            <ImageProduct v-if="Object.hasOwn(useProduct.product.value, 'url_file')" :url="useProduct.product.value.url_file" :restaurant="{id: useProduct.product.value.restaurant.id, name: useProduct.product.value.restaurant.name}" />
        </div>
        <div class="info">
            <TitleProduct :name="useProduct.product.value.name" :id-product="route.params.id" />
            <DescriptionProduct :description="useProduct.product.value.description" />
            <ObservationProduct />
        </div>
        <div class="addToCart">
            <ProductCart :product="useProduct.product.value" />
        </div>
    </div>
</template>