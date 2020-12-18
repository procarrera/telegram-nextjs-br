module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundImage: (theme) => ({
      "emojis-pattern": "url('/emojis.png')",
      "telegram-pattern": "url('/background.jpg')",
    }),
    backgroundColor: (theme) => ({
      ...theme("colors"),
      "tele-blue": "#32AFED",
    }),
    fontFamily: {
      roboto: ["Roboto, sans-serif"],
      major: ["Major Mono Display, monospace"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
