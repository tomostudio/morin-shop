const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      default: ["Poppins", "sans-serif"],
      nutmeg: ["Nutmeg", "sans-serif"],
    },
    zIndex: {
      "-1": "-1",
      "-10": "-10",
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      10: 10,
      20: 20,
      30: 30,
      40: 40,
      50: 50,
      25: 25,
      50: 50,
      75: 75,
      100: 100,
      auto: "auto",
    },
    // custom screens
    screens: {
      "max-sm": { max: "550px" },
      "max-md": { max: "768px" },
      "max-lg": { max: "1150px" },
      "max-xl": { max: "1280px" },
      ...defaultTheme.screens,
    },
    extend: {
      fontSize: {
        defaultSmall: "14px",
        default: "16px",
        h1: "72px",
        h2: "52px",
        mtitle: "28px",
        mtitleSmall: "22px",
        mtitleBig: "36px",
        ctitle: "32px",
        ctitleSmall: "24px",
        ctitleBig: "42px",
      },
      animation: {
        "spin-slow": "spin 5s linear infinite",
      },
      maxWidth: {
        "18rem": "18rem",
      },
      spacing: {
        "10px": "10px",
      },
      boxShadow: {
        darker:
          "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
        softer:
          "2px 2px 4px 0px rgba(0,0,0,0.1), 1px 1px 2px 0px rgba(0,0,0,0.1)",
        normal: "2px 2px 4px 0px rgba(0,0,0,0.25)",
        product: "2px 2px 4px 0px rgba(0,0,0,0.1)",
        faqCard: "4px 5px 4px 0px rgba(0,0,0,0.25)",
        cart: "2px 2px 6px rgba(0, 0, 0, 0.15)",
      },
      width: {
        content: "46rem",
      },
      height: {
        header: "173px",
      },
      colors: {
        "morin-blue": "#175BA7",
        "morin-lightBlue": "#66C1EA",
        "morin-skyBlue": "#D1F1FF",
        "morin-red": "#E82128",
        "morin-peach": "#FFECD8",
        loading: "#F1F1F1",
      },
      backgroundImage: {
        header:
          "linear-gradient(90deg, rgba(102,193,234,1) 0%, rgba(23,91,167,1) 100%)",
      },
      transitionProperty: {
        background: "background",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("tailwind-scrollbar-hide"),
  ],
};
