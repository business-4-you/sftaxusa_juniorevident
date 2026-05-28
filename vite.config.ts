import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // base: './' usa caminhos RELATIVOS — funciona em qualquer subpasta do cPanel
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Garante que o CSS é embutido corretamente
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        // Nomes estáveis para facilitar cache-busting manual
        entryFileNames: 'assets/app.js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) return 'assets/app.css'
          return 'assets/[name]-[hash][extname]'
        },
      },
    },
  },
})
