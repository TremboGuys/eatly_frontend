<script setup>
const props = defineProps({
  selected: String
})
const emit = defineEmits(["selectMethod"])
</script>

<template>
  <div class="container">

    <button 
      @click="emit('selectMethod', 'credito')"
      :class="{ active: props.selected === 'credito' }"
      class="btn"
    >
      <img src="@/assets/img/mastercard.png" class="img"> Cartão de Crédito
      <input
        type="radio"
        :checked="props.selected === 'credito'"
        @change="emit('selectMethod', 'credito')"
      />
    </button>

    <button 
      @click="emit('selectMethod', 'debito')"
      :class="{ active: props.selected === 'debito' }"
      class="btn"
    >
      <img src="@/assets/img/mastercard.png" class="img"> Cartão de Débito
      <input
        type="radio"
        :checked="props.selected === 'debito'"
        @change="emit('selectMethod', 'debito')"
      />
    </button>

    <button 
      @click="emit('selectMethod', 'pix')"
      :class="{ active: props.selected === 'pix' }"
      class="btn"
    >
      <img src="@/assets/img/pix.png" class="img-pix"> Pix
      <input
        type="radio"
        :checked="props.selected === 'pix'"
        @change="emit('selectMethod', 'pix')"
      />
    </button>

  </div>
</template>

<style scoped>
@import "@/assets/sass/payment/_selectOption.scss";
</style>