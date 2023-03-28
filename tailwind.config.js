const theme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "white",
      transparent: "transparent",
      gray: "#57534e",
      primary: {
        DEFAULT: "#B06740",
        50: "#FEFCFB",
        100: "#F8F1EC",
        200: "#EED9CE",
        300: "#E3C2B1",
        400: "#D8AB93",
        500: "#CD9475",
        600: "#C27C57",
        700: "#B06740",
        800: "#874F31",
        900: "#5E3722",
      },
    },
    extend: {
      fontFamily: {
        serif: ["PT Serif", ...theme.fontFamily.serif],
        sans: ["PT Sans", ...theme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
