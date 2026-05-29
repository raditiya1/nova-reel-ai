<template>
  <footer class="border-t border-white/10 bg-black/30">
    <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div class="grid gap-10 lg:grid-cols-4">
        <div>
          <div class="flex items-center gap-3">
            <span class="relative inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 border border-white/10">
              <span class="absolute inset-0 rounded-2xl bg-[radial-gradient(12px_circle_at_30%_30%,rgba(124,58,237,.8),transparent_60%),radial-gradient(14px_circle_at_70%_70%,rgba(6,182,212,.65),transparent_60%)]" aria-hidden="true" />
              <span class="relative text-sm font-extrabold">NR</span>
            </span>
            <div>
              <div class="text-sm font-extrabold text-white">NovaReel</div>
              <div class="text-xs text-white/55">AI Video Creator Marketplace</div>
            </div>
          </div>

          <p class="mt-4 text-sm leading-relaxed text-white/65">
            Premium cinematic AI tools for creators—generate, edit, and monetize in one flow.
          </p>
        </div>

        <FooterCol
          title="Product"
          :links="[
            { label: 'Features', href: '#features' },
            { label: 'Marketplace', href: '#marketplace' },
            { label: 'AI Tools', href: '#ai-tools' },
            { label: 'Pricing', href: '#pricing' },
          ]"
        />

        <FooterCol
          title="Creators"
          :links="[
            { label: 'Testimonials', href: '#testimonials' },
            { label: 'FAQ', href: '#faq' },
            { label: 'Dashboard Preview', href: '#dashboard' },
            { label: 'Start Creating', href: '#create' },
          ]"
        />

        <FooterCol
          title="Company"
          :links="[
            { label: 'About', href: '#' },
            { label: 'Careers', href: '#' },
            { label: 'Legal', href: '#' },
            { label: 'Privacy', href: '#' },
          ]"
        />
      </div>

      <div class="mt-10 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <div class="text-sm text-white/55">© {{ new Date().getFullYear() }} NovaReel. All rights reserved.</div>
        <div class="flex items-center gap-3">
          <a class="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white/75 transition hover:bg-white/8 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/60" href="#" aria-label="Twitter">
            X
          </a>
          <a class="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white/75 transition hover:bg-white/8 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/60" href="#" aria-label="GitHub">
            GitHub
          </a>
          <a class="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white/75 transition hover:bg-white/8 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/60" href="#" aria-label="YouTube">
            YouTube
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import FooterCol from './parts/FooterCol.vue'
</script>

