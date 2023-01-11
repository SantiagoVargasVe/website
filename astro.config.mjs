import { defineConfig } from "astro/config";

// https://astro.build/config
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
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
