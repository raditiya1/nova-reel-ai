import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',

  content: ['./index.html', './src/**/*.{vue,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(124,58,237,.25), 0 0 48px rgba(124,58,237,.18)',
      },
      backgroundImage: {
        hero: 'radial-gradient(800px circle at 18% 10%, rgba(124,58,237,.26), transparent 55%), radial-gradient(700px circle at 84% 18%, rgba(6,182,212,.22), transparent 55%), linear-gradient(180deg, rgba(10,10,10,1) 0%, rgba(10,10,10,1) 60%, rgba(6,7,18,1) 100%)',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-30%)', opacity: 0 },
          '20%': { opacity: 1 },
          '50%': { opacity: 1 },
          '100%': { transform: 'translateX(130%)', opacity: 0 },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        shimmer: 'shimmer 2.6s ease-in-out infinite',
      },
      borderRadius: {
        '2xl': '1.25rem',
      },
    },
  },
  plugins: [],
} satisfies Config

