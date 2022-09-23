import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

import path from "path";

export default defineConfig(async () => {
  return {
    build: {
      outDir: path.join(__dirname, "./docs"),
      rollupOptions: {
        input: {
          ui: path.resolve(__dirname, "index.html"),
        },
      },
    },
    resolve: {
      extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", "md", "mdx"],
    },
    plugins: [react()],
  };
});
