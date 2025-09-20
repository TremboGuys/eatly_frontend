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
                <input :type="type" class="form-control" :maxlength="maxlength" @input="emit('changeDataUser', {field: props.field, value: $event.target.value})" :placeholder="' '" ref="input" />
                <label class="labelInput" :for="forId">{{ label }}</label>
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