/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        "op-paars": "#51273f",
        "op-blauw": "#12acdf",
        "op-groen": "#179e9a",
        "op-body": "#333333",
        "op-surface": "#fafafa",
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        tagline: ["var(--font-lora)", "serif"],
        slogan: ["var(--font-cormorant)", "serif"],
        body: ["var(--font-nunito)", "sans-serif"],
      },
    },
  },
};
