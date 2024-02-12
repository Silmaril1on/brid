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
        gray100: "#D3CDCD",
        gray400: "#777676",
        gray800: "#292929",
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
      height: {
        400: "400px",
        450: "450px",
        500: "500px",
        650: "650px",
        1500: "1500px",
      },
      maxWidth: {
        60: "60%",
      },
      width: {
        98: "98%",
        505: "505px",
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
