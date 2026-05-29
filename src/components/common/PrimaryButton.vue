<template>
  <button
    :type="type"
    class="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-white/8 hover:shadow-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/60"
    :class="variantClasses"
    :aria-label="ariaLabel"
  >
    <span class="relative z-10 flex items-center gap-2">
      <slot />
    </span>
    <span
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 overflow-hidden rounded-xl"
    >
      <span
        class="absolute -left-10 top-0 h-full w-10 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

type ButtonVariant = "primary" | "secondary" | "ghost";

const props = withDefaults(
  defineProps<{
    type?: "button" | "submit" | "reset";
    variant?: ButtonVariant;
    ariaLabel?: string;
  }>(),
  {
    type: "button",
    variant: "primary",
    ariaLabel: undefined,
  },
);

const variantClasses = computed(() => {
  switch (props.variant) {
    case "secondary":
      return "bg-white/5 border-white/15 hover:bg-white/8";
    case "ghost":
      return "bg-transparent border-white/10 hover:bg-white/5";
    default:
      return "bg-gradient-to-b from-purple-500/25 to-cyan-400/10 border-purple-400/25";
  }
});
</script>
