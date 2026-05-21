import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Debe coincidir con el nombre del repositorio en GitHub
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/grupo-horizonte/',
})
