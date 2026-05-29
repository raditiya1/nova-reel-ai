<template>
  <label class="flex cursor-pointer items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/3 px-4 py-3" :for="id">
    <span class="text-sm font-semibold text-white/75">{{ label }}</span>
    <input
      class="sr-only"
      :id="id"
      type="checkbox"
      :checked="modelValue"
      @change="$emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
    />
    <span
      class="relative h-6 w-11 flex-none rounded-full border border-white/10 bg-black/40 transition"
      :class="modelValue ? 'bg-gradient-to-b from-purple-500/35 to-cyan-400/15 border-purple-400/30' : 'bg-black/40'"
      aria-hidden="true"
    >
      <span
        class="absolute top-0 left-0 h-5 w-5 rounded-full bg-white/15 border border-white/10 transition"
        :class="modelValue ? 'translate-x-5' : 'translate-x-0'"
      />
    </span>
  </label>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ label: string; modelValue: boolean }>()
const id = computed(() => props.label.replace(/\s+/g, '-').toLowerCase())
const emit = defineEmits<{ 'update:modelValue': [value: boolean] }>()
</script>

