/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-banner': "url('/src/assets/images/bg-banner.png')",
        'bg-contato': "url('/src/assets/images/bg-contato.jpg')"

      }
    },
  },
  plugins: [],
}
