/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx,mdx}", "./components/**/*.{js,jsx,mdx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "864px",
      xl: "864px",
    },
    fontSize: {
      base: ["16px", "24px"],
      lg: ["20px", "27px"],
      xl: ["36px", "44px"],
      "2xl": ["40px", "49px"],
    },
    extend: {
      colors: {
        primaryBlack: "#181A18",
      },
      fontFamily: {
        ibm: ["IBM Plex Sans", "sans-serif"],
        righteous: ["Righteous", "cursive"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
