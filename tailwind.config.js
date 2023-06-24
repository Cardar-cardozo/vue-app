module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        dark: '#1a202c',
      },
      textColor: {
        dark: '#f8f8f8',
      },
    },
    darkSelector: '.dark',
  },
  plugins: [],
};
