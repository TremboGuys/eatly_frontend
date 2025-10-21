<script setup>
import ProfileList from './ProfileList.vue';

const list = [
  { icon: 'fa-solid fa-pencil', text: 'Editar perfil' },
  { icon: 'fa-solid fa-user-shield', text: 'Privacidade e segurança' },
  { icon: 'fa-solid fa-bell', text: 'Notificações' },
  { icon: 'fa-solid fa-language', text: 'Idioma' },
  { icon: 'fa-solid fa-circle-question', text: 'Ajuda' },
  { icon: 'fa-solid fa-right-from-bracket', text: 'Sair da conta' },
];
</script>

<template>
  <ProfileList
    v-for="item in list"
    :key="item.text"
    :icon="item.icon"
    :text="item.text"
  />
</template>