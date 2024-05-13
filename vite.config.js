import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Preload from 'vite-plugin-preload'

export default defineConfig({
  plugins: [
    vue(),
    Preload({
      components: ['Main_block.vue'],
      images: ['../assets/1.webp', '../assets/2.webp']
    })
  ],
})
