<template>
  <section id="dashboard" class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="dash-title">
    <SectionHeading
      eyebrow="DASHBOARD PREVIEW"
      title="Your AI video workflow, in one workspace"
      subtitle="Timeline editing, rendering status, AI prompt panels, and analytics—built like a real SaaS product."
    />

    <div class="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
      <div class="relative rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-4 shadow-[0_0_0_1px_rgba(124,58,237,.08)]">
        <div class="absolute -right-6 -top-6 h-44 w-44 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-400/10 blur-2xl" aria-hidden="true" />

        <div class="flex items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <span class="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-black/30">⌁</span>
            <div>
              <div class="text-sm font-semibold text-white">Workspace</div>
              <div class="text-xs text-white/60">NovaReel • Editor Pro</div>
            </div>
          </div>
          <div class="hidden items-center gap-2 sm:flex">
            <span class="rounded-full border border-white/10 bg-black/30 px-3 py-2 text-xs font-semibold text-white/70">AI Draft</span>
            <span class="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white/70">Live Sync</span>
          </div>
        </div>

        <div class="mt-4 grid gap-4">
          <!-- video timeline row -->
          <div class="rounded-[1.5rem] border border-white/10 bg-black/30 p-4">
            <div class="flex items-center justify-between">
              <div>
                <div class="text-sm font-semibold text-white">Current Project</div>
                <div class="text-xs text-white/60">City Glow — 00:45</div>
              </div>
              <div class="flex items-center gap-2">
                <span class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white/70">
                  <span class="h-1.5 w-1.5 rounded-full bg-cyan-300" aria-hidden="true" />
                  Rendering: <span class="text-white">Queued</span>
                </span>
              </div>
            </div>

            <div class="mt-4 grid gap-3 lg:grid-cols-[0.55fr_0.45fr]">
              <div class="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
                <div class="text-xs font-semibold tracking-[0.18em] text-white/45">TIMELINE</div>
                <div class="mt-3 space-y-2">
                  <TimelineRow title="Scene 01" chip="Intro Glow" />
                  <TimelineRow title="Scene 02" chip="B-Roll Pulse" />
                  <TimelineRow title="Scene 03" chip="Caption Pop" />
                </div>
              </div>

              <div class="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
                <div class="text-xs font-semibold tracking-[0.18em] text-white/45">AI PROMPT</div>
                <div class="mt-3">
                  <div class="rounded-xl border border-white/10 bg-black/30 p-3">
                    <div class="text-xs font-semibold text-white/70">Draft Prompt</div>
                    <p class="mt-2 text-xs leading-relaxed text-white/60">
                      Neon city b-roll, cinematic sound design, fast cuts, crisp captions.
                    </p>
                  </div>

                  <div class="mt-3 rounded-xl border border-white/10 bg-black/30 p-3">
                    <div class="text-xs font-semibold text-white/70">Suggested Actions</div>
                    <div class="mt-2 flex flex-wrap gap-2">
                      <span class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold text-white/75">Refine pacing</span>
                      <span class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold text-white/75">Upgrade grade</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- analytics widgets -->
          <div class="grid gap-4 sm:grid-cols-2">
            <WidgetCard title="Retention" value="+23%" sub="Compared to previous render" tone="purple" />
            <WidgetCard title="CTR" value="3.8%" sub="Thumbnail + caption match" tone="cyan" />
          </div>
        </div>
      </div>

      <div class="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-4 shadow-[0_0_0_1px_rgba(124,58,237,.08)]">
        <div class="flex items-center justify-between">
          <div>
            <div class="text-sm font-semibold text-white">Workspace Panels</div>
            <div class="text-xs text-white/60">Product-like depth and hierarchy</div>
          </div>
          <span class="rounded-full border border-white/10 bg-black/30 px-3 py-2 text-xs font-semibold text-white/70">Live</span>
        </div>

        <div class="mt-4 grid gap-4">
          <div class="rounded-2xl border border-white/10 bg-black/30 p-4">
            <div class="text-xs font-semibold tracking-[0.18em] text-white/45">WORKFLOW</div>
            <div class="mt-3 space-y-3">
              <WorkflowStep n="01" title="Prompt → Scenes" />
              <WorkflowStep n="02" title="Scenes → Captions" />
              <WorkflowStep n="03" title="Render → Publish" />
            </div>
          </div>

          <div class="grid gap-4 sm:grid-cols-2">
            <div class="rounded-2xl border border-white/10 bg-black/30 p-4">
              <div class="text-xs font-semibold tracking-[0.18em] text-white/45">RENDER QUEUE</div>
              <div class="mt-3">
                <div class="flex items-center justify-between">
                  <div class="text-sm font-semibold text-white">Night City Edit</div>
                  <span class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/70">Queued</span>
                </div>
                <div class="mt-3 h-2 overflow-hidden rounded-full bg-white/10" aria-hidden="true">
                  <div class="h-full w-2/5 rounded-full bg-gradient-to-r from-purple-400 to-cyan-300" />
                </div>
                <div class="mt-2 text-xs text-white/60">ETA ~ 00:18</div>
              </div>
            </div>

            <div class="rounded-2xl border border-white/10 bg-black/30 p-4">
              <div class="text-xs font-semibold tracking-[0.18em] text-white/45">MARKETPLACE</div>
              <div class="mt-3">
                <div class="text-sm font-semibold text-white">Preset Sales</div>
                <div class="mt-2 grid grid-cols-3 gap-2">
                  <span class="rounded-xl border border-white/10 bg-white/5 px-2 py-2 text-center">
                    <span class="block text-xs font-semibold text-white/60">Today</span>
                    <span class="mt-1 block text-sm font-extrabold text-white">$48</span>
                  </span>
                  <span class="rounded-xl border border-white/10 bg-white/5 px-2 py-2 text-center">
                    <span class="block text-xs font-semibold text-white/60">7d</span>
                    <span class="mt-1 block text-sm font-extrabold text-white">$211</span>
                  </span>
                  <span class="rounded-xl border border-white/10 bg-white/5 px-2 py-2 text-center">
                    <span class="block text-xs font-semibold text-white/60">30d</span>
                    <span class="mt-1 block text-sm font-extrabold text-white">$812</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeading from '../../components/common/SectionHeading.vue'
</script>


