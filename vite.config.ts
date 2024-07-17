import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.VITE_APP_BASE_URL,
  plugins: [
    react(),
    tsconfigPaths()
  ]
})
