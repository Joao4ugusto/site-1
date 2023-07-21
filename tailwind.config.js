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
        "color-black": "#09090B",
        "color-sidebar": "#0F1011",
        "color-border": "#27272A",
        "color-font-principal": "#E4E4E7",
        "color-font-secundaria": "#D4D4D8",
        "color-font-terceira": "#A1A1AA",
        "color-hover": "#FFFF",
        "color-font-roxo": "#B4B1FF",
        "color-crvr": "#1A5D1A",
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
