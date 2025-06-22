// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    inlineStylesheets: "auto",
  },
  // Uncomment the following line if your site is deployed to a subdirectory
  // base: '/lttng-cmd-builder',
});
