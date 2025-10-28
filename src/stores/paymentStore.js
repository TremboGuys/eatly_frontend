import axios from "axios";
import { reactive } from "vue";
import { useCartStore, useToastStore } from "@/stores";
import { defineStore } from "pinia";
import { ref } from "vue";

export const usePaymentStore = defineStore('payment', () => {
    const state = reactive({
        loading: false,
        order: null,
        indexOrder: null
    });
    const payment = ref({});
    const cartStore = useCartStore();
    const toastStore = useToastStore();

    async function createPayment() {
        state.loading = true;
        try {
            const response = await axios.post('https://7b82f925e548.ngrok-free.app/payment/', {
                mp: {
                    transaction_amount: 0.01,
                    description: `Criação do pagamento referente ao pedido nº ${state.order}`,
                    payment_method_id: 'pix',
                    payer: { email: 'comprador@email.com' }
                },
                backend: {
                    order: state.order,
                    method: 1,
                    status: 1,
                }
            });

            payment.value = {id: response.data.id_transaction_mp, qr_code_base64: response.data.qr_code_base64, qr_code: response.data.qr_code};
        } catch (error) {
            console.error('Erro in create payment: ', error);
            toastStore.notify('Erro ao criar as informações para pagamento!', 'error');
        }
        state.loading = false;
    };

    return { state, payment, createPayment };
});