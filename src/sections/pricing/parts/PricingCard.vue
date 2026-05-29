<template>
  <article
    class="relative rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-7 shadow-[0_0_0_1px_rgba(124,58,237,.08)] transition will-change-transform hover:-translate-y-1 hover:bg-white/[0.05]"
    :class="high ? 'border-purple-400/30 bg-[linear-gradient(180deg,rgba(124,58,237,.16),rgba(6,182,212,.06))]' : ''"
  >
    <div v-if="high" class="absolute -top-3 left-7 rounded-full bg-gradient-to-b from-purple-500/35 to-cyan-400/15 border border-purple-400/30 px-4 py-2 text-xs font-bold text-white shadow-[0_0_48px_rgba(124,58,237,.18)]">
      Most Popular
    </div>

    <header>
      <div class="flex items-center justify-between gap-4">
        <h3 class="text-lg font-semibold text-white">{{ title }}</h3>
        <span class="text-xs font-semibold text-white/45">{{ high ? 'Pro workflow' : 'Creator workflow' }}</span>
      </div>

      <div class="mt-5 flex items-end gap-3">
        <div class="text-4xl font-extrabold text-white">{{ price }}</div>
        <div class="pb-1 text-sm font-semibold text-white/60">{{ period }}</div>
      </div>

      <p class="mt-4 text-sm leading-relaxed text-white/65">{{ desc }}</p>
    </header>

    <ul class="mt-6 space-y-3 text-sm">
      <li v-for="item in features" :key="item" class="flex gap-3 text-white/70">
        <span class="mt-0.5 h-6 w-6 flex-none rounded-xl border border-white/10 bg-white/5 grid place-items-center">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-cyan-200" aria-hidden="true">
            <path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
        <span>{{ item }}</span>
      </li>
    </ul>

    <div class="mt-7">
      <a
        :href="high ? '#create' : '#create'"
        class="block w-full rounded-xl border px-5 py-3 text-center font-bold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/60"
        :class="high
          ? 'border-purple-400/30 bg-gradient-to-b from-purple-500/35 to-cyan-400/15 text-white shadow-[0_0_48px_rgba(124,58,237,.18)] hover:-translate-y-0.5 hover:bg-gradient-to-b from-purple-500/45 to-cyan-400/20'
          : 'border-white/10 bg-white/5 text-white/85 hover:bg-white/8'
        "
      >
        {{ high ? 'Start with Pro' : 'Start Starter' }}
      </a>
    </div>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  price: string
  period: string
  desc: string
  high: boolean
  features: string[]
}>()
</script>

