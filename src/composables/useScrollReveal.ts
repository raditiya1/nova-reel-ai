import { onBeforeUnmount, onMounted } from 'vue'

export function useScrollReveal(selector = '[data-reveal]') {
  let io: IntersectionObserver | null = null

  onMounted(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(selector))
    if (!elements.length) return

    io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue
          const el = e.target as HTMLElement
          el.classList.add('reveal-in')
          io?.unobserve(el)
        }
      },
      { threshold: 0.12 }
    )

    for (const el of elements) {
      el.classList.add('reveal')
      io.observe(el)
    }
  })

  onBeforeUnmount(() => {
    io?.disconnect()
    io = null
  })
}

