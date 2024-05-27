import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import ssr from 'vite-plugin-ssr/plugin';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

// // vite.config.js
// import { defineConfig } from 'vite'
// import { createVuePlugin } from 'vite-plugin-vue2'
// import tailwindcss from 'tailwindcss'

// export default defineConfig({
//   plugins: [createVuePlugin(), tailwindcss('./tailwind.config.js')]
// })
