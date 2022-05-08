module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary: "#ec7263",
      },
      fontFamily: {
        body: ["Dosis"],
      },
    },
  },
  plugins: [],
};
