<script setup>
import HeaderList from './HeaderList.vue';
import ListItem from './ListItem.vue';
</script>

<template>
    <div class="bestSellerContainer">
        <HeaderList />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
    </div>
</template>

<style scoped>
.bestSellerContainer{
    gap: 10px
}
</style>