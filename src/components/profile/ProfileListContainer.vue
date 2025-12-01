<script setup>
import ProfileList from './ProfileList.vue';

const list = [
  { icon: 'fa-solid fa-pencil', text: 'Editar perfil', link: '/profile/edit' },
  { icon: 'fa-solid fa-lock', text: 'Alterar senha', link: '/profile/changepassword' },
  { icon: 'fa-solid fa-map-marker-alt', text: 'Filial', link: '/location' },
  { icon: 'fa-solid fa-receipt', text: 'Pedidos', link: '/orders' },
  { icon: 'fa-solid fa-ticket', text: 'Cupons', link: '/coupon' },
  { icon: 'fa-solid fa-right-from-bracket', text: 'Sair da conta', link: '/logout' },
];
</script>

<template>
  <ProfileList
    v-for="item in list"
    :key="item.text"
    :icon="item.icon"
    :text="item.text"
    :link="item.link"
  />
</template>