/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary
        "very-dark-magenta": "hsl(300, 43%, 22%)",
        "soft-pink": "hsl(333, 80%, 67%)",

        // Neutral
        "dark-grayish-magenta": "hsl(303, 10%, 53%)",
        "light-grayish-magenta": "hsl(300, 24%, 96%)",
        white: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        "league-spartan": ["League Spartan", "sans-serif"],
      },backgroundImage:{
        'pattern-top-desktop':"url('/bg-pattern-top-desktop.svg')",
        'pattern-bottom-desktop':"url('/bg-pattern-bottom-desktop.svg')",
        'pattern-top-mobile':"url('/bg-pattern-top-mobile.svg')",
        'pattern-bottom-mobile':"url('/bg-pattern-bottom-mobile.svg')"
      }
    },
  },
  plugins: [],
};
