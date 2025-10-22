<script setup>
const props = defineProps({
    tab: {
        type: String,
        required: true
    }
})
const emit = defineEmits(['update-tab'])
const changeTab = (newTab) => {
    emit('update-tab', newTab)
}
</script>
<template>
    <header class="orderHeaderContainer">
        <div class="ArrowAvailable">
            <i class="fa-solid fa-arrow-left"></i>
            <h2>Meus Pedidos</h2>
        </div>
        <h3>Hamburgueria - Magia Urbana</h3>
        <div class="AvailableStatus">
            <div class="statusGroup">
                <span class="status" :class="{ 'is-active': props.tab === 'in-progress' }"
                    @click="changeTab('in-progress')">
                    Em andamento
                </span>
                <span class="status" :class="{ 'is-active': props.tab === 'history' }" @click="changeTab('history')">
                    Histórico
                </span>
            </div>
        </div>
    </header>
</template>
<style scoped>
@import '@/assets/sass/orders/_ordersHeader.scss';
</style>
