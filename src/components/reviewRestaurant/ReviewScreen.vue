<script setup>
import { ref } from "vue";

const props = defineProps({
  restaurant: {
    type: Object,
    default: () => ({
      name: "Magia Urbana - Hamburgueria",
      rating: 4.5,
      category: "Lanches e Hambúrgueres",
      deliveryTime: "40-50 min",
      deliveryPrice: "Grátis",
    }),
  },
});

const overallStars = ref(0);
const tasteStars = ref(0);
const deliveryStars = ref(0);
const serviceStars = ref(0);
const comment = ref("");

function setStars(target, n) {
  if (target === "overall") overallStars.value = n;
  if (target === "taste") tasteStars.value = n;
  if (target === "delivery") deliveryStars.value = n;
  if (target === "service") serviceStars.value = n;
}

function submitReview() {
  const review = {
    restaurant: props.restaurant.name,
    overall: overallStars.value,
    taste: tasteStars.value,
    delivery: deliveryStars.value,
    service: serviceStars.value,
    comment: comment.value,
  };
  console.log("Avaliação enviada:", review);
}
</script>

<template>
  <div class="container" role="form" aria-label="Formulário de avaliação do restaurante">
    <header class="header">
      <router-link to="/restaurants" class="header__back" aria-label="Voltar para restaurantes">
        <i class="fa-solid fa-arrow-left" aria-hidden="true"></i>
      </router-link>

      <div class="header__info">
        <h1 class="header__title">{{ restaurant.name }}</h1>
        <p class="header__category">{{ restaurant.category }}</p>
        <div class="header__meta" aria-label="Informações de entrega">
          <span>⏱ {{ restaurant.deliveryTime }}</span>
          <span class="header__dot" aria-hidden="true">•</span>
          <span class="header__price">{{ restaurant.deliveryPrice }}</span>
        </div>
      </div>
    </header>

    <section class="rating" aria-labelledby="overall-label">
      <h2 id="overall-label" class="rating__title">Avaliação geral</h2>

      <div class="rating__stars" role="radiogroup" aria-label="Dar nota geral de 1 a 5">
        <button v-for="i in 5" :key="'overall-' + i" type="button" class="star" :class="{ active: i <= overallStars }"
          :aria-pressed="i <= overallStars" :aria-label="`Dar ${i} ${i === 1 ? 'estrela' : 'estrelas'}`"
          @click="setStars('overall', i)" @keydown.enter.prevent="setStars('overall', i)"
          @keydown.space.prevent="setStars('overall', i)">
          ★
        </button>
      </div>

      <p class="rating__hint">
        Quanto mais estrelas, melhor foi sua experiência com o restaurante.
      </p>
    </section>
    <section class="details">
      <div class="detail-card">
        <h3 class="detail-card__title">Comida</h3>
        <div class="detail-card__stars" role="radiogroup" aria-label="Nota da comida de 1 a 5">
          <button v-for="i in 5" :key="'taste-' + i" type="button" class="star star--sm"
            :class="{ active: i <= tasteStars }" :aria-pressed="i <= tasteStars"
            :aria-label="`Dar ${i} ${i === 1 ? 'estrela' : 'estrelas'}`" @click="setStars('taste', i)"
            @keydown.enter.prevent="setStars('taste', i)" @keydown.space.prevent="setStars('taste', i)">
            ★
          </button>
        </div>
      </div>
      <div class="detail-card">
        <h3 class="detail-card__title">Entrega</h3>
        <div class="detail-card__stars" role="radiogroup" aria-label="Nota da entrega de 1 a 5">
          <button v-for="i in 5" :key="'delivery-' + i" type="button" class="star star--sm"
            :class="{ active: i <= deliveryStars }" :aria-pressed="i <= deliveryStars"
            :aria-label="`Dar ${i} ${i === 1 ? 'estrela' : 'estrelas'}`" @click="setStars('delivery', i)"
            @keydown.enter.prevent="setStars('delivery', i)" @keydown.space.prevent="setStars('delivery', i)">
            ★
          </button>
        </div>
      </div>
      <div class="detail-card">
        <h3 class="detail-card__title">Atendimento</h3>
        <div class="detail-card__stars" role="radiogroup" aria-label="Nota do atendimento de 1 a 5">
          <button v-for="i in 5" :key="'service-' + i" type="button" class="star star--sm"
            :class="{ active: i <= serviceStars }" :aria-pressed="i <= serviceStars"
            :aria-label="`Dar ${i} ${i === 1 ? 'estrela' : 'estrelas'}`" @click="setStars('service', i)"
            @keydown.enter.prevent="setStars('service', i)" @keydown.space.prevent="setStars('service', i)">
            ★
          </button>
        </div>
      </div>
    </section>
    <section class="comment">
      <h3 class="comment__title">Deixe seu comentário</h3>
      <label class="sr-only" for="comment">Comentário</label>
      <textarea id="comment" v-model="comment" placeholder="Conte um pouco sobre sua experiência..." rows="4"
        aria-label="Campo para comentário"></textarea>
    </section>
    <footer class="footer">
      <button class="footer__submit" type="button" @click="submitReview">
        Enviar avaliação
      </button>
    </footer>
  </div>
</template>
<style scoped>
@import "@/assets/sass/reviewRestaurant/_reviewScreen.scss";
</style>
