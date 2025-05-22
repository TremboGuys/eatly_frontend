<script setup>
import { ref } from "vue";
import InputsProps from '../inputs/InputsProps.vue';
const CPF = ref('')
</script>
<template>
    <div class="container">
        <div class="form-group">
            <InputsProps v-model="CPF" label="CPF" :type="CPF" class="form-control" id="CPF"
            aria-describedby="CPFHelp" placeholder="" />
            <label class="CPF labelInput" for="CPF">{{ CPF }}</label>
        </div>  
    </div>
</template>