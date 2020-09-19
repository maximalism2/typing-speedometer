const sveltePreprocess = require("svelte-preprocess")

const production = process.env.NODE_ENV === "production"
const sourceMap = !production

module.exports = {
  preprocess: sveltePreprocess({
    sourceMap,
    postcss: {
      plugins: [require("autoprefixer")()],
    },
    defaults: {
      script: "typescript",
    },
  }),
  css: function (css) {
    css.write("main.css")
  },
}
