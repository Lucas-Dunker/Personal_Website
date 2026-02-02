import { defineConfig, passthroughImageService } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  output: "server",
  site: "https://lucasdunker.com",
  integrations: [tailwind(), react(), sitemap(), icon()],
  adapter: cloudflare({}),
  image: {
    service: passthroughImageService()
  },
  prefetch: {
    defaultStrategy: "load",
    prefetchAll: true
  },
  vite: {
    server: {
      watch: {
        usePolling: true,
        interval: 1000
      }
    }
  }
});