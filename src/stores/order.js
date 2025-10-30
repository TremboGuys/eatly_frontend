import { defineStore } from "pinia";
import { OrderService } from "@/services";
import { ref } from "vue";

export const useOrderStore = defineStore('order', () => {
    const ordersActive = ref(null);
    const ordersDelivered = ref(null);

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
        ordersActive, ordersDelivered, getOrdersActive, getOrdersDelivered
    }
});