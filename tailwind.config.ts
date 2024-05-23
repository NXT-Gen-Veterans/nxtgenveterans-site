import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/**/*.{html,tsx}',
    './src/pages/**/*.{html,ts,tsx}',
    './src/components/**/*.{html,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"]
      },
      colors: {
        "grad-blue": "#B5E3FF",
        "light-hover": "#B0D4FF",
        "ngv-blue": "#020281",
        "ngv-hover": "#0202CC"
      }
    },
  },
  plugins: [],
} satisfies Config

