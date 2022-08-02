/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "background": "#181818",
        "pColor": "#FFF",
        "sColor": "#AAAAAA",
        "grey": "#202020",
        "darkGrey": "#383838",
        "black": "#121212",
        "red": "#cc0a00",
        "blue": "#3EA6FF",
        "white": "#FFF",
        "pink": "#F86782",
        "purple": "#282A36",
        "dark": "#24252D",
        "gray-1": "#E3E1E3",
        "gray-2": "#888888",
        "gray-3": "#4F4F4F",
        "black-1": "#2D2E36",
        "black-2": "#1B1A21",
        "black-3": "#2A2D3A",
        "black-4": "#24252D",
        "overlay-black": "rgba(0, 0, 0, 0.8)",
      },
    },
  },
  plugins: [require('tailwind-scrollbar'), require('tailwind-scrollbar-hide')],
};
