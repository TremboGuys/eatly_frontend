<script setup>
import { ref } from "vue";
import InputsProps from '../inputs/InputsProps.vue';
const password = ref('')
</script>
<template>
    <div class="container">
        <div class="form-group">
            <InputsProps v-model="password" label="Senha" :type="password" class="form-control" id="password"
            aria-describedby="passwordHelp" placeholder="" />
            <label class="password labelInput" for="password">{{ password }}</label>
        </div>  
    </div>
</template>