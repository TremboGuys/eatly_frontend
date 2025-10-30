<script setup>
import { useCartStore } from '@/stores';

const useCart = useCartStore();
</script>

<template>
  <div class="container-observation">
    <div class="container-title">
      <p class="title">Alguma observação?</p>
      <img class="pencil-icon" src="@/assets/img/productPage/pencil.png" alt="">
    </div>
    <textarea name="" id="" cols="40" rows="5" v-model="useCart.product.observation" placeholder="Ex: tirar salada, molhos, queijo e etc."></textarea>
  </div>
</template>

<style scoped>
.container-observation {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    padding: 12px;
}
.container-title {
  display: flex;
  column-gap: 10px;
}
.pencil-icon {
  width: 20px;
  object-fit: contain;
  flex-shrink: 0;
}
.title {
    font-family: 'Poppins', sans-serif;
    font-size: 1.1rem;
}

textarea {
    field-sizing: content;
    min-height: 5rem;
    padding: 8px 10px;
    border: 2px solid rgb(173, 173, 173);
    outline: none;
    font-family: 'Poppins', sans-serif;
}
</style>