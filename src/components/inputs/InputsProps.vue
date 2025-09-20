<script setup>
const props = defineProps({
    type: String,
    field: String,
    forId: String,
    label: String,
    maxlength: String
});

const emit = defineEmits(['changeDataUser']);
</script>
<template>
    <div class="container">
        <div class="input">
            <div class="form-group">
                <input :type="props.type" class="form-control" :maxlength="props.maxlength" @input="emit('changeDataUser', {field: props.field, value: $event.target.value})" :placeholder="' '" />
                <label class="labelInput" :for="props.forId">{{ props.label }}</label>
            </div>
        </div>
    </div>
</template>
<style scoped>
@import '@/assets/sass/inputs/_inputsProps.scss';

.input-error {
 border: 1px solid red;
}
</style>