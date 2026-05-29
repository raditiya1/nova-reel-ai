<template>
  <section id="ai-tools" class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="ai-title">
    <SectionHeading
      eyebrow="AI TOOL INTERACTION"
      title="Generate a cinematic concept from a single prompt"
      subtitle="Tune style, intensity, voice, and output settings—then preview a realistic generation loop."
    />

    <div class="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
      <div class="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-5 shadow-[0_0_0_1px_rgba(124,58,237,.08)]">
        <div class="flex items-center justify-between gap-4">
          <div>
            <div class="text-sm font-semibold text-white">Prompt Builder</div>
            <div class="text-xs text-white/60">Cinematic defaults with creator-level controls</div>
          </div>
          <span class="inline-flex items-center rounded-full border border-white/10 bg-black/30 px-3 py-2 text-xs font-semibold text-white/70">
            <span class="mr-2 h-1.5 w-1.5 rounded-full bg-purple-300" aria-hidden="true" />
            Premium AI
          </span>
        </div>

        <div class="mt-4">
          <label for="ai-prompt" class="text-xs font-semibold text-white/60">Your prompt</label>
          <textarea
            id="ai-prompt"
            v-model="prompt"
            class="mt-2 min-h-[110px] w-full resize-none rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/90 outline-none placeholder:text-white/35 focus:border-purple-400/40 focus:ring-2 focus:ring-purple-400/20"
            placeholder="Describe the scene, mood, subject, camera, and pacing…"
            @input="status='Ready'"
          />
        </div>

        <div class="mt-4 grid gap-3 sm:grid-cols-2">
          <div class="rounded-2xl border border-white/10 bg-black/30 p-4">
            <div class="text-xs font-semibold text-white/60">Style</div>
            <div class="mt-3 flex flex-wrap gap-2">
              <button
                v-for="s in styles"
                :key="s"
                type="button"
                class="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white/80 transition hover:bg-white/8 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/60"
                :class="style===s ? 'bg-gradient-to-b from-purple-500/35 to-cyan-400/15 border-purple-400/30' : ''"
                @click="style=s; status='Ready'"
              >
                {{ s }}
              </button>
            </div>
          </div>

          <div class="rounded-2xl border border-white/10 bg-black/30 p-4">
            <div class="text-xs font-semibold text-white/60">Output</div>
            <div class="mt-3 space-y-3">
              <label class="flex items-center justify-between gap-3">
                <span class="text-xs font-semibold text-white/70">Duration</span>
                <select
                  v-model="duration"
                  class="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white/85 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/60"
                  aria-label="Duration"
                >
                  <option value="15s">15s</option>
                  <option value="30s">30s</option>
                  <option value="60s">60s</option>
                </select>
              </label>

              <label class="flex items-center justify-between gap-3">
                <span class="text-xs font-semibold text-white/70">Captions</span>
                <input
                  type="checkbox"
                  class="h-4 w-4 rounded border-white/20 bg-black/30"
                  v-model="captions"
                />
              </label>

              <label class="flex items-center justify-between gap-3">
                <span class="text-xs font-semibold text-white/70">Voice</span>
                <input
                  type="checkbox"
                  class="h-4 w-4 rounded border-white/20 bg-black/30"
                  v-model="voice"
                />
              </label>
            </div>
          </div>
        </div>

        <div class="mt-4 rounded-2xl border border-white/10 bg-black/30 p-4">
          <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div class="text-xs font-semibold text-white/60">Generation status</div>
              <div class="mt-1 text-sm font-bold text-white">{{ status }}</div>
            </div>
            <div class="flex items-center gap-3">
              <button
                type="button"
                class="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/85 transition hover:bg-white/8 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/60"
                @click="reset"
              >
                Reset
              </button>
              <button
                type="button"
                class="rounded-xl bg-gradient-to-b from-purple-500/35 to-cyan-400/15 border border-purple-400/30 px-5 py-3 text-sm font-bold text-white shadow-[0_0_48px_rgba(124,58,237,.18)] transition hover:-translate-y-0.5 hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/60"
                @click="generate"
              >
                Generate
              </button>
            </div>
          </div>

          <div class="mt-4 h-2 overflow-hidden rounded-full bg-white/10" aria-hidden="true">
            <div
              class="h-full w-1/3 bg-gradient-to-r from-purple-400 to-cyan-300 animate-[shimmer_2.6s_ease-in-out_infinite]"
              :class="status==='Rendering…' ? 'opacity-100' : 'opacity-60'"
            />
          </div>
        </div>
      </div>

      <div class="relative rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-5 shadow-[0_0_0_1px_rgba(124,58,237,.08)]">
        <div class="flex items-center justify-between">
          <div>
            <div class="text-sm font-semibold text-white">Generated Preview</div>
            <div class="text-xs text-white/60">Mock preview with cinematic cards</div>
          </div>
          <span class="rounded-full border border-white/10 bg-black/30 px-3 py-2 text-xs font-semibold text-white/70">{{ duration }}</span>
        </div>

        <div class="mt-4 grid gap-4 sm:grid-cols-2">
          <PreviewCard label="Scene A" tone="Cinematic" :glow="glowA" />
          <PreviewCard label="Scene B" tone="Neon" :glow="glowB" />
          <PreviewCard label="Captions" tone="Readable" :glow="glowC" :hidden="!captions" />
          <PreviewCard label="Voice" tone="Natural" :glow="glowD" :hidden="!voice" />
        </div>

        <div class="mt-4 rounded-2xl border border-white/10 bg-black/30 p-4">
          <div class="flex items-center justify-between">
            <div class="text-xs font-semibold tracking-[0.18em] text-white/45">AI SETTINGS</div>
            <div class="text-xs font-semibold text-white/70">{{ style }}</div>
          </div>
          <div class="mt-3 flex flex-wrap gap-2">
            <span class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/75">Scene Composer</span>
            <span class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/75">Caption Timing</span>
            <span class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/75">Color Grade</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import SectionHeading from '../../components/common/SectionHeading.vue'

type PreviewTone = 'Cinematic' | 'Neon' | 'Readable' | 'Natural'

import PreviewCard from './parts/PreviewCard.vue'

const prompt = ref('Neon city streets at night, cinematic wide shot, fast cuts, crisp captions')
const status = ref('Ready')
const duration = ref<'15s' | '30s' | '60s'>('30s')
const captions = ref(true)
const voice = ref(true)
const style = ref('Cinematic')
const styles = ['Cinematic', 'Sleek Commerce', 'Noir', 'Documentary', 'Cyberpunk']

const reset = () => {
  prompt.value = 'Neon city streets at night, cinematic wide shot, fast cuts, crisp captions'
  status.value = 'Ready'
  duration.value = '30s'
  captions.value = true
  voice.value = true
  style.value = 'Cinematic'
}

function generate() {
  status.value = 'Rendering…'
  window.setTimeout(() => {
    status.value = 'Complete — preview updated'
  }, 1200)
}

const glowA = computed(() => (style.value === 'Noir' ? 'from-cyan-400/35 to-purple-500/15' : 'from-purple-500/35 to-cyan-400/15'))
const glowB = computed(() => (style.value === 'Cyberpunk' ? 'from-cyan-400/35 to-purple-500/15' : 'from-purple-500/30 to-cyan-400/12'))
const glowC = computed(() => 'from-purple-500/35 to-cyan-400/15')
const glowD = computed(() => 'from-cyan-400/35 to-purple-500/15')
</script>

