<script setup>
import NameComp from './NameComp.vue';
import PriceTime from './PriceTime.vue';
import AssessmentStar from './AssessmentStar.vue';
import DeliveryComp from './DeliveryComp.vue';
</script>
<template>
    <div class="container">
        <div class="content">
            <div class="banner-info">
                <div class="title">
                    <NameComp />
                    <PriceTime />
                </div>
                <div class="description title">
                    <AssessmentStar />
                </div>
                <div class="delivery">
                    <DeliveryComp />
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
@import '@/assets/sass/restaurantPage/banner/_basicInfo.scss';
</style>