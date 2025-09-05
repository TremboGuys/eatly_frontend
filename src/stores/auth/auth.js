import { reactive } from "vue"
import { defineStore } from "pinia"
import { AuthService } from "@/services"
import { useToastStore } from "@/stores"

export const useAuthStore = defineStore('auth', () => {
    const state = reactive({
        logged: false
    });

    const toastStore = useToastStore();

    function isExpiredToken(token, offsetSec = 60) {
        const payload = JSON.parse(atob(token.split(".")[1]));
        const exp = payload.exp * 1000;
        return Date.now() > exp - offsetSec * 1000;
    }

    async function verifyAuth() {
        if (state.logged) {
            return true;
        }
        
        const access = localStorage.getItem('access');
        const refresh = localStorage.getItem('refresh');

        if (!access && !refresh) {
            return false;
        }

        const isExpiredAccess = isExpiredToken(access);
        const isExpiredRefresh = isExpiredToken(refresh);

        if (!isExpiredAccess) {
            state.logged = true;
            return true;
        }

        if (isExpiredAccess && isExpiredRefresh) {
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            return false;
        }

        if (isExpiredAccess && !isExpiredRefresh) {
            return await refreshToken(refresh);
        }
    }

    async function refreshToken(token) {
        const response = await AuthService.refresh({refresh: token});

        if (!response) {
            return false;
        }

        localStorage.setItem("access", response.access);
        return true;
    }

    return {
        state,
        verifyAuth,
        isExpiredToken
    }
})