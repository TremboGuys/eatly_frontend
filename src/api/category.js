import { api } from "@/plugins/axios"

class APICategory {
    async getCategories() {
        try {
            const response = await api.get('/categories');
            return response;
        } catch(error) {
            console.error('Error in request for categories: ', error)
            return false;
        }  
    }
}

export default new APICategory();