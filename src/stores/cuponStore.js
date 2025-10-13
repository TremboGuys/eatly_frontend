// stores/couponStore.js
import { defineStore } from "pinia";
import { ref } from "vue";
import { useToastStore } from "./toastStore"; 

export const useCouponStore = defineStore("coupon", () => {
  const showConfirm = ref(false);
  const showSuccess = ref(false);
  const toastStore = useToastStore();

  function openConfirm() {
    showConfirm.value = true;
  }

  function handleCancel() {
    showConfirm.value = false;
  }

  function handleConfirm() {
    showConfirm.value = false;

    setTimeout(() => {
      showSuccess.value = true;

      toastStore.notify("Cupom resgatado com sucesso!", "success");

      setTimeout(() => {
        showSuccess.value = false;
      }, 3000);
    }, 250);
  }

  function closeSuccess() {
    showSuccess.value = false;
  }

  return {
    showConfirm,
    showSuccess,
    openConfirm,
    handleCancel,
    handleConfirm,
    closeSuccess,
  };
});
