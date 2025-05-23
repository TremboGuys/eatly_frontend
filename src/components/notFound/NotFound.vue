<script setup>
import { ref } from 'vue';
const svgContent = ref(`
<svg width="100%" height="400" viewBox="145 75 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">

  <circle cx="300" cy="200" r="80" fill="#969A45"/>
  <circle cx="300" cy="200" r="60" fill="#FFFFFF"/>
  <rect x="250" y="200" width="6" height="40" rx="3" fill="#C1976B"/>
  <rect x="344" y="200" width="6" height="40" rx="3" fill="#C1976B"/>
  <rect x="255" y="200" width="2" height="35" rx="1" fill="#8D6E53"/>
  <rect x="349" y="200" width="2" height="35" rx="1" fill="#8D6E53"/>

  <circle cx="290" cy="190" r="5" fill="#555"/>
  <circle cx="310" cy="190" r="5" fill="#555"/>
  <path d="M290 215 Q300 205 310 215" stroke="#555" stroke-width="3" fill="none"/>

  <text x="300" y="280" text-anchor="middle" fill="#444801" font-family="Arial, sans-serif" font-size="26" font-weight="bold">
    Nada por aqui...
  </text>
  <text x="300" y="310" text-anchor="middle" fill="#606325" font-family="Arial, sans-serif" font-size="16">
    Não encontramos nenhum restaurante
  </text>
  <text x="300" y="330" text-anchor="middle" fill="#606325" font-family="Arial, sans-serif" font-size="16">
    com esse nome ou categoria
  </text>
</svg>
`)
</script>
<template>
    <div v-html="svgContent" class="container">
        
    </div>
</template>
<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #616161;
}
</style>