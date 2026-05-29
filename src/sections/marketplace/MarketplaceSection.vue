<template>
  <section id="marketplace" class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="marketplace-title">
    <SectionHeading
      eyebrow="MARKETPLACE"
      title="Premade cinematic assets, ready to publish"
      subtitle="Browse LUT packs, presets, transitions, overlays, motion graphics, and sound packs—then apply inside your editor."
    />

    <div class="mt-10 flex flex-col gap-6 lg:flex-row lg:items-start">
      <div class="w-full lg:w-[280px]">
        <div class="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-4 shadow-[0_0_0_1px_rgba(124,58,237,.06)]">
          <div class="flex items-center justify-between">
            <div class="text-sm font-semibold text-white/85">Categories</div>
            <span class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/60">
              {{ activeCount }}
            </span>
          </div>

          <div class="mt-4 flex flex-wrap gap-2">
            <button
              v-for="c in categories"
              :key="c"
              class="rounded-full border px-3 py-2 text-xs font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/60"
              :class="activeCategory === c ? activePill(c) : inactivePill()"
              @click="activeCategory = c"
              type="button"
              :aria-pressed="activeCategory === c"
            >
              {{ c }}
            </button>
          </div>

          <div class="mt-5 rounded-2xl border border-white/10 bg-black/25 p-4">
            <div class="text-xs font-semibold tracking-[0.18em] text-white/45">FILTERS</div>
            <div class="mt-3 space-y-3">
              <LabeledToggle label="Trending" v-model="filters.trending" />
              <LabeledToggle label="New" v-model="filters.new" />
              <LabeledToggle label="Creator Pick" v-model="filters.pick" />
            </div>
          </div>
        </div>
      </div>

      <div class="flex-1">
        <div class="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-4 shadow-[0_0_0_1px_rgba(124,58,237,.06)]">
          <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div class="text-sm font-semibold text-white/85">
                Showing: <span class="text-white">{{ activeCategory }}</span>
              </div>
              <div class="mt-1 text-xs text-white/60">Hover cards for cinematic previews. Click to “apply” the preset (mock).</div>
            </div>
            <div class="flex items-center gap-2">
              <span class="inline-flex items-center rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-xs font-semibold text-white/65">
                <span class="mr-2 h-1.5 w-1.5 rounded-full bg-cyan-300" aria-hidden="true" />
                Live previews
              </span>
            </div>
          </div>

          <div class="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            <AssetCard
              v-for="a in visibleAssets"
              :key="a.id"
              :title="a.title"
              :type="a.type"
              :tag="a.tag"
              :glow="a.glow"
              @apply="selected = a.id"
            />
          </div>

          <div v-if="selected" class="mt-6 rounded-2xl border border-white/10 bg-black/25 p-4">
            <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div class="text-sm font-semibold text-white">Applied:</div>
                <div class="mt-1 text-sm text-white/65">{{ selectedAsset?.title }} — mock preview inserted into your timeline.</div>
              </div>
              <button
                type="button"
                class="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80 transition hover:bg-white/8 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/60"
                @click="selected = null"
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import SectionHeading from '../../components/common/SectionHeading.vue'
import AssetCard from './parts/AssetCard.vue'
import LabeledToggle from './parts/LabeledToggle.vue'

const categories = ['LUT Packs', 'Cinematic Presets', 'Transitions', 'Overlays', 'Motion Graphics', 'Sound Packs']

const filters = ref({ trending: true, new: false, pick: true })
const activeCategory = ref(categories[0])

const selected = ref<number | null>(null)

const assets = [
  { id: 1, title: 'Neon Bloom LUT Pack', type: 'LUT', tag: 'Vibrant', category: 'LUT Packs', glow: 'from-purple-500/35 to-cyan-400/15' },
  { id: 2, title: 'Noir Contrast Presets', type: 'Preset', tag: 'Cinematic', category: 'Cinematic Presets', glow: 'from-cyan-400/35 to-purple-500/15' },
  { id: 3, title: 'Glitch Cut Transitions', type: 'Transition', tag: 'Fast Cuts', category: 'Transitions', glow: 'from-purple-500/35 to-cyan-400/10' },
  { id: 4, title: 'Prism Overlay Kit', type: 'Overlay', tag: 'Lens Flare', category: 'Overlays', glow: 'from-cyan-400/30 to-purple-500/12' },
  { id: 5, title: 'Kinetic Titles Pack', type: 'Motion', tag: 'Creator Pick', category: 'Motion Graphics', glow: 'from-purple-500/35 to-cyan-400/15' },
  { id: 6, title: 'City Ambience Sound Pack', type: 'Sound', tag: 'Trending', category: 'Sound Packs', glow: 'from-cyan-400/35 to-purple-500/10' },
]

const activeCount = computed(() => {
  let n = 0
  if (filters.value.trending) n++
  if (filters.value.new) n++
  if (filters.value.pick) n++
  return n
})

function activePill(_c: string) {
  return 'border-purple-400/30 bg-gradient-to-b from-purple-500/25 to-cyan-400/10 text-white shadow-[0_0_48px_rgba(124,58,237,.12)]'
}
function inactivePill() {
  return 'border-white/10 bg-white/5 text-white/70 hover:bg-white/8'
}

const visibleAssets = computed(() => {
  let list = assets.filter((a) => a.category === activeCategory.value)

  if (filters.value.trending) list = list.filter((a) => a.tag === 'Trending' || a.tag === 'Vibrant' || a.tag === 'Cinematic')
  if (filters.value.new) list = list.filter((a) => a.tag === 'New' || a.tag === 'Fast Cuts')
  if (filters.value.pick) list = list.filter((a) => a.tag === 'Creator Pick' || a.tag === 'Vibrant' || a.tag === 'Cinematic')

  return list
})

const selectedAsset = computed(() => assets.find((a) => a.id === selected.value) ?? null)
</script>

