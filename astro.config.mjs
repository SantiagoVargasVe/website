import { defineConfig } from "astro/config";
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: "dracula",
      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // https://github.com/shikijs/shiki/blob/main/docs/languages.md
      langs: ["js", "html", "css", "astro", "python", "dart"],
      // Enable word wrap to prevent horizontal scrolling
      wrap: false,
    },
  },
  vite: {
    ssr: {
      noExternal: [
        "@radix-ui/react-accordion",
        "@radix-ui/react-icons",
        "@radix-ui/react-collapsible",
        "@radix-ui/react-presence",
        "@radix-ui/react-primitive",
        "@radix-ui/react-slot",
        "@radix-ui/primitive",
        "@radix-ui/react-compose-refs",
        "@radix-ui/react-collection",
        "@radix-ui/react-context",
        "@radix-ui/react-use-controllable-state",
        "@radix-ui/react-use-callback-ref",
        "@radix-ui/react-id",
        "@radix-ui/react-use-layout-effect",
      ],
    },
  },
});
