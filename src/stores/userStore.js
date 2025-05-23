import { reactive } from 'vue';
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', () => {
    const user = reactive({
        name: '',
        genre: '',
        dateBirth: '',
        email: '',
        password: '',
        cellphone: ''
    })

    return {
        user
    }
})