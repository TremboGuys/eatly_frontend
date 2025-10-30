<script setup>
import OrderItemList from './OrderItemList.vue';
</script>
    
<template>
<div class="cards">

    <!-- <OrderStatus />  USAR PARA STATUS DO PEDIDO --> 
   <div class="delivered">
    <p>Pedido entregue</p>
    <i class="fa-solid fa-check"></i>
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

</div>

</template>

<style scoped>
@import "@/assets/sass/order/_cardInfoOrder.scss";
</style>
