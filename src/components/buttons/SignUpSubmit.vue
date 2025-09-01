<script setup>
import { ref, watch } from 'vue';
import { useClientComposable } from '@/composables';

const useClient = useClientComposable();

const emit = defineEmits(['submitRegister'])

console.log(useClient.enable.value);

// watch(() => useClient.formState, () => {
//   disabled.value = verifyFields();
// }, { deep: true })
</script>

<template>
    <div class="container">
        <button type="submit" class="send-button" :disabled="useClient.enable.value" @click="emit('submitRegister')" :class="useClient.enable.value ? 'disabled' : 'enabled'">Realizar Cadastro</button>
    </div>
</template>

<style scoped>
@import '@/assets/sass/buttons/_sendButton.scss';

.enabled {
  background-color: #444801;
  color: #fff;
}

.disabled {
  background-color: #ecebeb;
  color: #000;
}
</style>