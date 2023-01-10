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
