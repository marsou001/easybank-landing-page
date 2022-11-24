/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/*.{html,js,jsx,ts,tsx}",
    "./shared/ui/*.{html,js,jsx,ts,tsx}",
    "./components/*/*.{html,js,jsx,ts,tsx}",
    "./components/*/*/*.{html,js,jsx,ts,tsx}",
    "./components/*/*/*/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': 'hsl(233, 26%, 24%)',
        'lime-green': 'hsl(136, 65%, 51%)',
        'bright-cyan': 'hsl(192, 70%, 51%)',
        'lime-green-hover': 'hsl(136, 65%, 71%)',
        'bright-cyan-hover': 'hsl(192, 70%, 71%)',
        'grayish-blue': 'hsl(233, 8%, 62%)',
        'light-grayish-blue': 'hsl(220, 16%, 96%)',
        'very-light-gray': 'hsl(0, 0%, 98%)',
        'white': 'hsl(0, 0%, 100%)',
      },
      screens: {
        'xs': '500px',
        'lg': '992px',
        'xl': '1200px',
      }
    },
  },
  plugins: [],
}
