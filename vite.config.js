import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 2020,
    strictPort: true,
    open: '/profile.html'
  }
})
