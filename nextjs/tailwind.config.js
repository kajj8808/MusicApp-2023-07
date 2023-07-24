/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gridTemplateColumns: {
        new1: "repeat(1,minmax(180px,1fr))",
        new2: "repeat(2,minmax(180px,1fr))",
        new3: "repeat(3,minmax(180px,1fr))",
        new4: "repeat(4,minmax(180px,1fr))",
        new5: "repeat(5,minmax(180px,1fr))",
        new6: "repeat(6,minmax(180px,1fr))",
        new6: "repeat(7,minmax(180px,1fr))",
      },
      screens: {
        "3xl": "2100px",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
