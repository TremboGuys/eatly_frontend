<script setup>
import { useCartStore, usePaymentStore } from '@/stores';

const cartStore = useCartStore();
const paymentStore = usePaymentStore();
</script>

<template>
  <div class="container">
    <div class="titleSection">
      <span class="text">Carrinho</span>
      <div class="hr"></div>
    </div>
    <div v-if="cartStore.cart.length === 0" class="empty">
      Nenhum item no carrinho
    </div>
    <div v-else>
      <div class="container-order" v-for="(order, orderIndex) in cartStore.cart" :key="orderIndex">
      <div class="item" v-for="(product, productIndex) in order.products" :key="productIndex">
          <div class="top">
            <div class="image">
              <img @click="cartStore.fillProduct(product, order.id); router.push(`restaurant/${order.restaurant.id}/product/${product.product.id}`)" :src="product.product.url_file" :alt="product.name" />
            </div>
            <div class="info">
              <div class="name">{{ product.product.name }}</div>
              <div class="observation">Observação: {{ product.observation.length > 0 ? product.observation : 'Sem observações' }}</div>
            </div>
            <div class="logo">
              <img :src="order.restaurant.photo" alt="">
            </div>
          </div>
          <div class="bottom">
            <div class="price">
              R$ {{ (Number(product.product.price) * product.quantity).toFixed(2).replace('.', ',') }}
            </div>
            <div class="quantity">Quantidade: {{ product.quantity }}</div>
          </div>
          <div class="addToCart">
            <button class="button remove" @click="product.quantity > 0 ? product.quantity-- : product.quantity; order.totalValue -= product.product.price; cartStore.removeFromCart(product.id, orderIndex)">-</button>
            <button class="button add" @click="product.quantity++; order.totalValue += product.product.price; cartStore.updateProductInOrder(product)">+</button>
          </div>
        </div>
        </div>
      </div>
      <div class="summary">
        <!-- <p><strong>Total de Itens:</strong> {{ cartStore.totalItems }}</p> -->
        <p><strong>Valor Total:</strong> <span class="price">R$ {{ cartStore.totalPrice.toFixed(2).replace('.', ',') }}</span></p>
      </div>
      <div class="submit">
        <button class="finish" @click="cartStore.finishOrder()">FINALIZAR PEDIDO</button>
      </div>
    </div>
</template>
<style scoped>
@import "@/assets/sass/cart/_cartItem.scss";
</style>
