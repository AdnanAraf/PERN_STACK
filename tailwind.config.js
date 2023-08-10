/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Inter", "sans-serif"],
      },
      boxShadow: {
        "3xl": "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
      },
    },
  },
  plugins: [require("daisyui")],
};
