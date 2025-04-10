import UnoCSS from "unocss/vite";
import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from '@vitejs/plugin-vue-jsx'
import {presetUno, presetAttributify, presetIcons} from "unocss";
import Unocss from "./config/unocss";


const rollupOptions = {

    external: ["vue", "vue-router"],
    output: {
        globals: {
            vue: "Vue",
        },
    },
};
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueJsx({}),
        Unocss()
    ],
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm-bundler.js'     // 解决 https://cn.vuejs.org/api/options-rendering.html#template
        }
    },
    build: {
        rollupOptions,
        minify: false,
        lib: {
            entry: "./src/entry.ts",
            name: "TidyUi",
            fileName: "tidy-ui",
            // 导出模块格式
            formats: ["esm", "umd", "iife"],
        },
    },

});