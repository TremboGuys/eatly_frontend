<script setup>
import { InputsProps, ButtonSubmit, CustomSelect, InputFile } from '@/components';
import { useCategoryComposable } from '@/composables';
import { useRestaurantStore } from '@/stores';
import { reactive, ref, onMounted } from 'vue';
import { categories } from '@/metaDatas/categories.js';

// onMounted(async () => {
//     const data = await useCategoryComposable.getCategories();
//     categories.value = data;
// })

// const categories = ref([]);

const restaurant = reactive({
    name: '',
    cnpj: '',
    category: null,
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

const arrayFormData = [
    {
        field: "name",
        type: "text",
        forId: "name",
        label: "Nome do restaurante",
        maxlength: "50"
    },
    {
        field: "cnpj",
        type: "number",
        forId: "cnpj",
        label: "CNPJ",
        maxlength: "14"
    },
    {
        field: "time",
        type: "datetime",
        forId: "time",
        label: "Horário de funcionamento",
        maxlength: "10"
    },
    {
        field: "email",
        type: "email",
        forId: "email",
        label: "Email",
        maxlength: "60"
    },
    {
        field: "phone",
        type: "number",
        forId: "phone",
        label: "Telefone",
        maxlength: "20"
    },
    {
        field: "cep",
        type: "number",
        forId: "cep",
        label: "CEP",
        maxlength: "8"
    },
    {
        field: "address",
        type: "text",
        forId: "address",
        label: "Endereço",
        maxlength: "100"
    },
    {
        field: "district",
        type: "text",
        forId: "district",
        label: "Bairro",
        maxlength: "50"
    },
    {
        field: "city",
        type: "text",
        forId: "city",
        label: "Cidade",
        maxlength: "50"
    },
    {
        field: "state",
        type: "text",
        forId: "state",
        label: "Estado",
        maxlength: "50"
    }
];

const useRestaurant = useRestaurantStore();

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
            <InputsProps v-for="index in 2" :type="arrayFormData[index - 1].type" :key="index"
                :field="arrayFormData[index - 1].field" :for-id="arrayFormData[index - 1].forId"
                :label="arrayFormData[index - 1].label" :maxlength="arrayFormData[index - 1].maxlength"
                @change-data-user="changeDataRestaurant" />
                <div class="select">
                    <CustomSelect v-model="restaurant.category"
                    :options="categories.map(c => ({ value: c.id, label: c.name }))"
                    placeholder="Selecione a categoria do restaurante" />
                </div>
            <InputFile field="file" for-id="restaurant-file" @change-data-user="changeDataRestaurant" />
            <InputsProps v-for="index in 8" :type="arrayFormData[index + 1].type" :key="index"
                :field="arrayFormData[index + 1].field" :for-id="arrayFormData[index + 1].forId"
                :label="arrayFormData[index + 1].label" :maxlength="arrayFormData[index + 1].maxlength"
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