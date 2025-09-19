import { defineStore } from "pinia";
import { UserService, AuthService } from "@/services";
import { useLoginComposable } from "@/composables";
import { useToastStore, useAuthStore } from "@/stores";
import { useRouter } from "vue-router";

export const useUserStore = defineStore('client', () => {
    const useLogin = useLoginComposable();
    const toastStore = useToastStore();
    const authStore = useAuthStore();
    const router = useRouter();
    
    async function register(user, isAllowed, formState) {
        if (!isAllowed) {
            if (Object.hasOwn(formState, "date_birth") && !formState.date_birth) {
                toastStore.notify("Você deve ser maior de 18 anos para criar uma conta!", "error");
            }
            toastStore.notify("Preencha todos os campos corretamente!", "warning");
            return;
        }

        try {
            await UserService.register(user);
            await login({email: user.user.email, password: user.user.password});
        } catch(error) {
            console.error('Erro ao criar o cadastro do cliente: ', error);

            if (Object.hasOwn(error.response.data, "email")) {
                toastStore.notify("Já existe um usuário com este email!", "error");
            }
        }
    }

    async function login(user) {
        if (!useLogin.enable) {
            toastStore.notify("Preencha todos os campos corretamente!", "warning");
            return;
        }

        try {
            const response = await AuthService.login(user);
            localStorage.setItem('access', response.access);
            localStorage.setItem('refresh', response.refresh);
            authStore.state.logged = true;
            toastStore.notify("Login realizado com sucesso!", "success");
            router.push('/dashboard');
        } catch(error) {
            console.error('Erro ao realizar o login: ', error);
            toastStore.notify("Erro ao realizar o login", "error");
        }
    }

    return {
        register,
        login
    }
})