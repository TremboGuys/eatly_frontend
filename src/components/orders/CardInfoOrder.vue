<script setup>
import OrderItemList from "./OrderItemList.vue";
import OrderRating from "./OrderRating.vue";
import DeliveredComp from "./DeliveredComp.vue";
import OrderStatus from "../orderStatus/OrderStatus.vue";
</script>

<template>
  <div class="cards">
    <div>
    <!-- <OrderStatus /> -->
    <DeliveredComp />
    </div>

  <div class="cardInfoContainer">
    <div class="card-header">
      <p>Pedido #12345</p>
      <p class="date">30/10/2025</p>
    </div>
    <div class="card-body">
      <div class="order-list">
        <OrderItemList />
        <OrderItemList />
        <OrderItemList />
      </div>
    </div>
  </div>

  <div class="cardPaymentContainer">
    <div class="subtotal">
      <p>Subtotal</p>
      <p>R$ 75,00</p>
    </div>
    <div class="discount">
      <p>Desconto</p>
      <p>R$ 0,00</p>
    </div>
    <div class="total">
      <p>Total</p>
      <p>R$ 75,00</p>
    </div>
  </div>

  <div class="cardAdressContainer">
    <h2>Endereço de Entrega</h2>
    <p>Rua Exemplo, 123 - Bairro - Cidade - Estado</p>
  </div>

  <div class="cardRatingContainer">
    <h2>O que você achou do produto?</h2>
    <OrderRating />
    <div class="container-observation"></div>
  </div>
    </div>
</template>

<style scoped>
@import "@/assets/sass/order/_cardInfoOrder.scss";
</style>
