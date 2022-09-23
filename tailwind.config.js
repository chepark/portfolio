/** @type {import('tailwindcss').Config} */
module.exports = {
  //ADD PURGE BELOW
  content: ["./pages/**/*.{js,jsx,mdx}", "./components/**/*.{js,jsx,mdx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "960px",
      lg: "1440px",
    },
    fontSize: {
      base: ["16px", "24px"],
      lg: ["20px", "27px"],
      xl: ["36px", "44px"],
      "2xl": ["40px", "49px"],
    },
    extend: {
      colors: {
        "primary-black": "#363434",
        grey: "#504d4d",
      },
      fontFamily: {
        ibm: ["IBM Plex Sans", "sans-serif"],
        righteous: ["Righteous", "cursive"],
      },
      typography: {
        DEFAULT: {
          css: {
            h2: {
              "margin-top": "50px",
              "margin-bottom": "10px",
              "> a": {
                fontSize: "30px",
                fontWeight: "bold",
                "text-decoration": "none",
                cursor: "default",
              },
            },
            li: {
              margin: "0px",
            },
            p: {
              fontSize: "18px",
            },
            img: {
              display: "block",
              "margin-left": "auto",
              "margin-right": "auto",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
