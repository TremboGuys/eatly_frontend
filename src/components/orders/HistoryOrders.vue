<script setup>
import { OrderCard } from '@/components';
import { useOrderStore } from '@/stores'

const orderStore = useOrderStore();
const emit = defineEmits(['browse'])
function formatDate(dateLike) {
    const d = new Date(dateLike)
    if (Number.isNaN(d.getTime())) return ''
    return new Intl.DateTimeFormat('pt-BR', {
        timeZone: 'America/Sao_Paulo',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    }).format(d)
}
</script>
<template>
    <main class="orderMainContainer">
        <div class="line" v-if="orderStore.ordersDelivered != null && orderStore.ordersDelivered.length > 0">
            <OrderCard :array-order="orderStore.ordersDelivered" />
        </div>
        <div class="line" v-else>
            <div class="card empty">
                <div class="info">
                    <h3>Você ainda não fez nenhum pedido</h3>
                    <p>Explore o cardápio e faça seu primeiro pedido</p>
                </div>
            </div>
        </div>
    </main>
</template>
<style scoped>
@import '@/assets/sass/orders/_ordersCards.scss';
</style>
