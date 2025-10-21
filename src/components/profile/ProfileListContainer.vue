<script setup>
import ProfileList from './ProfileList.vue';

const list = [
  { icon: 'fa-solid fa-pencil', text: 'Editar perfil' },
  { icon: 'fa-solid fa-receipt', text: 'Pedidos' },
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