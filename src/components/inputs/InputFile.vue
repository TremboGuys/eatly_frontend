<script setup>
import { ref } from 'vue'

const props = defineProps({
  label: String,
  forId: String,
})

const fileSelected = ref(false)

function handleFileChange(event) {
  const file = event.target.files[0]
  fileSelected.value = !!file
}
</script>
<template>
    <div class="container-file">
        <div class="input">
            <div class="form-group file-upload-wrapper">
                <label class="labelInput" :for="forId">{{ label }}</label>
                <input type="file" :id="forId" hidden @change="handleFileChange" />
                <label :for="forId" class="custom-file-label">
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