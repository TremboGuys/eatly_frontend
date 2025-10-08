<template>
  <div class="page">
    <button class="action-btn" @click="openConfirm">🎟️ Resgatar Cupom</button>

    <NotificationToast
      :visible="showConfirm"
      title="Confirmar resgate"
      message="Você realmente deseja resgatar este cupom?"
      type="confirm"
      @confirm="handleConfirm"
      @cancel="handleCancel"
      @close="handleCancel"
    />

    <NotificationToast
      :visible="showSuccess"
      title="🎉 Cupom resgatado!"
      message="Seu cupom foi resgatado com sucesso."
      type="success"
      :timeout="2500"
      @close="closeSuccess"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import NotificationToast from "./components/Notification.vue";

const showConfirm = ref(false);
const showSuccess = ref(false);

function openConfirm() {
  showConfirm.value = true;
}

function handleCancel() {
  showConfirm.value = false;
}

function handleConfirm() {
  showConfirm.value = false;

  setTimeout(() => {
    showSuccess.value = true;

    setTimeout(() => { showSuccess.value = false; }, 3000);
  }, 250);
}

function closeSuccess() {
  showSuccess.value = false;
}
</script>

<style scoped>
.page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg,#f8fafc,#eef2ff);
}

.action-btn {
  background: linear-gradient(90deg,#2563eb,#3b82f6);
  color: white;
  padding: 12px 18px;
  border-radius: 12px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(37,99,235,0.18);
}
.action-btn:hover { transform: translateY(-2px); }
</style>
