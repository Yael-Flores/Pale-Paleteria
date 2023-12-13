import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({ 
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
        // navigateFallbackAllowlist: [/^index.html$/]
      },
      injectRegister: 'auto',

      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,jpg,jpeg,avif,json}'],
        // runtimeCaching: [{
        //   handler: 'NetworkFirst',
        //   urlPattern: /\/api\/.*\/*.json/,
        //   method: 'POST',
        //   options: {
        //     backgroundSync: {
        //       name: 'myQueueName',
        //       options: {
        //         maxRetentionTime: 24 * 60
        //       }
        //     }
        //   }
        // }]
      },
      includeAssets: ['favicon.ico', 'logo.jpg', 'images/*.webp', 'images/*.avif', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'Pale Paletería',
        short_name: 'Pale Paletería',
        description: 'Pale Paletería es una cadena de paleterias repartida por la republica Mexicana, ofreciendo a sus clientes ricos y deliciosos productos.',
        start_url: "/",
        display: "standalone",
        background_color: '#E05297',
        theme_color: '#E05297',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ],
        screenshots: [
          {
            src: "screenshot-desktop.png",
            sizes: "1280x800",
            type: "image/png",
            platform: "web",
            form_factor: "wide" 
          },
          {
            src: "screenshot-mobile.png",
            sizes: "800x1280",
            type: "image/png",
            platform: "web",
            form_factor: "narrow"
          }
        ]
      }
    })
  ],
})
