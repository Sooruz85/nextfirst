/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "10xl": "4rem", // Taille personnalisée pour doubler la taille (~128px)
        "12xl": "3rem", // Encore plus grand (~160px)
      },
    },
  },
  plugins: [],
};
