<template>
  <teleport to="body">
    <transition name="toast-slide">
      <div v-if="visible" class="toast-root">
        <div class="toast-card" :class="type">
          <div class="toast-header">
            

            <div class="toast-text">
              <h3>{{ title }}</h3>
              <p>{{ message }}</p>
              
            </div>

           
            <button class="toast-close" @click="onClose">✕</button>
          </div>

          <div v-if="type === 'confirm'" class="toast-actions">
            <button class="btn cancel" @click="onCancel">Cancelar</button>
            <button class="btn confirm" @click="onConfirm">Confirmar</button>
          </div>

          <div v-else-if="type === 'success'" class="toast-actions">
            <button class="btn ok" @click="onClose">OK</button>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup>
import { watch, onBeforeUnmount } from "vue";

const props = defineProps({
  visible: Boolean,
  title: String,
  message: String,
  type: { type: String, default: "info" }, // 'confirm' | 'success' | 'info'
  timeout: { type: Number, default: 3000 },
});

const emit = defineEmits(["confirm", "cancel", "close"]);

let timer = null;

watch(
  () => props.visible,
  (val) => {
    clearTimeout(timer);
    if (val && props.type !== "confirm" && props.timeout > 0) {
      timer = setTimeout(() => emit("close"), props.timeout);
    }
  }
);

onBeforeUnmount(() => clearTimeout(timer));

function onConfirm() {
  clearTimeout(timer);
  emit("confirm");
}
function onCancel() {
  clearTimeout(timer);
  emit("cancel");
}
function onClose() {
  clearTimeout(timer);
  emit("close");
}
</script>

<style scoped>
.toast-root {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  width: 95%;
  max-width: 500px;
}

.toast-card {
  background: linear-gradient(145deg, #ffffff, #f5f7fa);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  padding: 16px 18px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  backdrop-filter: blur(10px);
  animation: fadeIn 0.4s ease;
}

.toast-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
}

.toast-icon {
  font-size: 24px;
  flex-shrink: 0;
  opacity: 0.9;
}

.toast-text {
  flex: 1;
}

.toast-text h3 {
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  color: #111827;
}

.toast-text p {
  font-size: 14px;
  color: #4b5563;
  margin: 4px 0 0;
}

.toast-close {
  background: transparent;
  border: none;
  color: #9ca3af;
  font-size: 18px;
  cursor: pointer;
  border-radius: 50%;
  padding: 4px;
  transition: background 0.2s, color 0.2s;
}
.toast-close:hover {
  background: rgba(0, 0, 0, 0.06);
  color: #111827;
}

.toast-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.btn {
  border: none;
  border-radius: 10px;
  font-size: 14px;
  padding: 8px 14px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;
}

.btn.cancel {
  background: #f3f4f6;
  color: #374151;
}
.btn.cancel:hover {
  background: #e5e7eb;
}

.btn.confirm {
  background: linear-gradient(90deg, #2563eb, #3b82f6);
  color: #fff;
  box-shadow: 0 4px 16px rgba(37, 99, 235, 0.25);
}
.btn.confirm:hover {
  transform: translateY(-1px);
  filter: brightness(1.05);
}

.btn.ok {
  background: linear-gradient(90deg, #10b981, #059669);
  color: #fff;
  box-shadow: 0 4px 14px rgba(16, 185, 129, 0.3);
}
.btn.ok:hover {
  transform: translateY(-1px);
  filter: brightness(1.05);
}

.toast-card.confirm {
  border-left: 5px solid #3b82f6;
}
.toast-card.success {
  border-left: 5px solid #10b981;
}
.toast-card.info {
  border-left: 5px solid #6366f1;
}

.toast-slide-enter-active,
.toast-slide-leave-active {
  transition: all 0.35s cubic-bezier(0.2, 0.8, 0.3, 1);
}
.toast-slide-enter-from {
  opacity: 0;
  transform: translateX(-50%) translateY(-20px);
}
.toast-slide-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-20px);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.98);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@media (max-width: 420px) {
  .toast-card {
    padding: 12px;
    border-radius: 12px;
  }
  .toast-text h3 {
    font-size: 14px;
  }
  .toast-text p {
    font-size: 13px;
  }
  .btn {
    font-size: 13px;
    padding: 6px 10px;
  }
}
</style>
