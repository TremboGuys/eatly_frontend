import { defineStore } from 'pinia';
import { ref, reactive, computed } from 'vue';
import { useToastStore, usePaymentStore } from '@/stores';
import { OrderService } from '@/services';
import { useRouter } from 'vue-router';

export const useCartStore = defineStore("cart", () => {
    const cart = ref(null);
    const paymentStore = usePaymentStore();
    const toastStore = useToastStore();
    const router = useRouter();
    const state = reactive({
        updateProduct: {
            isUpdate: false,
            indexProduct: null
        }
    });
    const product = reactive({
        product: null,
        order: null,
        quantity: 1,
        observation: '',
        price: 0.00
    });

    function fillProduct(existingProduct, order) {
        product.product = existingProduct.product.id;
        product.order = order;
        product.quantity = existingProduct.quantity;
        product.observation = existingProduct.observation;
        product.price = existingProduct.product.price;
    }

    async function getCartOrders() {
        try {
            const orders = await OrderService.getCartOrders();
            cart.value = orders;
        }
        catch(error) {
            console.error('Error in GET cart orders: ', error);
        }
    }

    async function addToCart(restaurant) {
        if (cart.value == null) await getCartOrders();
        const orderObject = cart.value.findIndex(o => o.restaurant.id == restaurant);
        console.log(orderObject, restaurant);

        if (orderObject != -1) {
            const existingProductInCart = cart.value[orderObject].products.find(p => p.observation == product.observation);

            console.log(existingProductInCart);

            if (existingProductInCart) {
                existingProductInCart.quantity += product.quantity;
                await updateProductInOrder(existingProductInCart, orderObject);
                toastStore.notify("Produto adicionado ao carrinho!", "success");
            }
            else {
                try {
                    product.order = cart.value[orderObject].id;
                    console.log('Product: ', product);
                    const order = await OrderService.addProductInOrder(product);
                    cart.value[orderObject] = order;
                    toastStore.notify("Produto adicionado ao carrinho!", "success");
                }
                catch(error) {
                    console.error('Error in POST product order: ', error);
                }
            }
        }
        else {
            try {
                let productObject = product;
                delete productObject['order'];
                let orderObject = {
                    restaurant,
                    totalValue: product.price * product.quantity,
                    status: 1,
                    products: [
                        {...productObject}
                    ]
                };
                const order = await OrderService.createOrder(orderObject);
                cart.value.push(order);
                toastStore.notify("Produto adicionado ao carrinho!", "success");
            }
            catch(error) {
                console.error('Error in POST order: ', error);
            }
        }
    }
    async function updateProductInOrder(existingProduct, indexRestaurant) {
        try {
            const indexProduct = existingProduct.product.id;
            const existingProductCopy = JSON.parse(JSON.stringify(existingProduct));
            existingProductCopy.product = indexProduct;
            const order = await OrderService.updateProductInOrder(existingProductCopy);
            cart.value.splice(indexRestaurant, 1, order);
        }
        catch(error) {
            console.error('Error in PATCH product order: ', error);
            toastStore.notify('Erro ao atualizar seu pedido', 'error');
        }
    }
    async function removeFromCart(idProductOrder, indexOrder) {
        console.log(indexOrder);
        const productOrderIndex = cart.value[indexOrder].products.findIndex(p => p.id == idProductOrder);

        if (cart.value[indexOrder].products[productOrderIndex].quantity >= 1) {
            await updateProductInOrder(cart.value[indexOrder].products[productOrderIndex], indexOrder);
        }
        else {
            if (cart.value[indexOrder].products.length == 1) {
                await deleteOrder(cart.value[indexOrder].id);
            }
            else {
                try {
                    const order = await OrderService.deleteProductInOrder(idProductOrder);
                    cart.value[indexOrder] = order;
                }
                catch(error) {
                    console.error('Error in DELETE product order: ', error);
                    toastStore.notify('Erro ao excluir o produto do seu pedido!', 'error');
                }
            }
        }
    }
    async function deleteOrder(idOrder) {
        const indexOrder = cart.value.findIndex(o => o.id == idOrder);

        try {
            await OrderService.deleteOrder(idOrder);
            cart.value.splice(indexOrder, 1);
        }
        catch(error) {
            console.error('Error in DELETE order: ', error);
            toastStore.notify('Erro ao deletar seu pedido!', 'error');
        }
    }

    const totalPrice = computed(() => {
        if (cart.value == null) {
            return 0.00;
        }
        return cart.value.reduce((accumulator, currentValue) => {
            return accumulator + parseFloat(currentValue.totalValue);
        }, 0.00);
    });

    function finishOrder() {
        paymentStore.state.order = cart.value[0].id;
        paymentStore.state.indexOrder = 0;
        router.push('/payment');
    }
    return { cart, state, product, totalPrice, fillProduct, getCartOrders, addToCart, updateProductInOrder, removeFromCart, deleteOrder, finishOrder };
});