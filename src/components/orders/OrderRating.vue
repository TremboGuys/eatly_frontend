<script setup>
import { ref, toRef, watch } from "vue";
import ButtonSubmit from "../buttons/ButtonSubmit.vue";

const props = defineProps({
  modelValue: { type: Number, default: 0 },
  max: { type: Number, default: 5 },
  readonly: { type: Boolean, default: false },
  ariaLabel: { type: String, default: "Avaliação por estrelas" },
});

const emit = defineEmits(["update:modelValue", "change"]);

const max = toRef(props, "max");
const readonly = toRef(props, "readonly");

// valor interno da nota selecionada
const rating = ref(props.modelValue);

// hover temporário (efeito visual)
const hoverValue = ref(null);

// controla exibição do textarea
const showTextarea = ref(false);

watch(
  () => props.modelValue,
  (v) => (rating.value = v)
);

function setHover(n) {
  if (readonly.value) return;
  hoverValue.value = n;
}

function clearHover() {
  hoverValue.value = null;
}

function setRating(n) {
  if (readonly.value) return;
  rating.value = n; // atualiza internamente
  emit("update:modelValue", n);
  emit("change", n);
  showTextarea.value = true;
}

function starClass(n) {
  const filled = (hoverValue.value ?? rating.value) >= n;
  return filled ? "fa-solid fa-star" : "fa-regular fa-star";
}

// navegação via teclado
function focusPrev(event) {
  const btns = Array.from(
    event.currentTarget.parentElement.querySelectorAll(".star-btn")
  );
  const idx = btns.indexOf(event.currentTarget);
  const prev = idx > 0 ? btns[idx - 1] : btns[btns.length - 1];
  prev.focus();
}

function focusNext(event) {
  const btns = Array.from(
    event.currentTarget.parentElement.querySelectorAll(".star-btn")
  );
  const idx = btns.indexOf(event.currentTarget);
  const next = idx < btns.length - 1 ? btns[idx + 1] : btns[0];
  next.focus();
}

</script>

<template>
  <div class="ratingContainer">
    <div
      class="star-rating"
      role="radiogroup"
      :aria-label="ariaLabel"
      @mouseleave="clearHover"
    >
      <button
        v-for="n in max"
        :key="n"
        type="button"
        class="star-btn"
        :class="{
          filled: (hoverValue ?? rating) >= n,
          readonly: readonly,
        }"
        :aria-checked="rating === n"
        role="radio"
        :tabindex="readonly ? -1 : n === Math.max(1, rating) ? 0 : -1"
        @click="setRating(n)"
        @mouseenter="setHover(n)"
        @focus="setHover(n)"
        @blur="clearHover"
        @keydown.space.prevent="setRating(n)"
        @keydown.enter.prevent="setRating(n)"
        @keydown.left.prevent="focusPrev($event)"
        @keydown.right.prevent="focusNext($event)"
        :title="`${n} de ${max}`"
      >
        <i :class="starClass(n)"></i>
      </button>
    </div>

    <div v-if="showTextarea" class="textareaContainer">
      <textarea
        cols="40"
        rows="5"
        placeholder="O produto me pareceu..."
        maxlength="500"
        ></textarea>
      <button type="submit" class="send-button">Enviar</button>
    </div>
  </div>  
</template>

<style scoped>
@import "@/assets/sass/order/_orderRating.scss";
</style>
