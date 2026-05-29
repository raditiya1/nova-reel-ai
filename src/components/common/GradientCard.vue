<template>
  <div
    class="rounded-2xl border border-transparent bg-[linear-gradient(#0f0f0f,#0f0f0f)_padding-box] p-0.5 shadow-[0_0_0_1px_rgba(124,58,237,.18),0_20px_80px_rgba(124,58,237,.08)]"
  >
    <div class="rounded-[1.25rem] bg-[#0B0B0B] p-6" :class="innerClassName">
      <slot />
    </div>
    <div
      aria-hidden="true"
      class="pointer-events-none -mt-[100%] h-[200%] w-full opacity-80"
      :class="glowClass"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ innerClassName?: string }>();

const glowClass =
  "bg-[radial-gradient(500px_circle_at_20%_0%,rgba(124,58,237,.30),transparent_55%),radial-gradient(520px_circle_at_90%_20%,rgba(6,182,212,.22),transparent_60%)]";
</script>
