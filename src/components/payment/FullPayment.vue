<script setup>
import { computed } from "vue";
import { useCartStore, usePaymentStore } from "@/stores";

const cartStore = useCartStore();
const paymentStore = usePaymentStore();

const props = defineProps({
    orderTotal: { type: Number, required: true },
    deliveryFee: { type: Number, required: true },
    couponDiscount: { type: Number, default: 0 }
});
const total = computed(
    () => props.orderTotal + props.deliveryFee - props.couponDiscount
);
</script>
<template>
    <div class="overlay">
        <div class="summary-box">
            <div class="row">
                <span>Total do Pedido:</span>
                <strong>R$ {{ cartStore.cart[paymentStore.state.indexOrder].totalValue }}</strong>
            </div>
            <!-- <div class="row">
                <span>Entrega:</span>
                <strong>R$ {{ deliveryFee.toFixed(2) }}</strong>
            </div> -->
            <div class="row">
                <span>Desconto:</span>
                <strong class="discount">- R$ 0,00</strong>
            </div>
            <div class="divider"></div>
            <div class="row total">
                <span class="total">Total a pagar:</span>
                <strong>R$ {{ cartStore.cart[paymentStore.state.indexOrder].totalValue }}</strong>
            </div>
        </div>
    </div>
</template>
<style scoped>
@import "@/assets/sass/payment/_fullPayment.scss";
</style>