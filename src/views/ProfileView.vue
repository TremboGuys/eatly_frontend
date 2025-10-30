<script setup>
import { ref, onMounted } from "vue";
import { ProfileContainer } from "@/components";
import { useProfileStore } from "@/stores";

const profileStore = useProfileStore();
const showComponent = ref(false);

onMounted(async () => {
  if (profileStore.profile == null) {
    await profileStore.getProfile();
  }
  showComponent.value = true;
});
</script>

<template>
  <div>
    <ProfileContainer v-if="showComponent" />
  </div>
</template>

<style scoped>
</style>