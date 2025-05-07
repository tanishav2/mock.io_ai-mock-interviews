/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "success-100": "var(--color-success-100)",
        "success-200": "var(--color-success-200)",
        "destructive-100": "var(--color-destructive-100)",
        "destructive-200": "var(--color-destructive-200)",
        "primary-100": "var(--color-primary-100)",
        "primary-200": "var(--color-primary-200)",
        "light-100": "var(--color-light-100)",
        "light-400": "var(--color-light-400)",
        "light-600": "var(--color-light-600)",
        "light-800": "var(--color-light-800)",
        "dark-100": "var(--color-dark-100)",
        "dark-200": "var(--color-dark-200)",
        "dark-300": "var(--color-dark-300)",
        border: "var(--color-border)",
        input: "var(--color-input)",
        ring: "var(--color-ring)",
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
      },
      fontFamily: {
        sans: ["var(--font-mona-sans)", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
