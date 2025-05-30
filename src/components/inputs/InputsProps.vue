<script setup>
import { useUserStore } from '@/stores';

const props = defineProps({
    type: String,
    field: String,
    forId: String,
    label: String,
    maxlength: String
})

const userStore = useUserStore();

const emit = defineEmits(['changeDataUser']);
</script>
<template>
    <div class="container">
        <div class="input">
            <div class="form-group">
                <input :type="type" class="form-control" :maxlength="maxlength" @input="emit('changeDataUser', {field: props.type, value: $event.target.value})" :placeholder="' '" />
                <label class="labelInput" :for="forId">{{ label }}</label>
            </div>
        </div>
    </div>
</template>
<style scoped>
@import '@/assets/sass/inputs/_inputsProps.scss';
</style>