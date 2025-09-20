<script setup>
import { ref, watch } from 'vue';
import { ItemsMenu } from '@/components';
const itemsMenuRef = ref(null);
const props = defineProps({
  'modelValue': Number
});
const emit = defineEmits(['update:modelValue']);
watch(() => props.modelValue, (val) => {
  if (val !== undefined) {
  }
});

function scrollToCategory(index) {
  if (itemsMenuRef.value && itemsMenuRef.value.scrollToCategory) {
    itemsMenuRef.value.scrollToCategory(index);
  }
}
defineExpose({ scrollToCategory })
</script>
<template>
    <div class="container">
        <div class="items">
            <div class="ItemsMenu">
                <ItemsMenu ref="itemsMenuRef" v-model:activeIndex="props.modelValue" @update:activeIndex="val => emit('update:modelValue', val)"/>
            </div>
        </div>
    </div>
</template>

<style scoped>
.ItemsMenu {
  margin-bottom: 40px;
}
</style>