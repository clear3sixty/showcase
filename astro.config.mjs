import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

// Replace with your GitHub username and repository name
const GITHUB_USERNAME = "clear3sixty"; // e.g., "john-doe"
const REPOSITORY_NAME = "showcase"; // e.g., "my-awesome-astro-site"

export default defineConfig({
  site: `https://${GITHUB_USERNAME}.github.io`,
  base: `/${REPOSITORY_NAME}`,
  vite: { plugins: [tailwindcss()] },
  integrations: [icon()],
  icon: {
    include: {
      tabler: [
        "menu-deep",
        "brand-facebook",
        "brand-linkedin",
        "brand-tiktok",
        "brand-github",
        "map-pin",
        "phone",
        "mail",
        "user",
        "heading",
        "message",
        "send",
        "brand-whatsapp",
        "search",
        "devices-pc",
        "clock",
        "world",
        "palette",
        "device-mobile",
        "arrow-right",
        "users",
        "bolt",
        "award",
        "target",
        "bulb",
        "message-dots",
        "heart-handshake",
        "trending-up",
        "heart",
        "circle-check",
        "calendar-event",
        "device-laptop",
      ],
      local: [
        "logo" // Add your local logo here
      ],
    },
  },
});