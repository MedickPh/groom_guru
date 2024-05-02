import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Preload from 'vite-plugin-preload'

export default defineConfig({
  plugins: [
    vue(),
    Preload({
      fonts: ['https://fonts.googleapis.com/css2?family=Neucha&display=swap', 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap'],
      components: ['Main_block.vue'],
      images: ['../assets/1.webp']
    })
  ],
})
