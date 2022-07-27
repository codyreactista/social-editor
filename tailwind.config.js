/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      keyframes: {
        "fade-in-from-top": {
          "0%": { opacity: 0, transform: "translateY(-50px)" },
          "100%": { opacity: 1, transform: "translateY(0px)" },
        },
        "fade-in-from-left": {
          "0%": { opacity: 0, transform: "translateX(-50px)" },
          "100%": { opacity: 1, transform: "translateX(0px)" },
        },
        "fade-in-from-right": {
          "0%": { opacity: 0, transform: "translateX(50px)" },
          "100%": { opacity: 1, transform: "translateX(0px)" },
        },
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "make-smaller": {
          "0%": { height: "100%", width: "100%" },
          "100%": { height: "75%", width: "78%" },
        },
      },
      animation: {
        "fade-in-from-top": "fade-in-from-top 0.5s",
        "fade-in-from-left": "fade-in-from-left 0.5s",
        "fade-in-from-right": "fade-in-from-right 0.5s",
        "make-smaller": "make-smaller 1s 0.2s backwards",
      },
    },
  },
  plugins: [],
};
