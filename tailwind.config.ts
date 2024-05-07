import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/**/*.{html,tsx}',
    './src/pages/**/*.{html,ts,tsx}',
    './src/components/**/*.{html,ts,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config

