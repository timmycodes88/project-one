/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "big-dark": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        dark: "0 5px 6px -9px rgba(0, 0, 0, 0.3)",
        "red-glow": "0px 3px 22px 5px rgba(36,28,28,0.75)",
      },
    },
  },
  plugins: [],
}
