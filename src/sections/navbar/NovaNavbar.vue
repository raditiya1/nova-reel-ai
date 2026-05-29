<template>
  <nav
    class="fixed left-0 right-0 top-0 z-50"
    :class="scrolled ? 'bg-black/50 backdrop-blur-xl border-b border-white/10' : 'bg-transparent border-b border-transparent'"
  >
    <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
      <a class="flex items-center gap-3" href="#top" aria-label="NovaReel Home">
        <span class="relative inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-white/5 border border-white/10 shadow-[0_0_0_1px_rgba(124,58,237,.18)]">
          <span class="absolute inset-0 rounded-2xl bg-[radial-gradient(12px_circle_at_30%_30%,rgba(124,58,237,.8),transparent_60%),radial-gradient(14px_circle_at_70%_70%,rgba(6,182,212,.65),transparent_60%)]" />
          <span class="relative text-sm font-extrabold">NR</span>
        </span>
        <span class="flex flex-col leading-tight">
          <span class="text-sm font-extrabold tracking-tight text-white">NovaReel</span>
          <span class="text-xs text-white/55">AI Video Marketplace</span>
        </span>
      </a>

      <div class="hidden items-center gap-8 md:flex">
        <ul class="flex items-center gap-7 text-sm font-semibold text-white/75">
          <li v-for="item in navItems" :key="item.label">
            <a
              class="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/60"
              :href="item.href"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>
      </div>

      <div class="hidden items-center gap-3 md:flex">
        <a
          class="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/85 shadow-sm transition hover:bg-white/8 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/60"
          href="#pricing"
        >
          Try AI Studio
        </a>
        <a
          class="rounded-xl bg-gradient-to-b from-purple-500/35 to-cyan-400/15 border border-purple-400/30 px-4 py-2 text-sm font-bold text-white shadow-[0_0_48px_rgba(124,58,237,.18)] transition hover:-translate-y-0.5 hover:bg-gradient-to-b from-purple-500/45 to-cyan-400/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/60"
          href="#create"
        >
          Start Creating
        </a>
      </div>

      <button
        class="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-white/85 transition md:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/60"
        :aria-expanded="mobileOpen"
        aria-controls="mobile-menu"
        @click="mobileOpen = !mobileOpen"
      >
        <span class="sr-only">Toggle menu</span>
        <svg v-if="!mobileOpen" class="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
        </svg>
        <svg v-else class="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
        </svg>
      </button>
    </div>

    <div
      id="mobile-menu"
      class="md:hidden"
      v-show="mobileOpen"
    >
      <div class="mx-auto max-w-7xl px-4 pb-4">
        <ul class="grid gap-2 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-3">
          <li v-for="item in navItems" :key="item.label">
            <a
              class="rounded-xl px-3 py-3 text-sm font-semibold text-white/80 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/60"
              :href="item.href"
              @click="mobileOpen = false"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>
        <div class="mt-3 grid grid-cols-2 gap-3">
          <a
            class="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/85 shadow-sm transition hover:bg-white/8 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/60"
            href="#pricing"
            @click="mobileOpen = false"
          >
            Try AI Studio
          </a>
          <a
            class="rounded-xl bg-gradient-to-b from-purple-500/35 to-cyan-400/15 border border-purple-400/30 px-4 py-3 text-sm font-bold text-white shadow-[0_0_48px_rgba(124,58,237,.18)] transition hover:-translate-y-0.5 hover:bg-gradient-to-b from-purple-500/45 to-cyan-400/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/60"
            href="#create"
            @click="mobileOpen = false"
          >
            Start Creating
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'Marketplace', href: '#marketplace' },
  { label: 'AI Tools', href: '#ai-tools' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
]

const scrolled = ref(false)
const mobileOpen = ref(false)

onMounted(() => {
  const onScroll = () => {
    scrolled.value = window.scrollY > 18
  }
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
</script>

