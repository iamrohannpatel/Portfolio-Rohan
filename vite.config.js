import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          routing: ['react-router-dom'],
          animations: ['framer-motion'],
          icons: ['lucide-react']
        }
      }
    }
  }
})
