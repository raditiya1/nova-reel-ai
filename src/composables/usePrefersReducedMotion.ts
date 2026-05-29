import { computed } from 'vue'

type MediaQueryListLike = Pick<MediaQueryList, 'matches' | 'addEventListener' | 'removeEventListener'>

export function usePrefersReducedMotion() {
  const reduced = typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)')
    : (null as MediaQueryListLike | null)

  const isReduced = computed(() => !!reduced?.matches)

  return { isReduced }
}

