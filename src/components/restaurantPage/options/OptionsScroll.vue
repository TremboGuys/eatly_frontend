<script setup>
import { ref } from 'vue';

const options = ref([
    "MAIS PEDIDOS",
    "GOURMET",
    "PASTÉIS",
    "BEBIDAS",
    "SOBREMESAS"
])

const activeTab = ref(1)
function SetActive(index) {
    activeTab.value = index
}
</script>
<template>
    <div class="container">
        <div class="options" ref="scrollContainer">
            <div v-for="(option, index) in options" :key="index" :class="[]"></div>
        </div>
    </div>
</template>