# Tailwind v3 integration fix

## Plan

- Fix Tailwind config so `content` is not empty
- Fix PostCSS config to use `tailwindcss` + `autoprefixer` (remove `@tailwindcss/postcss`)
- Remove broken/incompatible Tailwind setup references
- Ensure global CSS includes Tailwind directives
- Verify `src/main.ts` imports global CSS
- Run `npm run dev` and `npm run build`

## Progress

- [x] Investigated current configs (tailwind.config.js has empty content; postcss.config.cjs uses @tailwindcss/postcss)
- [ ] Patch config files (tailwind.config.js + postcss.config.cjs)
- [ ] Uninstall/install required dependencies
- [ ] Regenerate Tailwind/PostCSS configs if needed
- [ ] Run dev/build and verify warning disappears
