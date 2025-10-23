module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  // optional daisyUI config
  daisyui: {
    themes: ["light", "dark"],
  },
};
