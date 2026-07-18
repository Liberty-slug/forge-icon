<div align="center">

# forge-icon

**A free, open-source, tree-shakeable SVG icon set for React.**

568 hand-drawn icons across 30+ categories, on a consistent 24×24 stroke grid, plus the tooling to add hundreds more.

[![CI](https://github.com/Liberty-slug/forge-icon/actions/workflows/ci.yml/badge.svg)](https://github.com/Liberty-slug/forge-icon/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-ready-3178c6.svg)](./tsconfig.json)
[![Tree-shakeable](https://img.shields.io/badge/tree--shakeable-yes-brightgreen.svg)](#usage)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-ff69b4.svg)](./CONTRIBUTING.md)

</div>

---

## Why forge-icon

- **Tree-shakeable by design** — named exports plus a dedicated entry point per icon, so unused icons never ship in your bundle, regardless of how well your bundler tree-shakes.
- **One consistent grid** — every icon is drawn on the same 24×24 stroke grid with 2px strokes and rounded joins, so mixed icons never look mismatched.
- **Themeable out of the box** — icons inherit `currentColor` by default, so they pick up your text color automatically and restyle with plain CSS.
- **Fully typed** — ships its own `.d.ts` files; every icon accepts standard SVG props plus `size`, `color`, and `strokeWidth`.
- **Framework-agnostic source available** — raw, optimized `.svg` files for every icon live in [`icons-svg/`](./icons-svg) for design tools, Figma, or non-React consumers.
- **No hand-maintained components** — every icon is generated from a single source-of-truth file (see [How it's built](#how-its-built)), so the library scales to hundreds of icons without hundreds of hand-edited files.

## Install

```bash
npm install forge-icon
# or
pnpm add forge-icon
# or
yarn add forge-icon
```

`react` >=16.8 is a peer dependency.

## Usage

```tsx
import { HomeIcon, SearchIcon, SettingsIcon } from "forge-icon";

function Toolbar() {
  return (
    <div>
      <HomeIcon />
      <SearchIcon size={20} color="#2563eb" />
      <SettingsIcon size="1.5em" strokeWidth={1.5} />
    </div>
  );
}
```

Every icon also has its own entry point, so bundlers that don't tree-shake named exports well can still import a single icon in isolation:

```tsx
import HomeIcon from "forge-icon/icons/Home";
```

### Props

Every icon accepts, on top of standard `<svg>` attributes:

| Prop          | Type               | Default          | Description                                    |
| ------------- | ------------------ | ----------------- | ----------------------------------------------- |
| `size`        | `number \| string` | `24`               | Sets both `width` and `height`.                 |
| `color`       | `string`           | `"currentColor"`   | Stroke color; inherits text color by default.   |
| `strokeWidth` | `number \| string` | `2`                | Stroke width on the 24×24 grid.                 |

Icons forward a `ref` to the underlying `<svg>` element and accept any other native SVG prop (`className`, `onClick`, `aria-label`, etc.).

## Icons

Each icon's kebab-case name maps to a `PascalCase` + `Icon` suffix export (e.g. `alert-triangle` → `AlertTriangleIcon`). At 568 icons, the full set is too large to browse comfortably here — the table below breaks it down by category, and a sample from the biggest categories is shown so you can get a feel for the style. For the complete set, browse [`icons-svg/`](./icons-svg) directly on GitHub (one optimized `.svg` per icon, named to match) or grep [`scripts/icon-defs.mjs`](./scripts/icon-defs.mjs) — it's the single source of truth every icon is generated from.

| Category | Icons | Category | Icons |
| --- | ---: | --- | ---: |
| Essentials & UI basics | 66 | Science & space | 24 |
| Food & drink | 34 | Documents & business | 26 |
| Travel & maps | 31 | Finance & commerce | 26 |
| Navigation & arrows | 30 | Devices & tech | 21 |
| Weather | 28 | Math & symbols | 20 |
| Shapes & design | 28 | Developer tools | 18 |
| Text & typography | 24 | Health & medical | 18 |
| UI & layout | 14 | Home & tools | 18 |
| Actions & verbs | 16 | Nature & outdoors | 16 |
| Sports & fitness | 10 | Communication | 10 |
| Animals | 10 | Education | 10 |
| Emotions | 10 | Celebrations | 10 |
| Vehicles | 8 | Security | 8 |
| Time & scheduling | 8 | Fashion | 8 |
| Gaming | 6 | Accessibility | 6 |
| Family & people | 6 | **Total** | **568** |

**Essentials & UI basics** (66)

<table>
<tr>
<td align="center"><img src="icons-svg/home.svg" width="20" height="20" alt="home" /><br /><sub><code>home</code></sub></td>
<td align="center"><img src="icons-svg/search.svg" width="20" height="20" alt="search" /><br /><sub><code>search</code></sub></td>
<td align="center"><img src="icons-svg/settings.svg" width="20" height="20" alt="settings" /><br /><sub><code>settings</code></sub></td>
<td align="center"><img src="icons-svg/user.svg" width="20" height="20" alt="user" /><br /><sub><code>user</code></sub></td>
<td align="center"><img src="icons-svg/bell.svg" width="20" height="20" alt="bell" /><br /><sub><code>bell</code></sub></td>
<td align="center"><img src="icons-svg/check.svg" width="20" height="20" alt="check" /><br /><sub><code>check</code></sub></td>
</tr>
</table>

**Navigation & arrows** (30)

<table>
<tr>
<td align="center"><img src="icons-svg/arrow-up-right.svg" width="20" height="20" alt="arrow-up-right" /><br /><sub><code>arrow-up-right</code></sub></td>
<td align="center"><img src="icons-svg/chevrons-right.svg" width="20" height="20" alt="chevrons-right" /><br /><sub><code>chevrons-right</code></sub></td>
<td align="center"><img src="icons-svg/corner-down-right.svg" width="20" height="20" alt="corner-down-right" /><br /><sub><code>corner-down-right</code></sub></td>
<td align="center"><img src="icons-svg/rotate-cw.svg" width="20" height="20" alt="rotate-cw" /><br /><sub><code>rotate-cw</code></sub></td>
<td align="center"><img src="icons-svg/move.svg" width="20" height="20" alt="move" /><br /><sub><code>move</code></sub></td>
<td align="center"><img src="icons-svg/shuffle.svg" width="20" height="20" alt="shuffle" /><br /><sub><code>shuffle</code></sub></td>
</tr>
</table>

**Weather** (28)

<table>
<tr>
<td align="center"><img src="icons-svg/sun.svg" width="20" height="20" alt="sun" /><br /><sub><code>sun</code></sub></td>
<td align="center"><img src="icons-svg/cloud-rain.svg" width="20" height="20" alt="cloud-rain" /><br /><sub><code>cloud-rain</code></sub></td>
<td align="center"><img src="icons-svg/snowflake.svg" width="20" height="20" alt="snowflake" /><br /><sub><code>snowflake</code></sub></td>
<td align="center"><img src="icons-svg/rainbow.svg" width="20" height="20" alt="rainbow" /><br /><sub><code>rainbow</code></sub></td>
<td align="center"><img src="icons-svg/tornado.svg" width="20" height="20" alt="tornado" /><br /><sub><code>tornado</code></sub></td>
<td align="center"><img src="icons-svg/umbrella.svg" width="20" height="20" alt="umbrella" /><br /><sub><code>umbrella</code></sub></td>
</tr>
</table>

**Travel & maps** (31)

<table>
<tr>
<td align="center"><img src="icons-svg/map-pin.svg" width="20" height="20" alt="map-pin" /><br /><sub><code>map-pin</code></sub></td>
<td align="center"><img src="icons-svg/compass.svg" width="20" height="20" alt="compass" /><br /><sub><code>compass</code></sub></td>
<td align="center"><img src="icons-svg/plane.svg" width="20" height="20" alt="plane" /><br /><sub><code>plane</code></sub></td>
<td align="center"><img src="icons-svg/car.svg" width="20" height="20" alt="car" /><br /><sub><code>car</code></sub></td>
<td align="center"><img src="icons-svg/anchor.svg" width="20" height="20" alt="anchor" /><br /><sub><code>anchor</code></sub></td>
<td align="center"><img src="icons-svg/route.svg" width="20" height="20" alt="route" /><br /><sub><code>route</code></sub></td>
</tr>
</table>

**Finance & commerce** (26)

<table>
<tr>
<td align="center"><img src="icons-svg/wallet.svg" width="20" height="20" alt="wallet" /><br /><sub><code>wallet</code></sub></td>
<td align="center"><img src="icons-svg/credit-card.svg" width="20" height="20" alt="credit-card" /><br /><sub><code>credit-card</code></sub></td>
<td align="center"><img src="icons-svg/chart-line.svg" width="20" height="20" alt="chart-line" /><br /><sub><code>chart-line</code></sub></td>
<td align="center"><img src="icons-svg/cart-plus.svg" width="20" height="20" alt="cart-plus" /><br /><sub><code>cart-plus</code></sub></td>
<td align="center"><img src="icons-svg/gift.svg" width="20" height="20" alt="gift" /><br /><sub><code>gift</code></sub></td>
<td align="center"><img src="icons-svg/bank.svg" width="20" height="20" alt="bank" /><br /><sub><code>bank</code></sub></td>
</tr>
</table>

**Developer tools** (18)

<table>
<tr>
<td align="center"><img src="icons-svg/code.svg" width="20" height="20" alt="code" /><br /><sub><code>code</code></sub></td>
<td align="center"><img src="icons-svg/terminal.svg" width="20" height="20" alt="terminal" /><br /><sub><code>terminal</code></sub></td>
<td align="center"><img src="icons-svg/git-branch.svg" width="20" height="20" alt="git-branch" /><br /><sub><code>git-branch</code></sub></td>
<td align="center"><img src="icons-svg/database.svg" width="20" height="20" alt="database" /><br /><sub><code>database</code></sub></td>
<td align="center"><img src="icons-svg/bug.svg" width="20" height="20" alt="bug" /><br /><sub><code>bug</code></sub></td>
<td align="center"><img src="icons-svg/webhook.svg" width="20" height="20" alt="webhook" /><br /><sub><code>webhook</code></sub></td>
</tr>
</table>

**Food & drink** (34)

<table>
<tr>
<td align="center"><img src="icons-svg/coffee.svg" width="20" height="20" alt="coffee" /><br /><sub><code>coffee</code></sub></td>
<td align="center"><img src="icons-svg/pizza.svg" width="20" height="20" alt="pizza" /><br /><sub><code>pizza</code></sub></td>
<td align="center"><img src="icons-svg/cake.svg" width="20" height="20" alt="cake" /><br /><sub><code>cake</code></sub></td>
<td align="center"><img src="icons-svg/salad.svg" width="20" height="20" alt="salad" /><br /><sub><code>salad</code></sub></td>
<td align="center"><img src="icons-svg/kettle.svg" width="20" height="20" alt="kettle" /><br /><sub><code>kettle</code></sub></td>
<td align="center"><img src="icons-svg/sandwich.svg" width="20" height="20" alt="sandwich" /><br /><sub><code>sandwich</code></sub></td>
</tr>
</table>

**Health & medical** (18)

<table>
<tr>
<td align="center"><img src="icons-svg/heart-pulse.svg" width="20" height="20" alt="heart-pulse" /><br /><sub><code>heart-pulse</code></sub></td>
<td align="center"><img src="icons-svg/stethoscope.svg" width="20" height="20" alt="stethoscope" /><br /><sub><code>stethoscope</code></sub></td>
<td align="center"><img src="icons-svg/pill.svg" width="20" height="20" alt="pill" /><br /><sub><code>pill</code></sub></td>
<td align="center"><img src="icons-svg/brain.svg" width="20" height="20" alt="brain" /><br /><sub><code>brain</code></sub></td>
<td align="center"><img src="icons-svg/yoga.svg" width="20" height="20" alt="yoga" /><br /><sub><code>yoga</code></sub></td>
<td align="center"><img src="icons-svg/lungs.svg" width="20" height="20" alt="lungs" /><br /><sub><code>lungs</code></sub></td>
</tr>
</table>

**Documents & business** (26)

<table>
<tr>
<td align="center"><img src="icons-svg/briefcase.svg" width="20" height="20" alt="briefcase" /><br /><sub><code>briefcase</code></sub></td>
<td align="center"><img src="icons-svg/building-2.svg" width="20" height="20" alt="building-2" /><br /><sub><code>building-2</code></sub></td>
<td align="center"><img src="icons-svg/contract.svg" width="20" height="20" alt="contract" /><br /><sub><code>contract</code></sub></td>
<td align="center"><img src="icons-svg/clipboard-check.svg" width="20" height="20" alt="clipboard-check" /><br /><sub><code>clipboard-check</code></sub></td>
<td align="center"><img src="icons-svg/presentation.svg" width="20" height="20" alt="presentation" /><br /><sub><code>presentation</code></sub></td>
<td align="center"><img src="icons-svg/handshake.svg" width="20" height="20" alt="handshake" /><br /><sub><code>handshake</code></sub></td>
</tr>
</table>

**Devices & tech** (21)

<table>
<tr>
<td align="center"><img src="icons-svg/monitor.svg" width="20" height="20" alt="monitor" /><br /><sub><code>monitor</code></sub></td>
<td align="center"><img src="icons-svg/watch.svg" width="20" height="20" alt="watch" /><br /><sub><code>watch</code></sub></td>
<td align="center"><img src="icons-svg/printer.svg" width="20" height="20" alt="printer" /><br /><sub><code>printer</code></sub></td>
<td align="center"><img src="icons-svg/usb.svg" width="20" height="20" alt="usb" /><br /><sub><code>usb</code></sub></td>
<td align="center"><img src="icons-svg/router.svg" width="20" height="20" alt="router" /><br /><sub><code>router</code></sub></td>
<td align="center"><img src="icons-svg/tablet.svg" width="20" height="20" alt="tablet" /><br /><sub><code>tablet</code></sub></td>
</tr>
</table>

**Animals** (10)

<table>
<tr>
<td align="center"><img src="icons-svg/cat.svg" width="20" height="20" alt="cat" /><br /><sub><code>cat</code></sub></td>
<td align="center"><img src="icons-svg/dog.svg" width="20" height="20" alt="dog" /><br /><sub><code>dog</code></sub></td>
<td align="center"><img src="icons-svg/bird.svg" width="20" height="20" alt="bird" /><br /><sub><code>bird</code></sub></td>
<td align="center"><img src="icons-svg/fish.svg" width="20" height="20" alt="fish" /><br /><sub><code>fish</code></sub></td>
<td align="center"><img src="icons-svg/butterfly.svg" width="20" height="20" alt="butterfly" /><br /><sub><code>butterfly</code></sub></td>
<td align="center"><img src="icons-svg/paw.svg" width="20" height="20" alt="paw" /><br /><sub><code>paw</code></sub></td>
</tr>
</table>

**Emotions** (10)

<table>
<tr>
<td align="center"><img src="icons-svg/smile.svg" width="20" height="20" alt="smile" /><br /><sub><code>smile</code></sub></td>
<td align="center"><img src="icons-svg/laugh.svg" width="20" height="20" alt="laugh" /><br /><sub><code>laugh</code></sub></td>
<td align="center"><img src="icons-svg/surprised.svg" width="20" height="20" alt="surprised" /><br /><sub><code>surprised</code></sub></td>
<td align="center"><img src="icons-svg/cool.svg" width="20" height="20" alt="cool" /><br /><sub><code>cool</code></sub></td>
<td align="center"><img src="icons-svg/wink.svg" width="20" height="20" alt="wink" /><br /><sub><code>wink</code></sub></td>
<td align="center"><img src="icons-svg/meh.svg" width="20" height="20" alt="meh" /><br /><sub><code>meh</code></sub></td>
</tr>
</table>

Raw, framework-agnostic SVG source for every icon lives in [`icons-svg/`](./icons-svg) if you just want the markup (Figma, design tools, other frameworks, server-rendered HTML, etc.).

## How it's built

This repo does not hand-write React components for each icon. Instead:

1. **[`scripts/icon-defs.mjs`](./scripts/icon-defs.mjs)** is the single source of truth: a list of `{ name, tags, svg }` entries, where `svg` is the inner markup (paths/lines/circles) of one icon.
2. **`npm run generate`** ([`scripts/generate.mjs`](./scripts/generate.mjs)) reads that file and:
   - writes an optimized, standalone `.svg` file per icon to `icons-svg/`,
   - writes a `src/icons/<Name>.tsx` React component wrapping the shared `IconBase`,
   - writes the `src/index.ts` barrel that exports everything.
3. **`npm run build`** runs the generator, then [`tsup`](https://tsup.egoist.dev) bundles `src/` into `dist/` as ESM + CJS + `.d.ts`, with one entry point per icon so `forge-icon/icons/Home` resolves on its own.

This mirrors how larger icon libraries (Material Icons, Lucide, Tabler) stay maintainable at hundreds of icons: contributors only ever touch the SVG source list, never hand-write or hand-edit a component file.

## Contributing

New icons, bug fixes, and design feedback are all welcome. See [`CONTRIBUTING.md`](./CONTRIBUTING.md) for the full guide, but in short:

1. Add an entry to [`scripts/icon-defs.mjs`](./scripts/icon-defs.mjs).
2. Run `npm run generate && npm run typecheck && npm run build`.
3. Open a PR — please don't hand-edit anything in `icons-svg/` or `src/icons/`, it's all regenerated.

## Local development

```bash
npm install
npm run generate   # regenerate icons-svg/ and src/ from icon-defs.mjs
npm run build      # generate + bundle to dist/
npm run typecheck  # tsc --noEmit
```

CI runs `typecheck` and `build` on every push and pull request via [`.github/workflows/ci.yml`](./.github/workflows/ci.yml).

## Publishing

The package name `forge-icon` is unclaimed on npm as of this writing — confirm it's still free right before you publish (`npm view forge-icon`; a 404 means it's available), then:

1. Fill in `author` in `package.json` and the copyright line in `LICENSE`.
2. Update `repository`/`homepage` in `package.json` to point at your actual GitHub repo.
3. `npm login`, then `npm publish` from the project root (`npm run build` runs automatically via `prepublishOnly`).
4. Consider reserving the name on GitHub too, and wiring up the included `.github/workflows/ci.yml`.

## License

MIT — see [`LICENSE`](./LICENSE). The icon artwork in `icons-svg/` and `src/icons/` is original work created for this project and is covered by the same license, so consumers can use it freely in open-source and commercial projects.
