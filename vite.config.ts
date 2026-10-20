
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import vite_paths from 'vite-tsconfig-paths'
import { fileURLToPath } from 'node:url'

const variablesPath = fileURLToPath(
  new URL('./src/_variables.scss', import.meta.url)
).replace(/\\/g, '/')
console.log("var:", variablesPath)

export default defineConfig({
  plugins: [react(), vite_paths()],
  css: {
    preprocessorOptions: {
      scss: {
        loadPaths: [fileURLToPath(new URL('./src', import.meta.url))],
      },
    },
  },
})
