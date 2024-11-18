import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        verdeEscuro: "#00712D",
        verdeMedio: "#4CAB58",
        verde: "#24D169",
        verdeClaro: "#D5ED9F",
        tomMeio: "#FFFBE6",
        laranjaClaro: "#FFC28D",
        laranjaMedio: "#FF9941",
        laranjaEscuro: "#EC7D1D",
      },
      fontFamily: {
        Lato: ['Lato', 'sans-serif'],
        Montserrat: ['Montserrat', 'sans-serif'],
        PlayfairDisplay: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
