const { first } = require("rxjs");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        "app-first": "url(src/assets/wal.jpg",
      },
    },
  },
  plugins: [],
};
