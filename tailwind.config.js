/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grayColor: "#F5F5F5",
        brownColor: "#B68C31",
        lightBrownColor: "#F5EEE0",
        lightYelloColor: "#FFF7E8",
      },
    },
  },
  plugins: [],
};
