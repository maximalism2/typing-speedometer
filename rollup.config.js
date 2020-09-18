import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json'
import livereload from "rollup-plugin-livereload";
import { terser } from "rollup-plugin-terser";
import {sveltePreprocess} from "svelte-preprocess/dist/autoProcess";
import autoprefixer from 'autoprefixer'

const production = process.env.NODE_ENV === 'production'
const sourceMap = !production;

export default {
    input: 'src/main.js',
    output: {
        name: 'bundle',
        file: 'public/bundle.js',
        format: 'iife'
    },
    plugins: [
        svelte({
            preprocess: sveltePreprocess({
                sourceMap,
                postcss: {
                    plugins: [autoprefixer()]
                },
            }),
            css: function (css) {
                css.write('main.css');
            },
        }),
        resolve(),
        livereload(),
        terser({
            compress: production,
            ecma: 2018
        }),
        json()
    ]
}
