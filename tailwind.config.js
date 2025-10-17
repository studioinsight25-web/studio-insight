/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#FFE8D6",
          DEFAULT: "#FFB38A",
          dark: "#E07A5F",
        },
        ink: {
          DEFAULT: "#1F2937",
          soft: "#4B5563",
        },
        skysoft: "#E0F2FE",
      },
      borderRadius: {
        '2xl': '1rem',
      },
      boxShadow: {
        soft: "0 10px 25px -10px rgba(0,0,0,0.15)"
      }
    },
  },
  plugins: [],
}
