<template>
  <article class="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_0_1px_rgba(124,58,237,.08)] transition hover:-translate-y-1 hover:bg-white/[0.05]">
    <div class="absolute -left-14 -top-16 h-44 w-44 rounded-full bg-gradient-to-br from-purple-500/25 to-cyan-400/10 blur-2xl" aria-hidden="true" />

    <div class="relative">
      <div class="flex items-start justify-between gap-4">
        <div class="flex items-center gap-3">
          <div class="relative">
            <div class="h-12 w-12 overflow-hidden rounded-2xl border border-white/10 bg-black/30">
              <div class="h-full w-full bg-[radial-gradient(12px_circle_at_30%_30%,rgba(124,58,237,.9),transparent_60%),radial-gradient(14px_circle_at_70%_70%,rgba(6,182,212,.7),transparent_60%)]" />
            </div>
            <span class="absolute -right-1 -bottom-1 inline-flex h-4 w-4 items-center justify-center rounded-full border border-white/10 bg-black/40 text-[10px] font-bold text-white">
              {{ initials }}
            </span>
          </div>

          <div>
            <div class="text-sm font-extrabold text-white">{{ name }}</div>
            <div class="text-xs font-semibold text-white/60">{{ role }}</div>
          </div>
        </div>

        <span class="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[11px] font-semibold text-white/70">
          {{ stats.lift }} engagement
        </span>
      </div>

      <p class="mt-5 text-sm leading-relaxed text-white/70">
        “{{ quote }}”
      </p>

      <div class="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-black/25 px-4 py-3">
        <div>
          <div class="text-[11px] font-semibold tracking-[0.18em] text-white/45">VIEWS</div>
          <div class="mt-1 text-lg font-extrabold text-white">{{ stats.views }}</div>
        </div>
        <div class="text-right">
          <div class="text-[11px] font-semibold tracking-[0.18em] text-white/45">LIFT</div>
          <div class="mt-1 text-lg font-extrabold text-cyan-200">{{ stats.lift }}</div>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  name: string
  role: string
  quote: string
  stats: { views: string; lift: string }
  avatarSeed: string
}>()

const initials = computed(() => {
  const parts = props.name.split(' ').filter(Boolean)
  const a = parts[0]?.[0] ?? 'N'
  const b = parts[1]?.[0] ?? ''
  return (a + b).toUpperCase()
})
</script>

