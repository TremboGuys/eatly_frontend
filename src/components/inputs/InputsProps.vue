<script setup>
import { ref, watch } from 'vue';
import { useClientComposable } from '@/composables';
const props = defineProps({
    type: String,
    field: String,
    forId: String,
    label: String,
    maxlength: String
});

const useClient = useClientComposable();

// const textError = ref(false);

const emit = defineEmits(['changeDataUser']);

watch(() => useClient.formState[props.type], () => {
    textError = useClient.formState[props.type];
});
</script>
<template>
    <div class="container">
        <div class="input">
            <div class="form-group">
                <input :type="type" class="form-control" :maxlength="maxlength" @input="emit('changeDataUser', {field: props.field, value: $event.target.value})" :placeholder="' '" ref="input" :class="textError ? 'input-error' : ''" />
                <label class="labelInput" :for="forId" :style="(textError) ? 'color: red' : ''">{{ label }}</label>
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