<template>
  <section id="features" class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="features-title">
    <SectionHeading
      eyebrow="AI CAPABILITIES"
      title="Generate the full creative pipeline"
      subtitle="Turn prompts into cinematic videos, thumbnails, voice, scripts, scenes, and captions—then publish in one flow."
    />

    <div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <FeatureCard
        v-for="f in features"
        :key="f.title"
        :title="f.title"
        :desc="f.desc"
        :icon="f.icon"
        :glow="f.glow"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeading from '../../components/common/SectionHeading.vue'
import FeatureCard from './parts/FeatureCard.vue'
import { Sparkles, Waves, Mic, PencilLine, Layers, Captions } from './parts/icons'

const features = [
  {
    title: 'AI Video Generator',
    desc: 'Generate cinematic footage from a single prompt with style controls and pacing.',
    icon: Sparkles,
    glow: 'from-purple-500/40 to-cyan-400/15',
  },
  {
    title: 'AI Thumbnail Generator',
    desc: 'Create high-converting thumbnails that match your video’s vibe.',
    icon: Waves,
    glow: 'from-cyan-400/35 to-purple-500/15',
  },
  {
    title: 'AI Voice Generator',
    desc: 'Natural voices for narration, ads, and YouTube—consistent tone across edits.',
    icon: Mic,
    glow: 'from-purple-500/35 to-cyan-400/10',
  },
  {
    title: 'AI Script Writer',
    desc: 'Write tight scripts with hooks, structure, and creator-friendly pacing.',
    icon: PencilLine,
    glow: 'from-cyan-400/30 to-purple-500/10',
  },
  {
    title: 'AI Scene Composer',
    desc: 'Auto-block scenes with cinematography cues and seamless transitions.',
    icon: Layers,
    glow: 'from-purple-500/30 to-cyan-400/12',
  },
  {
    title: 'AI Caption Generator',
    desc: 'Clean captions with timing + readability built for mobile watching.',
    icon: Captions,
    glow: 'from-cyan-400/30 to-purple-500/10',
  },
]
</script>

