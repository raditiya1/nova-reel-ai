<template>
  <div
    class="rounded-2xl border border-white/10 bg-white/5 shadow-[0_0_0_1px_rgba(124,58,237,.12),0_10px_40px_rgba(0,0,0,.35)] backdrop-blur supports-[backdrop-filter]:bg-white/5"
    :class="className"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{ className?: string }>();
</script>
