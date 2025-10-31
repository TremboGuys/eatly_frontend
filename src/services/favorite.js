import { api } from "@/plugins/axios";

class FavoriteService {
    async getFavorites() {
        const response = await api.get('favorites/');
        return response.data;
    }

    async createFavorite(idProduct) {
        const response = await api.post('favorites/', idProduct);
        return response.data;
    }

    async deleteFavorite(idFavorite) {
        await api.delete(`favorites/${idFavorite}/`);
        return true;
    }
}

export default new FavoriteService();