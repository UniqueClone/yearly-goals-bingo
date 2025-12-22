import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            registerType: "autoUpdate",
            injectRegister: "auto",
            workbox: {
                globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
            },
            includeAssets: ["goals-bingo-icon.svg"],
            manifest: {
                name: "Yearly Goals Bingo",
                short_name: "Goals Bingo",
                start_url: "/",
                scope: "/",
                display: "standalone",
                background_color: "#ffffff",
                theme_color: "#2563eb",
                icons: [
                    {
                        src: "goals-bingo-icon.svg",
                        sizes: "512x512",
                        type: "image/svg+xml",
                        purpose: "any maskable",
                    },
                ],
            },
        }),
    ],
    build: {
        // Inline static assets (like the full-page PNG background) as data URLs
        // so jsPDF doesn't need to fetch them over the network.
        assetsInlineLimit: 10_000_000,
    },
});
