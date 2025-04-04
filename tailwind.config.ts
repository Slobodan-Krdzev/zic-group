import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        bgMain: '#000c1a',
        textMain: '#4BB3FF',
        textBlue: '#000C1A',
        textGray2: '#999999',
        projectsBlue: '#D5EDFF',
        gray7: '#18293C',
        footerBlue: '#1D2E42'
      },
      fontFamily: {
        sans: ['Jost', 'sans-serif']
      },
    },
  },
  plugins: [],
} satisfies Config;
