module.exports = {
  mode: "jit",
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'navbar-img': "url('/img/nav.jpg')",
      }
    },
  },
  variants: {},
  plugins: [],
};

