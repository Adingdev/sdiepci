import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/sdiepci/', // Remplace <repo-name> par le nom exact de ton repo GitHub
  server: {
    port: 3000,
    open: true
  }
})
