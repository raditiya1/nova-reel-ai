<template>
  <article
    class="group relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-5 shadow-[0_0_0_1px_rgba(124,58,237,.06)] transition will-change-transform hover:-translate-y-1 hover:bg-white/[0.06]"
    role="button"
    tabindex="0"
    :aria-label="`Apply ${title}`"
    @click="$emit('apply')"
    @keydown.enter.prevent="$emit('apply')"
  >
    <div
      aria-hidden="true"
      class="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
    >
      <div
        class="absolute -left-10 -top-10 h-44 w-44 rounded-full blur-2xl"
        :class="`bg-gradient-to-br ${glow}`"
      />
      <div class="absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_0%,rgba(124,58,237,.35),transparent_55%)]" />
    </div>

    <div class="relative z-10">
      <div class="flex items-start justify-between gap-4">
        <div>
          <div class="text-xs font-semibold tracking-[0.18em] text-white/45">{{ type }}</div>
          <h3 class="mt-2 text-lg font-semibold text-white">{{ title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-white/65">{{ tag }} • Cinematic preview card</p>
        </div>
        <div class="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white/70">
          Apply
        </div>
      </div>

      <div class="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-black/25">
        <div class="relative h-28">
          <div
            class="absolute inset-0 opacity-90"
            :class="`bg-[linear-gradient(135deg,rgba(124,58,237,.35),rgba(6,182,212,.20))]`"
          />
          <div
            class="absolute left-0 top-0 h-full w-full animate-[shimmer_2.6s_ease-in-out_infinite] opacity-0 group-hover:opacity-100"
          >
            <div class="h-full w-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,.18),transparent)]" />
          </div>
          <div class="absolute bottom-3 left-3 text-[11px] font-semibold text-white/70">
            Preview • Hover glow
          </div>
        </div>
      </div>

      <div class="mt-4 flex items-center justify-between text-xs text-white/50">
        <span class="inline-flex items-center gap-2">
          <span class="h-1.5 w-1.5 rounded-full bg-cyan-300" aria-hidden="true" />
          Optimized for exports
        </span>
        <span class="font-semibold text-white/70">AI-ready</span>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
defineEmits<{ (e: 'apply'): void }>()

defineProps<{ title: string; type: string; tag: string; glow: string }>()
</script>

