/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "color-black": "#050505",
        "color-sidebar": "#050505",
        "color-border": "#282828",
        "color-fundo": "#161616",
        "color-font-principal": "#E4E4E7",
        "color-font-secundaria": "#D4D4D8",
        "color-font-terceira": "#A1A1AA",
        "color-hover": "#FFFF",
        "color-font-roxo": "#8E85FF",
      }
    },
    screens: {
      'sm': '540px',
      'md': '768px',
      "mf": "820px",
      "sy": "912px",
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'mobile': '480px', 
    },
  plugins: [],
}
}
