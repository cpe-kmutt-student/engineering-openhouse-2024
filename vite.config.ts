import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'
import { VitePWA } from 'vite-plugin-pwa'
import * as path from 'path'
import tsconfigPaths from 'vite-tsconfig-paths'

const ENV_PREFIX = 'APP_'

export default defineConfig(({ mode }) => {
  process.env = loadEnv(mode, process.cwd(), '')

  return {
    base: '/',
    plugins: [
      react(),
      eslint(),
      VitePWA({
        registerType: 'autoUpdate',
        selfDestroying: true,
        includeAssets: ['favicon.ico', 'logo.svg'],
        manifest: {
          name: 'Engineering Carnival 2023',
          short_name: 'Engineering Carnival 2023',
          description: 'Engineering Open house Carnival at Bangmod 2023',
          start_url: '/',
          background_color: '#450801',
          theme_color: '#FFFFFF',
          icons: [
            {
              src: '/contents/images/logo.svg',
            },
            {
              src: '/contents/images/landing-background.svg',
            },
            {
              src: '/contents/images/SmoLogo.svg',
            },
          ],
        },
        workbox: {
          cleanupOutdatedCaches: true,
          sourcemap: true,
          globPatterns: ['**/*.{js,css,html,ico,png,jpg,webp,svg,webmanifest}'],
        },
        devOptions: {
          enabled: false,
          type: 'module',
        },
      }),
      tsconfigPaths(),
    ],
    resolve: {
      alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
    },
    envPrefix: ENV_PREFIX,
    server: {
      port: 3000,
    },
    preview: {
      host: '0.0.0.0',
      port: 8000,
    },
  }
})
