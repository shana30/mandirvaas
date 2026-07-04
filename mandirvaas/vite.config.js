import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
<<<<<<< HEAD
    port: 3000,
=======
    port: 5173,
>>>>>>> 12c86fc69c54a28a8c922a2d6606e0fda1653ccf
    open: true
  }
})
