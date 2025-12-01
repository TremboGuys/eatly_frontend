import { defineStore } from "pinia";
import { ProfileService, UserService } from "@/services";
import { useToastStore } from "@/stores";
import { ref, reactive } from "vue";

export const useProfileStore = defineStore('profile', () => {
    const state = reactive({
        loading: false,
    });
    const editImage = ref(false);
    const profile = ref(null);
    const newProfile = ref({});
    const addresses = ref([]);
    const toastStore = useToastStore();

    async function getProfile() {
        try {
            const request = await ProfileService.getProfile();
            profile.value = request.profile;
            addresses.value = request.addresses;
        }
        catch(error) {
            console.error('Error in GET profile: ', error);
        }
    }

    async function updateProfile() {
        state.loading = true;
        try {
            if (newProfile.value.hasOwnProperty('user')) {
                const formDataUser = new FormData();

                for (const [key, value] of Object.entries(newProfile.value['user'])) {
                    formDataUser.append(key, value);
                }

                await UserService.updateUser(formDataUser);
            }
            if (newProfile.value.hasOwnProperty('natural_person')) {
                await UserService.updateProfileNaturalPerson(newProfile.value['natural_person']);
            }
            if (newProfile.value.hasOwnProperty('telephone')) {
                await UserService.updateTelephone(newProfile.value['telephone']);
            }
            await getProfile();
            newProfile.value = {};
            toastStore.notify('Perfil atualizado com sucesso!', "success");
        }
        catch(error) {
            console.error('Erro in PATCH profile: ', error);
            toastStore.notify('Erro ao atualizar seu perfil :(', 'error');
        }
        state.loading = false;
    }

    return {
        state, editImage, profile, newProfile, getProfile, updateProfile
    }
});