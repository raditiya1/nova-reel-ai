<template>
  <header class="mx-auto max-w-3xl text-center">
    <p
      v-if="eyebrow"
      class="text-xs font-semibold tracking-[0.18em] text-cyan-300/90"
    >
      {{ eyebrow }}
    </p>
    <h2
      class="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl"
    >
      {{ title }}
    </h2>
    <p v-if="subtitle" class="mt-4 text-base leading-relaxed text-white/70">
      {{ subtitle }}
    </p>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  eyebrow?: string;
  title: string;
  subtitle?: string;
}>();
</script>
