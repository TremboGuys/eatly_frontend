<script setup>
import { ref, onMounted } from 'vue';
const steps = ref([
    {
        title: 'Criado',
        icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
        completed: true
    },
    {
        title: 'Despachado',
        icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2L11 13"/><path d="M22 2L15 22L11 13L2 9L22 2Z"/></svg>`,
        completed: true
    },
    {
        title: 'Em trânsito',
        icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2V6z"/><path d="M9 4v14"/><path d="M15 6v14"/></svg>`,
        completed: true
    },
    {
        title: 'Saiu para entrega',
        icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13" rx="2" ry="2"/><path d="M16 8h4l3 3v5a2 2 0 0 1-2 2h-5"/><circle cx="5.5" cy="18.5" r="1.5"/><circle cx="18.5" cy="18.5" r="1.5"/></svg>`,
        completed: true
    },
    {
        title: 'Entregue',
        icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11L12 2L21 11V22H3V11Z"/><polyline points="9 22 9 14 15 14 15 22"/></svg>`,
        completed: true
    }
]);
const animatedSteps = ref([]);
onMounted(() => {
    let i = 0;
    const completedSteps = steps.value.filter(step => step.completed);
    const interval = setInterval(() => {
        if (i >= completedSteps.length) {
            clearInterval(interval);
            return;
        }
        animatedSteps.value.push(completedSteps[i]);
        i++;
    }, 300);
});
</script>
<template>
    <div class="container">
        <div class="steps">
            <div v-for="(step, index) in steps" :key="index" class="step"
                :class="{ completed: animatedSteps.includes(step), last: index === steps.length - 1 }">
                <div class="icon" v-html="step.icon"></div>
                <span class="title">{{ step.title }}</span>
            </div>
        </div>
    </div>
</template>
<style scoped>
@import "@/assets/sass/order/_orderStatusComp.scss";
</style>