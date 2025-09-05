import { reactive } from "vue"
import { defineStore } from "pinia"
import { AuthService } from "@/services"
import { useToastStore } from "@/stores"

export const useAuthStore = defineStore('auth', () => {
    const state = reactive({
        logged: false
    });

    const toastStore = useToastStore();

    function isExpiredToken(token) {
        const payload = JSON.parse(atob(token.split(".")[1]));
        const exp = payload.exp * 1000;
        console.log(Date.now() > exp - 60 * 1000);
        return Date.now() > exp - 60 * 1000;
    }

    async function verifyAuth() {
        if (!isExpiredToken(localStorage.getItem('access'))) {
            state.logged = true;
            return true;
        }
        else {
            if (!isExpiredToken(localStorage.getItem('refresh'))) {
                const response = await AuthService.refresh({refresh: localStorage.getItem('refresh')});
    
                if (response == false) {
                    toastStore.notify("error", "Erro ao realizar o login");
                    return false;
                }
                localStorage.setItem('access', response.access);
                state.logged = true;
                return true;
            }
            return false;
        }
    }

    return {
        state,
        verifyAuth
    }
})