<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  options: {
    type: Array,
    required: true
  },
  modelValue: [String, Number]
});

const emit = defineEmits(['update:modelValue']);

const open = ref(false);

function toggleDropdown() {
  open.value = !open.value;
}

function selectOption(option) {
  emit('update:modelValue', option.value);
  open.value = false;
}

function isSelected(option) {
  return option.value === props.modelValue;
}

// fechar dropdown ao clicar fora
function handleClickOutside(event) {
  if (!event.target.closest('.custom-select')) {
    open.value = false;
  }
}

if (typeof window !== 'undefined') {
  window.addEventListener('click', handleClickOutside);
}
</script>

<template>
  <div class="custom-select">
    <div class="select-box" @click.stop="toggleDropdown">
      <span>{{ options.find(o => o.value === modelValue)?.label || 'Selecione' }}</span>
      <span class="arrow" :class="{ open: open }">&#9662;</span>
    </div>
    <ul v-show="open" class="options-list">
      <li 
        v-for="option in options" 
        :key="option.value" 
        @click="selectOption(option)"
        :class="{ selected: isSelected(option) }"
      >
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>
<style scoped>
@import "@/assets/sass/registerRestaurant/_customSelect.scss";
</style>