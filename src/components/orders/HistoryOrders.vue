<script setup>
import { computed } from 'vue'
const props = defineProps({
    orders: {
        type: Array,
        default: () => [],
    },
})
const emit = defineEmits(['browse'])
const hasOrders = computed(() => props.orders && props.orders.length > 0)
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
        <div class="line" v-if="hasOrders">
            <div class="card" v-for="order in orders" :key="order.id || `${order.title}-${order.date}`">
                <div class="icon"></div>
                <div class="info">
                    <h3>{{ order.title }}</h3>
                    <p>{{ order.description }}</p>
                    <div class="validade">
                        <span class="date">
                            Pedido realizado em: {{ formatDate(order.date) }}
                        </span>
                    </div>
                </div>
                <button class="details">Ver detalhes</button>
            </div>
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
