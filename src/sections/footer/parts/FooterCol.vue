<template>
  <div>
    <div class="text-sm font-semibold text-white">{{ title }}</div>
    <ul class="mt-4 space-y-3">
      <li v-for="l in links" :key="l.label">
        <a
          class="text-sm text-white/65 transition hover:text-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/60 rounded"
          :href="l.href"
        >
          {{ l.label }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  links: Array<{ label: string; href: string }>
}>()
</script>

