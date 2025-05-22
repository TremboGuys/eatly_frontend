<script setup>
import { ref } from "vue";
import InputsProps from '../inputs/InputsProps.vue';
const email = ref('')
</script>
<template>
    <div class="container">
        <div class="form-group">
            <InputsProps v-model="email" label="Email" :type="email" class="form-control" id="email"
                aria-describedby="emailHelp" placeholder="" />
            <label class="email labelInput" for="email">{{ email }}</label>
        </div>  
    </div>
</template>