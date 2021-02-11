const styles = {
  backgroundImage: (theme) => ({ // acho que a gente pode 
    "emojis-pattern": "url('/emojis.png')",
    "telegram-pattern": "url('/background.jpg')",
  }),
  backgroundColor: (theme) => ({
    ...theme("colors"),
    "tele-blue": "#32AFED",
  }),
}

export default styles
