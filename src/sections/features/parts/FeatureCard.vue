<template>
  <article
    class="group relative rounded-[1.45rem] border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_0_1px_rgba(124,58,237,.08)] transition will-change-transform hover:-translate-y-1 hover:bg-white/[0.06]"
    :style="{ backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))` }"
  >
    <div class="pointer-events-none absolute inset-0 rounded-[1.45rem] opacity-0 transition-opacity group-hover:opacity-100">
      <div
        class="absolute -left-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br blur-2xl"
        :class="glow"
      />
    </div>

    <div class="relative flex items-start gap-4">
      <div class="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/30 text-cyan-100 shadow-[0_0_48px_rgba(124,58,237,.12)]">
        <component :is="icon" class="h-6 w-6" />
      </div>
      <div>
        <h3 class="text-lg font-semibold text-white">
          {{ title }}
        </h3>
        <p class="mt-2 text-sm leading-relaxed text-white/65">
          {{ desc }}
        </p>
      </div>
    </div>

    <div class="relative mt-5 flex items-center justify-between gap-4">
      <span class="text-xs font-semibold tracking-[0.18em] text-white/35">AI MODULE</span>
      <span class="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/80 opacity-0 transition-opacity group-hover:opacity-100">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" aria-hidden="true">
          <path d="M8 12h8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
          <path d="M13 7l5 5-5 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </span>
    </div>
  </article>
</template>

<script setup lang="ts">
defineProps<{ title: string; desc: string; icon: any; glow: string }>()
</script>

