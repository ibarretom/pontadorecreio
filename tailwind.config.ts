import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary": "#D9895B",
        "secondary": "#64422E",
        "black": "#191313",
        "surface": "#F8F8F8"
      },
      fontFamily: {
        'display': ["Lilita", "Lato", 'sans-serif'],
        'body': ['Lato', 'sans-serif'],
        'sans': ['Lato', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
export default config;
