import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { VitePWA } from "vite-plugin-pwa"

export default defineConfig({
  build: {
    target: "ES2022",
  },

  plugins: [
    react(),
    VitePWA({
      categories: ["books", "education", "medical"],
      injectRegister: "auto",
      registerType: "autoUpdate",
      workbox: {
        clientsClaim: true,
        skipWaiting: true,
      },
      manifest: {
        name: "مدیریت کارگاه تولید سنسور",
        short_name: "مدیریت کارگاه",
        description: "مدیریت کارمندان و تولید کارگاه تولید سنسور",
        theme_color: "#ffffff",
        // icons: [
        //   {
        //     src: "pwa-192x192.png",
        //     sizes: "192x192",
        //     type: "image/png",
        //   },
        //   {
        //     src: "pwa-512x512.png",
        //     sizes: "512x512",
        //     type: "image/png",
        //   },
        // ],
      },
    }),
  ],
})
