<script setup>
const props = defineProps({
  modelValue: { type: [String, Number], default: '' }
})
const emit = defineEmits(['update:modelValue'])

const onInput = (e) => emit('update:modelValue', e.target.value)
const clear = () => emit('update:modelValue', '')
</script>

<template>
  <div :class="['input-container', { active: !!props.modelValue }]">
    <input
      :value="props.modelValue"
      @input="onInput"
      type="text"
      placeholder="O que vai pedir hoje?"
      class="search-input"
    />
    <img class="search-icon" src="../../assets/img/navigationBar/search.svg" alt="">
    <button v-if="props.modelValue" class="cancel" @click="clear">x</button>
  </div>
</template>

<style scoped>
@import "@/assets/sass/searchPage/_searchBar.scss";
</style>