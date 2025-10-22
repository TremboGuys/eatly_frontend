import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import svgLoader from 'vite-svg-loader'
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    svgLoader()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      buffer: 'buffer/' // 👈 adiciona suporte ao módulo buffer
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis' // 👈 algumas libs esperam "global"
      },
      plugins: [
        NodeGlobalsPolyfillPlugin({
          buffer: true // 👈 habilita o polyfill do buffer
        }),
        NodeModulesPolyfillPlugin()
      ]
    }
  }
})
