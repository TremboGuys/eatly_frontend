import { computed, reactive } from "vue"

export const useLoginComposable = () => {
    const enable = computed(() => {
        return Object.values(formState).every(value => !!value);
    })
    const formState = reactive({
        email: undefined,
        password: undefined,
    });

    return {
        enable,
        formState,
    }
}