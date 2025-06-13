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
@import '@/assets/sass/registerCategory/_registerCategory.scss';
</style>