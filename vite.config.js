import { svelte } from '@sveltejs/vite-plugin-svelte'
import {visualizer} from 'rollup-plugin-visualizer'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: 'svelte-project/',
  plugins: [
    svelte(),
    visualizer({
      emitFile: true, //cree le fichier dans dist si nn à la racine
      sourcemap: true,

    }),
    
  ],
  build: {
    sourcemap: true,
  },
  test:{
    globals: true,
    environment: 'jsdom',
  }
})
