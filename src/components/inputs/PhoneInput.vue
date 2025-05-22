<script setup>
import { ref } from "vue";
import InputsProps from '../inputs/InputsProps.vue';
const phone = ref('')
</script>
<template>
    <div class="container">
        <div class="form-group">
            <InputsProps v-model="phone" label="Telefone" :type="phone" class="form-control" id="phone"
            aria-describedby="phoneHelp" placeholder="" />
            <label class="phone labelInput" for="phone">{{ phone }}</label>
        </div>  
    </div>
</template>