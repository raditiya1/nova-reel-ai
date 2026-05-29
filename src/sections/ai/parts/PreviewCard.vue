<template>
  <div
    v-if="!hidden"
    class="relative overflow-hidden rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-4 shadow-[0_0_0_1px_rgba(124,58,237,.08)] transition hover:-translate-y-0.5 hover:bg-white/[0.05]"
  >
    <div class="pointer-events-none absolute -left-8 -top-8 h-28 w-28 rounded-full blur-2xl opacity-70" :class="glowClass" />
    <div class="relative">
      <div class="text-xs font-semibold tracking-[0.18em] text-white/45">{{ label }}</div>
      <div class="mt-2 text-sm font-bold text-white">{{ tone }}</div>
      <div class="mt-3 h-28 rounded-2xl border border-white/10 bg-black/30">
        <div class="h-full w-full bg-[linear-gradient(135deg,rgba(124,58,237,.35),rgba(6,182,212,.20))] opacity-80" />
        <div class="mt-3 grid grid-cols-3 gap-2 p-3">
          <div class="h-2 rounded-full bg-white/20" />
          <div class="h-2 rounded-full bg-white/20" />
          <div class="h-2 rounded-full bg-white/20" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  label: string
  tone: string
  glow: string
  hidden?: boolean
}>()

const glowClass = props.glow
</script>

