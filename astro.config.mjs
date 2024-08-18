import db from "@astrojs/db";
import netlify from "@astrojs/netlify";
import react from "@astrojs/react";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [db(), react()],
  output: "server",
  adapter: netlify(),
});
