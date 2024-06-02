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
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: path.resolve(__dirname, 'dist'),
  },
});
