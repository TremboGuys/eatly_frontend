import { defineStore } from "pinia";
import { ClientService } from "@/services";
import { useToastStore, useAuthStore } from "@/stores";
import { useRouter } from "vue-router";

export const useClientStore = defineStore('client', () => {
    const toastStore = useToastStore();
    const authStore = useAuthStore();
    const router = useRouter();
    async function register(user) {
        const response = await ClientService.register(user);

        console.log(response);

        if (response) {
            login({email: user.email, password: user.password});
        }
        else {
            toastStore.notify("error", "Erro ao criar o usuário");
        }
    }

    async function login(user) {
        const response = await ClientService.login(user);

        if (response != false) {
            localStorage.setItem('access', response.access);
            localStorage.setItem('refresh', response.refresh);
            authStore.state.logged = true;
            toastStore.notify("success", "Usuário criado com sucesso!");
            router.push('/dashboard');
        }
        else {
            toastStore.notify("error", "Erro ao realizar o login");
        }
    }

    return {
        register,
        login
    }
})