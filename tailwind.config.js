/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        myblack: "#212529",
        mygray: "#495057",
      },
    },
  },
  plugins: [],
};
