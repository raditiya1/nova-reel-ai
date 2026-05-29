<template>
  <div
    class="flex h-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-4 text-sm font-semibold text-white/55 transition hover:bg-white/[0.06] hover:text-white/70"
    role="img"
    aria-label="Trusted by {{ name }}"
  >
    <span class="select-none">{{ name }}</span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ name: string }>()
</script>

