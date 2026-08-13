import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { sitemapPlugin } from './scripts/sitemap.mjs'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), sitemapPlugin()],
  define: {
    /* Zeitpunkt des Builds — die Seite zeigt damit an, auf welchem Stand
       die ausgelieferte Fassung ist. */
    __BUILD_TIME__: JSON.stringify(Date.now()),
  },
})
