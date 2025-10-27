import { api } from "@/plugins/axios";

class OrderService {
    async getCartOrders() {
        const response = await api.get('orders/cart/');
        console.log(response.data);
        return response.data;
    }
    async createOrder(order) {
        const response = await api.post('orders/', order);
        return response.data;
    };
    async addProductInOrder(productOrder) {
        const response = await api.post('products-order/', productOrder);
        return response.data;
    };
    async updateProductInOrder(productOrder) {
        const response = await api.patch(`products-order/${productOrder.id}/`, productOrder);
        return response.data;
    }
    async updateOrder(order) {
        const response = await api.patch(`orders/${order}/`, order);
        return response.data;
    }
    async deleteProductInOrder(id) {
        const response = await api.delete(`products-order/${id}/`);
        return response.data;
    }
    async deleteOrder(id) {
        const response = await api.delete(`orders/${id}/`);
        return true;
    }
}

export default new OrderService();