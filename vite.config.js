import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, URL } from "node:url";
import { newsData } from "./src/data/newsData.js";

function generateStaticRoutePages() {
  let resolvedConfig;

  return {
    name: "generate-static-route-pages",
    apply: "build",
    configResolved(config) {
      resolvedConfig = config;
    },
    async closeBundle() {
      const outDir = path.resolve(resolvedConfig.root, resolvedConfig.build.outDir);
      const indexHtmlPath = path.join(outDir, "index.html");
      const indexHtml = await fs.readFile(indexHtmlPath, "utf-8");

      const staticRoutes = [
        ...newsData.map(({ id }) => ["news", id]),
        ["research", "medical-agents"],
      ];

      await Promise.all(
        staticRoutes.map(async (segments) => {
          const routeDir = path.join(outDir, ...segments);
          await fs.mkdir(routeDir, { recursive: true });
          await fs.writeFile(path.join(routeDir, "index.html"), indexHtml);
        })
      );
    },
  };
}

export default defineConfig({
  plugins: [vue(), generateStaticRoutePages()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@assets": fileURLToPath(new URL("./public/assets", import.meta.url)),
    },
  },
  server: {
    port: 3000,
    open: true,
    proxy: {},
    middlewareMode: false,
  },
  preview: {
    port: 3000,
  },
  appType: "spa",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["vue", "vue-router"],
        },
      },
    },
  },
  publicDir: "public",
});
