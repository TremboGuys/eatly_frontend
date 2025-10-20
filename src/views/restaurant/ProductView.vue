<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { ImageProduct, TitleProduct, DescriptionProduct, ProductCart, TextArea } from '@/components';
import img1 from "@/assets/img/productPage/imageProduct.jpg";
import { useProductComposable } from '@/composables';
import { useFavoriteStore } from '@/stores';

const useProduct = useProductComposable();
const favoriteStore = useFavoriteStore();
const route = useRoute();
const mounted = ref(false);

onMounted(async () => {
    await useProduct.getProduct(route.params.id);
    await favoriteStore.verifyProductIsFavoriteById(route.params.id);
    mounted.value = true;
});
</script>

<template>
    <div class="container" v-if="mounted">
        <div class="banner">
            <ImageProduct v-if="Object.hasOwn(useProduct.product.value, 'url_file')"
                :url="useProduct.product.value.url_file"
                :restaurant="{ id: useProduct.product.value.restaurant.id, name: useProduct.product.value.restaurant.name }" />
        </div>
        <div class="info">
            <TitleProduct :name="useProduct.product.value.name" :id-product="route.params.id" />
            <DescriptionProduct :description="useProduct.product.value.description" />
            <TextArea />
        </div>
        <div class="addToCart">
            <ProductCart :product="useProduct.product.value" class="teste" />
        </div>
    </div>
</template>
<style scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.addToCart {
    position: fixed;
    bottom: 100px;
    left: 0;
    width: 100%;
    background: #fff;
    padding: 10px 0;
}
</style>