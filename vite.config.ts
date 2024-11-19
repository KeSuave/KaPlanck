import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/lib/index.ts"),
      name: "KaPlanck",
      fileName: "kaplanck",
    },
    rollupOptions: {
      external: ["kaplay", "planck"],
      output: {
        globals: {
          kaplay: "KaPlay",
          planck: "Planck",
        },
      },
    },
    sourcemap: true,
  },
  plugins: [
    dts({
      include: ["src/lib"],
    }),
  ],
});
