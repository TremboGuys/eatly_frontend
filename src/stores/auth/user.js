import { defineStore } from "pinia";
import { UserService, AuthService } from "@/services";
import { useLoginComposable } from "@/composables";
import { useToastStore, useAuthStore } from "@/stores";
import { useRouter } from "vue-router";
import { reactive } from "vue";
import router from "@/router";

export const useUserStore = defineStore('client', () => {
    const state = reactive({
        successLoginGoogle: false,
        userGoogle: {
            id: '',
            name: '',
            email: '',
            photo: ''
        }
    })
    const useLogin = useLoginComposable();
    const toastStore = useToastStore();
    const authStore = useAuthStore();
    const routerComponent = useRouter();
    
    async function register(user, isAllowed, formState) {
        if (!isAllowed) {
            if (Object.hasOwn(formState, "date_birth") && !formState.date_birth) {
                toastStore.notify("Você deve ser maior de 18 anos para criar uma conta!", "error");
            }
            toastStore.notify("Preencha todos os campos corretamente!", "warning");
            return;
        }

        try {
            const formDataUser = new FormData();
            formDataUser.append("email", user.user.email);
            formDataUser.append("password", user.user.password);
            formDataUser.append("role", user.user.role);
            if (Object.hasOwn(user.user, "file")) {
                formDataUser.append("file", user.user.file);
            }
            const tokenResponse = await UserService.registerUser(formDataUser);
            localStorage.setItem("access", tokenResponse.access);
            localStorage.setItem("refresh", tokenResponse.refresh);
            await UserService.registerNaturalPerson(user.natural_person);
            await UserService.registerTelephone(user.telephone);
            if (user.user.role != "client") {
                await UserService.regiterAddress(user.address);
            }
            routerComponent.push("/dashboard");
            router.afterEach((to) => {
                if (to.path == "/dashboard") {
                    toastStore.notify("Login realizado com sucesso!", "success");
                }
            })
        } catch(error) {
            console.error('Erro ao criar o cadastro do cliente: ', error);

            if (Object.hasOwn(error.response.data, "email")) {
                toastStore.notify("Já existe um usuário com este email!", "error");
            }
        }
    }

    async function sendTokenToRegisterByGoogle(data) {
        try {
            const userResponse = await UserService.registerByGoogle(data);
            state.successLoginGoogle = true;
            state.userGoogle.id = userResponse.id;
            state.userGoogle.photo = userResponse.photo;
            state.userGoogle.email = userResponse.email;
            state.userGoogle.name = userResponse.name;
            localStorage.setItem("access", userResponse.access);
            localStorage.setItem("refresh", userResponse.refresh);
        } catch(error) {
            console.error("Error in POST Google Token: ", error);
        }
    }

    async function registerByGoogle(user) {
        try {
            await UserService.updateNaturalPerson(user.natural_person);
        } catch(error) {
            console.error("Error in PATCH natural person: ", error);
            toastStore.notify("Erro ao criar sua conta!", "error");
            return;
        }
        try {
            await UserService.registerTelephone(user.telephone);
        } catch(error) {
            console.error("Error in PATCH telephone: ", error);
            toastStore.notify("Erro ao criar sua conta!", "error");
            return;
        }
        routerComponent.push("/dashboard");
    }

    async function login(user) {
        if (!useLogin.enable) {
            toastStore.notify("Preencha todos os campos corretamente!", "warning");
            return;
        }

        try {
            const response = await AuthService.login(user);
            localStorage.setItem("access", response.access);
            localStorage.setItem("refresh", response.refresh);
            authStore.state.logged = true;
            toastStore.notify("Login realizado com sucesso!", "success");
            routerComponent.push("/dashboard");
        } catch(error) {
            console.error("Erro ao realizar o login: ", error);
            toastStore.notify("Erro ao realizar o login", "error");
        }
    }

    async function loginByGoogle(access_token) {
        try {
            const response = await AuthService.loginByGoogle(access_token);
            localStorage.setItem("access", response.access);
            localStorage.setItem("refresh", response.refresh);
            routerComponent.push("/dashboard");
        } catch(error) {
            console.error("Error in Login by Google: ", error);
            toastStore.notify("Erro ao logar com o Google!", "error");
        }
    }

    return {
        state,
        register,
        login,
        sendTokenToRegisterByGoogle,
        registerByGoogle,
        loginByGoogle
    };
});