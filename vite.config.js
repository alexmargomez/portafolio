import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const frontendPort = Number(
    process.env.FRONTEND_PORT ||
      process.env.PORT ||
      env.FRONTEND_PORT ||
      env.PORT ||
      5175
  )

  return {
    plugins: [
      react(),
      tailwindcss(),
    ],
    server: {
      host: '0.0.0.0',
      port: frontendPort,
      strictPort: true,
      allowedHosts: true,
      watch: {
        usePolling: true,
      },
    },
    preview: {
      host: '0.0.0.0',
      port: frontendPort,
      allowedHosts: true,
    },
  }
})

