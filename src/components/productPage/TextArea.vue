<script setup>
import { ref } from "vue";
const comment = ref("");
function submitReview() {
  const review = {
    comment: comment.value,
  };
  console.log("Review submitted:", review);
}
</script>
<template>
    <div class="container">
        <section class="comment">
            <label class="sr-only" for="comment">Adicionar observações</label>
            <textarea maxlength="200" id="comment" placeholder="Ex: Tirar cebola, tirar maionese..." rows="4"
                aria-label="Campo para comentário"></textarea>
        </section>
    </div>
</template>
<style scoped>
@import '@/assets/sass/productPage/_textArea.scss';
</style>