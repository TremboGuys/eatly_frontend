<script setup>
import { ref } from 'vue';

const cart = ref([
  {
    id: 1,
    restaurant: "Hamburgueria Ponto X",
    status: "Pedido em andamento",
    items: "1 X-Burguer, 1 Coca-Cola",
    logo: new URL('@/assets/img/banner.png', import.meta.url).href,
    image: new URL('@/assets/img/pizza.png', import.meta.url).href,
  }
]);
</script>
<template>
  <div class="container">
    <main class="orderMainContainer">
      <div v-if="cart.length === 0" class="card empty">
        Sem pedidos recentes por aqui
      </div>
      <div v-else>
        <h2 class="sectionTitle">Histórico</h2>
        <div v-for="item in cart" :key="item.id" class="card">
          <div class="orderHeader">
            <div class="restaurantInfo">
              <img class="logo" :src="item.logo" alt="Logo" />
              <div class="details">
                <h3>{{ item.restaurant }}</h3>
                <p class="status">
                  {{ item.status }}
                </p>
              </div>
            </div>
            <p class="date">{{ item.date }}</p>
          </div>
          <div class="orderBody">
            <div class="itemText">{{ item.items }}</div>
            <img :src="item.image" alt="item" class="itemImg" />
          </div>
          <div class="orderActions">
            <button class="add">Adicione ao carrinho</button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<style scoped>
@import '@/assets/sass/orders/_ordersCards.scss';
</style>
