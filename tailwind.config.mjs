/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "primary-red": "hsl(0, 78%, 62%)",
        "primary-cyan": "hsl(180, 62%, 55%)",
        "primary-orange": "hsl(34, 97%, 64%)",
        "primary-blue": "hsl(212, 86%, 64%)",
        "neutral-very-dark-blue": "hsl(234, 12%, 34%)",
        "neutral-grayish-blue": "hsl(229, 6%, 66%)",
        "neutral-very-light-gray": "hsl(0, 0%, 98%)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      width: {
        card: "350px",
      },
      height: {
        card: "250px",
      },
    },
  },
  plugins: [],
};
