module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "490px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xl2: "1400px",
    },
    minWidth: {
      "1/2": "50%",
    },
    extend: {
      fontFamily: {
        poppins: ["poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
