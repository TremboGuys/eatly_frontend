import { defineStore } from "pinia";
import { OrderService } from "@/services";
import { ref } from "vue";
import { reactive } from "vue";

export const useOrderStore = defineStore('order', () => {
    const state = reactive({
        loading: false
    })
    const ordersActive = ref(null);
    const ordersDelivered = ref(null);
    const orderRetrieve = ref(null);

    async function getOrdersActive() {
        if (ordersActive.value == null) {
            try {
                const orders = await OrderService.getOrdersActive();
                ordersActive.value = orders;
            }
            catch(error) {
                console.error('Error in GET active orders: ', error);
            }
        }
    };

    async function getOrderRetrieve(idOrder) {
        state.loading = true;
        try {
            const order = await OrderService.getOrderRetrieve(idOrder);
            orderRetrieve.value = order;
        }
        catch(error) {
            console.error('Error in GET retrieve order: ', error);
        }
        state.loading = false;
    }

    async function getOrdersDelivered() {
        if (ordersDelivered.value == null) {
            try {
                const orders = await OrderService.getOrdersDelivered();
                ordersDelivered.value = orders;
            }
            catch(error) {
                console.error('Error in GET orders delivered: ', error);
            }
        }
    };

    return {
        state, ordersActive, ordersDelivered, orderRetrieve, getOrdersActive, getOrderRetrieve, getOrdersDelivered
    }
});