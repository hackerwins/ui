import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

import path from "path";

export default defineConfig(async () => {
  return {
    // appType: "mpa",
    server: {
      hmr: {
        protocol: "ws",
        host: "localhost",
      },
      watch: {
        usePolling: true,
        ignored: ["!**/node_modules/@yorkie-team/**"],
      },
    },
    build: {
      rollupOptions: {
        input: {
          ui: path.resolve(__dirname, "index.html"),
        },
      },
    },
    resolve: {
      extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", "md", "mdx"],
    },
    optimizeDeps: {
      exclude: [
        "@yorkie-team/ui",
        "@yorkie-team/design-tokens",
        "@yorkie-team/design-system",
      ],
    },
    plugins: [react()],
  };
});
