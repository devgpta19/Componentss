/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'chart-1': '#4f46e5', // Customize the colors as needed
        'chart-2': '#16a34a',
      },
    },
  },
  plugins: [],
};
