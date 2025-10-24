<script setup>
import { useCartStore } from '@/stores/cartStore';
import { useRouter } from 'vue-router';

const cartStore = useCartStore();
const router = useRouter();
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
      <div v-for="item in cartStore.cart" :key="item.id" class="item">
        <div class="top">
          <div class="image">
            <img :src="item.url_file" :alt="item.title" />
          </div>
          <div class="info">
            <div class="title">{{ item.title }}</div>
            <div class="description">{{ item.description }}</div>
          </div>
        </div>
        <div class="bottom">
          <div class="price">
            R$ {{ (Number(item.price) * item.quantity).toFixed(2).replace('.', ',') }}
          </div>
          <div class="quantity">Quantidade: {{ item.quantity }}</div>
        </div>
        <div class="addToCart">
          <button class="button remove" @click="cartStore.removeFromCart(item)">-</button>
          <button class="button add" @click="cartStore.addToCart(item)">+</button>
        </div>
      </div>
      <div class="summary">
        <p><strong>Total de Itens:</strong> {{ cartStore.totalItems }}</p>
        <p><strong>Valor Total:</strong> <span class="price">R$ {{ cartStore.totalPrice.toFixed(2).replace('.', ',') }}</span></p>
      </div>
      <div class="submit">
        <button class="finish" @click="router.push('/payment')">FINALIZAR PEDIDO</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import "@/assets/sass/cart/_cartItem.scss";
</style>
