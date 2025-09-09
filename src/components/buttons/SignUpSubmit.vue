<script setup>
import { ref, watch } from 'vue';
import { useRegisterClientComposable } from '@/composables';

const useRegisterClient = useRegisterClientComposable();

const emit = defineEmits(['submitRegister'])

</script>

<template>
    <div class="container">
        <button type="submit" class="send-button" @click="emit('submitRegister')" :class="useRegisterClient.enable.value ? 'disabled' : 'enabled'">Realizar Cadastro</button>
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