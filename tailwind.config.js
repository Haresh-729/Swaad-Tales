module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,css}"],
  theme: {
    extend: {},
    fontFamily: {
      signature: ["Great Vibes"],
      raleway: ["Raleway"]
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
