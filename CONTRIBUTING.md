# Contributing

## Adding a new icon

1. Open `scripts/icon-defs.mjs`.
2. Append an entry to the `icons` array:

   ```js
   {
     name: "arrow-up-right",      
     tags: ["diagonal", "external"],
     svg: `<line x1="7" y1="17" x2="17" y2="7" />
   <polyline points="9 7 17 7 17 15" />`,
   },
   ```

3. Keep new icons on the same visual grid as the rest of the set:
   - `viewBox="0 0 24 24"`
   - stroke-based (no `fill`, unless you're deliberately adding a solid dot/accent -- see `info` or `alert-triangle` for examples), `stroke-width: 2`, round caps/joins
   - roughly 2px of padding from the edge of the 24x24 box
   - only use `<path>`, `<line>`, `<circle>`, `<rect>`, `<polygon>`, `<polyline>` -- no `<style>`, gradients, or raster images
4. Run the generator and build:

   ```bash
   npm run generate
   npm run typecheck
   npm run build
   ```

5. Confirm `icons-svg/<name>.svg` and `src/icons/<Name>.tsx` were created, and that `<Name>Icon` appears in `src/index.ts`.
6. Open a PR. Please don't hand-edit files in `icons-svg/` or `src/icons/` directly -- they're regenerated from `icon-defs.mjs` and manual edits will be silently overwritten on the next `npm run generate`.

## Design guidelines

- Original artwork only. Don't trace or copy paths from other icon libraries (Material Icons, Feather, Lucide, Font Awesome, etc.) -- draw new path data even if the concept (e.g. "a bell means notifications") is generic and shared across libraries.
- Prefer simple primitives (`line`, `circle`, `polyline`, `rect`) over complex bezier paths where possible; it keeps file size small and makes icons easy to review.
- Test at multiple sizes (16px, 24px, 32px) to make sure strokes don't get muddy when scaled down.

## Reporting bugs / requesting icons

Open an issue with a description or reference sketch of the icon you'd like to see, or the bug you hit.
