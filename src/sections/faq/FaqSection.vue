<template>
  <section id="faq" class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="faq-title">
    <SectionHeading
      eyebrow="FAQ"
      title="Questions creators ask before they ship"
      subtitle="Fast answers, no fluff—built for teams creating at speed."
    />

    <div class="mt-10 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
      <div class="space-y-4">
        <AccordionItem
          v-for="item in faqs"
          :key="item.q"
          :question="item.q"
          :defaultOpen="item.open"
        >
          <p class="text-white/70">
            {{ item.a }}
          </p>
        </AccordionItem>
      </div>

      <aside class="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_0_1px_rgba(124,58,237,.08)]">
        <div class="text-sm font-semibold text-white">Need help choosing a plan?</div>
        <p class="mt-3 text-sm leading-relaxed text-white/65">
          Tell us your target output and we’ll recommend the right workflow—generation, scene composition, voice, and marketplace publishing.
        </p>
        <div class="mt-5 rounded-2xl border border-white/10 bg-black/30 p-4">
          <div class="text-xs font-semibold tracking-[0.18em] text-white/45">RECOMMENDATION</div>
          <div class="mt-2 text-lg font-extrabold text-white">Pro</div>
          <div class="mt-1 text-sm text-white/60">Best balance for weekly creators</div>
        </div>

        <a
          href="#pricing"
          class="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-b from-purple-500/35 to-cyan-400/15 border border-purple-400/30 px-4 py-3 font-bold text-white shadow-[0_0_48px_rgba(124,58,237,.18)] transition hover:-translate-y-0.5 hover:bg-gradient-to-b from-purple-500/45 to-cyan-400/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/60"
        >
          View Pricing
        </a>
      </aside>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeading from '../../components/common/SectionHeading.vue'
import AccordionItem from '../../components/common/AccordionItem.vue'

const faqs = [
  {
    q: 'Can I use NovaReel for YouTube and client work?',
    a: 'Yes. NovaReel is designed for creators and studios—generate videos, create consistent captions and voice, then publish to your workflow or marketplace assets.',
    open: true,
  },
  {
    q: 'Do I need editing experience?',
    a: 'No. The timeline editor mirrors professional workflows, but AI assists with scene composition, pacing, and caption readability.',
    open: false,
  },
  {
    q: 'How does the marketplace work?',
    a: 'Publish LUT packs, presets, overlays, motion graphics, sound packs, and cinematic templates. Revenue and analytics are tracked inside your dashboard.',
    open: false,
  },
  {
    q: 'Is the motion and rendering optimized for performance?',
    a: 'NovaReel emphasizes fast iteration: responsive previews, subtle interactions, and performance-conscious animations with reduced-motion support.',
    open: false,
  },
]
</script>

