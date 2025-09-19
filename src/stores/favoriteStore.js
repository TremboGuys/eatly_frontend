import { defineStore } from "pinia";
import { ref } from "vue";
import { FavoriteService } from "@/services";
import { useToastStore } from "./toastStore";

export const useFavoriteStore = defineStore('favorite', () => {
    const favorites = ref([]);
    const isFavorite = ref(false);
    const toastStore = useToastStore();

    async function getFavorites() {
        try {
            const response = await FavoriteService.getFavorites();
            favorites.value = response;
        } catch(error) {
            console.error('Error in GET favorites: ', error);
            toastStore.notify("Erro ao ver seus favoritos!", "error");
        }
    }

    async function createFavorite(idProduct) {
        try {
            const response = await FavoriteService.createFavorite(idProduct);
            favorites.value.push(response);
            return true;
        } catch(error) {
            console.error('Error in POST favorite: ', error);
            toastStore.notify("Erro ao adicionar favorito!", "error");
        }
    }

    async function deleteFavorite(idProduct) {
        try {
            const response = await FavoriteService.deleteFavorite(idProduct);

            if (favorites.value.length > 0) {
                const index = favorites.value.findIndex(i => i.id == idProduct);
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
        if (favorites.value.length == 0) {
            await getFavorites();
        }
        const product = favorites.value.findIndex(p => p.id == idProduct);

        isFavorite.value = (product == -1) ? false : true;
    }

    return {
        favorites,
        isFavorite,
        getFavorites,
        createFavorite,
        deleteFavorite,
        verifyProductIsFavoriteById
    }
});