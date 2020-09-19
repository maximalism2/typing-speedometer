import svelte from "rollup-plugin-svelte"
import resolve from "@rollup/plugin-node-resolve"
import json from "@rollup/plugin-json"
import typescript from "@rollup/plugin-typescript"
import livereload from "rollup-plugin-livereload"
import { terser } from "rollup-plugin-terser"

const svelteConfig = require("./svelte.config")

export default {
  input: "src/main.js",
  output: {
    name: "bundle",
    file: "public/bundle.js",
    format: "iife",
  },
  plugins: [
    typescript(),
    svelte(svelteConfig),
    resolve(),
    livereload(),
    terser({
      compress: true,
      ecma: 2018,
    }),
    json(),
  ],
}
