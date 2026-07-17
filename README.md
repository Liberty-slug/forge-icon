# forge-icon

A free, open-source, tree-shakeable SVG icon set for React, in the spirit of `@mui/icons-material` and `lucide-react`. 36 hand-drawn starter icons on a consistent 24x24 stroke grid, plus the tooling to add hundreds more.

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

| Prop          | Type               | Default          | Description                                  |
| ------------- | ------------------ | ---------------- | --------------------------------------------- |
| `size`        | `number \| string` | `24`              | Sets both `width` and `height`.               |
| `color`       | `string`           | `"currentColor"`  | Stroke color; inherits text color by default. |
| `strokeWidth` | `number \| string` | `2`               | Stroke width on the 24x24 grid.               |

Icons forward a `ref` to the underlying `<svg>` element and accept any other native SVG prop (`className`, `onClick`, `aria-label`, etc.).

## Available icons

`home`, `search`, `close`, `menu`, `check`, `plus`, `minus`, `chevron-left`, `chevron-right`, `chevron-up`, `chevron-down`, `arrow-left`, `arrow-right`, `arrow-up`, `arrow-down`, `user`, `settings`, `bell`, `heart`, `star`, `trash`, `edit`, `download`, `upload`, `calendar`, `clock`, `mail`, `phone`, `lock`, `unlock`, `eye`, `eye-off`, `info`, `alert-triangle`, `external-link`, `copy`.

Each icon's kebab-case name maps to a `PascalCase` + `Icon` suffix export (e.g. `alert-triangle` -> `AlertTriangleIcon`). Raw, framework-agnostic SVG source for every icon also lives in [`icons-svg/`](./icons-svg) if you just want the markup (Figma, design tools, other frameworks, server-rendered HTML, etc.).

## How the package is built

This repo does not hand-write React components for each icon. Instead:

1. **`scripts/icon-defs.mjs`** is the single source of truth: a list of `{ name, tags, svg }` entries, where `svg` is the inner markup (paths/lines/circles) of one icon.
2. **`npm run generate`** (`scripts/generate.mjs`) reads that file and:
   - writes an optimized, standalone `.svg` file per icon to `icons-svg/`,
   - writes a `src/icons/<Name>.tsx` React component wrapping the shared `IconBase`,
   - writes the `src/index.ts` barrel that exports everything.
3. **`npm run build`** runs the generator, then [`tsup`](https://tsup.egoist.dev) bundles `src/` into `dist/` as ESM + CJS + `.d.ts`, with one entry point per icon so `forge-icon/icons/Home` resolves on its own.

This mirrors how larger icon libraries (Material Icons, Lucide, Tabler) stay maintainable at hundreds of icons: contributors only ever touch the SVG source list, never hand-write or hand-edit a component file.

## Adding a new icon

See [`CONTRIBUTING.md`](./CONTRIBUTING.md).

## Local development

```bash
npm install
npm run generate   # regenerate icons-svg/ and src/ from icon-defs.mjs
npm run build      # generate + bundle to dist/
npm run typecheck  # tsc --noEmit
```

## Publishing

The package name `forge-icon` is unclaimed on npm as of this writing -- confirm it's still free right before you publish (`npm view forge-icon`; a 404 means it's available), then:

1. Fill in `author` in `package.json` and the copyright line in `LICENSE`.
2. Update `repository`/`homepage` in `package.json` to point at your actual GitHub repo.
3. `npm login`, then `npm publish` from the project root (`npm run build` runs automatically via `prepublishOnly`).
4. Consider reserving the name on GitHub too, and wiring up the included `.github/workflows/ci.yml`.

## License

MIT -- see [`LICENSE`](./LICENSE). The icon artwork in `icons-svg/` and `src/icons/` is original work created for this project and is covered by the same license, so consumers can use it freely in open-source and commercial projects.
