<template>
  <section id="pricing" class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="pricing-title">
    <SectionHeading
      eyebrow="PRICING"
      title="Plans for creators at every stage"
      subtitle="Start in minutes. Upgrade when your channel hits new momentum."
    />

    <div class="mt-10 grid gap-5 lg:grid-cols-3">
      <PricingCard
        title="Starter"
        price="$19"
        period="/month"
        desc="For creators testing AI-powered production."
        :high="false"
        :features="starter"
      />

      <PricingCard
        title="Pro"
        price="$39"
        period="/month"
        desc="For consistent weekly publishing and marketplace sales."
        :high="true"
        :features="pro"
      />

      <PricingCard
        title="Studio"
        price="$79"
        period="/month"
        desc="For teams producing cinematic content at scale."
        :high="false"
        :features="studio"
      />
    </div>

    <div class="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm text-white/65 lg:flex lg:items-center lg:justify-between">
      <div>
        <span class="font-semibold text-white">Tip:</span> Teams can start on Pro and add seats as needed.
      </div>
      <div class="mt-4 flex gap-3 lg:mt-0">
        <a
          class="rounded-xl border border-white/10 bg-white/5 px-4 py-2 font-semibold text-white/85 transition hover:bg-white/8 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/60"
          href="#create"
        >
          Start Creating
        </a>
        <a
          class="rounded-xl bg-gradient-to-b from-purple-500/35 to-cyan-400/15 border border-purple-400/30 px-4 py-2 font-bold text-white shadow-[0_0_48px_rgba(124,58,237,.18)] transition hover:-translate-y-0.5 hover:bg-gradient-to-b from-purple-500/45 to-cyan-400/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/60"
          href="#ai-tools"
        >
          Explore AI Tools
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeading from '../../components/common/SectionHeading.vue'
import PricingCard from './parts/PricingCard.vue'

const starter = [
  'AI video generation (60s/month)',
  'Timeline editor + captions',
  '10 LUT pack downloads',
  'Basic marketplace uploads',
]

const pro = [
  'AI video generation (300s/month)',
  'Advanced scene composer + voice',
  'Marketplace publishing + revenue stats',
  'Pro templates + cinematic presets',
]

const studio = [
  'AI video generation (900s/month)',
  'Team workspace + shared projects',
  'Priority rendering + QA tools',
  'Custom voice + scene rules',
]
</script>

