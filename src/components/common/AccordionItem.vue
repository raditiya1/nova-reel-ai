<template>
  <div class="rounded-2xl border border-white/10 bg-white/3">
    <button
      class="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      :aria-expanded="open"
      @click="toggle"
    >
      <span class="text-sm font-semibold text-white">{{ question }}</span>
      <span
        class="grid h-8 w-8 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition-transform"
        :class="open ? 'rotate-45' : 'rotate-0'"
        aria-hidden="true"
      >
        +
      </span>
    </button>

    <div v-show="open" class="px-5 pb-5 text-sm leading-relaxed text-white/70">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{ question: string; defaultOpen?: boolean }>();
const open = ref(!!props.defaultOpen);

function toggle() {
  open.value = !open.value;
}
</script>
