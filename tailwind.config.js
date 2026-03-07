/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#0f172a',
        secondary: '#334155',
        accent: '#475569',
        hero: {
          circle: '#6366f1',   // soft indigo for hero accent
          circleMuted: '#8b5cf6', // soft purple
        },
        light: {
          bg: '#fafafa',
          card: '#ffffff',
          border: '#e5e7eb',
        },
        text: {
          primary: '#0f172a',
          secondary: '#475569',
        },
      },
      borderRadius: {
        'box': '2px',
      },
      boxShadow: {
        'subtle': '0 1px 2px 0 rgb(0 0 0 / 0.04)',
        'card': '0 1px 3px 0 rgb(0 0 0 / 0.06)',
      },
    },
  },
  plugins: [],
}
