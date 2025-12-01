import axios from "axios";
import { reactive } from "vue";
import { useCartStore, useToastStore } from "@/stores";
import { defineStore } from "pinia";
import { ref } from "vue";

export const usePaymentStore = defineStore('payment', () => {
    const state = reactive({
        loading: false,
        order: null,
        indexOrder: null,
        createPayment: false,
    });
    const payment = ref({});
    const cartStore = useCartStore();
    const toastStore = useToastStore();

    async function createPayment() {
        state.loading = true;
        state.createPayment = true;
        try {
            const response = await axios.post('https://ms-pix-liy6.onrender.com/payment/', {
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
        state.createPayment = false;
    };

    function copyQrCodeClipboard() {
        navigator.clipboard.writeText(payment.value.qr_code);
        toastStore.notify("Pix copiado para a área de transferência!", "success");
    }

    return { state, payment, createPayment, copyQrCodeClipboard };
});