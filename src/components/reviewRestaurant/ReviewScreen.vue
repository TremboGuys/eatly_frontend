<script setup>
import { ref } from "vue";

const props = defineProps({
  url: { type: String, default: "/restaurant" },
  restaurant: { type: Object, default: () => ({ name: "Hamburgueria - Magia Urbana", rating: 4.7,}) }
});

const activeTab = ref("avaliacoes");
const stars = ref(4);
const recommend = ref(true);
const impressed = ref(["Atendimento"]);
const details = ref({ selfService: null, value: null, fast: true });
const comment = ref("");

function toggleImpressed(item) {
  const i = impressed.value.indexOf(item);
  i > -1 ? impressed.value.splice(i, 1) : impressed.value.push(item);
}

function submitReview() {
  const payload = { stars: stars.value, recommend: recommend.value, impressed: impressed.value, details: details.value, comment: comment.value };
  console.log("review:", payload);
}
</script>

<template>
  <div class="review-screen">
    <header class="header">
      <router-link :to="props.url" class="back-link" title="Voltar">
        <i class="fa-solid fa-arrow-left"></i>
      </router-link>
      <div class="head-meta">
        <h1 class="rest-name">{{ props.restaurant.name }}</h1>
        <div class="rating-row">
          <span class="rating">{{ props.restaurant.rating }}</span>
          <span class="stars">
            <i v-for="i in 5" :key="i" class="star" :class="{ on: i <= Math.round(stars) }">★</i>
          </span>
        </div>
      </div>
    </header>
    <section class="section">
      <h2 class="section-title">Qualidade do serviço</h2>

      <article class="card summary-card">
        <div class="levels">
          <div class="level" :class="{ active: true }">
            <div class="icon">⭐</div>
            <span class="label">Nível 1</span>
            <small>Avaliações excelentes</small>
          </div>
          <div class="level">
            <div class="icon">💬</div>
            <span class="label">Nível 2</span>
            <small>Avaliações crescentes</small>
          </div>
          <div class="level">
            <div class="icon">🙂</div>
            <span class="label">Nível 3</span>
            <small>Bom desempenho</small>
          </div>
          <div class="level current">
            <div class="icon">📊</div>
            <span class="label">Nível 4</span>
            <small>Mantendo padrões</small>
          </div>
          <div class="level">
            <div class="icon">📄</div>
            <span class="label">Nível 5</span>
            <small>Poucas avaliações</small>
          </div>
        </div>
      </article>

      <form class="review-form" @submit.prevent="submitReview">
        <div class="row stars-row">
          <label class="field-label">Sua avaliação</label>
          <div class="stars-input">
            <span
              v-for="i in 5"
              :key="i"
              class="big-star"
              :class="{ active: i <= stars }"
              @click="stars = i"
              >★</span>
          </div>
        </div>

        <label class="rec-label">
          <input type="checkbox" v-model="recommend" />
          Recomendar para amigos
        </label>

        <div class="impressed-section">
          <label class="field-label">O que te impressionou?</label>
          <div class="impressed-btns">
            <button
              v-for="item in ['Comida', 'Atendimento', 'Ambiente', 'Limpeza']"
              :key="item"
              :class="{ selected: impressed.includes(item) }"
              type="button"
              @click="toggleImpressed(item)"
            >{{ item }}</button>
          </div>
        </div>

        <div class="more-section">
          <label class="field-label">Perguntas rápidas</label>

          <div class="yn-row">
            <small>Self service?</small>
            <input type="radio" v-model="details.selfService" :value="true" id="ss-yes" />
            <label for="ss-yes" class="seg">Sim</label>
            <input type="radio" v-model="details.selfService" :value="false" id="ss-no" />
            <label for="ss-no" class="seg">Não</label>
          </div>

          <div class="yn-row">
            <small>Bom custo-benefício?</small>
            <input type="radio" v-model="details.value" :value="true" id="v-yes" />
            <label for="v-yes" class="seg">Sim</label>
            <input type="radio" v-model="details.value" :value="false" id="v-no" />
            <label for="v-no" class="seg">Não</label>
          </div>

          <div class="yn-row">
            <small>Atendimento rápido?</small>
            <input type="radio" v-model="details.fast" :value="true" id="f-yes" />
            <label for="f-yes" class="seg">Sim</label>
            <input type="radio" v-model="details.fast" :value="false" id="f-no" />
            <label for="f-no" class="seg">Não</label>
          </div>
        </div>

        <textarea v-model="comment" rows="2" maxlength="240" placeholder="Comentário breve (opcional)" />
        <button type="submit" class="submit-btn">Salvar avaliação</button>
      </form>
    </section>
  </div>
</template>
<style scoped>
@import '@/assets/sass/reviewRestaurant/_reviewScreen.scss';
</style>