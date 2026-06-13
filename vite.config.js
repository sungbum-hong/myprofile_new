import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  server: {
    port: 2020,
    strictPort: true,
    open: '/profile.html'
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        profile: resolve(__dirname, 'profile.html'),
        codiyoung: resolve(__dirname, 'work/codiyoung.html')
      }
    }
  }
})
