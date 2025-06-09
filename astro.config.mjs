import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

export default defineConfig({
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