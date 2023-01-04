/** @type {import('vite').UserConfig} */
import { defineConfig } from "vite";
import manifestSRI from "vite-plugin-manifest-sri";
import sri from "@small-tech/vite-plugin-sri";
import path, { resolve } from "path";

export default defineConfig({
  base: "/",
  build: {
    outDir: __dirname,
    sourcemap: true,
    rollupOptions: {
      input: [
        path.join(__dirname, "/src/frontend/front.js"),
        path.join(__dirname, "/src/backend/back.js"),
      ],

      output: [
        {
          assetFileNames: "assets/[ext]/[name].[hash].[ext]",
          entryFileNames: "assets/js/[name].[hash].js",
          sourcemap: true,
        },
      ],
    },
    manifest: true,
  },
  emitIndex: false,
  plugins: [
    manifestSRI({ publicPath: "assets/" }),
    sri({ publicPath: "assets/" }),
  ],
});
