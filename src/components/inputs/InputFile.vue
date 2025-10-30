<script setup>
import { ref, watch } from 'vue';
import { useProfileStore } from '@/stores';

const props = defineProps({
    invisible: Boolean,
    field: String,
    label: String,
    forId: String,
})

const profileStore = useProfileStore();
const fileSelected = ref(false);
const inputFile = ref(null);

const emit = defineEmits(['changeDataUser'])

function handleFileChange(event) {
  const file = event.target.files[0]
  fileSelected.value = file

  emit('changeDataUser', {field: props.field, value: fileSelected.value})
};

watch(() => profileStore.editImage, (newValue) => {
    if (newValue) {
        inputFile.value.click();
        profileStore.editImage = false;
    }
});
</script>
<template>
    <div class="container-file" :style="props.invisible ? 'display: none;' : ''">
        <div class="input">
            <div class="form-group file-upload-wrapper">
                <label class="labelInput" :for="forId">{{ label }}</label>
                <input type="file" :id="props.forId" hidden @change="handleFileChange" ref="inputFile" />
                <label :for="props.forId" class="custom-file-label">
                    <span class="icon-upload">⬆️</span>
                    <span class="upload-text">Fazer upload do arquivo</span>
                    <span v-if="fileSelected" class="icon-check">✅</span>
                </label>
            </div>
        </div>
    </div>
</template>
<style scoped>
@import '@/assets/sass/inputs/_inputFile.scss';
</style>