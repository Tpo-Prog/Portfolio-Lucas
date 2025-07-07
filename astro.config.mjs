import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // Enable React to support React JSX components.
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enable: true,
      site: 'https://Tpo-Prog.github.io',
      base: '/Portfolio-Lucas',
    },
  }),
  integrations: [react(), tailwind()],
});
