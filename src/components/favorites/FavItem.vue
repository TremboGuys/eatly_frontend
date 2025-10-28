<script setup>
import "@fortawesome/fontawesome-free/css/all.css";
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useToastStore } from "@/stores";
import FavoriteService from "@/services/favorite";

const isFavorite = ref(true);
const showMenu = ref(false);
const dropdownRef = ref(null);

const props = defineProps({
  product: {
    type: Object,
  },
});

const toastStore = useToastStore();

const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};

const closeMenu = () => {
  showMenu.value = false;
};

const handleClickOutside = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    closeMenu();
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});

// const toggleFavorite = async () => {
//   try {
//     if (isFavorite.value) {
//       await FavoriteService.deleteFavorite(props.product.id);
//       isFavorite.value = false;
//       toastStore.notify("Removido dos favoritos", "info");
//     } else {
//       await FavoriteService.createFavorite(props.product.id);
//       isFavorite.value = true;
//       toastStore.notify("Adicionado aos favoritos", "success");
//     }
//   } catch (error) {
//     toastStore.notify("Erro ao alterar favoritos", "error");
//   } finally {
//     closeMenu();
//   }
// };
</script>

<template>
  <div class="listItem">
    <router-link
      :to="`/product/${props.product.id}`"
      class="listItemLink"
    >
      <div class="left-side">
        <div class="logo">
          <img :src="props.product.url_file" alt="" />
        </div>
        <div class="info">
          <p class="restaurant-name">{{ props.product.name }}</p>
          <p class="restaurant-description">{{ props.product.description }}</p>
          <div class="restaurant-logo">
          </div>
        </div>
        
      </div>
    </router-link>
    
    <div ref="dropdownRef" class="select">
      <button class="dots" @click.stop="toggleMenu">
        <i class="fa fa-circle"></i>
        <i class="fa fa-circle"></i>
        <i class="fa fa-circle"></i>
      </button>
      
      <i style="font-size: 1.3em; color: gray ;" class="fa fa-circle"></i>

      <div v-if="showMenu" class="overlay" @click="closeMenu"></div>

      <ul v-if="showMenu" class="dropdown-menu">
        <li>Adicionar aos favoritos <i class="fa-regular fa-heart"></i></li>
        <li>Compartilhar <i class="fa-solid fa-share"></i></li>
        <li class="AddOrRemFav" @click="toggleFavorite">
          {{ isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos" }}
          <span><i class="fa-sharp fa-solid fa-trash"></i></span>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
@import "@/assets/sass/favorites/_favItem.scss";
</style>
