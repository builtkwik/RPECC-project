/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,mdx}", "./components/**/*.{ts,tsx}", "./styles/**/*.{css}"],
  theme: {
    extend: {
      colors: {
        honey: "rgb(var(--honey-rgb))",
        cream: "rgb(var(--cream-rgb))",
        rose: "rgb(var(--rose-rgb))",
        cocoa: "rgb(var(--cocoa-rgb))",
        char: "rgb(var(--char-rgb))",
        sage: "rgb(var(--sage-rgb))",
        forest: "rgb(var(--forest-rgb))",
        moss: "rgb(var(--moss-rgb))",
        bark: "rgb(var(--bark-rgb))",
        earth: "rgb(var(--earth-rgb))",
      },
      boxShadow: { card: "var(--shadow)" },
      borderRadius: { brand: "var(--radius)" },
    },
  },
  plugins: [],
};