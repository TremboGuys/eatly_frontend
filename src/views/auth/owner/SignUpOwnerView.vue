<script setup>
import { InputsProps, ButtonSubmit, InputFile, CustomSelect} from '@/components';
import { useOwnerComposable } from '@/composables';
import { useUserStore } from '@/stores';
import { reactive, watch } from 'vue';
import { arrayFormData, typeDocumentFormData } from '@/metaDatas/registerOwner';
import { verifyCellphoneNumber, verifyDocument } from '@/utils/validators';

const user = reactive({
    user: {
        email: '',
        password: '',
        role: 'owner'
    },
    natural_person: {
        name: '',
        document_type: '',
        document_number: '',
        document_country: 'BR',
        date_birth: '',
    },
    address: {
        street: '',
        number: '',
        district: '',
        zipcode: '',
        city: '',
    },
    telephone: {
        telephone_type: 1,
        number_e164: '+',
        is_principal: false
    }
});

const useOwner = useOwnerComposable();
const userStore = useUserStore();

function changeDataUser(data) {
    useOwner.formState[data.field] = true;
    if (['email', 'password'].includes(data.field)) {
        user.user[data.field] = data.value;
    }
    else if (['name', 'document_number', 'date_birth'].includes(data.field)) {
        if (data.field == 'document_number') {
            user.natural_person.document_number = verifyDocument(data.value);
        }
        else {
            user.natural_person[data.field] = data.value;
        }

        if (data.field == "date_birth") {
            verifyDateBirth()   
        }
    }
    else if (['street', 'number', 'district', 'zipcode', 'city'].includes(data.field)) {
        user.address[data.field] = data.value;
    }
    else {
        user.telephone.number_e164 = verifyCellphoneNumber(data.value);
    }
}

function verifyDateBirth() {
  useOwner.formState.date_birth = (new Date().getFullYear() - Number(user.natural_person.date_birth.slice(0,4)) >= 18) ? true : false;
}

watch(() => user.natural_person.type_document, () => {
    useOwner.formState.type_document = true;
})
</script>

<template>
    <div class="container">
        <img src="@/assets/img/logo.png" class="logo" alt="">
        <h1 class="title">Cadastro de novo proprietário</h1>
        <div class="hr"></div>
        <form @submit.prevent="userStore.register(user, useOwner.enable, useOwner.formState)">
            <InputsProps type="text" field="name" for-id="name" label="Nome" maxlength="100" @change-data-user="changeDataUser" />
            <CustomSelect v-model="user.natural_person.document_type" :options="typeDocumentFormData.options" placeholder="Selecione o seu documento" />
            <InputsProps v-for="(data, index) in arrayFormData" :key="index" :type="data.type" :field="data.field" :for-id="data.forId" :label="data.label" :maxlength="data.maxlength"
                @change-data-user="changeDataUser" />
            <div class="bar">
                <p>0 de 2 concluídos</p>
                <div class="bars">
                    <div class="bar-left"></div>
                    <div class="bar-right"></div>
                </div>
            </div>
            <ButtonSubmit name="Realizar cadastro" style="margin-top: 0;" />
        </form>
    </div>
</template>

<style scoped>
@import '@/assets/sass/registerOwner/_registerOwner.scss';
</style>