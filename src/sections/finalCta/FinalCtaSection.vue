<template>
  <section id="create" class="relative overflow-hidden">
    <div class="absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_10%,rgba(124,58,237,.28),transparent_55%),radial-gradient(700px_circle_at_80%_20%,rgba(6,182,212,.20),transparent_55%)]" aria-hidden="true" />
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/60" aria-hidden="true" />

    <div class="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <div class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold tracking-[0.18em] text-white/70">
            <span class="h-1.5 w-1.5 rounded-full bg-purple-300 shadow-[0_0_18px_rgba(124,58,237,.55)]" aria-hidden="true" />
            READY TO SHIP
          </div>

          <h2 class="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl" data-reveal>
            Turn your next idea into a cinematic AI video.
          </h2>

          <p class="mt-5 max-w-xl text-base leading-relaxed text-white/70" data-reveal>
            Start generating scenes, refining captions, and exporting ready-to-publish edits. Then sell presets and assets in the marketplace.
          </p>

          <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center" data-reveal>
            <a
              href="#"
              class="inline-flex items-center justify-center rounded-xl bg-gradient-to-b from-purple-500/35 to-cyan-400/15 border border-purple-400/30 px-6 py-3 font-bold text-white shadow-[0_0_48px_rgba(124,58,237,.18)] transition hover:-translate-y-0.5 hover:bg-gradient-to-b from-purple-500/45 to-cyan-400/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/60"
            >
              Start Creating
            </a>
            <a
              href="#features"
              class="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white/85 transition hover:bg-white/8 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/60"
            >
              Explore AI Features
            </a>
          </div>
        </div>

        <div class="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_0_1px_rgba(124,58,237,.08)]" data-reveal>
          <div class="text-sm font-semibold text-white">Preview your workflow</div>
          <p class="mt-2 text-sm text-white/65">Get a feel for prompt → scenes → render and marketplace publishing.</p>

          <div class="mt-5 rounded-2xl border border-white/10 bg-black/30 p-4">
            <div class="flex items-center justify-between">
              <div class="text-xs font-semibold tracking-[0.18em] text-white/45">RENDER STATUS</div>
              <div class="text-xs font-semibold text-cyan-200">Complete</div>
            </div>
            <div class="mt-3 h-2 overflow-hidden rounded-full bg-white/10" aria-hidden="true">
              <div class="h-full w-full rounded-full bg-gradient-to-r from-purple-400 to-cyan-300" />
            </div>
            <div class="mt-3 flex flex-wrap gap-2">
              <span class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/75">Scenes</span>
              <span class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/75">Captions</span>
              <span class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/75">Voice</span>
              <span class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/75">LUTs</span>
            </div>
          </div>

          <a
            href="#dashboard"
            class="mt-6 inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-bold text-white/85 transition hover:bg-white/8 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/60"
          >
            View Dashboard Preview
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

