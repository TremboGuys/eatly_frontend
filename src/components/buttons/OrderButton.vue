<script setup>
import { reactive, ref } from 'vue';
import { Transfer, TransferBlack, Coin, CoinBlack, Star, StarBlack, Clock, ClockBlack, Helmet, HelmetBlack, Location, LocationBlack } from './OrderButtonsImages';
const state = reactive({
    isOpen: false,
});
const dropdown = () => {
    state.isOpen = !state.isOpen;
};
const selectedOption = ref(1);
function selectOption(id) {
  if (selectedOption.value === id) {
    selectedOption.value = 1;
  } else {
    selectedOption.value = id;
  }
}
const data = reactive({
    options: [
        {
            id: 1,
            name: 'Ordenação Padrão',
            original: Transfer,
            filtered: TransferBlack,
            default: true,
        },
        {
            id: 2,
            name: 'Preço',
            original: Coin,
            filtered: CoinBlack,
        },
        {
            id: 3,
            name: 'Avaliação',
            original: Star,
            filtered: StarBlack,
        },
        {
            id: 4,
            name: 'Tempo de Entrega',
            original: Clock,
            filtered: ClockBlack
        },
        {
            id: 5,
            name: 'Taxa de Entrega',
            original: Helmet,
            filtered: HelmetBlack
        },
        {
            id: 6,
            name: 'Localização',
            original: Location,
            filtered: LocationBlack,
        },

    ],
})
</script>
<template>
    <div class="container">
        <div class="order-button" @click="dropdown">
            <button class="btn">Order</button>
            <div class="card">
                <h2>Ordenação por</h2>
                <div class="orderOptions" v-if="state.isOpen">
                    <div class="option" v-for="option in data.options" :key="option.id" :class=" {active: selectedOption === option.id}" @click.stop="selectOption(option.id)">
                        <div class="circle">
                            <img :src="selectedOption === option.id ? option.filtered : option.original" alt="Option Image" />
                        </div>
                        <div class="text">
                            <p>{{ option.name }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
@import '@/assets/sass/buttons/_orderButtons.scss';
</style>