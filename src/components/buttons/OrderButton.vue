<script setup>
import { reactive, ref } from 'vue';
import {
    Transfer, TransferBlack,
    Coin, CoinBlack,
    Star, StarBlack,
    Clock, ClockBlack,
    Helmet, HelmetBlack,
    Location, LocationBlack
} from './OrderButtonsImages';
const state = reactive({
    isOpen: false,
});
const dropdown = () => {
    state.isOpen = !state.isOpen;
};
const selectedOptions = ref([1]);
function selectOption(id) {
    const index = selectedOptions.value.indexOf(id);
    if (index !== -1) {
        if (selectedOptions.value.length > 1) {
            selectedOptions.value.splice(index, 1);
        }
    } else {
        if (selectedOptions.value.length < 2) {
            selectedOptions.value.push(id);
        }
    }
}
const data = reactive({
    options: [
        { id: 1, name: 'Ordenação Padrão', original: Transfer, filtered: TransferBlack, default: true },
        { id: 2, name: 'Preço', original: Coin, filtered: CoinBlack },
        { id: 3, name: 'Avaliação', original: Star, filtered: StarBlack },
        { id: 4, name: 'Tempo de Entrega', original: Clock, filtered: ClockBlack },
        { id: 5, name: 'Taxa de Entrega', original: Helmet, filtered: HelmetBlack },
        { id: 6, name: 'Localização', original: Location, filtered: LocationBlack },
    ],
});
</script>
<template>
    <div class="container">
        <div class="overlay" v-if="state.isOpen" @click="dropdown"></div>
        <div class="order-button" @click="dropdown">
            <button class="btn">
                Ordenar
                <img src="@/assets/img/orderButtons/arrow.png" alt="seta" class="arrow" />
            </button>
        </div>
        <transition name="slide-up-down">
            <div class="card" v-if="state.isOpen">
                <h2>Ordenação por</h2>
                <div class="orderOptions">
                    <div class="option" v-for="option in data.options" :key="option.id"
                        :class="{ active: selectedOptions.includes(option.id) }" @click.stop="selectOption(option.id)">
                        <div class="circle">
                            <img :src="selectedOptions.includes(option.id) ? option.filtered : option.original"
                                alt="Option Image" />
                        </div>
                        <div class="text">
                            <p>{{ option.name }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>
<style scoped>
@import '@/assets/sass/buttons/_orderButtons.scss';
</style>
