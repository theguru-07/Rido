/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",   // App directory (Next.js 13+)
    "./pages/**/*.{js,ts,jsx,tsx}", // For older versions
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        crystal: {
          blue: "#0077b6",
          dark: "#023e8a",
          ambient: "#001d3d",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        'gradient-blue': 'linear-gradient(to right, #0077b6, #001d3d)',
      },
    },
  },
  plugins: [],
  darkMode: 'class', // or 'media'
};
