export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#003f8a",
        secondary: "#002b5c",
        accent: "#0055cc",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        card: "0 4px 16px rgba(0,0,0,0.12)",
      },
    },
  },
  plugins: [],
};
