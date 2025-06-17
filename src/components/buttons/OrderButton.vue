<script setup>
import { reactive } from 'vue';
import { Transfer, TransferBlack, Coin, CoinBlack, Star, StarBlack, Clock, ClockBlack, Helmet, HelmetBlack, Location, LocationBlack } from './OrderButtonsImages';
const state = reactive({
    isOpen: false,
});
const dropdown = () => {
    state.isOpen = !state.isOpen;
};
const data = reactive({
    options: [
        {
            id: 1,
            name: 'Ordenação Padrão',
            image: Transfer,
            default: true,
        },
        {
            id: 2,
            name: 'Preço',
            image: Coin,
        },
        {
            id: 3,
            name: 'Avaliação',
            image: Star,
        },
        {
            id: 4,
            name: 'Tempo de Entrega',
            image: Clock,
        },
        {
            id: 5,
            name: 'Taxa de Entrega',
            image: Helmet,
        },
        {
            id: 6,
            name: 'Localização',
            image: Location,
        },
        // {
        //     id: 7,
        //     name: 'Ordenação Padrão (Escuro)',
        //     image: TransferBlack,
        // },
        // {
        //     id: 8,
        //     name: 'Preço (Escuro)',
        //     image: CoinBlack,
        // },
        // {
        //     id: 9,
        //     name: 'Avaliação (Escuro)',
        //     image: StarBlack,
        // },
        // {
        //     id: 10,
        //     name: 'Tempo de Entrega (Escuro)',
        //     image: ClockBlack,
        // },
        // {
        //     id: 11,
        //     name: 'Capacidades (Escuro)',
        //     image: HelmetBlack,
        // },
        // {
        //     id: 12,
        //     name: 'Localização (Escuro)',
        //     image: LocationBlack,
        //     default: false
        // },
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
                    <div class="option" v-for="option in data.options" :key="option.id">
                        <div class="circle">
                            <img :src="option.image" alt="Option Image" />
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
@import '@/assets/sass/buttons/_orderButtons.scss'
</style>