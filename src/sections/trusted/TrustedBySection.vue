<template>
  <section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="trusted">
    <div class="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
      <div>
        <p id="trusted" class="text-xs font-semibold tracking-[0.18em] text-cyan-300/80">TRUSTED BY CREATORS</p>
        <h2 class="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl">
          Built for the creator economy.
        </h2>
      </div>
      <p class="max-w-md text-sm leading-relaxed text-white/65">
        From YouTubers to filmmakers—NovaReel helps teams ship cinematic content faster with AI-powered tools.
      </p>
    </div>

    <div class="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6" data-reveal>
      <LogoCell name="Artlist" />
      <LogoCell name="MotionArray" />
      <LogoCell name="Epidemic" />
      <LogoCell name="Envato" />
      <LogoCell name="Linear" />
      <LogoCell name="Vercel" />
    </div>
  </section>
</template>

<script setup lang="ts">
import LogoCell from './parts/LogoCell.vue'
</script>

