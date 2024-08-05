import { defineConfig } from 'astro/config';
import compress from "astro-compress";

import betterImageService from "astro-better-image-service";

// https://astro.build/config
export default defineConfig({
  integrations: [compress(), betterImageService()]
});