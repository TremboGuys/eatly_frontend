<script setup>
const props = defineProps({
    type: String,
    field: String,
    forId: String,
    label: String,
    maxlength: String,
    value: String,
    disabled: {
        type: Boolean,
        default: false
    },
    dynamicFocus: {
        type: Boolean,
        default: false
    }
});

const emit = defineEmits(['changeDataUser']);
</script>
<template>
    <div class="container">
        <div class="input">
            <div class="form-group" :style="props.dynamicFocus ? 'box-shadow: 0 0 3px rgba(107, 112, 1, 0.5); border-radius: 5px;' : ''">
            <input :type="props.type" class="form-control" :maxlength="props.maxlength" @input="emit('changeDataUser', {field: props.field, value: $event.target.value})" :placeholder="' '" :disabled="props.disabled" :value="props.value" />
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