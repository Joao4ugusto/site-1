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
        "color-border": "#222222",
        "color-border-2": "#181818",
        "color-fundo": "#161616",
        "color-font-principal": "#E4E4E7",
        "color-font-secundaria": "#8e8e8e",
        "color-font-terceira": "#A1A1AA",
        "color-hover": "#FFFF",
        "color-font-roxo": "#B4B1FF",
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
