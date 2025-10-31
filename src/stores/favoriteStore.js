import { defineStore } from "pinia";
import { ref } from "vue";
import { FavoriteService } from "@/services";
import { useToastStore } from "./toastStore";
import { reactive } from "vue";

export const useFavoriteStore = defineStore('favorite', () => {
    const state = reactive({
        loading: true,
    });
    const favorites = ref(null);
    const isFavorite = ref(false);
    const toastStore = useToastStore();

    async function getFavorites() {
        if (favorites.value == null) {
            try {
                const response = await FavoriteService.getFavorites();
                favorites.value = response;
            } catch(error) {
                console.error('Error in GET favorites: ', error);
                toastStore.notify("Erro ao ver seus favoritos!", "error");
            }
        }
        state.loading = false;
    }

    async function createFavorite(idProduct) {
        try {
            const response = await FavoriteService.createFavorite(idProduct);
            favorites.value = response;
            return true;
        } catch(error) {
            console.error('Error in POST favorite: ', error);
            toastStore.notify("Erro ao adicionar favorito!", "error");
        }
    }

    async function deleteFavorite(idFavorite) {
        try {
            const response = await FavoriteService.deleteFavorite(idFavorite);

            if (favorites.value.length > 0) {
                const index = favorites.value.findIndex(i => i.id == idFavorite);
                favorites.value.splice(index, 1);
            }
            return true;
        } catch(error) {
            console.error('Error in DELETE favorite: ', error);
            toastStore.notify("Erro ao remover dos favoritos!", "error");
            return false;
        }
    }

    async function verifyProductIsFavoriteById(idProduct) {
        if (favorites.value == null) {
            await getFavorites();
        }
        const product = favorites.value.findIndex(p => p.product == idProduct);

        isFavorite.value = (product == -1) ? false : true;
    }

    return {
        state,
        favorites,
        isFavorite,
        getFavorites,
        createFavorite,
        deleteFavorite,
        verifyProductIsFavoriteById
    }
});