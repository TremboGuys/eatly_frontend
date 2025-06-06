import { defineStore } from "pinia";
import { toast } from "vue3-toastify/index";
import "vue3-toastify/dist/index.css";

export const useToastStore = defineStore('toast', () => {
    const toast = (message, typeToast) => {
        toast(message, {type: typeToast, position: toast.POSITION.TOP_CENTER})
    }

    return {
        toast
    }
})