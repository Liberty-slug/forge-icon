import { defineConfig } from "tsup";
import fs from "node:fs";
import path from "node:path";

// Every icon becomes its own entry point so consumers can do
// `import HomeIcon from "forge-icon/icons/Home"` for maximal tree-shaking,
// in addition to the named export from the package root.
const iconsDir = path.join(process.cwd(), "src/icons");
const iconEntries = fs.existsSync(iconsDir)
  ? fs
      .readdirSync(iconsDir)
      .filter((file) => file.endsWith(".tsx"))
      .reduce<Record<string, string>>((acc, file) => {
        const name = path.basename(file, ".tsx");
        acc[`icons/${name}`] = `src/icons/${file}`;
        return acc;
      }, {})
  : {};

export default defineConfig({
  entry: {
    index: "src/index.ts",
    ...iconEntries,
  },
  format: ["esm", "cjs"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  minify: false,
  external: ["react", "react/jsx-runtime"],
});
