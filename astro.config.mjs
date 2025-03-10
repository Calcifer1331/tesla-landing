import { defineConfig } from 'astro/config';

import tailwindcss from "@tailwindcss/vite";

import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [compressor({
    gzip: true,
    brotli: true,
    fileExtensions: [
      ".css",
      ".js",
      ".html",
      ".xml",
      ".cjs",
      ".mjs",
      ".svg",
      ".txt",
      ".json", // Agregados
      ".webmanifest",
      ".csv",
      ".woff",
      ".woff2",
      ".ttf",
      ".geojson",
    ],
  })],

  experimental: {
    svg: {
      mode: "sprite",
    },
  },
});