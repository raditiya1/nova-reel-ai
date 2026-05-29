import { h } from 'vue'

export function Sparkles(props: { class?: string }) {
  return h('svg', { viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', class: props.class ?? 'h-6 w-6' }, [
    h('path', { d: 'M12 2l1.2 6.3L20 12l-6.8 3.7L12 22l-1.2-6.3L4 12l6.8-3.7L12 2z', stroke: 'currentColor', 'stroke-width': '1.6', 'stroke-linejoin': 'round' }),
  ])
}

export function Waves(props: { class?: string }) {
  return h('svg', { viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', class: props.class ?? 'h-6 w-6' }, [
    h('path', { d: 'M2 12c2.5-4 5.5-4 8 0s5.5 4 8 0 4.5-4 4.5-4', stroke: 'currentColor', 'stroke-width': '1.6', 'stroke-linecap': 'round' }),
    h('path', { d: 'M2 18c2.5-4 5.5-4 8 0s5.5 4 8 0 4.5-4 4.5-4', stroke: 'currentColor', 'stroke-width': '1.6', 'stroke-linecap': 'round', opacity: 0.75 }),
  ])
}

export function Mic(props: { class?: string }) {
  return h('svg', { viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', class: props.class ?? 'h-6 w-6' }, [
    h('path', { d: 'M12 14a3 3 0 0 0 3-3V7a3 3 0 0 0-6 0v4a3 3 0 0 0 3 3z', stroke: 'currentColor', 'stroke-width': '1.6' }),
    h('path', { d: 'M19 11a7 7 0 0 1-14 0', stroke: 'currentColor', 'stroke-width': '1.6', 'stroke-linecap': 'round' }),
    h('path', { d: 'M12 18v3', stroke: 'currentColor', 'stroke-width': '1.6', 'stroke-linecap': 'round' }),
  ])
}

export function PencilLine(props: { class?: string }) {
  return h('svg', { viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', class: props.class ?? 'h-6 w-6' }, [
    h('path', { d: 'M4 20l4-1 11-11-3-3L5 16l-1 4z', stroke: 'currentColor', 'stroke-width': '1.6', 'stroke-linejoin': 'round' }),
    h('path', { d: 'M13 6l5 5', stroke: 'currentColor', 'stroke-width': '1.6', 'stroke-linecap': 'round' }),
  ])
}

export function Layers(props: { class?: string }) {
  return h('svg', { viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', class: props.class ?? 'h-6 w-6' }, [
    h('path', { d: 'M12 2l9 5-9 5-9-5 9-5z', stroke: 'currentColor', 'stroke-width': '1.6', 'stroke-linejoin': 'round' }),
    h('path', { d: 'M3 12l9 5 9-5', stroke: 'currentColor', 'stroke-width': '1.6', 'stroke-linejoin': 'round', opacity: 0.85 }),
    h('path', { d: 'M3 17l9 5 9-5', stroke: 'currentColor', 'stroke-width': '1.6', 'stroke-linejoin': 'round', opacity: 0.65 }),
  ])
}

export function Captions(props: { class?: string }) {
  return h('svg', { viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', class: props.class ?? 'h-6 w-6' }, [
    h('path', { d: 'M4 6h16v12H4z', stroke: 'currentColor', 'stroke-width': '1.6', 'stroke-linejoin': 'round' }),
    h('path', { d: 'M8 10h4', stroke: 'currentColor', 'stroke-width': '1.6', 'stroke-linecap': 'round' }),
    h('path', { d: 'M8 14h8', stroke: 'currentColor', 'stroke-width': '1.6', 'stroke-linecap': 'round', opacity: 0.8 }),
  ])
}

