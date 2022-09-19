import { defineConfig } from 'vite'
import vue from "@vitejs/plugin-vue"
import vueJsx from '@vitejs/plugin-vue-jsx'
import Unocss from "./config/unocss";
const rollupOptions = {

    external: ["vue", "vue-router"],
    output: {
        globals: {
            vue: "Vue",
        },
    },
};

export default defineConfig({
    plugins: [vue(), vueJsx({}), Unocss()],
    build: {
        rollupOptions,
        minify: false,
        lib: {
            entry: "./src/entry.ts",
            name: "WyhUi",
            fileName: "wyh-ui",
            // 导出模块格式
            formats: ["es", "umd", "iife"],
        },
        cssCodeSplit: true,//分离CSS样式单独引用
    },
    server:{
        host:'0.0.0.0',//开启所有服务器
        port:7777,
        open:true,
    }
})