import { defineStore } from "pinia";
import { toast } from "vue3-toastify/dist/index";
import 'vue3-toastify/dist/index.css';

export const useToastStore = defineStore('toast', () => {
    const notify = (message, typeToast) => {
        toast(message, {type: typeToast, position: toast.POSITION.TOP_CENTER})
    }

    return {
        notify
    }
})