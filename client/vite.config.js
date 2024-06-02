// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server :{
//     proxy:{
//       '/api':{
//         target:'http://localhost:5000',
//         secure: false,
//       }
//     },
//     port:3000
//   }
// })
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Default output directory
  },
});

