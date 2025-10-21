<script setup>
import { ref, computed, nextTick } from 'vue'

const props = defineProps({
    length: { type: Number, default: 6 },
    modelValue: { type: String, default: '' }
})

const emit = defineEmits(['update:modelValue', 'complete'])

const maxLen = Math.min(props.length, 6)
const digits = ref(Array.from({ length: maxLen }, (_, i) => props.modelValue[i] ?? ''))
const inputs = ref([])

const code = computed(() => digits.value.join(''))
const isComplete = computed(() => code.value.length === maxLen && /^\d{6}$/.test(code.value))

function focusIndex(i) {
    const el = inputs.value?.[i]
    if (el) el.focus()
}

function setDigitAt(i, val) {
    digits.value[i] = val
    emit('update:modelValue', code.value)
    if (isComplete.value) emit('complete', code.value)
}

function onInput(e, i) {
    const onlyDigits = e.target.value.replace(/\D/g, '')
    const d = onlyDigits.slice(-1)
    setDigitAt(i, d)
    e.target.value = d
    if (d && i < maxLen - 1) nextTick(() => focusIndex(i + 1))
}

function onKeydown(e, i) {
    const key = e.key
    if (key === 'Backspace') {
        if (digits.value[i]) {
            setDigitAt(i, '')
            return
        }
        if (i > 0) {
            e.preventDefault()
            nextTick(() => focusIndex(i - 1))
        }
    } else if (key === 'ArrowLeft' && i > 0) {
        e.preventDefault()
        nextTick(() => focusIndex(i - 1))
    } else if (key === 'ArrowRight' && i < maxLen - 1) {
        e.preventDefault()
        nextTick(() => focusIndex(i + 1))
    }
}

function onPaste(e, i) {
    const text = (e.clipboardData || window.clipboardData).getData('text') || ''
    const onlyDigits = text.replace(/\D/g, '').slice(0, maxLen)
    if (!onlyDigits) return
    e.preventDefault()
    for (let k = 0; k < onlyDigits.length && i + k < maxLen; k++) {
        digits.value[i + k] = onlyDigits[k]
        if (inputs.value?.[i + k]) inputs.value[i + k].value = onlyDigits[k]
    }
    emit('update:modelValue', code.value)
    if (i + onlyDigits.length < maxLen) {
        nextTick(() => focusIndex(i + onlyDigits.length))
    } else {
        if (isComplete.value) emit('complete', code.value)
        nextTick(() => inputs.value?.[maxLen - 1]?.blur())
    }
}
</script>
<template>
    <h1>Confirmação de e-mail</h1>
    <p class="otp__hint" aria-live="polite">
        Digite o código recebido em seu email.
    </p>
    <div class="otp" role="group" aria-label="Código de verificação">
        <input v-for="(_, i) in digits" :key="i" ref="inputs" type="text" inputmode="numeric" pattern="[0-9]*"
            autocomplete="one-time-code" maxlength="1" class="otp__box" :aria-label="`Dígito ${i + 1} de ${maxLen}`"
            :value="digits[i]" @input="onInput($event, i)" @keydown="onKeydown($event, i)"
            @paste="onPaste($event, i)" />
    </div>
</template>
<style scoped>
@import '@/assets/sass/confirmation/_confirmationEmail.scss';
</style>