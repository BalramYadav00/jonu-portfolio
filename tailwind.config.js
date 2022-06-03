module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(36deg)" },
          "20%": { transform: "rotate(72deg)" },
          "30%": { transform: "rotate(108deg)" },
          "40%": { transform: "rotate(144deg)" },
          "50%": { transform: "rotate(180deg)" },
          "60%": { transform: "rotate(216deg)" },
          "70%": { transform: "rotate(252deg)" },
          "80%": { transform: "rotate(288deg)" },
          "90%": { transform: "rotate(324deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation:{
        'spining': 'spin 10s linear infinite',
      },
      gridRow: {
        "span-16": "span 16 / span 16",
      },
      gridRowStart: {
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
      },
      gridRowEnd: {
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
      },
    },
  },
  plugins: [],
};
