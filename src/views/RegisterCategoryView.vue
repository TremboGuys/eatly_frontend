<script setup>
import { InputsProps, ButtonSubmit, InputFile } from '@/components';
import { reactive } from 'vue';

const category = reactive({
    name: '',
    description: '',
    image: null
})

function changeDataCategory(data) {
    category[data.field] = data.value;
}
</script>

<template>
    <div class="container">
        <img src="@/assets/img/logo.png" class="logo" alt="">
        <h1 class="title">Cadastro de nova categoria</h1>
        <div class="hr"></div>
        <form @submit.prevent="">
            <InputsProps type="text" field="name" for-id="name" label="Nome" maxlength="40"
                @change-data-user="changeDataCategory" />
            <InputsProps type="text" field="description" for-id="description" label="Descrição" maxlength="255"
                @change-data-user="changeDataCategory" />
            <InputFile field="image" for-id="image" label="Imagem" @file-selected="changeDataCategory" />
        </form>
        <ButtonSubmit />
    </div>
</template>

<style scoped>
@media (max-width: 425px) {
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-family: "poppins", sans-serif;
    }

    .logo {
        width: 140px;
        height: auto;
        margin-top: 20px;
        margin-bottom: 2rem;
    }

    .title {
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 1rem;
        font-family: 'Poppins', sans-serif;
    }

    .hr {
        width: 80vw;
        height: 1px;
        background-color: #dddddd;
        margin-bottom: 2rem;
    }

    .or {
        font-size: 1.2rem;
        margin: 1rem 0;
        font-family: 'Poppins', sans-serif;
        color: #666;
    }
}
</style>