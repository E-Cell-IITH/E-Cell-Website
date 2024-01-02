const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["montserrat", ...defaultTheme.fontFamily.sans],
      serif: [...defaultTheme.fontFamily.serif],
      mono: [...defaultTheme.fontFamily.mono],
    },
    extend: {
      translate: {
        "-10": "-10rem",
      },
      boxShadow: {
        custom: "-42px 0px 58px 0px rgba(224, 218, 159, 1)",
      },
      colors: {
        lightBlue: "#66FCF1",
        blue: "#45A29E",
        offwhite: "#C5C6C7",
        dark: "#0B0C10",
      },
    },
  },
  plugins: [],
};
