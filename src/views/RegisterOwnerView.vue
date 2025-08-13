<script setup>
import { InputsProps, ButtonSubmit, InputFile } from '@/components';
import { useOwnerComposable } from '@/composables';
import { reactive } from 'vue';

const owner = reactive({
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

const arrayFormData = [
    {
        field: "name",
        type: "text",
        forId: "name",
        label: "Nome",
        maxlength: 40
    },
    {
        field: "cpf",
        type: "number",
        forId: "cpf",
        label: "CPF",
        maxlength: 11
    },
    {
        field: "orgao",
        type: "text",
        forId: "orgao",
        label: "Órgão Emissor",
        maxlength: 11
    },
    {
        field: "date",
        type: "date",
        forId: "date",
        label: "Data de nascimento",
        maxlength: 10
    },
    {
        field: "email",
        type: "email",
        forId: "email",
        label: "Email",
        maxlength: 60
    },
    {
        field: "password",
        type: "password",
        forId: "password",
        label: "Senha",
        maxlength: 60
    },
    {
        field: "phone",
        type: "number",
        forId: "phone",
        label: "Telefone",
        maxlength: 20
    },
    {
        field: "cep",
        type: "number",
        forId: "cep",
        label: "CEP",
        maxlength: 8
    },
    {
        field: "address",
        type: "text",
        forId: "address",
        label: "Endereço",
        maxlength: 100
    },
    {
        field: "district",
        type: "text",
        forId: "district",
        label: "Bairro",
        maxlength: 50
    },
    {
        field: "city",
        type: "text",
        forId: "city",
        label: "Cidade",
        maxlength: 50
    },
    {
        field: "state",
        type: "text",
        forId: "state",
        label: "Estado",
        maxlength: 50
    }
];

const useOwner = useOwnerComposable();

function changeDataOwner(data) {
    owner[data.field] = data.value;
}
</script>

<template>
    <div class="container">
        <img src="@/assets/img/logo.png" class="logo" alt="">
        <h1 class="title">Cadastro de novo proprietário</h1>
        <div class="hr"></div>
        <form @submit.prevent="useOwner.createOwner(owner)">
            <InputsProps v-for="data in arrayFormData" :key="data.field" :type="data.type" :field="data.field" :for-id="data.forId" :label="data.label" :maxlength="data.maxlength"
                @change-data-user="changeDataOwner" />
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
@import '@/assets/sass/registerOwner/_registerOwner.scss';
</style>