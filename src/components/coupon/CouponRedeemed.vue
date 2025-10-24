<script setup>
import { computed } from 'vue';
const props = defineProps({
    coupons: {
        type: Array,
        default: () => [],
    },
});
const emit = defineEmits(['browse']);
const hasCoupons = computed(() => props.coupons && props.coupons.length > 0);
function formatDate(dateLike) {
    const d = new Date(dateLike);
    if (Number.isNaN(d.getTime())) return '';
    return new Intl.DateTimeFormat('pt-BR', {
        timeZone: 'America/Sao_Paulo',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    }).format(d);
}
</script>
<template>
    <main class="couponMainContainer">
        <div class="line" v-if="hasCoupons">
            <div class="card" v-for="coupon in coupons" :key="coupon.id || `${coupon.title}-${coupon.expiresAt}`">
                <div class="icon"></div>
                <div class="info">
                    <h3>{{ coupon.title }}</h3>
                    <p>{{ coupon.description }}</p>
                    <div class="validade">
                        <span class="date">
                            Válido até: {{ formatDate(coupon.expiresAt) }}
                        </span>
                    </div>
                </div>
                <button class="resgate" disabled>Já resgatado</button>
            </div>
        </div>
        <div class="line" v-else>
            <div class="card empty">
                <div class="icon"></div>
                <div class="info">
                    <h3>Você ainda não resgatou cupons</h3>
                    <p>Explore as promoções ativas e resgate seu primeiro cupom</p>
                </div>
            </div>
        </div>
    </main>
</template>
<style scoped>
@import '@/assets/sass/coupon/_couponMainContainer.scss';
</style>
