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
  site: "https://lttng-cmd-builder.vercel.app",
  // base: "lttng-cmd-builder",
});
