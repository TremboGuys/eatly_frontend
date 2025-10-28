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
    <header class="couponHeaderContainer">
        <div class="ArrowAvaiable">
            <i class="fa-solid fa-arrow-left"></i>
            <h2>Meus cupons</h2>
        </div>
        <h3>Hamburgueria - Magia Urbana</h3>
        <div class="AvaiableStatus">
            <div class="statusGroup">
                <span class="status" :class="{ 'is-active': props.tab === 'available' }"
                    @click="changeTab('available')">Disponível</span>
                <span class="status" :class="{ 'is-active': props.tab === 'cupons' }" @click="changeTab('cupons')">Seus cupons</span>
            </div>
        </div>
    </header>
</template>
<style scoped>
@import '@/assets/sass/coupon/_couponHeaderContainer.scss';
</style>