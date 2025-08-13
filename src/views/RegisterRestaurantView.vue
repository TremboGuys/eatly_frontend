<script setup>
import { InputsProps, ButtonSubmit, InputFile } from '@/components';
import { useRestaurantComposable } from '@/composables';
import { reactive } from 'vue';

const restaurant = reactive({
    name: '',
    cpf: '',
    orgao: '',
    date: '',
    email: '',
    password: '',
    phone: '',
    cep: '',
    address: '',
    district: '',
    city: '',
    state: '',
})

const useRestaurant = useRestaurantComposable();

function changeDataRestaurant(data) {
    restaurant[data.field] = data.value;
}
</script>

<template>
    <div class="container">
        <img src="@/assets/img/logo.png" class="logo" alt="">
        <h1 class="title">Cadastro de novo restaurante</h1>
        <div class="hr"></div>
        <form @submit.prevent="useRestaurant.createRestaurant(restaurant)">
            <InputsProps type="text" field="name" for-id="name" label="Nome" maxlength="40"
                @change-data-user="changeDataRestaurant" />
            <InputsProps type="number" field="cpf" for-id="cpf" label="CPF" maxlength="11"
                @change-data-user="changeDataRestaurant" />
            <InputsProps type="text" field="orgao" for-id="orgao" label="Órgão Emissor" maxlength="11"
                @change-data-user="changeDataRestaurant" />
            <InputsProps type="date" field="date" for-id="date" label="Data de nascimento"
                @change-data-user="changeDataRestaurant" />
            <InputsProps type="email" field="email" for-id="email" label="Email" maxlength="60"
                @change-data-user="changeDataRestaurant" />
            <InputsProps type="password" field="password" for-id="password" label="Senha" maxlength="60"
                @change-data-user="changeDataRestaurant" />
            <InputsProps type="number" field="phone" for-id="phone" label="Telefone" maxlength="20"
                @change-data-user="changeDataRestaurant" />
            <InputsProps type="number" field="cep" for-id="cep" label="CEP" maxlength="8"
                @change-data-user="changeDataRestaurant" />
            <InputsProps type="text" field="address" for-id="address" label="Endereço" maxlength="100"
                @change-data-user="changeDataRestaurant" />
            <InputsProps type="text" field="district" for-id="district" label="Bairro" maxlength="50"
                @change-data-user="changeDataRestaurant" />
            <InputsProps type="text" field="city" for-id="city" label="Cidade" maxlength="50"
                @change-data-user="changeDataRestaurant" />
            <InputsProps type="text" field="state" for-id="state" label="Estado" maxlength="50"
                @change-data-user="changeDataRestaurant" />
            <div class="bar">
                0 de 2 concluídos
                <div class="bars">
                    <div class="bar-left"></div>
                    <div class="bar-right"></div>
                </div>
            </div>
            <ButtonSubmit style="margin-top: 0;" />
        </form>
    </div>
</template>

<style scoped>
@import '@/assets/sass/registerRestaurant/_registerRestaurant.scss';
</style>