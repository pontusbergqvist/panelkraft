module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        h2: "35px",
        h3: "25px",
        h4: "16px",
      },
      fontFamily: {
        mono: ["Montserrat", "sans-serif"],
        body: ["Didact Gothic", "sans-serif"],
      },
      colors: {
        accent: "#f37f04",
      },
    },
    screens: {
      tablet: "640px",
      desktop: "900px",
    },
  },
  plugins: [],
};
