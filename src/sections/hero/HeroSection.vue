<template>
  <section
    id="top"
    class="relative overflow-hidden pt-24"
    aria-label="Hero"
  >
    <div class="absolute inset-0 hero-bg" aria-hidden="true" />

    <div class="absolute left-1/2 top-[-220px] h-[520px] w-[920px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-3xl" aria-hidden="true" />
    <div class="absolute right-[-220px] top-[120px] h-[420px] w-[620px] rounded-full bg-cyan-400/10 blur-3xl" aria-hidden="true" />

    <div class="mx-auto max-w-7xl px-4 pb-18 sm:px-6 lg:px-8">
      <div class="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <Badge className="animate-[shimmer_2.6s_ease-in-out_infinite]" >
            Cinematic AI Creator Studio
          </Badge>

          <h1 class="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl" data-reveal>
            Create Viral AI Videos
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-white to-cyan-200">
              In Minutes
            </span>
          </h1>

          <p class="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg" data-reveal>
            Generate cinematic video edits, thumbnails, voiceovers, and captions from a single prompt—then publish or sell
            your assets in the NovaReel marketplace.
          </p>

          <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center" data-reveal>
            <PrimaryButton href="#create" class="w-full sm:w-auto" aria-label="Start Creating">
              Start Creating
            </PrimaryButton>
            <PrimaryButton href="#demo" variant="secondary" class="w-full sm:w-auto" aria-label="Watch Demo">
              Watch Demo
            </PrimaryButton>
          </div>

          <dl class="mt-10 grid gap-4 sm:grid-cols-3" data-reveal>
            <div class="rounded-2xl border border-white/10 bg-white/3 p-4">
              <dt class="text-xs font-semibold tracking-[0.18em] text-white/55">GENERATE</dt>
              <dd class="mt-2 text-2xl font-extrabold text-white">60s</dd>
            </div>
            <div class="rounded-2xl border border-white/10 bg-white/3 p-4">
              <dt class="text-xs font-semibold tracking-[0.18em] text-white/55">EDIT</dt>
              <dd class="mt-2 text-2xl font-extrabold text-white">Timeline</dd>
            </div>
            <div class="rounded-2xl border border-white/10 bg-white/3 p-4">
              <dt class="text-xs font-semibold tracking-[0.18em] text-white/55">PUBLISH</dt>
              <dd class="mt-2 text-2xl font-extrabold text-white">Marketplace</dd>
            </div>
          </dl>
        </div>

        <div class="relative" data-reveal>
          <div class="relative rounded-[2rem] border border-white/10 bg-black/25 p-2 shadow-[0_0_0_1px_rgba(124,58,237,.12),0_40px_140px_rgba(0,0,0,.55)] backdrop-blur">
            <div class="rounded-[1.6rem] bg-[#0B0B0B] p-4">
              <div class="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/3 px-4 py-3">
                <div class="flex items-center gap-3">
                  <span class="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                    <span class="text-sm font-bold">AI</span>
                  </span>
                  <div>
                    <div class="text-sm font-semibold text-white">Editor • NovaReel</div>
                    <div class="text-xs text-white/60">Prompt → Scenes → Render</div>
                  </div>
                </div>
                <div class="hidden items-center gap-2 md:flex">
                  <span class="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80">
                    Live preview
                  </span>
                </div>
              </div>

              <div class="mt-4 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                <div class="rounded-2xl border border-white/10 bg-white/3 p-4">
                  <div class="flex items-center justify-between">
                    <div>
                      <div class="text-sm font-semibold text-white">Timeline</div>
                      <div class="text-xs text-white/60">3 scenes • 00:38</div>
                      <div class="mt-2 flex items-center gap-2">
                        <span class="h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_18px_rgba(124,58,237,.55)]" />
                        <span class="h-2 w-2 rounded-full bg-cyan-300/90" />
                        <span class="h-2 w-2 rounded-full bg-white/40" />
                      </div>
                    </div>
                  </div>

                  <div class="mt-4 space-y-3">
                    <div class="rounded-xl border border-white/10 bg-black/30 p-3">
                      <div class="flex items-center justify-between">
                        <div class="text-xs font-semibold text-white/70">Scene 01</div>
                        <div class="text-xs font-semibold text-purple-200">Intro Glow</div>
                      </div>
                      <div class="mt-2 h-10 rounded-lg bg-[linear-gradient(90deg,rgba(124,58,237,.35),rgba(6,182,212,.25))] p-[1px]">
                        <div class="h-full rounded-md bg-black/40" />
                      </div>
                    </div>

                    <div class="rounded-xl border border-white/10 bg-black/30 p-3">
                      <div class="flex items-center justify-between">
                        <div class="text-xs font-semibold text-white/70">Scene 02</div>
                        <div class="text-xs font-semibold text-cyan-200">B-Roll Pulse</div>
                      </div>
                      <div class="mt-2 h-10 rounded-lg bg-[linear-gradient(90deg,rgba(6,182,212,.30),rgba(124,58,237,.18))] p-[1px]">
                        <div class="h-full rounded-md bg-black/40" />
                      </div>
                    </div>

                    <div class="rounded-xl border border-white/10 bg-black/30 p-3">
                      <div class="flex items-center justify-between">
                        <div class="text-xs font-semibold text-white/70">Scene 03</div>
                        <div class="text-xs font-semibold text-white/80">Caption Pop</div>
                      </div>
                      <div class="mt-2 h-10 rounded-lg bg-[linear-gradient(90deg,rgba(255,255,255,.10),rgba(124,58,237,.18))] p-[1px]">
                        <div class="h-full rounded-md bg-black/40" />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="rounded-2xl border border-white/10 bg-white/3 p-4">
                  <div class="flex items-center justify-between">
                    <div>
                      <div class="text-sm font-semibold text-white">AI Assistant</div>
                      <div class="text-xs text-white/60">Refine style + pacing</div>
                    </div>
                    <div class="rounded-xl border border-white/10 bg-white/5 p-2">
                      <IconSpark class="h-5 w-5 text-purple-300" />
                    </div>
                  </div>

                  <label class="mt-4 block text-xs font-semibold text-white/60" for="prompt">
                    Prompt
                  </label>
                  <div class="relative mt-2">
                    <textarea
                      id="prompt"
                      class="min-h-[86px] w-full resize-none rounded-xl border border-white/10 bg-black/30 px-3 py-3 text-sm text-white/90 outline-none placeholder:text-white/35 focus:border-purple-400/40 focus:ring-2 focus:ring-purple-400/20"
                      aria-label="AI prompt input"
                      v-model="prompt"
                    />

                  </div>

                  <div class="mt-4 grid gap-2 sm:grid-cols-2">
                    <button
                      type="button"
                      class="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white/80 transition hover:bg-white/8 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/60"
                      @click="tone='Cinematic'"
                    >
                      Cinematic
                    </button>
                    <button
                      type="button"
                      class="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white/80 transition hover:bg-white/8 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/60"
                      @click="tone='Sleek Commerce'"
                    >
                      Commerce
                    </button>
                    <button
                      type="button"
                      class="sm:col-span-2 rounded-xl bg-gradient-to-b from-purple-500/35 to-cyan-400/15 border border-purple-400/30 px-3 py-2 text-xs font-bold text-white shadow-[0_0_48px_rgba(124,58,237,.18)] transition hover:-translate-y-0.5 hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/60"
                      @click="render()"
                    >
                      Generate Scenes
                    </button>
                  </div>

                  <div class="mt-4 rounded-xl border border-white/10 bg-black/30 p-3">
                    <div class="flex items-center justify-between">
                      <div class="text-xs font-semibold text-white/70">Status</div>
                      <div class="text-xs font-semibold text-purple-200">{{ status }}</div>
                    </div>
                    <div class="mt-2 h-2 overflow-hidden rounded-full bg-white/10" aria-hidden="true">
                      <div class="h-full w-1/2 rounded-full bg-gradient-to-r from-purple-400 to-cyan-300 animate-[shimmer_2.6s_ease-in-out_infinite]" />
                    </div>
                    <div class="mt-2 text-xs text-white/60">
                      Tone: <span class="text-white/80 font-semibold">{{ tone }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-4 grid grid-cols-2 gap-3">
                <div class="rounded-xl border border-white/10 bg-black/20 p-3">
                  <div class="text-[11px] font-semibold tracking-[0.12em] text-white/55">RETENTION</div>
                  <div class="mt-2 text-xl font-extrabold text-white">+23%</div>
                </div>

                <div class="rounded-xl border border-white/10 bg-black/20 p-3">
                  <div class="text-[11px] font-semibold tracking-[0.12em] text-white/55">CTR</div>
                  <div class="mt-2 text-xl font-extrabold text-white">3.8%</div>
                </div>
              </div>

              <div class="mt-4 flex items-center justify-center gap-3 text-xs text-white/50">
                <span class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-3 py-1">
                  <span class="h-1.5 w-1.5 rounded-full bg-purple-300" aria-hidden="true" /> No templates
                </span>
                <span class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-3 py-1">
                  <span class="h-1.5 w-1.5 rounded-full bg-cyan-300" aria-hidden="true" /> Real editing timeline
                </span>
              </div>
            </div>

            <div class="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup lang="ts">
import { ref } from 'vue'
import Badge from '../../components/common/Badge.vue'
import PrimaryButton from '../../components/common/PrimaryButton.vue'
import IconSpark from '../../components/ui/IconSpark.vue'

const prompt = ref('neon city b-roll, cinematic sound design, fast cuts, crisp captions')
const tone = ref('Cinematic')
const status = ref('Ready')

function render() {
  status.value = 'Rendering…'
  window.setTimeout(() => {
    status.value = 'Scenes generated'
  }, 1100)
}
</script>

<style scoped>
.hero-bg {
  background-image: var(--tw-bg-hero);
}
</style>
