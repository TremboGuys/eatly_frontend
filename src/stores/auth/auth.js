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
        const access = localStorage.getItem('access');
        const refresh = localStorage.getItem('refresh');

        if (!access && !refresh) {
            return false;
        }

        const isExpiredAccess = (access != null) ? isExpiredToken(access) : true;
        const isExpiredRefresh = isExpiredToken(refresh);

        if (isExpiredRefresh) {
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            state.logged = false;
            return false;
        }

        if (isExpiredAccess && !isExpiredRefresh) {
            return await refreshToken(refresh);
        }

        if (!isExpiredAccess) {
            state.logged = true;
            return true;
        }

        return false;
    }

    async function refreshToken(token) {
        try {
            const response = await AuthService.refresh(token);
            localStorage.setItem("access", response.access);
            return true;
        } catch(error) {
            console.error('Erro no refresh token: ', error);
            return false;   
        }
    }

    return {
        state,
        verifyAuth,
        isExpiredToken
    }
})