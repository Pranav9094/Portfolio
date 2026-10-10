/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: "#12151A",
        inkSoft: "#1B1F27",
        paper: "#F6F4EF",
        paperSoft: "#ECE9E1",
        signal: "#3D6BFF",
        circuit: "#7B5CFF",
        slate: "#8891A3",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
    },
  },
  plugins: [],
};
