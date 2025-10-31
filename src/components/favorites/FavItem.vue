<script setup>
import "@fortawesome/fontawesome-free/css/all.css";
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useFavoriteStore, useToastStore } from "@/stores";
import FavoriteService from "@/services/favorite";

const favoriteStore = useFavoriteStore();
const showMenu = ref(false);
const dropdownRef = ref(null);

const props = defineProps({
  favorite: {
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

const toggleFavorite = async () => {
  try {
    await FavoriteService.deleteFavorite(props.favorite.id);
    toastStore.notify("Removido dos favoritos", "success");
  } catch (error) {
    toastStore.notify("Erro ao alterar favoritos", "error");
  } finally {
    closeMenu();
  }
};
</script>

<template>
  <div class="listItem">
    <router-link
      :to="`restaurant/${props.favorite.product.restaurant}/product/${props.favorite.product.id}`"
      class="listItemLink"
    >
      <div class="left-side">
        <div class="logo">
          <img :src="props.favorite.product.url_file" alt="" />
        </div>
        <div class="info">
          <p class="restaurant-name">{{ props.favorite.product.name }}</p>
          <p class="restaurant-description">{{ props.favorite.product.description }}</p>
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
        <li>Compartilhar <i class="fa-solid fa-share"></i></li>
        <li class="AddOrRemFav" @click="favoriteStore.deleteFavorite(props.favorite.id)">
          Remover dos favoritos
          <span><i class="fa-sharp fa-solid fa-trash"></i></span>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
@import "@/assets/sass/favorites/_favItem.scss";
</style>
