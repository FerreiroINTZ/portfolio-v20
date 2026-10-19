import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import vite_paths from "vite-tsconfig-paths"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), vite_paths()],
})
