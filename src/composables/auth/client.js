import { computed, reactive, watch } from "vue"

export const useClientComposable = () => {
    const enable = computed(() => {
        return Object.values(formState).every(value => !!value);
    })
    const formState = reactive({
        password: undefined,
        cellphone: undefined,
        email: undefined,
        date_birth: undefined
    });

    return {
        enable,
        formState,
    }
}