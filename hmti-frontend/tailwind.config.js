/** @type {import('tailwindcss/types').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    daisyui: {
      themes: [
        {
          mytheme: {
          "primary": "#DC0000",
          "secondary": "#850000",
          "accent": "#FFDB89",
          "neutral": "#18182f",
          "base-100": "#ffffff",
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
          },
        },
        "dark", "cupcake"],
    },
  },
  plugins: [require("daisyui")],
};

module.exports = config;
