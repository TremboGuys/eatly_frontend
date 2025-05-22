<script setup>
import { defineProps, defineEmits } from 'vue';
const props = defineProps({
    type: {
        type: String,
        default: 'text',
    },
    modelValue: String,
    label: String,
    placeholder: String
})
const emit = defineEmits(['update:modelValue'])
</script>
<template>
    <div class="container">
        <div class="input">
            <div class="form-group">
                <input :type="type" class="form-control" :placeholder="placeholder" :value="value" @input="emit('', $event.target.value)" />
                <label class="labelInput" for="">{{ label }}</label>
            </div>
        </div>
    </div>
</template>
<style scoped>
@import '@/assets/sass/inputs/_inputsProps.scss';
</style>