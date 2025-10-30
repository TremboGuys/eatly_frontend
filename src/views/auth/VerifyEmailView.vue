<script setup>
import { onMounted } from 'vue';
import { LoadingScreen, PopUpConfirm } from '@/components';
import { useRoute, useRouter } from 'vue-router';
import { useUserStore } from '@/stores';

const route = useRoute();
const router = useRouter();
const userStore = useUserStore();

onMounted(async() => {
    await userStore.verifyEmail({token: route.query.token});
});
</script>

<template>
    <LoadingScreen v-if="userStore.state.loading" />
    <PopUpConfirm title="Conta ativada!" message="Sua conta foi ativada em nossa plataforma 🎉" v-if="userStore.state.popUp" :show="true" @close="router.push('/dashboard'); userStore.state.popUp = false;" />
</template>

<style scoped>
</style>