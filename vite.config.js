import { resolve } from 'path'
import { defineConfig } from "vite";

export default defineConfig({
    build: {
        cssCodeSplit: false,
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                pages: resolve(__dirname, 'pages/menu.html')
            }
        }
    },
})