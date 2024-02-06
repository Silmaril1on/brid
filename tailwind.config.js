/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        vector269: "url('./assets/Vector269.png')",
        vector293: "url('./assets/Vector293.png')",
        arrow: "url('./assets/arrow.png')",
        greenarrow: "url('./assets/green_arrow.png')",
      },
      backgroundSize: {
        50: "100%",
      },
      colors: {
        gray100: "#c5c5c5",
        gray200: "#919191",
        gray300: "#D3CDCD",
        gray400: "#2E2E2E",
        gray500: "#6c6c6c",
        gray800: "#161815",
        green: "#2CDC00",
        white200: "#DFDFDF",
        black: "#151715",
      },
      fontFamily: {
        primary: "Raleway",
      },
      fontSize: {
        xxs: "9px",
        200: "200px",
      },
      width: {
        98: "98%",
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
    },
  },
  plugins: [],
};
