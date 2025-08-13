import { ref } from "vue";

export const useSearchCategory = () => {
    const searchInput = ref("");

    return {
        searchInput
    };
};