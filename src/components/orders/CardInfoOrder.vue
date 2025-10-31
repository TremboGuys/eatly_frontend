<script setup>
import OrderItemList from "./OrderItemList.vue";
import OrderRating from "./OrderRating.vue";
import DeliveredComp from "./DeliveredComp.vue";
import OrderStatus from "../orderStatus/OrderStatus.vue";

import { useOrderStore } from '@/stores';

const orderStore = useOrderStore();
</script>

<template>
  <div class="cards">
    <div>
      <DeliveredComp v-if="orderStore.orderRetrieve.status == 4" />
      <OrderStatus v-else />
    </div>

  <div class="cardInfoContainer">
    <div class="card-header">
      <p>Pedido #{{ orderStore.orderRetrieve.id }}</p>
      <p class="date">{{ orderStore.orderRetrieve.dateTime.substring(8,10) }}/{{ orderStore.orderRetrieve.dateTime.substring(5,7) }}/{{ orderStore.orderRetrieve.dateTime.substring(0,4) }}</p>
    </div>
    <div class="card-body">
      <div class="order-list">
        <OrderItemList v-for="(product, productIndex) in orderStore.orderRetrieve.products" :key="productIndex" :product="product" />
      </div>
    </div>
  </div>

  <div class="cardPaymentContainer">
    <div class="subtotal">
      <p>Subtotal</p>
      <p>R$ {{ orderStore.orderRetrieve.totalValue.replace(".", ",") }}</p>
    </div>
    <div class="discount">
      <p>Desconto</p>
      <p>R$ 0,00</p>
    </div>
    <div class="total">
      <p>Total</p>
      <p>R$ {{ orderStore.orderRetrieve.totalValue.replace(".", ",") }}</p>
    </div>
  </div>

  <div class="cardAdressContainer">
    <h2>Endereço de Entrega</h2>
    <p>Rodovia BR 280, Km 27, nº 5200, Bairro Colégio Agrícola, Araquari/SC</p>
  </div>

  <div class="cardRatingContainer" v-if="orderStore.orderRetrieve.status == 4">
    <h2>O que você achou do produto?</h2>
    <OrderRating />
    <div class="container-observation"></div>
  </div>
    </div>
</template>

<style scoped>
@import "@/assets/sass/order/_cardInfoOrder.scss";
</style>
