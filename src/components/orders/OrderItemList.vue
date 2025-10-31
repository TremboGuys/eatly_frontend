<script setup>
const props = defineProps({
    product: {
        type: Object,
        required: true
    }
})
</script>

<template>
<div class="OLContainer">
    <div class="foodImg"><img :src="props.product.product.url_file" alt=""></div>
    <div class="foodInfo">
        <div class="basic">
            <div class="foodName"><p>{{ props.product.product.name }}</p></div>
            <div class="foodPrice">R${{ props.product.product.price.toFixed(2).replace(".", ",") }}</div>
        </div>
        <div class="foodQuantity">{{ props.product.quantity }} un. </div>
    </div>
    
</div>
</template>

<style scoped>
@import "@/assets/sass/order/_orderItemList.scss";
</style>
