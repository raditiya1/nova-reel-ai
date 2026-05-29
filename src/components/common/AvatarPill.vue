<template>
  <div class="flex items-center gap-3">
    <span
      class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 shadow-[0_0_0_1px_rgba(124,58,237,.15)]"
      aria-hidden="true"
    >
      <span class="text-sm font-bold">{{ initials }}</span>
    </span>
    <span class="min-w-0">
      <span class="block text-sm font-semibold leading-tight text-white">{{
        name
      }}</span>
      <span class="block truncate text-xs text-white/60">{{ role }}</span>
    </span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ name: string; role: string }>();

const initials = props.name
  .split(" ")
  .filter(Boolean)
  .slice(0, 2)
  .map((s) => s[0]?.toUpperCase())
  .join("");
</script>
