<script setup>
import ListItem from './bestsellers/ListItem.vue';
import HeaderList from './bestsellers/HeaderList.vue';
</script>
<template>
    <div class="seen-previously">        
        <HeaderList title="Vistos recentemente" link="/products" />
        <ListItem />
        <ListItem />
        <ListItem />
    </div>
</template>
<style scoped>
@import "@/assets/sass/home/_bestSellersContainer.scss";

</style>