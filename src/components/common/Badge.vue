<template>
  <span
    class="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80"
    :class="className"
  >
    <span
      class="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-purple-400/90 shadow-[0_0_18px_rgba(124,58,237,.55)]"
    />
    <slot />
  </span>
</template>

<script setup lang="ts">
defineProps<{ className?: string }>();
</script>
