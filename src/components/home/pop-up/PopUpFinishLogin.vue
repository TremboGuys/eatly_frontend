<script setup>
import { InputsProps, ButtonSubmit } from '@/components';
import { useUserStore } from '@/stores';
import { reactive } from 'vue';

const userStore = useUserStore();

const user = reactive({
    natural_person: {
        date_birth: ''
    },
    telephone: {
        telephone_type: 1,
        number_e164: '',
        is_principal: true
    }
});

function changeDataUser(data) {
    if (data.field == "date_birth") {
        user.natural_person.date_birth = data.value;
    }
    if (data.field == "number_e164") {
        user.telephone.number_e164 = data.value;
    }
}
</script>

<template>
  <div class="container-pop-up">
    <h1 class="title">Finalize seu login!</h1>
    <div class="container-photo">
        <img :src="userStore.state.userGoogle.photo" alt="">
    </div>
    <div class="pop-up">
        <form @submit.prevent="userStore.registerByGoogle(user)">
            <InputsProps type="text" field="name" for-id="name" label="Nome" maxlength=""  :disabled="true" :value="userStore.state.userGoogle.name" :dynamic-focus="true" @change-data-user="changeDataUser" />
            <InputsProps type="text" field="email" for-id="email" label="Email" maxlength="255" :value="userStore.state.userGoogle.email" :disabled="true" :dynamic-focus="true" @change-data-user="changeDataUser" />
            <InputsProps type="text" field="number_e164" for-id="cellphone" label="Telefone" maxlength="" @change-data-user="changeDataUser" />
            <InputsProps type="date" field="date_birth" for-id="date_birth" label="Data de Nascimento" @change-data-user="changeDataUser" />
            <ButtonSubmit name="Registrar-se" />
        </form>
    </div>
  </div>
</template>

<style scoped>
.container-pop-up {
    position: absolute;
    background-color: #fdfdfd;
    box-shadow: 0px 0px 4px 1px #a8a5a5;
    border-radius: 8px;
    width: 350px;
    height: 720px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px 20px;
}

.pop-up {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
}

.title {
    position: relative;
    right: 2px;
    font-size: 1.5rem;
    font-family: 'Poppins', sans-serif;
    text-align: center;
    margin-bottom: 30px;
}

.container-photo {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
}

.container-photo > img {
    /* width: 150px; */
    max-width: 150px;
    height: 140px;
    border-radius: 50%;
}
</style>