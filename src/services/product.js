import { api } from "@/plugins/axios";

class ProductService {
    async getProduct(id) {
        const response = await api.get(`products/${id}`);
        return response.data; 
    }
}

export default new ProductService();