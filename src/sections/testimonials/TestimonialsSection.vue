<template>
  <section id="testimonials" class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="testimonials-title">
    <SectionHeading
      eyebrow="TESTIMONIALS"
      title="Creators ship faster—with better output"
      subtitle="Realistic workflow stories from YouTubers, editors, and AI creators."
    />

    <div class="mt-10 grid gap-5 lg:grid-cols-3">
      <TestimonialCard
        v-for="t in testimonials"
        :key="t.name"
        :name="t.name"
        :role="t.role"
        :quote="t.quote"
        :stats="t.stats"
        :avatarSeed="t.avatarSeed"
      />
    </div>

    <div class="mt-10 flex flex-col items-start justify-between gap-4 rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6 lg:flex-row lg:items-center">
      <div>
        <div class="text-sm font-semibold text-white/85">Built for speed, tuned for quality</div>
        <div class="mt-1 text-sm text-white/60">A premium creator experience with AI assistance that feels controllable.</div>
      </div>
      <div class="flex gap-3">
        <a
          href="#pricing"
          class="inline-flex items-center justify-center rounded-xl bg-gradient-to-b from-purple-500/35 to-cyan-400/15 border border-purple-400/30 px-5 py-3 text-sm font-bold text-white shadow-[0_0_48px_rgba(124,58,237,.18)] transition hover:-translate-y-0.5 hover:bg-gradient-to-b from-purple-500/45 to-cyan-400/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/60"
        >
          See Pricing
        </a>
        <a
          href="#marketplace"
          class="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/85 transition hover:bg-white/8 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/60"
        >
          Explore Marketplace
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeading from '../../components/common/SectionHeading.vue'
import TestimonialCard from './parts/TestimonialCard.vue'

const testimonials = [
  {
    name: 'Aisha Rahman',
    role: 'YouTuber • Cinematic Tech',
    quote:
      'NovaReel turned my rough prompts into edits that look like a studio cut. The captions are clean, the pacing is sharp, and I publish every week now.',
    stats: { views: '1.2M', lift: '+34%' },
    avatarSeed: 'aisha',
  },
  {
    name: 'Marco Silva',
    role: 'Editor • Motion & Sound',
    quote:
      'The timeline workflow feels real. I can direct the assistant, then tweak the scenes. Marketplace assets plug in instantly—no hunting.',
    stats: { views: '480K', lift: '+21%' },
    avatarSeed: 'marco',
  },
  {
    name: 'Nina Okafor',
    role: 'AI Creator • Shorts Lab',
    quote:
      'The prompt-to-scene loop is fast and surprisingly controllable. I ship variations for different audiences without burning hours on setup.',
    stats: { views: '760K', lift: '+29%' },
    avatarSeed: 'nina',
  },
]
</script>

