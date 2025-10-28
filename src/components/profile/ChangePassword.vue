<script setup>
import backButton from './backButton.vue';
import InputsProps from '../inputs/InputsProps.vue';
</script>
<template>
    <div class="editContainer">
        <div class="editArea">
            <div class="top-section">
            <backButton />
            <h2>Alterar senha</h2>
                <div class="inputs">
                            <InputsProps
          type="password"
          field="Senha atual"
          for-id="senha"
          label="Senha atual"
          maxlength="20"
        />
        <InputsProps
          type="password"
          field="Nova senha"
          for-id="senha"
          label="Nova senha"
          maxlength="20"

        />
        <InputsProps
          type="password"
          field="Nova senha"
          for-id="senha"
          label="Confirmar senha"
          maxlength="20"
        />
                </div>
            </div>
    </div>
    <div></div>
        <div class="save-area">
      <button class="save-button" @click="saveProfile">Salvar</button>
    </div>
</div>
</template>

<style scoped>
@import "@/assets/sass/profile/_editProfile.scss";
</style>