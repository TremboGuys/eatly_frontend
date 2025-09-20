<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const props = defineProps({
  options: {
    type: Array,
    required: true
  },
  modelValue: {
    type: [String, Number, null],
    default: null
  },
  placeholder: {
    type: String,
    default: "Selecione"
  },
  select: {
    type: String,
    default: null
  }
});

const emit = defineEmits(["update:modelValue"]);

const open = ref(false);
const dropdownRef = ref(null);

function toggleDropdown() {
  open.value = !open.value;
}

function selectOption(option) {
  emit("update:modelValue", option.value);
  open.value = false;
}

function isSelected(option) {
  return option.value === props.modelValue;
}

function handleClickOutside(event) {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    open.value = false;
  }
}

onMounted(() => {
  window.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  window.removeEventListener("click", handleClickOutside);
});
</script>

<template>
  <div class="custom-select" ref="dropdownRef">
    <div class="select-box" @click="toggleDropdown">
      <span>
        {{ props.options.find(o => o.value === props.modelValue)?.label || placeholder }}
      </span>
      <span class="arrow" :class="{ open: open }">&#9662;</span>
    </div>

    <ul v-show="open" class="options-list">
      <li
        v-for="option in props.options"
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