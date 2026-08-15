import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

// tsconfig sets baseUrl: "src", so the sources import as 'components/…',
// 'hooks/…' and so on. Vite has no equivalent of baseUrl — each top-level
// directory under src/ needs an alias, or those imports fail to resolve.
const src = (dir: string) => resolve(import.meta.dirname, `src/${dir}`);

export default defineConfig({
  base: "/projects/pet/randomizer/",
  plugins: [react()],
  resolve: {
    alias: {
      assets: src("assets"),
      components: src("components"),
      hooks: src("hooks"),
      types: src("types"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
