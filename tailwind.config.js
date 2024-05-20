const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", flowbite.content()],
  theme: {
    extend: {},
    colors: {
      primary: "#0b1021",
      secondary: "#00CCB4",
      tertiary: "#06070f",
    },
  },
  plugins: [flowbite.plugin()],
};
