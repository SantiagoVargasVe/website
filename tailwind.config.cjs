/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto Mono", "monospace"],
        poppins: ["Poppins", "sans-serif"],
        roboto_condensed: ["Roboto Condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
};
