import { defineConfig } from "tsup";
import fs from "node:fs";
import path from "node:path";

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
