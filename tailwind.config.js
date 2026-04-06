module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Added content paths for Tailwind v3
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
